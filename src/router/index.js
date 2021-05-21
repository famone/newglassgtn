import VueRouter from 'vue-router'
import routes from './routes.js';

import store from '../store'

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});


router.beforeEach((to, from, next) => {
     store.dispatch('proj/changePreloader')
  
    setTimeout(function(){
                        next()
    }, 600);
    setTimeout(function(){
                store.dispatch('proj/changePreloader')        
    }, 800);
  })




export default router
