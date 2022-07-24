import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import { createPinia } from 'pinia'
import withUUID from 'vue-uuid'
import Vue3Lottie from 'vue3-lottie'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import 'vue3-lottie/dist/style.css'

const app = withUUID(createApp(App))
const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router).use(pinia).use(Vue3Lottie).mount('#app')
