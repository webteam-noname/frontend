import authApi from "@/components/api/authApi";
// import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    resetPw({ commit }, user) {
      return authApi.resetPw(user).then(
        (user) => {
          commit("SendEmailSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          commit("SendEmailFailure");
          return Promise.reject(error.response.data);
        }
      );
    },

    findPw({ commit }, user) {
      return authApi.findPw(user).then(
        (user) => {
          commit("ChangePasswordSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          commit("ChangePasswordFailure");
          return Promise.reject(error.response.data);
        }
      );
    },

    login({ commit }, user) {
      return authApi.login(user).then(
        (user) => {
          commit("loginSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          commit("loginFailure");
          return Promise.reject(error.response.data);
        }
      );
    },
    logout({ commit }) {
      authApi.logout();
      commit("logout");
    },
    register({ commit }, user) {
      return authApi.register(user).then(
        (response) => {
          commit("registerSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("registerFailure");
          return Promise.reject(error.response.data);
        }
      );
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status = { loggedIn: true };
      state.user = user;
    },
    loginFailure(state) {
      state.status = {};
      state.user = null;
    },
    logout(state) {
      state.status = { loggedIn: false };
      state.user = null;
    },
    registerSuccess(state) {
      state.status = {};
    },
    registerFailure(state) {
      state.status = {};
    },
    SendEmailSuccess(state) {
      state.status = {};
    },
    SendEmailFailure(state) {
      state.status = {};
    },
    ChangePasswordSuccess(state) {
      state.status = {};
    },
    ChangePasswordFailure(state) {
      state.status = {};
    },
  },
};
