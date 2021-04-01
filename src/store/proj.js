
import axios from 'axios'

const proj = {
	namespaced: true,
	state: {
		projects: []
  	},
	mutations: {
		SET_PROJ(state, payload){
			state.projects = payload
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
        }
	},
	getters: {
		getProjects(state){
			return state.projects
		},
		getProject: (state) => (id) =>{
			return state.projects.find(item => item.id == id)
		}
	}
}

export default proj


