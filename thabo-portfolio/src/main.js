import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import styling from './assets/global.css'
import 'primeicons/primeicons.css'


createApp(App).use(router).mount('#app')
