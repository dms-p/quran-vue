import { createApp } from 'vue'
import router from './routes/index.js'
import api from './axios/index.js'
import './style.css'
import App from './App.vue'

const app=createApp(App)
app.use(router)
app.mount('#app')
