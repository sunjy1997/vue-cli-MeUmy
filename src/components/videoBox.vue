<template>
  <div
    class="video_body"
    :class="{phone_video_body: isPhone}">
    <img
      :src="vidImgPath"
      class="video_img"
      oncontextmenu="return false"
      onselectstart="return false"
      draggable="false"
      @click="jumpToVideo(vidPath)">
    <div
      class="video_text"
      :class="{phone_video_text: isPhone}">
      <div class="title_text">
        <span
          class="title_font"
          :class="{phone_title_font: isPhone}"
          @click="jumpToVideo(vidPath)">
          {{ vidTitle }}
        </span>
      </div>
      <div class="auth_text" :class="{phone_auth_text: isPhone}">
        <span>
          创作者：
          <span
            class="name"
            @click.stop="jumpToAuthPage(authUid)">
            {{ vidAuth }}
          </span>
        </span>
        <span class="time">{{ vidTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'videoBox',
  props: ['info', 'isPhone'],
  mounted() {
    // this.controlInfo();
  },
  data() {
    return {
      vidTitle: this.info.title, // 视频标题
      vidAuth: this.info.auth, // 视频作者
      vidTime: this.info.time, // 视频上传时间
      vidImgPath: this.info.img, // 视频封面
      authUid: this.info.uid, // 作者地址
      vidPath: this.info.workPath // 视频地址
    }
  },
  methods: {
    // 跳转创作者页面
    jumpToAuthPage(uid) {
      let path = '';
      this.$router.push(path, uid);
    },
    // 跳转视频页面
    jumpToVideo(path) {
      window.open(path);
    }
  }
}
</script>

<style scoped>
  .video_body {
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
  .phone_video_body {
    height: 12rem;
  }
  .video_body:hover {
    cursor: default;
  }
  .video_img {
    width: 40%;
    height: 100%;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  .video_text {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 0.7rem;
  }
  .phone_video_text {
    padding: 1rem;
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
    color: #FF3B41;
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
    color: #B072F2;
  }
  .name:hover {
    cursor: pointer;
    color: #FF3B41;
  }
  .time {
    padding-top: 0.3rem;
  }
</style>
