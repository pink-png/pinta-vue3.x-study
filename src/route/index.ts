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
    },
    {
        name: '模板分类',
        path: '/classify',
        component: () => import('@/pages/classify/classify.vue')
    },
    {
        name: '填写登报内容',
        path: '/paperContent',
        component: () => import('@/pages/paperContent/paperContent.vue')
    }


]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router  