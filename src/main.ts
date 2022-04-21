import { createApp } from 'vue'

import router from './route'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(router).use(pinia).mount('#app')


