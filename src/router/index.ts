import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/article/:id',
            name: 'article',
            component: () => import('@/views/ArticleView.vue'),
        },
    ],
});

export default router;
