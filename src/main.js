import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);
app.config.globalProperties.$axios = axios;

app.use(router).mount("#app");
// app.config.globalProperties.$serverUrl = "http://10.90.1.111"; //api server
