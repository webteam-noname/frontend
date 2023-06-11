import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://192.168.101.182:8080/api/accounts/";

class UserService {
  getUserContent() {
    // console.log(profileName);
    return axios.get(API_URL + "profile", {
      headers: authHeader(),
    });
  }
}

export default new UserService();
