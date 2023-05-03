import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/fonts/style.css";

const app = createApp(App)

app.use(router)
app.use(store);

app.mount('#app')
