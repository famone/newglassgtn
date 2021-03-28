<template>
	<section id="services">
		<div class="container">
			<div class="col-lg-12" v-if="this.$route.path === '/' ">
				<h2 class="side_dev">Услуги</h2>
			</div>
			<div class="serv-row">
				<div class="serv-item" v-for="item in services">
					<div class="serv-img"></div>
					<div class="serv-body">
						<h3>{{item.name}}</h3>
						<router-link tag="p" :to=" '/services/' + item.id " class="podrobnee">Подробнее</router-link>
						<button class="more-btn">Записаться</button>
					</div>
				</div>  
			</div>
		</div>
	</section>
</template>


<script>
import {mapGetters} from 'vuex'

export default{
	computed: {
		...mapGetters({ services: "serv/getServs"})
	}
}
</script>