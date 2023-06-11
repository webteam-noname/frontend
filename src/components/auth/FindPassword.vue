<template>
  <div class="form-find w-100 m-auto">
    <h1 class="h3 mb-3 fw-normal">
      <img src="@/assets/images/logo.png" alt="로고" />
    </h1>
    <form @submit.prevent="resetPw" v-if="sendEmail">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInputCode"
          placeholder="인증번호"
          v-model="authCode"
        />
        <label for="floatingInputCode">인증번호</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="새로운 비밀번호"
          v-model="password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        비밀번호 변경
      </button>
    </form>
    <form @submit.prevent="findPw" v-else>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInputEmail"
          placeholder="name@example.com"
          v-model="username"
        />
        <label for="floatingInputEmail">Email address</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        인증번호 전송
      </button>
      <br />
    </form>
  </div>
</template>

<script>
export default {
  name: "FindPassword",
  data() {
    return {
      username: "",
      authCode: "",
      password: "",
      sendEmail: false,
    };
  },
};
</script>

<style>
.form-find {
  max-width: 768px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
