<template>
	<header>
		<div class="container">
			<div class="shapka">
				<router-link tag="a" to="/">
					<img src="../../assets/img/logo.svg" class="logo wow slideInDown" data-wow-duration="1.2s">
				</router-link>
				<ul class="top-menu hidden-xs hidden-sm">
					<router-link tag="li" :to="nav.link" v-for="nav in navs" >{{nav.txt}}</router-link>
				</ul>
				<p class="top-link hidden-xs hidden-sm"><img src="../../assets/img/marker.svg" alt="">ул. 7-ой Армии 22, Гатчина</p>
				<a href="tel:+79216376704" class="top-link hidden-xs hidden-sm"><img src="../../assets/img/tel.svg" alt="">+7 (921) 637-67-04</a>
				<div class="burger hidden-lg hidden-md" :class="{burgerAc: mobileMenu}" @click="mobileMenu = !mobileMenu">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
		<div class="mobile-menu" v-if="mobileMenu">
			<ul class="top-menu">
				<router-link tag="li" :to="nav.link" v-for="nav in navs" >{{nav.txt}}</router-link>
			</ul>
		</div>
	</header>
</template>


<script>
	export default{
		data(){
			return{
				mobileMenu: false,
				navs: [
					{
						link: '/services',
						txt: 'Услуги'
					},
					{
						link: '/projects',
						txt: 'Проекты'
					},
					{
						link: '/gallery',
						txt: 'Галерея работ'
					},
					{
						link: '/prices',
						txt: 'Цены'
					},
					{
						link: '/vacansies',
						txt: 'Вакансии'
					},
					{
						link: '/contacts',
						txt: 'Контакты'
					},

				]
			}
		}
	}
</script>	