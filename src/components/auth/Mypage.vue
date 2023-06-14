<template>
  <div class="mypage">
    {{ userInfo }}
    <CommonModal v-if="showModalSetting" @close="showModalSetting = false">
      <template v-slot:body>
        <div v-if="currentUser">
          <button class="nav-link" @click="logOut">로그아웃</button>
        </div>
      </template>
    </CommonModal>

    <CommonModal v-if="showModalProfile" @close="showModalProfile = false">
      <template v-slot:body>
        <div class="editProfileWrap">
          <div>
            <span>프로필사진</span>
            <img :src="userInfo.profileImg" />
            <input type="file" name="profileImg" id="profileImg" />
          </div>
          <div>
            <span>프로필명</span>
            <input type="text" name="" id="" :value="userInfo.profileName" />
          </div>
          <div>
            <span>프로필 내용</span>
            <input type="text" name="" id="" :value="userInfo.profileIntro" />
          </div>
        </div>
        <button class="nav-link">수정</button>
      </template>
    </CommonModal>

    <div class="profileWrap">
      <div class="profilePicture">
        <img :src="userInfo.profileImg" />
      </div>
      <div class="profileEdit">
        <h3>
          {{ userInfo.profileName }}
          <span @click="showModalSetting = true"
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
          </span>
        </h3>
        <button @click="showModalProfile = true">프로필 편집</button>
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
import CommonModal from "@/components/common/CommonModal.vue";

export default {
  name: "MyPage",
  data() {
    return {
      userInfo: "",
      showModalSetting: false,
      showModalProfile: false,
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/auth/login");
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    currentUser() {
      return this.$store.state.auth.user;
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
  components: {
    CommonModal,
  },
};
</script>

<style>
button {
  cursor: pointer;
  display: inline-block;
}
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
.mypage .nav-link {
  display: block;
  width: 100%;
}
.editProfileWrap > div {
  margin-bottom: 15px;
}
.editProfileWrap > div > span {
  display: block;
  font-size: 13px;
  color: #aaa;
}
.editProfileWrap > div input {
  font-size: 13px;
  border: 1px solid #ddd;
}
</style>
