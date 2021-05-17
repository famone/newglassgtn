<template>
	<div>
		<Inner :title=" 'Проекты' " />
		<Projects />
	</div>
</template>

<script>
import Projects from '../components/Projects.vue'
import Inner from '../components/ui/Inner.vue'

export default{
	components: {Projects, Inner}
}
</script>