import { createApp } from 'vue'
import { OhVueIcon } from "oh-vue-icons";
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App);

app.use(pinia);
app.component("v-icon", OhVueIcon);
app.mount("#app");