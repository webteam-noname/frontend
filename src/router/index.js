import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import VueCookies from "vue-cookies";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true },
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
        meta: { requiresAuth: false, hideHeader: true, hideFooter: true },
      },
      {
        path: "signup",
        component: () => import("@/components/auth/SignupForm.vue"),
        meta: { requiresAuth: false, hideHeader: true, hideFooter: true },
      },
      {
        path: "findPassword",
        component: () => import("@/components/auth/FindPassword.vue"),
        meta: { requiresAuth: false, hideHeader: true, hideFooter: true },
      },
      {
        path: "myPage",
        component: () => import("@/components/auth/MyPage.vue"),
        meta: { requiresAuth: true, ideHeader: false, hideFooter: false },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  /**
   * to: 이동할 url 정보가 담긴 라우터 객체
   * from: 현재 url 정보가 담긴 라우터 객체
   * next: to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
   * next() 가 호출되기 전까지 화면 전환되지 않음
   **/
  const loggedIn = store.state.auth.status.loggedIn;
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    /**
     * 이 라우트는 인증이 필요하며 로그인 한 경우 확인하십시오.
     * 그렇지 않은 경우 로그인 페이지로 리디렉션하십시오.
     **/
    if (!loggedIn) {
      next({
        path: "auth/login",
      });
    } else if (
      // 로그인상태일떄 1. refreshToken만 있을때 accessToken 재발급요청
      // 현재 개발 진행중이며 임시로 로그인페이지로 이동해서 재로그인
      VueCookies.get("accessToken") === null &&
      VueCookies.get("refreshToken") !== null
    ) {
      console.log("로그인상태일떄 1.");
      next({
        path: "/auth",
      });
    } else if (VueCookies.get("accessToken")) {
      // 로그인상태일때 2. accessToken만 있을때 그냥 진행
      console.log("로그인상태일때 2.");
      next();
    } else if (
      VueCookies.get("accessToken") === null &&
      VueCookies.get("refreshToken") === null
    ) {
      // 로그인상태일떄 3. 둘다 없으면 로그인 페이지로
      next({
        path: "/auth",
      });
    }
  } else {
    next();
  }
});

export default router;
