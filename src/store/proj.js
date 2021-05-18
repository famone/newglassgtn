
import axios from 'axios'

const proj = {
	namespaced: true,
	state: {
		projects: [],
		gallery: []
  	},
	mutations: {
		SET_PROJ(state, payload){
			state.projects = payload
		},
		SET_GALLERY(state, payload){
			state.gallery = payload
		}
	},
	actions: {
        loadProj({commit}){
         	axios
         	.get('/wp-json/ag/v1/get/projects')
         	.then(res =>{
         		console.log(res.data)
         		commit("SET_PROJ", res.data)
         	})
        },
		loadGallery({commit}){
			axios
         	.get('/wp-json/ag/v1/get/gallery')
         	.then(res =>{
         		console.log(res.data)
         		commit("SET_GALLERY", res.data)
         	})
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
		}
	}
}

export default proj


