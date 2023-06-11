export default function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.data.jwt.accessToken) {
    return { Authorization: "Bearer " + user.data.jwt.accessToken };
  } else {
    return {};
  }
}
