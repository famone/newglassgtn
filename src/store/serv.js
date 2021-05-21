
import axios from 'axios'

const serv = {
	namespaced: true,
	state: {
		services: []
  	},
	mutations: {
		SET_SERVS(state, payload){
			state.services = payload
		}
	},
	actions: {
         loadServs({commit}){
         	axios
         	.get('https://new.glassgtn.ru/wp-json/ag/v1/get/services/')
         	.then(res =>{
         		commit("SET_SERVS", res.data)
         	})
         }
	},
	getters: {
		getServs(state){
			return state.services
		},
		getServSingle: (state) => (id) =>{
			return state.services.find(item => item.slug == id)
		}
	}
}

export default serv


