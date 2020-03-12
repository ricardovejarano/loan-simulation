import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/business',
            name: 'business',
            component: () => import('./views/Business.vue')
        },
        {
            path: '/owner',
            name: 'owner',
            component: () => import('./views/Owner.vue')
        },
        {
            path: '/decision',
            name: 'decision',
            component: () => import('./views/Decision.vue')
        }
    ]
})