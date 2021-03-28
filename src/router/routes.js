import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import servSingle from '../pages/servSingle.vue'
import Services from '../pages/Services.vue'
import Notfound from '../pages/Notfound.vue'

const routes = [
		{
			path: '/',
			component: Home
		},
		{
			path: '/services',
			component: Services
		},
		{
			path: '/services/:id',
			component: servSingle,
			props: true
		},
		{
			path: '*',
			component: Notfound
		},
	]

export default routes;