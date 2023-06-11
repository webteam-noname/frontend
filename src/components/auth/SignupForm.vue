<template>
  <div class="form-signup w-100 m-auto">
    <form @submit.prevent="signup">
      <h1 class="h3 mb-3 fw-normal">
        <img src="@/assets/images/logo.png" alt="로고" />
      </h1>
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
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingName"
          placeholder="사용자 이름"
          v-model="name"
        />
        <label for="floatingName mb-3">사용자 이름</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingProfileName"
          placeholder="성명"
          v-model="profileName"
        />
        <label for="floatingProfileName">성명</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">가입</button>
      <br />
    </form>
  </div>
</template>

<script>
export default {
  profileName: "SignupForm",
  data() {
    return {
      username: "",
      name: "",
      profileName: "",
      password: "",
    };
  },
};
</script>

<style>
.form-signup {
  max-width: 768px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
