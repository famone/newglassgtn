<template>
    <div id="app">
      
      <Header />
  
      <router-view></router-view>


      <Map />

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
  	// created(){
  	// 	axios
   //    .get('https://raw.githubusercontent.com/blanzh/carsBase/master/docs/cars3.json')
   //    .then(res => {
   //      console.log(res)

   //      this.models = res.data
        
   //      let cars = [];

   //      for (let car in res.data) {
   //          if ( res.data.hasOwnProperty(car)) {
   //              cars.push(car)
   //          }
   //      }

   //      this.carBrands = cars

   //      console.log(cars)

   //    })
  	// }
  }
</script>



<style>
  select{
    width: 100%;
  }
</style>





