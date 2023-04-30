import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

const app = createApp(App)

app.use(router)

app.mount('#app')
