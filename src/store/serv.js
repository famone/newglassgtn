
import axios from 'axios'

const serv = {
	namespaced: true,
	state: {
		services: [
				{
					name: 'Полировка кузова',
					id: 1,
					slides: ['https://www.chicagotribune.com/resizer/CPAFZlcHnlTJPb_WSpOLypSyQOU=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/YSEHQJSQQGTYLRVNSVKOFG5MAE.jpg', 'https://www.chicagotribune.com/resizer/CPAFZlcHnlTJPb_WSpOLypSyQOU=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/YSEHQJSQQGTYLRVNSVKOFG5MAE.jpg'],
					descr: 'Мы оказываем весь спектр услуг, в котором нуждается Ваш автомобиль: тонировка, замена и ремонт автостекол, оклейка защитной пленкой и многое другое. Мы оказываем весь спектр услуг, в котором нуждается Ваш автомобиль: тонировка, замена и ремонт автостекол, оклейка защитной пленкой и многое другое'
				},
				{
					name: 'Шумоизоляция',
					id: 2,
					slides: ['https://downloader.disk.yandex.ru/preview/8f063a2d366c8bbab10c24d46564d895a4f6f34cad8e16124277aae8e6d582ab/60255736/-DI2sEU_SIXSa3AojRak2wNTo-va6HF67ZYQUSlrErRgJrKdF4qZy83BozJ4ugZVZUYn5hTWwADom-ikwitnGQ%3D%3D?uid=0&filename=IMG_20210206_015317.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2880x1578', 'https://downloader.disk.yandex.ru/preview/8bd5b850278e0ad822ebf5586a68dd0c504654a261c4e659da20567907af9086/60255736/_Mzh88YEvRSFMTySx1WtQFvxG7XgUjfdJlV1asbPHkc7ye742m8hQegwtN6QmAnQsSCCPyRpSXANiz-OyyaPEQ%3D%3D?uid=0&filename=IMG_20210206_015719.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2880x1578'],
					descr: 'Шумоизолируем автомобили только по "топовому" варианту (как полностью салона, так и частично). Никаких компромиссов, таких как эконом- или стандарт- варианты "обесшумки". В работе используются только новейшие и эффективные вибро- и шумопоглотители. Некоторые из них и вовсе эксклюзивно производятся ТМ "Comfort mat" на отдельном конвейере.'
				},
				{
					name: 'Замена и ремонт автостекол',
					id: 3,
					slides: ['https://www.chicagotribune.com/resizer/CPAFZlcHnlTJPb_WSpOLypSyQOU=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/YSEHQJSQQGTYLRVNSVKOFG5MAE.jpg', 'https://www.chicagotribune.com/resizer/CPAFZlcHnlTJPb_WSpOLypSyQOU=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/YSEHQJSQQGTYLRVNSVKOFG5MAE.jpg'],
					descr: 'Мы оказываем весь спектр услуг, в котором нуждается Ваш автомобиль: тонировка, замена и ремонт автостекол, оклейка защитной пленкой и многое другое. Мы оказываем весь спектр услуг, в котором нуждается Ваш автомобиль: тонировка, замена и ремонт автостекол, оклейка защитной пленкой и многое другое'
				},
				{
					name: 'Полировка стекол',
					id: 4,
					slides: ['https://www.chicagotribune.com/resizer/CPAFZlcHnlTJPb_WSpOLypSyQOU=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/YSEHQJSQQGTYLRVNSVKOFG5MAE.jpg', 'https://www.chicagotribune.com/resizer/CPAFZlcHnlTJPb_WSpOLypSyQOU=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/YSEHQJSQQGTYLRVNSVKOFG5MAE.jpg'],
					descr: 'Мы оказываем весь спектр услуг, в котором нуждается Ваш автомобиль: тонировка, замена и ремонт автостекол, оклейка защитной пленкой и многое другое. Мы оказываем весь спектр услуг, в котором нуждается Ваш автомобиль: тонировка, замена и ремонт автостекол, оклейка защитной пленкой и многое другое'
				},
				{
					name: 'Полировка фар',
					id: 5,
					slides: ['https://www.chicagotribune.com/resizer/CPAFZlcHnlTJPb_WSpOLypSyQOU=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/YSEHQJSQQGTYLRVNSVKOFG5MAE.jpg', 'https://www.chicagotribune.com/resizer/CPAFZlcHnlTJPb_WSpOLypSyQOU=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/YSEHQJSQQGTYLRVNSVKOFG5MAE.jpg'],
					descr: 'Мы оказываем весь спектр услуг, в котором нуждается Ваш автомобиль: тонировка, замена и ремонт автостекол, оклейка защитной пленкой и многое другое. Мы оказываем весь спектр услуг, в котором нуждается Ваш автомобиль: тонировка, замена и ремонт автостекол, оклейка защитной пленкой и многое другое'
				},
		]
  	},
	mutations: {
		
	},
	actions: {
         
	},
	getters: {
		getServs(state){
			return state.services
		},
		getServSingle: (state) => (id) =>{
			return state.services.find(item => item.id == id)
		}
	}
}

export default serv


