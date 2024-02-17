import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueTypedJs from 'vue-typed-js'

const app = createApp(App).use(router).mount("#app")