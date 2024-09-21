import './assets/main.css'

import {createApp} from 'vue'
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import 'vuetify/styles';
import axios from "@/plugins/axios";

createApp(App)
.use(vuetify)
.use(axios)
.mount('#app')
