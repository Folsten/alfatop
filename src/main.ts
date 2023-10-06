import 'virtual:svg-icons-register'
// Импортируется глобальный файл стилей
import './assets/scss/global.scss'
// Импортирование компонентов
import SvgIcon from '@/components/svg-icon/svg-icon.vue'
import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip'
import type { TooltipOptions } from '@adamdehaven/vue-custom-tooltip'
// Импортирование директив
import { TooltipDirective } from './directives/tooltip'
import vClickOutside from "click-outside-vue3";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Добавление директив
app.directive('tooltip', TooltipDirective)

// Глобальная регистрация компонента
app.component('SvgIcon', SvgIcon)

const opt: TooltipOptions = {
  name: 'VueCustomTooltip',
  color: '#FCFCFD',
  background: '#101828',
  borderRadius: 6,
  fontWeight: 500
}

app.use(VueCustomTooltip, opt)
app.use(vClickOutside)
app.use(createPinia())
app.use(router)

app.mount('#app')
