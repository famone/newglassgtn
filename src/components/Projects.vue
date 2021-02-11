<template>
	<section id="projects">
		<div class="container">
			<div class="col-lg-12">
				<h2 class="scquare">Лучшие проекты</h2>
			</div>

			<div class="col-lg-6 pr-col">
				<div class="proj-item">
					<div>
						<h3>BMW X3</h3>
						<p class="white-txt">Оклейка полеуретановой пленкой, тонировка</p>
					</div>
					<div class="proj-bg-img"></div>

				</div>
			</div>
			<div class="col-lg-6 pr-col">
				<div class="row no-row">
					<div class="col-lg-6 pr-col" v-for="item in 4">
						<div class="proj-item2">
							<div>
								<h3>BMW X3</h3>
								<p class="white-txt">Оклейка полеуретановой пленкой, тонировка</p>
							</div>
							<div class="proj-bg-img"></div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-12 text-center">
				<p class="white-txt center-link">
					<a href="">Больше проектов в нашем <span class="red">Instagram</span></a>
				</p>
			</div>

		</div>
	</section>
</template>