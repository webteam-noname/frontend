import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // path별 component를 추가한다.
    {
      path: "/",
      name: "mainPage",
      component: () => import("../components/MainPage.vue"),
    },
    {
      path: "/accounts/login",
      name: "login",
      component: () => import("../components/LoginPage.vue"),
    },
    {
      path: "/accounts/join",
      name: "signUp",
      component: () => import("../components/JoinPage.vue"),
    },
    {
      path: "/accounts/password",
      name: "password",
      component: () => import("../components/ForgetPw.vue"),
    },
  ],
});

export default router;
