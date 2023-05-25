<template>
  <div class="form-signin w-100 m-auto">
    <form @submit.prevent="register">
      <h1 class="h3 mb-3 fw-normal">
        <img src="../assets/images/logo.png" alt="로고" />
      </h1>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          v-model="email"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingUserName"
          placeholder="성명"
          v-model="username"
        />
        <label for="floatingUserName">성명</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingNickName"
          placeholder="사용자 이름"
          v-model="nickname"
        />
        <label for="floatingNickName mb-3">사용자 이름</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="password"
        />
        <label for="floatingPassword" @keyup.enter="register">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">가입</button>
      <br />
    </form>
  </div>
</template>

<script>
export default {
  name: "signUp",
  data() {
    return {
      email: "",
      username: "",
      nickname: "",
      password: "",
    };
  },
  methods: {
    async register() {
      if (this.email === "") {
        alert("이메일을 입력해주세요.");
        document.querySelector("#floatingInput").focus();
      } else if (this.username === "") {
        alert("성명을 입력해주세요.");
        document.querySelector("#floatingUserName").focus();
      } else if (this.nickname === "") {
        alert("사용자 이름을 입력해주세요.");
        document.querySelector("#floatingNickName").focus();
      } else if (this.password === "") {
        alert("비밀번호를 입력해주세요.");
        document.querySelector("#floatingPassword").focus();
      } else {
        const userInfo = {
          email: this.email,
          username: this.username,
          nickname: this.nickname,
          password: this.password,
        };
        this.$axios
          .post("/api/auth/join", userInfo)
          .then((res) => {
            console.log("성공," + "res: " + res);
            // this.$router.push({ path: "/main" });
          })
          .catch((err) => {
            console.log("에러," + "err: " + err);
          });
      }
    },
  },
};
</script>

<style>
.form-signin {
  max-width: 768px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
