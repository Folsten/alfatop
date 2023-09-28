import 'virtual:svg-icons-register';
// Импортируется глобальный файл стилей
import './assets/scss/global.scss';
import SvgIcon from '@/components/svgicon/svgicon.vue';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Глобальная регистрация компонента
app.component('SvgIcon', SvgIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
