import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import Index from '../components/Index'
import NewsIndex from '../components/news/index'

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export {
    router
}