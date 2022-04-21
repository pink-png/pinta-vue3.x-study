import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        name: '首页',
        path: '/index',
        component: () => import('@/pages/index/index.vue')
    },
    {
        name: '客服问题',
        path: '/customer',
        component: () => import('@/pages/customer/customer.vue')
    },
    {
        name: '我的',
        path: '/my',
        component: () => import('@/pages/my/my.vue')
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router  