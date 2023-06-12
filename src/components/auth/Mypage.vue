<template>
  <div class="mypage">
    <div class="profileWrap">
      <div class="profilePicture">
        <img :src="userInfo.profileImg" />
      </div>
      <div class="profileEdit">
        <h3>
          {{ userInfo.profileName }}
          <a href="#none"
            ><svg
              aria-label="옵션"
              class="x1lliihq x1n2onr6"
              color="rgb(0, 0, 0)"
              fill="rgb(0, 0, 0)"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>옵션</title>
              <circle
                cx="12"
                cy="12"
                fill="none"
                r="8.635"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
              <path
                d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
          </a>
        </h3>
        <button>프로필 편집</button>
      </div>
      <div class="profileText">{{ userInfo.profileIntro }}</div>
    </div>
    <div class="infoWrap">
      <ul>
        <li class="on">
          게시물
          <span>247</span>
        </li>
        <li>
          팔로워
          <span>108</span>
        </li>
        <li>
          팔로우
          <span>106</span>
        </li>
      </ul>
    </div>
    <div class="postWrap">
      <ul>
        <li>
          <a href="#none">
            <img src="https://placeimg.com/300/300/any" />
          </a>
        </li>
        <li>
          <a href="#none">
            <img src="https://placeimg.com/300/300/arch" />
          </a>
        </li>
        <li>
          <a href="#none">
            <img src="https://placeimg.com/300/300/nature" />
          </a>
        </li>
        <li>
          <a href="#none">
            <img src="https://placeimg.com/300/300/people" />
          </a>
        </li>
        <li>
          <a href="#none">
            <img src="https://placeimg.com/300/300/tech" />
          </a>
        </li>
        <li>
          <a href="#none">
            <img src="https://placeimg.com/300/300/animals" />
          </a>
        </li>
        <li>
          <a href="#none">
            <img src="https://placeimg.com/300/300/any" />
          </a>
        </li>
        <li>
          <a href="#none">
            <img src="https://placeimg.com/300/300/arch" />
          </a>
        </li>
        <li>
          <a href="#none">
            <img src="https://placeimg.com/300/300/nature" />
          </a>
        </li>
        <li>
          <a href="#none">
            <img src="https://placeimg.com/300/300/people" />
          </a>
        </li>
        <li>
          <a href="#none">
            <img src="https://placeimg.com/300/300/tech" />
          </a>
        </li>
        <li>
          <a href="#none">
            <img src="https://placeimg.com/300/300/animals" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import userApi from "../api/userApi";
export default {
  name: "MyPage",
  data() {
    return {
      userInfo: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (!this.loggedIn) {
      this.$router.push("/auth/login");
    }
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
.mypage .profileWrap {
  display: flex;
  margin: 3%;
  flex-wrap: wrap;
  text-align: left;
}
.mypage .profileWrap img {
  width: 100%;
}
.mypage .profileWrap > div.profilePicture {
  width: 77px;
  height: 77px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 5%;
  background: #efefef;
}
.mypage .profileWrap > div.profileEdit {
  width: 80%;
}
.mypage .profileWrap > div.profileText {
  width: 100%;
  margin: 15px 0;
  font-size: 13px;
  font-weight: bold;
}
.mypage .profileWrap button {
  border: none;
  padding: 5px 70px;
  font-size: 13px;
  font-weight: bold;
  border-radius: 10px;
}
.mypage .postWrap ul {
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 0;
  margin: 0.5%;
}
.mypage .postWrap ul li {
  display: inline-block;
  width: 32.33%;
  margin: 0.5%;
}
.mypage .postWrap ul li:last-child {
  margin-bottom: 85px;
}
.mypage .postWrap ul li img {
  width: 100%;
}
.mypage .infoWrap ul {
  /* margin: 0; */
  font-size: 0;
  text-align: center;
  border-top: 1px solid #ddd;
  padding: 10px 0 0 0;
}
.mypage .infoWrap ul li {
  display: inline-block;
  font-size: 13px;
  width: 33.33%;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
.mypage .infoWrap ul li.on {
  border-bottom: 1px solid #aaa;
}
.mypage .infoWrap ul li span {
  display: block;
  font-weight: bold;
}
</style>
