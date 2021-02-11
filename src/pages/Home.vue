<template>
	<div>
		<Videofon />
		<Calc />
		<Services />
		<Projects />
		<Advantages />
	</div>
</template>

<script>
import Videofon from '../components/Videofon.vue'
import Calc from '../components/Calc.vue'
import Services from '../components/Services.vue'
import Projects from '../components/Projects.vue'
import Advantages from '../components/Advantages.vue'

export default{
	components: {Videofon, Calc, Services, Projects, Advantages},
}
</script>