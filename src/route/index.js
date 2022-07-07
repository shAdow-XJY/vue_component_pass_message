import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path:'/',
        redirect:'/parentPage_props'
    },
    {
        path:'/parentPage_props',
        name:'parentPage_props',
        component: () => import('../v-bind+props/parentPage_props')
    },
    {
        path:'/parentPage_emit',
        name:'parentPage_emit',
        component: () => import('../v-on+emit/parentPage_emit')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router