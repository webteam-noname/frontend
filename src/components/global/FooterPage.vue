<template>
  <div class="footer">
    <ul class="footer-button-plus">
      <li>
        <router-link to="/">
          <svg
            aria-label="홈"
            class="_ab6-"
            color="rgb(0, 0, 0)"
            fill="rgb(0, 0, 0)"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"
            ></path>
          </svg>
        </router-link>
      </li>
      <li>
        <input
          @change="upload"
          multiple
          accept="image/*"
          type="file"
          id="file"
          class="inputFile"
        />
        <label for="file" class="input-plus"
          ><svg
            aria-label="새로운 게시물"
            class="_ab6-"
            color="rgb(0, 0, 0)"
            fill="rgb(0, 0, 0)"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
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
              x1="6.545"
              x2="17.455"
              y1="12.001"
              y2="12.001"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="12.003"
              x2="12.003"
              y1="6.545"
              y2="17.455"
            ></line>
          </svg>
        </label>
      </li>
      <li>
        <router-link to="/auth/myPage">
          <img
            :src="userInfo.profileImg"
            width="32"
            height="32"
            class="rounded-circle"
          />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import userApi from "../api/userApi";
export default {
  name: "FooterPage",
  data() {
    return {
      userInfo: "",
    };
  },
  mounted() {
    userApi.getUserContent().then(
      (res) => {
        this.userInfo = res.data.data;
      },
      (err) => {
        console.log(err);
      }
    );
  },
};
</script>

<style>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
  border-top: 1px solid #efefef;
  margin-top: 8px;
}
.footer-button-plus {
  width: 100%;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
  /* font-size: 0; */
  text-align: center;
}
.footer-button-plus li {
  display: inline-block;
  width: 33.33%;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputFile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
</style>
