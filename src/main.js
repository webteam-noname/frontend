import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCookies from "vue-cookies";

//bootstrap 사용
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(store).use(router).use(VueCookies).mount("#app");
