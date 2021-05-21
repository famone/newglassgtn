
import axios from 'axios'

const proj = {
	namespaced: true,
	state: {
		projects: [],
		gallery: [],
		preloader: false
  	},
	mutations: {
		SET_PROJ(state, payload){
			state.projects = payload
		},
		SET_GALLERY(state, payload){
			state.gallery = payload
		},
		CHANGE_PRELOADER(state){
			state.preloader = !state.preloader
		}
	},
	actions: {
        loadProj({commit}){
         	axios
         	.get('https://new.glassgtn.ru/wp-json/ag/v1/get/projects')
         	.then(res =>{
         		console.log(res.data)
         		commit("SET_PROJ", res.data)
         	})
        },
		loadGallery({commit}){
			axios
         	.get('https://new.glassgtn.ru/wp-json/ag/v1/get/gallery')
         	.then(res =>{
         		console.log(res.data)
         		commit("SET_GALLERY", res.data)
         	})
		},
		changePreloader({commit}){
			commit("CHANGE_PRELOADER")
		}
	},
	getters: {
		getProjects(state){
			return state.projects
		},
		getGallery(state){
			return state.gallery
		},
		getProject: (state) => (id) =>{
			return state.projects.find(item => item.id == id)
		},
		getPreloader(state){
			return state.preloader
		}
	}
}

export default proj


