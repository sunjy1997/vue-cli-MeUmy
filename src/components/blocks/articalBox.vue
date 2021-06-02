<template>
  <div class="artical_body" :class="{ phone_artical_body: isPhone }">
    <meta name="referrer" content="no-referrer">
    <div class="img_div" :class="{phone_img_div: isPhone}">
      <img
        v-if="artImg !== ''"
        :src="artImg"
        class="artical_img"
        oncontextmenu="return false"
        onselectstart="return false"
        draggable="false"
        @click="jumpToartical(artWorkPath)"
      >
    </div>
    <div
      class="artical_text"
      :class="[
        { phone_artical_text: isPhone },
        { no_img_artical_text: artTitle !== '' },
      ]"
    >
      <div class="title_text">
        <span
          v-if="artTitle !== ''"
          class="title_font"
          :class="{ phone_title_font: isPhone }"
          @click="jumpToartical(artWorkPath)"
        >
          {{ artTitle }}
        </span>
        <span
          v-else
          class="title_font"
          :class="{ phone_title_font: isPhone }"
          @click="jumpToartical(artWorkPath)"
        >
          {{ artText }}
        </span>
      </div>
      <div class="auth_text" :class="{ phone_auth_text: isPhone }">
        <span>
          创作者：
          <span class="name" @click.stop="jumpToAuthPage(authUid)">
            {{ artAuth }}
          </span>
        </span>
        <span class="time">{{ artTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "articalBox",
  props: ["info", "isPhone"],
  mounted() {
    window.onresize = () => {
      this.switchFontSize();
    };
  },
  data() {
    return {
      artTitle: this.info.title, // 文章标题
      // 如果没有标题，展示一部分文章内容
      artText: this.info.text,
      artAuth: this.info.auth, // 文章作者
      artTime: this.info.time, // 文章上传时间
      // 文章图片，若没有图片则为空
      artImg: this.info.img,
      authUid:  this.info.uid, // 作者地址
      artWorkPath: this.info.workPath, // 文章地址
    };
  },
  methods: {
    // 跳转创作者页面
    jumpToAuthPage(uid) {
      let path = "";
      this.$router.push(path, uid);
    },
    // 跳转视频页面
    jumpToartical(path) {
      window.open(path);
    },
  },
};
</script>

<style scoped>
.artical_body {
  display: flex;
  background: white;
  overflow: auto;
  width: 100%;
  height: 7rem;
  border-radius: 0.6rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: #838383 0px 2px 3px 1px;
}
.phone_artical_body {
  height: 12rem;
  box-shadow: #adadad 0px 2px 3px 1px;
}
.artical_body:hover {
  cursor: default;
}
.img_div {
  align-self: center;
  width: 40%;
  height: 100%;
}
.phone_img_div {
  padding-left: 0.1rem;
  height: 97%;
}
.artical_img {
  width: 100%;
  height: 100%;
  filter: blur(0.5rem);
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.artical_img:hover {
  filter: blur(0.1rem);
}
.artical_text {
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 0.7rem;
}
.phone_artical_text {
  padding: 1rem;
}
.no_img_artical_text {
  width: 100%;
}
.title_text {
  width: 100%;
  height: 48%;
}
.title_font {
  font-size: 1.2rem;
  overflow: hidden;;
  text-align: left;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.phone_title_font {
  font-size: 2.1rem;
}
.title_font:hover {
  cursor: pointer;
  color: #ff3b41;
}
.auth_text {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 0.9rem;
  width: 100%;
  height: 52%;
}
.phone_auth_text {
  justify-content: space-evenly;
  font-size: 1.7rem;
}
.name {
  color: #b072f2;
}
.name:hover {
  cursor: pointer;
  color: #ff3b41;
}
.time {
  padding-top: 0.3rem;
}
</style>
