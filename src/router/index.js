import Vue from 'vue'
import VueRouter from 'vue-router'
import CDEWS from '../components/CDEWS.vue'
import Ga from '../components/Ga.vue'
import Info from '../components/Info.vue'
import Surgery from '../components/Surgery.vue'
import Views from '../components/Views.vue'
import waitpage from '../components/waitpage.vue'

Vue.use(VueRouter)

const routes = [

    {
        path: '/CDEWS',
        nams: 'CDEWS',
        component: CDEWS
    },
    {
        path: '/Ga',
        nams: 'Ga',
        component: Ga
    },
    {
        path: '/Info',
        nams: 'Info',
        component: Info
    },
    {
        path: '/Surgery',
        nams: 'Surgery',
        component: Surgery
    },
    {
        path: '/Views',
        nams: 'Views',
        component: Views
    },
    {
        path: '/',
        nams: 'Waitpage',
        component: waitpage
    }
]

const router = new VueRouter({
    routes
})

export default router