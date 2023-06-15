import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://192.168.101.182:8080/api/";
// const ProfileName = JSON.parse(localStorage.getItem("user")).data.accountsResponse.username;
// 임시로 프로필 하나만 조회 가능
const ProfileName = "test0";

class UserService {
  // 회원정보 조회
  getUserContent() {
    return axios.get(`${API_URL}accounts/${ProfileName}/profile`, {
      headers: authHeader(),
    });
  }

  // 팔로우 인원수 조회
  getFollowsCount() {
    return axios.get(`${API_URL}follows/${ProfileName}/count`, {
      headers: authHeader(),
    });
  }
  // 팔로우 조회
  getFollows() {
    return axios.get(`${API_URL}follows/${ProfileName}`, {
      headers: authHeader(),
    });
  }

  // 팔로워 인원수 조회
  getFollowersCount() {
    return axios.get(`${API_URL}followers/${ProfileName}/count`, {
      headers: authHeader(),
    });
  }
  // 팔로워 조회
  getFollowers() {
    return axios.get(`${API_URL}followers/${ProfileName}`, {
      headers: authHeader(),
    });
  }
}

export default new UserService();
