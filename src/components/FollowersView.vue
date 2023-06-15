<template>
  <div>
    <div @click="showModalFollowers = true">{{ getFollowersCount }}</div>
    <CommonModal v-if="showModalFollowers" @close="showModalFollowers = false">
      <template v-slot:body>
        <h3 class="title">팔로워</h3>
        <div class="followWrap">
          <div
            class="followList"
            v-for="(Followers, getFollowersCount) in getFollowers"
            :key="getFollowersCount"
          >
            <div class="profileImg">
              <img src="@/assets/images/profile.jpg" alt="프로필사진" />
            </div>
            <div class="nameWrap">
              <div class="username">{{ Followers.username }}</div>
              <div class="followsName">{{ Followers.profileName }}</div>
            </div>
            <button @click="delFollowers(Followers)">삭제</button>
          </div>
        </div>
      </template>
    </CommonModal>
  </div>
</template>

<script>
import userApi from "./api/userApi";
import CommonModal from "@/components/common/CommonModal.vue";

export default {
  name: "FollowersView",
  data() {
    return {
      getFollowersCount: "",
      getFollowers: "",
      showModalFollowers: false,
    };
  },
  methods: {
    delFollowers(Followers) {
      this.$store
        .dispatch("auth/delFollowers", {
          followName: Followers,
        })
        .then(() => {
          alert("팔로우 취소되었습니다.");
          this.$router.go(0);
        })
        .catch((err) => {
          alert("수정실패했습니다.");
          console.log(err);
        });
    },
  },
  mounted() {
    userApi.getFollowersCount().then(
      (res) => {
        this.getFollowersCount = res.data.data;
      },
      (err) => {
        console.log(err);
      }
    );

    userApi.getFollowers().then(
      (res) => {
        this.getFollowers = res.data.data;
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
.followWrap {
  height: 250px;
  overflow-y: scroll;
}
.followWrap .modal-body {
  padding: 0;
}
.title {
  font-size: 17px;
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
}
.followList {
  padding: 3% 5%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.followList h3 {
  font-size: 17px;
  border-bottom: 1px solid #efefef;
}
.followList .profileImg {
  width: 45px;
  height: 45px;
}
.followList .nameWrap {
  text-align: left;
  margin: 0 10px;
}
.followWrap button {
  border: none;
  font-size: 13px;
  border-radius: 5px;
  height: 30px;
}
</style>
