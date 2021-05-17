<template>
	<section id="projects" v-if="projects.length">
		<div class="container">
			<div class="col-lg-12">
				<h2 class="scquare">Лучшие проекты</h2>
			</div>

			<div class="col-lg-6 pr-col">
				<router-link tag="div" :to="'/projects/' +  projects[0].id" class="proj-item">
					<div>
						<h3>{{projects[0].name}}</h3>
						<p class="white-txt" v-html="projects[0].descr"></p>
					</div>
					<div class="proj-bg-img"></div>

				</router-link>
			</div>
			<div class="col-lg-6 pr-col">
				<div class="row no-row">
					<div class="col-lg-6 pr-col" v-for="item in projects.slice(0, projects.length-1)">
						<router-link tag="div" :to="'/projects/' +  item.id" class="proj-item2">
							<div>
								<h3>{{item.name}}</h3>
								<p class="white-txt" v-html="item.descr"></p>
							</div>
							<div class="proj-bg-img" :style="{'background-image': 'url(' + item.mainPhoto + ')'}"></div>
						</router-link>
					</div>
				</div>
			</div>

			<div class="col-lg-12 text-center">
				<p class="white-txt center-link">
					<a href="https://www.instagram.com/autoglassgatchina/" target="_blank">Больше проектов в нашем <span class="red">Instagram</span></a>
				</p>
			</div>

		</div>
	</section>
</template>



<script>
import {mapGetters} from 'vuex'

	export default{
		computed: {
			...mapGetters({
				projects: "proj/getProjects"
			})
		}
	}
</script>