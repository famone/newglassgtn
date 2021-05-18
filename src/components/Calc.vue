<template>
	<div class="calc">
		<div class="container">
			<div class="calc-box row">

				<div class="col-lg-12 ">
					<div class="calc-title">
						<p class="white-txt red">Запись на обслуживание в пару кликов</p>
					    <div class="devider hidden-xs hidden-sm"></div>
						<p class="white-txt hidden-xs hidden-sm">Все заботы доверьте нам!</p>
					</div>
				</div>

				<div class="row">
					<div class="col-lg-4">
						<select name="" id="" v-model="checkedServ">
							<option v-for="serv in services" :value="serv.name">{{serv.name}}</option>
						</select>
					</div>

					<div class="col-lg-8">
						<div class="car-types">
							<div class="car-type" v-for="(type, index) in types" @click="changeCar(index)">
								<img :src="type.img" alt="" v-if="!type.active">
								<img :src="type.img2" alt="" v-else>
								<p class="small-white">{{type.txt}}</p>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-3">
					<label for="">Выберите марку:</label>
					<select name="" id="" v-if="carBrands" v-model="checkedBrand">
       				   <option :value="item" v-for="item in carBrands">{{item}}</option>
        			</select>
				</div>	
				<div class="col-lg-3">
					<label for="">Выберите модель:</label>
					<select name="" id="" v-if="models" v-model="checkedModel">
         				<option :value="item" v-for="item in getModels">{{item}}</option>
        			</select>
				</div>	
				<div class="col-lg-3">
					<label for="">Ваше имя:</label>
					<input type="text" v-model="name" :class="{errorInp : $v.name.$dirty && !$v.name.required}">
				</div>
				<div class="col-lg-3">
					<label for="">Контактный телефон:</label>
					<input type="text" v-model="tel" v-mask=" '+7 ### ###-##-##' " placeholder="+7"
					:class="{errorInp : $v.tel.$dirty && !$v.tel.required}">
				</div>

				<div class="col-lg-12">
					<div class="accept">
						<button class="more-btn" @click="submitForm">Записаться</button>
						<div class="accept-btn" :class="{acCheck: accepted}" @click="accepted = !accepted" >
							<div class="ch-box"></div>
							<p class="grey-txt">Я даю свое согласие на <br> обработку персональных данных</p>
						</div>
					</div>
				</div>
				<div class="col-lg-12">
					<br>
					<p v-if="error" style="color:#F14944;" >Ошибка отправки письма</p>
					<p v-if="succeed" style="color:green;" >Письмо отправлено успешно!</p>
				</div>


			</div>
		</div>
	</div>
</template>


<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
import { required, minLength } from "vuelidate/lib/validators";

	export default{
		data(){
    		return{
				checkedServ: 'Выберите услугу',
        		checkedBrand: '',
        		carBrands: null,
        		models: null,
        		checkedModel: '',
        		accepted: false,
				name: '',
				tel: '',
				succeed: false,
				error:  false,
        		types: [
        			{
        				txt: 'Легковой',
        				img: require('../assets/img/c1.svg'),
        				img2: require('../assets/img/cc1.svg'),
        				active: true
        			},
        			{
        				txt: 'Бизнес-класс',
        				img: require('../assets/img/c2.svg'),
        				img2: require('../assets/img/cc2.svg'),
        				active: false
        			},
        			{
        				txt: 'Кроссовер',
        				img: require('../assets/img/c3.svg'),
        				img2: require('../assets/img/cc3.svg'),
        				active: false
        			},
        			{
        				txt: 'Микроавтобус',
        				img: require('../assets/img/c4.svg'),
        				img2: require('../assets/img/cc4.svg'),
        				active: false
        			},
        			{
        				txt: 'Минивэн',
        				img: require('../assets/img/c5.svg'),
        				img2: require('../assets/img/cc5.svg'),
        				active: false
        			},
        			{
        				txt: 'Другое ТС',
        				img: require('../assets/img/c6.svg'),
        				img2: require('../assets/img/cc6.svg'),
        				active: false
        			},
        		]
      		}
    	},
		validations: {
			name: {
				required
			},
			tel: {
				required
			}
		},
    	computed: {
    		getModels(){
        		return this.models[this.checkedBrand]
      		},
			...mapGetters({ services: "serv/getServs"})
    	},
    	methods: {
    		changeCar(id){

    			this.types.forEach(item=>{
    				item.active = false
    			})

    			this.types[id].active = true
    		},
			submitForm(){
				if(this.$v.$invalid) {
					this.$v.$touch();
					return;
				}

				if(!this.accepted){
					let shakedBtn = document.querySelector('.accept-btn')
					shakedBtn.classList.add('shake')
					setTimeout(()=>{
						shakedBtn.classList.remove('shake')
					}, 2000)
					return
				}

				

				let checkedType = this.types.find(item =>{
					return item.active
				})

				let emailBody = {
					serv: this.checkedServ,
					carType: checkedType.txt,
					carBrand: this.checkedBrand,
					carModel: this.checkedModel,
					nameClient: this.name,
					tel: this.tel
				}

				var form = new FormData();

				for (var field in emailBody){
					form.append(field, emailBody[field]);
				};

				axios
            	.post('/wp-json/contact-form-7/v1/contact-forms/18/feedback', form)
                .then((response) => {
                    this.checkedServ = '';
					this.checkedBrand = '';
					this.checkedModel = '';
					this.accepted = false;
					this.succeed = true;
					this.error = false;
                })
                .catch((error) => {
                    this.checkedServ = '';
					this.checkedBrand = '';
					this.checkedModel = '';
					this.accepted = false;
					this.succeed = false;
					this.error = true;
                });
			}
    	},
    	created(){
            // https://raw.githubusercontent.com/blanzh/carsBase/master/docs/cars.json
    		axios
      		.get('https://raw.githubusercontent.com/famone/carbase/main/cars.json')
      		.then(res => {
        		// console.log(res.data)
        		this.models = res.data.list
        		let cars = [];


                // console.log(this.models)

		        for (let model in this.models) {
                    if (this.models.hasOwnProperty(model)) {
                        cars.push(model)
                    }
                }
        		this.carBrands = cars
        		console.log(this.models)
    		})
      	}
	}
</script>