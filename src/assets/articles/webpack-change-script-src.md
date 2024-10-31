最近有个需求需要将打包后的部分script链接替换为另一个远程服务器地址，我们都知道的是通过webpack打包后会生成一个入口文件（通常是dist目录下的index.html），在这个入口文件中会放置页面初始化时需要的JavaScript脚本文件及css样式文件，那么如何去修改这个入口文件打包输出的内容呢？

vue-cli默认使用了`HtmlWebpackPlugin`处理模板，`HtmlWebpackPlugin`会在打包过程中为你生成一个html文件，并在body内使用script标签引入你所需要的bundle，如果需要替换bundle的路径，则需要在`HtmlWebpackPlugin`的编译过程中将src路径更改。

**`HtmlWebpackPlugin`有提供多个钩子函数，依次为以下内容：**

-   `BeforeHtmlGeneration`： 开始生成html之前的函数，主要是处理资源列表路径等

-   `BeforeHtmlProcessing：` 处理html之前的函数，会将html文件中的内容输出为字符串，但此字符串中不包含js和css

-   `HtmlWebpackPluginAlterAssetTags：` 添加资源处理的钩子，在这个函数中能拿到相关的html的body 及 head 构建需要的文件内容及标签类型，并将依赖的js/css文件插入到html中，

-   `HtmlWebpackPluginAfterHtmlProcessing`：html处理完毕，已经生成了完整的html结构

-   `HtmlWebpackPluginAfterEmit：钩子任务处理完毕`

根据以上钩子的执行时机，我们将修改script标签的过程锁定在`HtmlWebpackPluginAlterAssetTags`钩子函数中，通过自定义webpack插件实现我们的需求（图1）。（webpack的自定义插件内容不在此篇赘述，后续可能会出一篇详细解释）

插件自定义完成后，即可以通过configureWebpack使用最新的插件（图2）。再次运行npm run build，进入到dist/index.html中查看最新的文件内容。

附带vscode debug插件的方法（图3-图4）

![](https://cdn.nlark.com/yuque/0/2024/png/27512016/1710137430066-7d81f1a7-cdc9-4abb-9959-95a944b66155.png)

```javascript
// vue.config.js
module.exports = {
    configureWebpack: {
        plugins: [new ChangeResourcePathPlugin()],
    },
};
```

```java
// 自定义webpack插件
class ChangeResourcePathPlugin {
	apply(compiler){
		const pluginName = 'ChangeResourcePathPlugin';	// define plugin name
		compiler.hooks.compilation.tap(pluginName, (compilation, callback) => {
			compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(
				pluginName,
				(htmlPluginData, callback) => {
                    // htmlPluginData.body是个数组，其中包含了将被插入到body标签中的元素及元素的类型
                    // 在此处是script标签的数组
					htmlPluginData.body.forEach(item => {
						const { attributes } = item;
                        if (attributes.src.includes('test')) {
                            // 替换成你需要的地址
                            item.attributes.src = item.attributes.src.replace('/publicPath/', 'https://testdomain/');
                        }
					})
                    // htmlPluginData.head同样也是个数组，其中包含了将被插入到<head>标签中的元素及元素类型
                    // 比如css样式link标签
					htmlPluginData.head.forEach(item => {
                        const { attributes } = item;
                        if (attributes.href.includes('test')) {
                            // 替换成你需要的地址
                            item.attributes.src = item.attributes.href.replace('/publicPath/', 'https://testdomain/');
                        }
					})
                    // htmlPluginData是最新的替换之后的内容
					callback(null, htmlPluginData)
				}
			);
		});
	}
}

module.exports = ChangeResourcePathPlugin;

```
