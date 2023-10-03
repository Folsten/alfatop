import 'virtual:svg-icons-register'
// Импортируется глобальный файл стилей
import './assets/scss/global.scss'
// Импортирование компонентов
import SvgIcon from '@/components/svg-icon/svg-icon.vue'
// Импортирование директив
import { TooltipDirective } from './directives/tooltip'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Добавление директив
app.directive('tooltip', TooltipDirective)

// Глобальная регистрация компонента
app.component('SvgIcon', SvgIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
