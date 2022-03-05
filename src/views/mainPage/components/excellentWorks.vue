<template>
  <div class="excellent_body" v-if="info.length !== 0">
    <!-- MeUmy推荐标题 -->
    <img
      src="../../../assets/img/excellentWork.png"
      class="excellent_img"
      :class="{ phone_excellent_img: isPhone }"
      oncontextmenu="return false"
      onselectstart="return false"
      draggable="false"
    />
    <!-- 展示框 -->
    <div class="excellent_div" :class="{ phone_excellent_div: isPhone }">
      <!-- 框体组件 -->
      <div
        v-for="item in info"
        :key="item.key"
        class="works_div"
        :class="{ phone_works_div: isPhone }"
      >
        <showBox :isPhone="isPhone" :info="item"> </showBox>
      </div>
    </div>
    <div class="more_btn_div" v-if="info.length !== 0">
      <div class="more_text">查看往期精选内容请戳这里哦~</div>
      <div class="more_img" @click="goMore()"></div>
    </div>
  </div>
</template>

<script>
import showBox from "../../../components/showBox";

export default {
  name: "excellentWorks",
  props: ["info", "isPhone"],
  components: {
    showBox,
  },
  methods: {
    goMore() {
      window.open("https://space.bilibili.com/674421433/article");
    },
  },
};
</script>

<style scoped>
img {
  pointer-events: none;
}
.excellent_body {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
}
.excellent_img {
  width: 20%;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.phone_excellent_img {
  width: 35%;
}
.excellent_div {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: #fafafa;
  width: 90%;
  padding: 0.5rem 0 0.5rem 0;
  margin-top: 1rem;
}
.phone_excellent_div {
  width: 90%;
}
.works_div {
  display: flex;
  flex-wrap: wrap;
  width: 45%;
}
.phone_works_div {
  width: 90%;
}
.more_btn_div {
  display: flex;
  justify-content: flex-end;
  background: #fafafa;
  width: 90%;
  height: 11rem;
}
.more_text {
  font-size: 2rem;
  padding-bottom: 1rem;
  align-self: flex-end;
}
.more_img {
  width: 10rem;
  height: 10rem;
  background: url("../../../assets/img/moreWorks.png") no-repeat;
  background-size: contain;
  padding-right: 2rem;
}
.more_img:hover {
  background: url("../../../assets/img/moreWorks_hover.png") no-repeat;
  background-size: contain;
}
</style>