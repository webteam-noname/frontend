<template>
  <div class="header">
    <div v-if="currentUser">
      <a href class="nav-link" @click="logOut">
        <font-awesome-icon icon="sign-out-alt" /> LogOut
      </a>
    </div>
    <router-link to="/"
      ><img src="@/assets/images/logo.png" class="logo"
    /></router-link>
    <div class="search">
      <div class="input-group">
        <span class="input-group-text">
          <svg
            aria-label="검색"
            class="x1lliihq x1n2onr6"
            color="rgb(142, 142, 142)"
            fill="rgb(142, 142, 142)"
            height="16"
            role="img"
            viewBox="0 0 24 24"
            width="16"
          >
            <title>검색</title>
            <path
              d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="16.511"
              x2="22"
              y1="16.511"
              y2="22"
            ></line>
          </svg>
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="검색"
          aria-label="serarch"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/auth/login");
    },
  },
};
</script>

<style>
.header {
  width: 100%;
  height: 60px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
  overflow: hidden;
  border-bottom: 1px solid #efefef;
  margin-bottom: 8px;
}
.logo {
  height: 29px;
  margin: auto;
  display: block;
  position: absolute;
  left: 10px;
  top: 15px;
}
.search {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
