<template>
	<section id="projects" v-if="gallery">
		<div class="container">
			<div class="col-lg-12">
				<h2 class="scquare">Последние работы</h2>
			</div>
            <div class="col-lg-4" v-for="item in gallery.img.slice(0, 6)">
				<div class="gallery-img" :style="{'background-image': 'url(' + item + ')'}"></div>
			</div>
            <div class="col-lg-12 text-center">
                <router-link class="more-btn" tag="button" to="/gallery">Посмотреть галерею работ</router-link>
            </div>
		</div>
	</section>
</template>



<script>
import {mapGetters} from 'vuex'

	export default{
		computed: {
			...mapGetters({
                 gallery: "proj/getGallery"
			})
		}
	}
</script>