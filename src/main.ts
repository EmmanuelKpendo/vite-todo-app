import { createApp } from 'vue'
import { OhVueIcon } from "oh-vue-icons";
import './style.css'
import App from './App.vue'

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");