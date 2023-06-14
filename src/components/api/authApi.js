import axios from "axios";
import VueCookies from "vue-cookies";
import authHeader from "./authHeader";

const API_URL = "http://192.168.101.182:8080";
const USER_INFO = "test0";

class AuthService {
  editProfile(user) {
    console.log(user.profileIntro);
    return (
      axios
        .put(
          `${API_URL}/api/accounts/${USER_INFO}/profile`,
          {
            profileImg: user.profileImg,
            profileName: user.profileName,
            profileIntro: user.profileIntro,
          },
          {
            headers: authHeader(),
          }
        )
        //   .then(this.handleResponse);
        .then((response) => {
          console.log(response);
        })
    );
  }

  resetPw(user) {
    return axios
      .put(API_URL + "/api/auth/accounts/password", {
        username: user.username,
        authCode: user.authCode,
        password: user.password,
      })
      .then(this.handleResponse);
    //   .then((response) => {
    //     console.log(response);
    //   });
  }

  findPw(user) {
    return axios
      .post(API_URL + "/api/auth/accounts/password/code", {
        username: user.username,
      })
      .then(this.handleResponse);
    //   .then((response) => {
    //     console.log(response);
    //   });
  }

  register(user) {
    return axios.post(API_URL + "/api/auth/accounts/join", {
      username: user.username,
      name: user.name,
      profileName: user.profileName,
      password: user.password,
    });
  }

  login(user) {
    return axios
      .post(API_URL + "/api/auth/accounts/login", {
        username: user.username,
        password: user.password,
      })
      .then(this.handleResponse)
      .then((response) => {
        if (response.data.data.jwt.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          // 로그인 성공시 쿠키에 토큰저장
          VueCookies.set("accessToken", response.data.data.jwt.accessToken);
          VueCookies.set("refreshToken", response.data.data.jwt.refreshToken);
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    VueCookies.remove("accessToken");
    VueCookies.remove("refreshToken");
  }

  handleResponse(response) {
    if (response.status === 401) {
      this.logout();
      location.reload(true);

      const error = response.data && response.data.message;
      return Promise.reject(error);
    }

    return Promise.resolve(response);
  }
}

export default new AuthService();
