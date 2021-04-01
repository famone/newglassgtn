<template>
	<div>

		<section id="inner" class="projInner" :style="{'background-image': 'url(' + project(id).beforePhoto + ')'}">
			<div class="container">
				<div class="col-lg-12">
					<button @click="$router.go(-1)"  class="back-btn"><img src="../assets/img/arrback.svg" alt="">Назад</button>
					<h1>{{project(id).name}}</h1>
				</div>
			</div>
		</section>



		<section id="descrBox">
			<div class="container">
			 	<div class="descr-box">
			 		<div class="row">
			 			<div class="col-lg-4">
			 				<div class="icon-item">
			 					<img src="../assets/img/w2.svg" alt="">
			 					<div>
			 						<p class="white-txt">Сроки исполнения:</p>
			 						<p class="small-white red">{{project(id).time}}</p>
			 					</div>
			 				</div>
			 			</div>
			 			<div class="col-lg-4">
			 				<div class="icon-item">
			 					<img src="../assets/img/w3.svg" alt="">
			 					<div>
			 						<p class="white-txt">Бюджет:</p>
			 						<p class="small-white red">{{project(id).budget}} ₽</p>
			 					</div>
			 				</div>
			 			</div>
			 			<div class="col-lg-4">
			 				<div class="icon-item">
			 					<img src="../assets/img/w1.svg" alt="">
			 					<div>
			 						<p class="white-txt">Проделанные работы:</p>
			 						<p class="small-white red">{{project(id).services}}</p>
			 					</div>
			 				</div>
			 			</div>
			 		</div>
			 	</div>
			</div>
		</section>



		<section id="about">
			<div class="container">
				<div class="col-lg-6 col-lg-offset-3">
					<h2 class="side_dev">Задача:</h2>
					<p class="white-txt">{{project(id).task}}</p>
				</div>
			</div>
		</section>




		<section id="bigphoto" :style="{'background-image': 'url(' + project(id).preparePhoto + ')'}">
			<div class="big-txt">
				<div class="container">
					<span>PROJECT</span>
				</div>
			</div>
		</section>



		<section id="about">
			<div class="container">
				<div class="col-lg-6 col-lg-offset-3">
					<h2 class="side_dev">Результат:</h2>
					<p class="white-txt">{{project(id).result}}</p>
					<br><br><br>
				</div>
				<div class="col-lg-4" v-for="img in project(id).gallery">
					<div class="gallery-img" :style="{'background-image': 'url(' + img + ')'}"></div>
				</div>
			</div>
		</section>







	</div>
</template>


<script>
import {mapGetters} from 'vuex'

	export default{
		props: ["id"],
		computed: {
			...mapGetters({ 
				project: "proj/getProject"  
			}),
			controlPage(){
				if(this.serv(this.id) === undefined){
					this.$router.push('/404')
				}
			},
		}
	}
</script>






