<template>
    <div id="app">
      
      <Header />
  
      <router-view></router-view>
      <Map v-show="this.$route.path === '/' " />
      <Footer />


  


      





    </div>
</template>

<script>
import './assets/css/style.css'
import axios from 'axios'
import Header from './components/ui/Header.vue'
import Footer from './components/ui/Footer.vue'
import Map from './components/Map.vue'

  export default{
  	components: {Header, Footer, Map},
    data(){
      return{
        checkedBrand: '',
        carBrands: null,
        models: null,
        checkedModel: ''
      }
    },
    computed: {
      getModels(){
        return this.models[this.checkedBrand]
      }
    },
  	created(){
  		this.$store.dispatch("serv/loadServs")
      this.$store.dispatch("proj/loadProj")
  	}
  }
</script>



<style>
  select{
    width: 100%;
  }
</style>





