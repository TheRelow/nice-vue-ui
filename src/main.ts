import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import NBtn from "@/components/base/NBtn.vue";

const app = createApp(App)

app.component("n-btn", NBtn)

app.mount('#app')
