import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/base.css'
const app = createApp(App)

app.use(router)

app.mount('#app')
