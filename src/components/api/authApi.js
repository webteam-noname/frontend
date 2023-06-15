import axios from "axios";
import VueCookies from "vue-cookies";
import authHeader from "./authHeader";

const API_URL = "http://192.168.101.182:8080";
const ProfileName = "test0";

class AuthService {
  delFollows(user) {
    return (
      axios
        .delete(
          `${API_URL}/api/follows/${ProfileName}`,
          {
            headers: authHeader(),
            data: {
              profileName: ProfileName,
              followName: user.followName.followName,
            },
          }
          //   {
          //     profileName: user.profileName,
          //     followName: user.followName,
          //   },
          //   {
          //     headers: authHeader(),
          //   }
        )
        //   .then(this.handleResponse);
        .then((response) => {
          console.log(response);
        })
    );
  }
  delFollowers(user) {
    return (
      axios
        .delete(
          `${API_URL}/api/follows/${ProfileName}`,
          {
            headers: authHeader(),
            data: {
              profileName: user.followName.profileName,
              followName: ProfileName,
            },
          }
          //   {
          //     profileName: user.profileName,
          //     followName: user.followName,
          //   },
          //   {
          //     headers: authHeader(),
          //   }
        )
        //   .then(this.handleResponse);
        .then((response) => {
          console.log(response);
        })
    );
  }

  editProfile(user) {
    return (
      axios
        .put(
          `${API_URL}/api/accounts/${ProfileName}/profile`,
          {
            profileName: user.profileName,
            changeProfileName: user.changeProfileName,
            profileIntro: user.profileIntro,
            profileImgFileId: user.profileImgFileId,
            file: user.file,
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
