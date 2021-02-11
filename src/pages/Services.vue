<template>
	<div>
		<Inner :title=" 'Услуги' " />
		<Services />
	</div>
</template>

<script>
import Services from '../components/Services.vue'
import Inner from '../components/ui/Inner.vue'

export default{
	components: {Services, Inner}
}
</script>