<template>
	<section id="services">
		<div class="container">
			<div class="col-lg-12" v-if="this.$route.path === '/' ">
				<h2 class="side_dev">Услуги</h2>
			</div>
			<div class="serv-row">
				<router-link tag="div" :to=" '/services/' + item.slug " class="col-lg-3" v-for="item in services">
					<div class="serv-item" :style="{'background-image': 'url(' + item.cardBg + ')'}">
						<div class="serv-body">
							<router-link tag="p" :to=" '/services/' + item.slug " class="podrobnee">
								Подробнее <img src="../assets/img/redarr.svg" alt="">
							</router-link>
							<h3>{{item.name}}</h3>
						</div>
					</div>
				</router-link>
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