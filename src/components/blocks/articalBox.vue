<template>
  <div class="artical_body" :class="{ phone_artical_body: isPhone }">
    <meta name="referrer" content="no-referrer" />
    <div
      v-if="artImg !== ''"
      class="img_div"
      :class="{ phone_img_div: isPhone }"
    >
      <figure class="artical_img">
        <img
          v-if="artImg !== ''"
          :src="artImg"
          class="artical_img phone_img"
          :class="{ phone_artical_img: isPhone }"
          oncontextmenu="return false"
          onselectstart="return false"
          draggable="false"
          @click="jumpToArticle(artWorkPath)"
        />
      </figure>
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
          @click="jumpToArticle(artWorkPath)"
        >
          {{ artTitle }}
        </span>
        <span
          v-else
          class="title_font"
          :class="{ phone_title_font: isPhone }"
          @click="jumpToArticle(artWorkPath)"
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
  data() {
    return {
      artTitle: this.info.title, // 文章标题
      // 如果没有标题，展示一部分文章内容
      artText: this.info.text,
      artAuth: this.info.auth, // 文章作者
      artTime: this.info.time, // 文章上传时间
      // 文章图片，若没有图片则为空
      artImg: this.info.img,
      authUid: this.info.uid, // 作者地址
      artWorkPath: this.info.workPath, // 文章地址
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
    // 跳转文章页面
    jumpToArticle(path) {
      window.open(path);
    },
  },
};
</script>

<style scoped>
.phone_img {
  pointer-events: none;
}
.artical_body {
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
.phone_artical_body {
  height: 13rem;
}
.artical_body:hover {
  cursor: default;
}
.img_div {
  align-self: center;
  width: 65%;
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
  margin: 0;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.phone_artical_img {
  border-radius: 0.6rem;
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
