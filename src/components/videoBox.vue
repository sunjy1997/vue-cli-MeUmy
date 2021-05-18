<template>
  <div class="video_body">
    <img
      :src="vidImgPath"
      class="video_img"
      oncontextmenu="return false"
      onselectstart="return false"
      draggable="false"
      @click="jumpToVideo(vidPath)">
    <div class="video_text">
      <div class="title_text">
        <span
          class="title_font"
          @click="jumpToVideo(vidPath)">
          {{ vidTitle }}
        </span>
      </div>
      <div class="auth_text">
        <span>
          创作者：
          <span
            :href="authPath"
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
  props: ['info'],
  mounted() {
    this.controlInfo();
  },
  data() {
    return {
      showInfo: this.info, // 传入的适配数据
      vidTitle: '总之这里放一个标题', // 视频标题
      vidAuth: '然后这里放一个作者', // 视频作者
      vidTime: '那这里只能放时间了', // 视频上传时间
      vidImgPath: require('../assets/img/videoImg.png'), // 视频封面
      authUid: '2488613', // 作者地址
      vidPath: 'https://www.bilibili.com/video/BV1Up4y1e7Gj' // 视频地址
    }
  },
  methods: {
    // 组件渲染时进行数据处理
    controlInfo() {
      // 处理标题，若无标题数据，使用默认值
      if (this.showInfo.title && this.showInfo.title !== '') {
        this.vidTitle = this.showInfo.title;
      }
      // 处理作者名，若无作者名数据，使用默认值
      if (this.showInfo.auth && this.showInfo.auth !== '') {
        this.vidAuth = this.showInfo.auth;
        // 对作者名长度做出限制
        if (this.vidAuth.length > 10) {
          this.vidAuth = this.vidAuth.substring(0, 8) + '...';
        }
      }
      // 处理上传时间，若无上传时间数据，使用默认值
      if (this.showInfo.time && this.showInfo.time !== '') {
        this.vidTime = this.showInfo.time;
      }
      // 处理作者uid跳转，若无作者数据，使用默认值
      if (this.showInfo.uid && this.showInfo.uid !== '') {
        this.authPath = this.showInfo.uid;
      }
      // 处理视频链接，若无链接数据，使用默认值
      if (this.showInfo.avid && this.showInfo.avid !== '') {
        this.vidPath =
          'https://www.bilibili.com/video/av' + this.showInfo.avid;
      }
    },
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
    height: 6.5rem;
    border-radius: 0.6rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-shadow: #838383 0px 2px 3px 1px;
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
  .title_font:hover {
    cursor: pointer;
    color: #FF3B41;
  }
  .auth_text {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 52%;
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
