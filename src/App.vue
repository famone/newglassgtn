<template>
    <div id="app">
      
      <transition name="slide" mode="out-in">
        <div class="preloader" v-if="preloader">
          <img src="./assets/img/minilogo.svg" alt="">
        </div>
      </transition>

      <Header />
      <router-view></router-view>
      <Map v-show="this.$route.path === '/' || this.$route.path === '/contacts' " />
      <Footer />


  


      





    </div>
</template>

<script>
import './assets/css/style.css'
import axios from 'axios'
import Header from './components/ui/Header.vue'
import Footer from './components/ui/Footer.vue'
import Map from './components/Map.vue'
import {mapGetters} from 'vuex'

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
      ...mapGetters({
          preloader: "proj/getPreloader"
      }),
      getModels(){
        return this.models[this.checkedBrand]
      }
    },
  	created(){
  		this.$store.dispatch("serv/loadServs")
      this.$store.dispatch("proj/loadProj")
      this.$store.dispatch("proj/loadGallery")
  	}
  }
</script>



<style>
  select{
    width: 100%;
  }
  .slide-leave-active{
	transition: opacity .3s ease;
	opacity: 0;
	animation: slide-out .3s  ease-out forwards;
}
.slide-leave{
	opacity: 1;
	transform: translateX(0px);
}
.slide-enter-active{
	animation: slide-in .3s  ease-out forwards;
	opacity: 1;
}



@keyframes slide-out{
	0%{
		transform: translateY(0);
	}
	100%{
		transform: translateY(0);
	}
}
@keyframes slide-in{
	0%{
		opacity: 0;
	}
	100%{
		opacity: 1;
	}
}
</style>





