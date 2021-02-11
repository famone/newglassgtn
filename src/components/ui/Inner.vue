<template>
	<section id="inner" >
			<div class="container">
				<div class="col-lg-12 text-center">
					<h1>{{title}}</h1>
				</div>
			</div>
		</section>
</template>

<script>
	export default{
		props: {
			title: {
				required: true,
				type: String
			}
		}
	}
</script>