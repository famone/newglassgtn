import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import VueScrollTo from 'vue-scrollto'
import VueTyperPlugin from 'vue-typer'
import VCalendar from 'v-calendar';
// import VueLazyload from 'vue-lazyload'


import 'swiper/css/swiper.css'

Vue.use(VueTyperPlugin)
Vue.use(VueRouter) 
Vue.use(Vuelidate)
Vue.use(require('vue-cookies'))
Vue.use(VueAwesomeSwiper)
Vue.use(VueScrollTo)
Vue.use(VueTheMask)

Vue.use(VCalendar)

// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: '/wp-content/uploads/2021/05/zagl.jpg',
//   loading: '/wp-content/uploads/2021/05/zagl.jpg',
//   attempt: 1,
//   listenEvents: [ 'scroll' ]
// })



new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
