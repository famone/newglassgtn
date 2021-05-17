<template>
    <div>
        <Inner :title=" 'Галерея работ' " />
        <section id="about">
			<div class="container">
				<div class="col-lg-4" v-for="item in 24">
					<div class="gallery-img" :style="{'background-image': 'url(' + img + ')'}"></div>
				</div>
			</div>
		</section>
    </div>
</template>

<script>
import Inner from '../components/ui/Inner.vue'

export default{
	components: { Inner},
    data(){
        return{
            img: 'https://new.glassgtn.ru/wp-content/uploads/2021/03/big_1501906.jpg'
        }
    }
}
</script>