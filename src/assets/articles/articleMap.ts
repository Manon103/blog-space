import type { Article } from '@/model/Article';

const articleMap: Map<number, Article> = new Map();
articleMap.set(1, {
    id: 1,
    title: '这是一篇测试文章的标题',
    content: () => import('@/assets/articles/test1.md?raw'),
    cover: 'https://cdn.pixabay.com/photo/2023/10/30/05/53/highway-8351864_960_720.jpg',
    createTime: '2021-10-01',
    tags: ['Vue3.0'],
    description:
        "This is a test article 1, and this is the description. I should write something here, but I don't know what to write. But for the sake of testing, I have to write something here. I hope you can understand.",
});
articleMap.set(2, {
    id: 2,
    title: 'Vue3.0新特性',
    description:
        'Vue3.0新特性介绍 测试文本 你说这个是什么东西 这个是个测试文本',
    cover: 'https://cdn.pixabay.com/photo/2023/10/24/02/49/bike-8337261_960_720.jpg',
    content: () => import('@/assets/articles/test1.md?raw'),
    createTime: '2021-03-25',
    tags: ['Vue3.0'],
});
articleMap.set(3, {
    title: 'React 18 新特性',
    description:
        'React 18 新特性介绍 This is a test text This is a test text This is a test text This is a test text',
    cover: 'https://cdn.pixabay.com/photo/2024/10/17/16/14/waterfall-9128051_960_720.jpg',
    createTime: '2022-01-15',
    content: () => import('@/assets/articles/test1.md?raw'),
    tags: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    id: 3,
});
articleMap.set(4, {
    title: 'Angular 12 更新',
    description:
        'Angular 12 的新功能和改进 This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text',
    cover: 'https://cdn.pixabay.com/photo/2023/10/30/05/53/highway-8351864_960_720.jpg',
    createTime: '2021-05-12',
    content: () => import('@/assets/articles/test1.md?raw'),
    tags: ['Angular', 'TypeScript'],
    id: 4,
});
articleMap.set(5, {
    title: 'Svelte 3 简介',
    description: 'Svelte 3 的特点和优势',
    cover: 'https://cdn.pixabay.com/photo/2024/02/24/20/55/cards-8594729_960_720.jpg',
    createTime: '2020-11-20',
    content: () => import('@/assets/articles/test1.md?raw'),
    tags: ['Svelte', 'JavaScript'],
    id: 5,
});

articleMap.set(6, {
    title: 'Node.js 14 发布',
    description: 'Node.js 14 的新特性和改进',
    cover: 'https://cdn.pixabay.com/photo/2024/09/12/14/56/lake-9042527_960_720.png',
    createTime: '2020-04-21',
    content: () => import('@/assets/articles/test1.md?raw'),
    tags: ['Node.js', 'JavaScript'],
    id: 6,
});
articleMap.set(7, {
    title: 'Deno 1.0 发布',
    description: 'Deno 1.0 的特点和使用',
    cover: 'https://cdn.pixabay.com/photo/2024/06/05/19/45/mountains-8811206_960_720.jpg',
    createTime: '2020-05-13',
    content: () => import('@/assets/articles/test1.md?raw'),
    tags: ['Deno', 'JavaScript'],
    id: 7,
});

export default articleMap;
