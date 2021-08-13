import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
// import Index from '../components/Index'
import NewsIndex from '../components/news/index'
import Index from '../components/dashboard/Index'
import VariantsIndex from '../components/dashboard/variants/Index'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Index
    },
    {
        path: '/news',
        name: 'news',
        component: NewsIndex
    },
    {
        path: '/variants',
        name: 'variants',
        component: VariantsIndex
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router