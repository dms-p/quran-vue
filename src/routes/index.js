import { createRouter,createWebHistory } from "vue-router";

const routes=[
    {
        path: '/',
        name:'index',
        component:()=>import('../pages/index.vue')
    },
    {
        path:'/surah/:id',
        name:'surah',
        component:()=>import('../pages/surah.vue')
    },
    {
        path:'/juz/:id',
        name:'juz',
        component:()=>import('../pages/juz.vue')
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router