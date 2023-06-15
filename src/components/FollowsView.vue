<template>
  <div>
    <div @click="showModalFollows = true">{{ getFollowsCount }}</div>
    <CommonModal v-if="showModalFollows" @close="showModalFollows = false">
      <template v-slot:body>
        <h3 class="title">팔로우</h3>
        <div class="followWrap">
          <div
            class="followList"
            v-for="(Follows, getFollowsCount) in getFollows"
            :key="getFollowsCount"
          >
            <div class="profileImg">
              <img src="@/assets/images/profile.jpg" alt="프로필사진" />
            </div>
            <div class="nameWrap">
              <div class="username">{{ Follows.followUsername }}</div>
              <div class="followsName">{{ Follows.followName }}</div>
            </div>
            <button @click="delFollows(Follows)">팔로우취소</button>
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
  name: "FollowsView",
  data() {
    return {
      getFollowsCount: "",
      getFollows: "",
      showModalFollows: false,
    };
  },
  methods: {
    delFollows(Follows) {
      this.$store
        .dispatch("auth/delFollows", {
          followName: Follows,
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
    userApi.getFollowsCount().then(
      (res) => {
        this.getFollowsCount = res.data.data;
      },
      (err) => {
        console.log(err);
      }
    );

    userApi.getFollows().then(
      (res) => {
        this.getFollows = res.data.data;
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

<style></style>
