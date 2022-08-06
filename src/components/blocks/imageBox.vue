<template>
  <div class="image_body" :class="{ phone_image_body: isPhone }">
    <meta name="referrer" content="no-referrer" />
    <div class="img_div" :class="{ phone_img_div: isPhone }">
      <figure class="image_img">
        <img
          :src="imgPath"
          class="image_img phone_img"
          :class="{ phone_image_img: isPhone }"
          oncontextmenu="return false"
          onselectstart="return false"
          draggable="false"
          @click="jumpToImage(imgWorkPath)"
        />
      </figure>
    </div>
    <div class="image_text" :class="{ phone_image_text: isPhone }">
      <div class="title_text">
        <span
          class="title_font"
          :class="{ phone_title_font: isPhone }"
          @click="jumpToImage(imgWorkPath)"
        >
          {{ imgText }}
        </span>
      </div>
      <div class="auth_text" :class="{ phone_auth_text: isPhone }">
        <span>
          创作者：
          <span class="name" @click.stop="jumpToAuthPage(authUid)">
            {{ imgAuth }}
          </span>
        </span>
        <span class="time">{{ imgTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "imageBox",
  props: ["info", "isPhone"],
  mounted() {
    // this.controlInfo();
  },
  data() {
    return {
      imgText: this.info.title, // 绘图简介
      imgAuth: this.info.auth, // 绘图作者
      imgTime: this.info.time, // 绘图上传时间
      imgPath: this.info.img, // 绘图封面
      authUid: this.info.uid, // 作者地址
      imgWorkPath: this.info.workPath, // 绘图地址
    };
  },
  methods: {
    // 跳转创作者页面
    jumpToAuthPage() {
      if (this.$route.path.indexOf('authorInfoPage') > -1) {
        return;
      }
      this.$router.push({
        path: `authorInfoPage/${this.authUid}`,
      });
    },
    // 跳转视频页面
    jumpToImage(path) {
      window.open(path);
    },
  },
};
</script>

<style scoped>
.phone_img {
  pointer-events: none;
}
.image_body {
  display: flex;
  background: white;
  overflow: hidden;
  width: 100%;
  height: 8rem;
  border-radius: 0.6rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: 2px 2px 4px -2px #cccccc;
  border: 1px solid rgba(0,0,0,.125);
}
.phone_image_body {
  height: 13rem;
}
.image_body:hover {
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
.image_img {
  width: 100%;
  height: 100%;
  filter: blur(0.5rem);
  margin: 0;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.image_img:hover {
  filter: blur(0.1rem);
}
.phone_image_img {
  border-radius: 0.6rem;
}
.image_text {
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 0.7rem;
}
.phone_image_text {
  padding: 1rem;
}
.title_text {
  width: 100%;
  height: 48%;
}
.title_font {
  font-size: 1.2rem;
  overflow: hidden;
  text-align: left;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.phone_title_font {
  font-size: 2.1rem;
  line-height: 2.2rem;
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
