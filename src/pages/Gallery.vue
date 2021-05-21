<template>
    <div>
        <Inner :title=" 'Галерея работ' " />
        <section id="about">
			<div class="container">
				<div class="col-lg-4" v-for="item in gallery.img">
					<div class="gallery-img" :style="{'background-image': 'url(' + item + ')'}"></div>
				</div>
			</div>
		</section>
    </div>
</template>

<script>
import Inner from '../components/ui/Inner.vue'
import {mapGetters} from 'vuex'

export default{
	components: { Inner},
    computed:{
        ...mapGetters({
            gallery: "proj/getGallery"
        })
    }
}
</script>