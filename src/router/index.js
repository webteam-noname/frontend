import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
// import VueCookies from "vue-cookies";
// import store from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { authRequired: true },
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: () => import("@/views/AuthPage.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/components/auth/LoginForm.vue"),
        meta: { authRequired: false, hideHeader: true, hideFooter: true },
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
        path: "myPage",
        component: () => import("@/components/auth/MyPage.vue"),
        meta: { hideHeader: false, hideFooter: false },
      },
    ],
    meta: { authRequired: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

// //네비게이션 가드((뷰 라우터로 URL 접근에 대해서 처리할 수 있음)
// router.beforeEach(async (to, from, next) => {
//   //여기서 모든 라우팅이 대기 상태가 됨
//   /**
//    * to: 이동할 url 정보가 담긴 라우터 객체
//    * from: 현재 url 정보가 담긴 라우터 객체
//    * next: to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
//    * next() 가 호출되기 전까지 화면 전환되지 않음
//    */
//   if (
//     VueCookies.get("accessToken") === null &&
//     VueCookies.get("refreshToken") !== null
//   ) {
//     //refreshToken은 있고 accessToken이 없을 경우 토큰 재발급 요청
//     await store.dispatch("refreshToken");
//   }
//   if (VueCookies.get("accessToken")) {
//     //accessToken이 있을 경우 진행
//     return next();
//   }
//   if (
//     VueCookies.get("accessToken") === null &&
//     VueCookies.get("refreshToken") === null
//   ) {
//     //2개 토큰이 모두 없을 경우 로그인페이지로
//     return next({ path: "/auth/login" });
//   }
//   return next();
// });
