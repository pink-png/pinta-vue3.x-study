import { createApp } from 'vue'

import router from './route'
import { createPinia } from 'pinia'
import App from './App.vue'


// vue3不支持H5PLUS

const app = createApp(App)
const pinia = createPinia()
console.log('start~~~~')

app.use(router).use(pinia).mount('#app')



