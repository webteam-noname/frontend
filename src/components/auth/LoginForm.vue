<template>
  <div class="form-signin w-100 m-auto">
    <div class="leftImg">
      <img src="@/assets/images/loginImg01.jpg" alt="" />
    </div>
    <div class="formWrap">
      <form>
        <h1 class="h3 mb-4 fw-normal">
          <img src="@/assets/images/logo.png" alt="" />
        </h1>

        <div class="form-floating mb-1">
          <input
            type="username"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="username"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button
          class="w-100 btn btn-lg btn-primary mt-3"
          type="submit"
          @click.prevent="login"
        >
          로그인
        </button>
        <div class="line mt-3 mb-3"><span>또는</span></div>
        <div class="mt-3 mb-3">
          <a
            href="http://192.168.101.182:8080/oauth2/authorize/google??redirect_uri=http://localhost:8080/oauth2/redirect"
            class="w-100 btn btn-lg btn-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-google"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
              />
            </svg>
            구글로그인
          </a>
        </div>
        <div class="mt-3 mb-3">
          <router-link to="findPassword">비밀번호를 잊으셨나요?</router-link>
        </div>
        <div class="joinWrap mt-3">
          계정이 없으신가요? <router-link to="signup">가입하기</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.username === "") {
        alert("이메일을 입력해주세요.");
        document.querySelector("#floatingInput").focus();
        return;
      } else if (this.password === "") {
        alert("비밀번호를 입력해주세요.");
        document.querySelector("#floatingPassword").focus();
        return;
      }
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          alert("로그인 되었습니다");
          this.$router.push({ path: "/mypage" });
        })
        .catch((err) => {
          alert("아이디 비밀번호를 확인해주세요");
          console.log(err);
        });
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
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
.form-signin > div {
  width: 40%;
}
.form-signin > div img {
  max-width: 100%;
}
.form-signin > div.formWrap {
  width: 60%;
  margin-left: 5%;
  border: 1px solid #ddd;
  padding: 5%;
}
.form-signin form > h1,
.form-signin form > div {
  text-align: center;
}
.line {
  width: 100%;
}
.line span {
  display: block;
  position: relative;
  text-align: center;
}
.line span::before {
  content: "";
  display: inline-block;
  width: 100px;
  height: 1px;
  background: #ddd;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.line span::after {
  content: "";
  display: inline-block;
  width: 100px;
  height: 1px;
  background: #ddd;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.joinWrap {
  border: 1px solid #ddd;
  padding: 15px;
}
</style>
