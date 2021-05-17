<template>
	<div>

		<section id="inner" >
			<div class="container">
				<div class="col-lg-12">
					<button @click="$router.go(-1)"  class="back-btn"><img src="../assets/img/arrback.svg" alt="">Назад</button>
					<h1>{{serv(id).name}}</h1>
				</div>
			</div>
		</section>


		<section id="descrBox">
			<div class="container">
			 	<div class="descr-box">
					<h2 class="side_dev">Что входит  в услугу:</h2>
					<p class="white-txt" v-html="serv(id).descr"></p> <br>
					<button v-scroll-to="'#prices'" class="more-btn">Посмотреть цены</button>
			 	</div>
			</div>
		</section>


		<section id="sliderSection">
			<div class="container">
				<swiper ref="mySwiper" :options="swiperOptions">
		    		<swiper-slide v-for="item in serv(id).slides">
		    			<div class="slide-img" :style="{'background-image': 'url(' + item + ')'}"></div>
		    		</swiper-slide>
				</swiper>
			</div>
			<div class="swiper-pagination"></div>
		</section>


		<section id="prices">
			<div class="container">
				<div class="col-lg-12">
					<h2 class="side_dev">Цены</h2>
				</div>
				<div class="table-responsive">
					<table>
						<thead>
							<tr>
								<th>Услуга</th>
								<th>Легковые</th>
								<th>Бизнес-класс</th>
								<th>Джипы/минивэны</th>
								<th>Микроавтобусы</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="price in serv(id).prices">
								<td>{{price.naimenovanie}}</td>
								<td>от {{parseInt(price.legkovoj).toLocaleString()}} ₽</td>
								<td>от {{parseInt(price.biznes).toLocaleString()}} ₽</td>
								<td>от {{parseInt(price.dzhip).toLocaleString()}} ₽</td>
								<td>от {{parseInt(price.mikroavtobus).toLocaleString()}} ₽</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>

		





	</div>
</template>


<script>
import {mapGetters} from 'vuex'

export default{
	props: ["id"],
	data(){
		return{
			// prices: [
			// 	{
			// 		name: 'Предпродажная полировка',
			// 		light: 5000,
			// 		buisness: 6000,
			// 		jeep: 7000,
			// 		bus: 8000
			// 	},
			// 	{
			// 		name: 'Предпродажная полировка с дальнейшим покрытием',
			// 		light: 5000,
			// 		buisness: 6000,
			// 		jeep: 7000,
			// 		bus: 8000
			// 	},
			// ],
			swiperOptions: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  draggable: true,
                  touchRatio: 1,
                  loop: true,    
                  infinite: true,
                  speed: 1000,
                  centeredSlides: false,
                  pagination: {
        			el: '.swiper-pagination',
        			clickable: true,
       			  },
					breakpoints: {
			            320: {
			              slidesPerView: 1,
			              spaceBetween: 15,
			              touchRatio: 1
			            },
			            768: {
				          slidesPerView: 2,
				           touchRatio: 1
				        },
				        1150: {
				          slidesPerView: 3,
				          spaceBetween: 15,
				           touchRatio: 1
				        }
			          }
            	},
		}
	},
	computed: {
		...mapGetters({ serv: "serv/getServSingle"  }),
		controlPage(){
			if(this.serv(this.id) === undefined){
				this.$router.push('/404')
			}
		},
		swiper(){
	       	return this.$refs.mySwiper.$swiper
	    },
	}
}
</script>



<style>
	.slide-img{
		width: 100%;
		height: 345px;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
	#sliderSection{
		padding: 100px 0;
		position: relative;
		overflow-x: hidden;
	}
	.swiper-pagination{
		position: absolute;
		width: 100%;
		bottom: 50px;
	}
	.swiper-pagination-bullet{
		background-color: #F14944!important;
		margin: 0 8px;
		height: 10px!important;
		width: 10px!important;
	}
	.swiper-pagination-bullet-active{
		position: relative;
		height: 7px!important;
		width: 7px!important;
		top: -2px;
	}
	.swiper-pagination-bullet-active:before{
		content: '';
		position: absolute;
		left: -4px;
		top: -4px;
		height: 15px;
		width: 15px;
		border-radius: 20px;
		border: 1px #F14944 solid;
	}

</style>