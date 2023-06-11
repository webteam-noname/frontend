import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: () => import("@/views/AuthPage.vue"),
    children: [
      {
        path: "login",
        component: () => import("@/components/auth/LoginForm.vue"),
        meta: { hideHeader: true, hideFooter: true },
      },
      {
        path: "signup",
        component: () => import("@/components/auth/SignupForm.vue"),
        meta: { hideHeader: true, hideFooter: true },
      },
      {
        path: "findPassword",
        component: () => import("@/components/auth/FindPassword.vue"),
        meta: { hideHeader: true, hideFooter: true },
      },
      {
        path: "mypage",
        component: () => import("@/components/auth/Mypage.vue"),
        meta: { hideHeader: false, hideFooter: false },
      },
    ],
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
