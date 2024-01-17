import { createRouter, createWebHistory } from 'vue-router/auto'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Vue3Lottie from 'vue3-lottie'
import OnuUI from 'onu-ui'
import App from './App.vue'

import store from './store'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'onu-ui/dist/style.css'
import 'uno.css'
const app = createApp(App)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})
store.use(piniaPluginPersistedstate)
app.use(Vue3Lottie, { name: 'LottieAnimation' })
app.use(router)
app.use(store)
app.use(OnuUI)
app.mount('#app')
