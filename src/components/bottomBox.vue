<template>
  <div class="body_box">
    <span class="res_title" :class="{ phone_res_title: isPhone }"
      >免责声明</span
    >
    <span class="res_text" :class="{ phone_res_text: isPhone }"
      >MeUmy草原平行时空由平行时空制作组独家制作呈现</span
    >
    <span class="res_text" :class="{ phone_res_text: isPhone }"
      >本站的开发制作、稿件的分类筛选等流程与MeUmy官方没有进行过交流讨论</span
    >
    <span class="res_text" :class="{ phone_res_text: isPhone }"
      >本站的一切事项均为粉丝行为，与MeUmy官方无关</span
    >
    <span
      class="ei_hei"
      :class="{ phone_res_text: isPhone }"
      @click="jumpToAuth()"
      >免责声明意思是有意见来找我，别去烦咩崽，点击跳转来提意见</span
    >
  </div>
</template>

<script>
export default {
  name: "bottomBox",
  props: ["isPhone"],
  methods: {
    // 跳转作者页
    jumpToAuth() {
      window.open("https://message.bilibili.com/#/whisper/mid2488613");
    },
  },
};
</script>

<style scoped>
* {
  -webkit-touch-callout: none; /*系统默认菜单被禁用*/
  -webkit-user-select: none; /*webkit浏览器*/
  -khtml-user-select: none; /*早起浏览器*/
  -moz-user-select: none; /*火狐浏览器*/
  -ms-user-select: none; /*IE浏览器*/
  user-select: none; /*用户是否能够选中文本*/
  -o-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.body_box {
  display: flex;
  flex-direction: column;
  background: #2e2e2e;
  color: #fff;
  padding: 3% 4% 1% 5%;
}
.res_title {
  font-size: 1.8rem;
}
.phone_res_title {
  font-size: 2.5rem;
}
.res_text {
  font-size: 1.2rem;
  padding-top: 1rem;
}
.phone_res_text {
  font-size: 1.9rem;
}
.ei_hei {
  color: #2e2727;
  padding-top: 1rem;
}
.ei_hei:hover {
  cursor: pointer;
}
</style>