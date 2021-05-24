<template>
  <div class="artical_body" :class="{ phone_artical_body: isPhone }">
    <img
      v-if="this.isImg === true"
      :src="artImg"
      class="artical_img"
      oncontextmenu="return false"
      onselectstart="return false"
      draggable="false"
      @click="jumpToartical(artWorkPath)"
    />
    <div
      class="artical_text"
      :class="[
        { phone_artical_text: isPhone },
        { no_img_artical_text: !isImg },
      ]"
    >
      <div class="title_text">
        <span
          v-if="!isImg"
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
          图片的话边上没有字也好丑哦，要不要加点什么啊
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
  props: ["info", "isPhone", "isImg"],
  mounted() {
    window.onresize = () => {
      this.switchFontSize();
    };
  },
  data() {
    return {
      showInfo: this.info, // 传入的适配数据
      artTitle:
        "\xa0\xa0\xa0\xa0这次这里是文章标题，虽然不一定有;如果没有展示正文内容，正文要空格.jpg", // 文章标题
      artAuth: "那这里也得换成作者", // 文章作者
      artTime: "不过这里还是时间", // 文章上传时间
      artImg: require("../assets/img/videoImg.png"), // 文章图片
      authUid: "2488613", // 作者地址
      artWorkPath: "", // 绘图地址
    };
  },
  methods: {
    // 组件渲染时进行数据处理
    controlInfo() {
      // 处理标题，若无标题数据，使用默认值
      if (this.showInfo.title && this.showInfo.title !== "") {
        this.artTitle = this.showInfo.title;
      }
      // 处理作者名，若无作者名数据，使用默认值
      if (this.showInfo.auth && this.showInfo.auth !== "") {
        this.artAuth = this.showInfo.auth;
        // 对作者名长度做出限制
        if (this.artAuth.length > 10) {
          this.artAuth = this.artAuth.substring(0, 8) + "...";
        }
      }
      // 处理上传时间，若无上传时间数据，使用默认值
      if (this.showInfo.time && this.showInfo.time !== "") {
        this.artTime = this.showInfo.time;
      }
      // 处理作者uid跳转，若无作者数据，使用默认值
      if (this.showInfo.uid && this.showInfo.uid !== "") {
        this.authUid = this.showInfo.uid;
      }
      // 处理作品链接，若无链接数据，使用默认值
      if (this.showInfo.artId && this.showInfo.artId !== "") {
        this.artWorkPath = "https://t.bilibili.com/" + this.showInfo.artId;
      }
    },
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
}
.artical_body:hover {
  cursor: default;
}
.artical_img {
  width: 40%;
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
  overflow: hidden;
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
