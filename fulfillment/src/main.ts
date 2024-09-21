import './assets/main.css'

import {createApp} from 'vue'
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import 'vuetify/styles';
import axios from "axios";

const app = createApp(App)
axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.responseType = 'json'

app.use(vuetify)
app.mount('#app')