<template>
  <div class="newWorks_body">
    <!-- 最新作品标题 -->
    <h1
      class="newWorks_title"
      :class="{ phone_newWorks_title: isPhone }"
    >最新作品</h1>
    <!-- 展示框 -->
    <div class="newWorks_div">
      <!-- 框体组件 -->
      <div
        v-for="item in info"
        :key="item.key"
        class="works_box"
        :class="{ phone_works_box: isPhone }"
      >
        <div class="title" :class="{ phone_title: isPhone }">
          {{ item.name }}
        </div>
        <div v-if="item.works.length !== 0">
          <div v-for="i in item.works" :key="i.key" class="works_body">
            <showBox :isPhone="isPhone" :info="i"> </showBox>
          </div>
          <div class="more_btn_div">
            <div
              class="more_img"
              v-if="item.works.length === 3"
              @click="jumpToMenuPage(item.path)"
            ></div>
          </div>
        </div>
        <img
          v-else-if="item.name === '视频' || item.name === '创作者'"
          src="../../../assets/img/merry.png"
          class="no_works_img merry_img"
        />
        <img
          v-else-if="item.name === '文章' || item.name === '绘图'"
          src="../../../assets/img/umy.png"
          class="no_works_img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import showBox from "../../../components/showBox";

export default {
  name: "newWorks",
  props: ["info", "isPhone"],
  components: {
    showBox,
  },
  methods: {
    jumpToMenuPage(path) {
      // 跳转到对应的作品页面
      this.$router.push({
        path: path,
        name: path,
      });
    },
  },
};
</script>

<style scoped>
img {
  pointer-events: none;
}
.newWorks_body {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  padding-bottom: 3rem;
}
.newWorks_div {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-evenly;
  background: #fafafa;
  width: 90%;
  margin-top: 0rem;
  padding-top: 2rem;
}
.newWorks_title {
  font-size: 2rem;
  letter-spacing: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.phone_newWorks_title {
  font-size: 2.5rem;
}
.works_box {
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-bottom: 2rem;
}
.phone_works_box {
  width: 90%;
}
.title {
  font-size: 1.5rem;
}
.phone_title {
  font-size: 2.2rem;
}
.works_body {
  width: 100%;
}
.no_works_img {
  margin-top: 2rem;
  width: 100%;
}
.merry_img {
  margin-top: 3rem;
}
.more_btn_div {
  display: flex;
  justify-content: flex-end;
  background: #fafafa;
  width: 100%;
  height: 4rem;
}
.more_img {
  width: 9rem;
  height: 4rem;
  background: url("../../../assets/img/little_more.png") no-repeat;
  background-size: contain;
}
.more_img:hover {
  cursor: pointer;
  background: url("../../../assets/img/little_more_hover.png") no-repeat;
  background-size: contain;
}
</style>