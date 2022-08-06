<template>
  <div class="height_box phone_img">
    <!-- 手机版背景图 -->
    <img
      v-if="isPhone"
      src="../../../assets/img/anchor.jpg"
      class="background phone_img"
      oncontextmenu="return false"
      onselectstart="return false"
      draggable="false"
    />
    <div class="MeUmy_box" :class="{ phone_MeUmy_box: isPhone }">
      <div :class="[isPhone === false ? 'single_box' : 'phone_single_box']">
        <div
          :class="[
            isPhone === false
              ? 'img_box umy_head'
              : 'img_box phone_img_box phone_umy_head',
          ]"
        >
          <!-- 呜米头像 -->
          <img
            :src="UmyHead"
            class="head_img"
            :class="{ phone_head_img: isPhone }"
            oncontextmenu="return false"
            onselectstart="return false"
            draggable="false"
          />
        </div>
        <!-- 呜米信息框 -->
        <infoBox :info="Umy" :isPhone="isPhone"> </infoBox>
      </div>
      <div :class="[isPhone === false ? 'single_box' : 'phone_single_box']">
        <!-- 咩栗信息框 -->
        <infoBox :info="Merry" :isPhone="isPhone"></infoBox>
        <div
          :class="[
            isPhone === false
              ? 'img_box merry_head'
              : 'img_box phone_img_box phone_merry_head',
          ]"
        >
          <!-- 咩栗头像 -->
          <img
            :src="MerryHead"
            class="head_img"
            :class="{ phone_head_img: isPhone }"
            oncontextmenu="return false"
            onselectstart="return false"
            draggable="false"
          />
        </div>
      </div>
    </div>
    <!-- 背景图 -->
    <img
      v-if="!isPhone"
      src="../../../assets/img/anchor.jpg"
      class="background"
      oncontextmenu="return false"
      onselectstart="return false"
      draggable="false"
    />
  </div>
</template>

<script>
import infoBox from "./infoBox";
export default {
  name: "anchorInfo",
  props: ["MerryHead", "UmyHead", "isPhone"],
  components: {
    infoBox,
  },
  data() {
    return {
      Merry: {
        // 咩栗信息框相关信息
        id: "Merry",
        user: "咩栗-电击小羊",
        tag: "⚡全力闪光！",
        weiboName: "微博：电击咩阿栗", // 微博用户名
        weibo: "https://weibo.com/u/7080286241", // 微博
        questionName: "MeUmy的棉花糖", // 提问箱字段名
        question: "https://mht.meumy.club/#/", // 提问箱
        cloudName: "网易云：咩栗咩咩咩", // 网易云用户名
        cloud: "https://music.163.com/#/user/home?id=1356709812", // 网易云
        live: "https://live.bilibili.com/8792912", // 直播间
        homepage: "https://space.bilibili.com/745493/", // 主页
      },
      Umy: {
        // 呜米信息框相关信息
        id: "Umy",
        user: "呜米-光能雪狼",
        tag: "Kira☆Kira☆",
        weiboName: "微博：呜米嗷呜", // 微博用户名
        weibo: "https://weibo.com/u/7079069131", // 微博
        questionName: "MeUmy的棉花糖", // 提问箱字段名
        question: "https://mht.meumy.club/#/", // 提问箱
        cloudName: "网易云：呜米嗷嗷嗷", // 网易云用户名
        cloud: "https://music.163.com/#/user/home?id=1306304320", // 网易云
        live: "https://live.bilibili.com/22384516", // 直播间
        homepage: "https://space.bilibili.com/617459493", // 主页
      },
    };
  },
};
</script>

<style scoped>
.phone_img {
  pointer-events: none;
}
.height_box {
  width: 100%;
  position: relative;
}
.background {
  width: 100%;
  max-width: 100%;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.MeUmy_box {
  position: absolute;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  bottom: -2rem;
  width: 100%;
}
.phone_MeUmy_box {
  position: relative;
}
.single_box {
  display: flex;
  justify-content: center;
  width: 50%;
}
.phone_single_box {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
}
.img_box {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 1.5%;
  width: 15%;
  height: 80%;
  border-radius: 0.4rem;
  box-shadow: #b9b9b9 0.05rem 0.1rem 0.15rem 0.05rem;
}
.phone_img_box {
  padding: 0.1rem;
  width: 20%;
  height: 20vw;
  border-radius: 0.8rem;
}
.head_img {
  vertical-align: bottom;
  max-width: 100%;
  width: auto;
  border: 0.5px black solid;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.phone_head_img {
  width: 10rem;
}
.umy_head {
  margin-right: 1rem;
}
.merry_head {
  margin-left: 1rem;
}
.phone_umy_head {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.phone_merry_head {
  margin-left: 1rem;
  margin-bottom: 1rem;
}
.head_img:hover {
  animation: heartBeat;
  animation-duration: 2s;
}
</style>
