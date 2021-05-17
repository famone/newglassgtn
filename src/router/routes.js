import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import servSingle from '../pages/servSingle.vue'
import Services from '../pages/Services.vue'
import singleProject from '../pages/singleProject.vue'
import Projects from '../pages/Projects.vue'
import Contacts from '../pages/Contacts.vue'
import Gallery from '../pages/Gallery.vue'
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
			path: '/contacts',
			component: Contacts
		},
		{
			path: '/gallery',
			component: Gallery
		},
		{
			path: '/services/:id',
			component: servSingle,
			props: true
		},
		{
			path: '/projects',
			component: Projects
		},
		{
			path: '/projects/:id',
			component: singleProject,
			props: true
		},
		{
			path: '*',
			component: Notfound
		},
	]

export default routes;