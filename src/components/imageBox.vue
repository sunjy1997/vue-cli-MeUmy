<template>
  <div
    class="image_body"
    :class="{phone_image_body: isPhone}">
    <img
      :src="imgPath"
      class="image_img"
      oncontextmenu="return false"
      onselectstart="return false"
      draggable="false"
      @click="jumpToImage(imgWorkPath)"
    >
    <div
      class="image_text"
      :class="{phone_image_text: isPhone}">
      <div class="title_text">
        <span
          class="title_font"
          :class="{phone_title_font: isPhone}"
          @click="jumpToImage(imgWorkPath)">
          {{ imgText }}
        </span>
      </div>
      <div class="auth_text" :class="{phone_auth_text: isPhone}">
        <span>
          创作者：
          <span
            class="name"
            @click.stop="jumpToAuthPage(authUid)">
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
  name: 'imageBox',
  props: ['info', 'isPhone'],
  mounted() {
    // this.controlInfo();
  },
  data() {
    return {
      showInfo: this.info, // 传入的适配数据
      imgText: '这里应该是一段介绍但是画师大大什么都没说.jpg', // 绘图简介
      imgAuth: '然后这里放一个画师大大', // 绘图作者
      imgTime: '那这里只能放时间了', // 绘图上传时间
      imgPath: require('../assets/img/videoImg.png'), // 绘图封面
      authUid: '2488613', // 作者地址
      imgWorkPath: '' // 绘图地址
    }
  },
  methods: {
    // 组件渲染时进行数据处理
    controlInfo() {
      // 处理标题，若无标题数据，使用默认值
      if (this.showInfo.title && this.showInfo.title !== '') {
        this.imgText = this.showInfo.title;
      }
      // 处理作者名，若无作者名数据，使用默认值
      if (this.showInfo.auth && this.showInfo.auth !== '') {
        this.imgAuth = this.showInfo.auth;
        // 对作者名长度做出限制
        if (this.imgAuth.length > 10) {
          this.imgAuth = this.imgAuth.substring(0, 8) + '...';
        }
      }
      // 处理上传时间，若无上传时间数据，使用默认值
      if (this.showInfo.time && this.showInfo.time !== '') {
        this.imgTime = this.showInfo.time;
      }
      // 处理作者uid跳转，若无作者数据，使用默认值
      if (this.showInfo.uid && this.showInfo.uid !== '') {
        this.authUid = this.showInfo.uid;
      }
      // 处理视频链接，若无链接数据，使用默认值
      if (this.showInfo.imgId && this.showInfo.imgId !== '') {
        this.imgWorkPath =
          'https://t.bilibili.com/' + this.showInfo.imgId;
      }
    },
    // 跳转创作者页面
    jumpToAuthPage(uid) {
      let path = '';
      this.$router.push(path, uid);
    },
    // 跳转视频页面
    jumpToImage(path) {
      window.open(path);
    }
  }
}
</script>

<style scoped>
  .image_body {
    display: flex;
    background: white;
    overflow: auto;
    width: 100%;
    height: 10vw;
    border-radius: 0.6rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-shadow: #838383 0px 2px 3px 1px;
  }
  .phone_image_body {
    height: 12rem;
  }
  .image_body:hover {
    cursor: default;
  }
  .image_img {
    width: 40%;
    height: 100%;
    filter: blur(0.5rem);
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  .image_img:hover {
    filter: blur(0.1rem);
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
