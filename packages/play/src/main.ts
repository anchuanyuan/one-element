import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import OneUI from 'one-ui'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
console.log(OneUI);

app.use(OneUI)

app.mount('#app')
