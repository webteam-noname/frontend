import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://192.168.101.182:8080/api/accounts/";
const USER_INFO = JSON.parse(localStorage.getItem("user")).data.accountsResponse
  .username;

class UserService {
  getUserContent() {
    return axios.get(`${API_URL}${USER_INFO}+"profile`, {
      headers: authHeader(),
    });
  }
}

export default new UserService();
