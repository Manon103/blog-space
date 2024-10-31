① JavaScript是单线程

JavaScript语言的一大特点就是它是单线程语言，也就是说一个时间只能做一件事情。js是为了web应用程序设计的语言，假设js是多线程，对于同一个dom元素，一处代码要删除这个dom，另一处代码要修改这个dom，这就很混乱了不是吗。

② 任务队列

正因为JavaScript是单线程，那就意味着所有需要执行的任务都需要排队。当前面的任务完成后，才会执行后面的任务。

而对于js来说，任务又分为同步任务和异步任务。当遇到同步任务时，会将同步任务放到主线程中，异步任务会被放到事件队列中，当所有的同步任务执行完成后才会执行异步任务。

常见的同步任务：

```javascript
let a = 1;

console.log(a);
```

常见的异步任务有setTimeout，setInterval, Promise等

③宏任务和微任务

即使是异步任务，在其中间也有不同的执行优先级。异步任务又分为宏任务和微任务。微任务总是先于宏任务执行。

常见的宏任务：

```javascript
setTimeout;
setInterval;
```

常见的微任务：

```javascript
Promise;
```

④ 小小练习，简单拿下！

查看图1，正确的输出顺序是什么呢，把你的答案打在评论里

![](https://cdn.nlark.com/yuque/0/2024/png/27512016/1714269484719-ebc93d08-f33d-4885-8e78-259eccf8b243.png)

⑤拓展一下

假设我们的系统中有一个任务的执行时间很长，我们称之为long task. 这个长任务在主线程执行时，由于单线程机制，有可能导致用户点击页面却无响应的情况（点击事件和long task是两个任务，不能同时执行）。如果需要我们进行优化，要怎么处理呢？

最简单的是在long task中加入异步任务的代码，使我们的主线程悄悄地break一下，如果感兴趣的话可以看看下面这个文章。[https://web.dev/articles/optimize-long-tasks?hl=zh-cn](https://web.dev/articles/optimize-long-tasks?hl=zh-cn)
