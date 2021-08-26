<template>
  <!--
  展示作品

  非作者框需要传入的参数：
  （对应的作品若有不展示的部分或没有的部分就不传，数据处理有兜底）
  info: {
    type: '', // 作品类型，0：视频，1：绘图，2：文章，3：素材
    title: '', // 作品标题
    text: '', // 也许会有的作品内容
    auth: '', // 作者名
    time: '', // 作品上传时间，时间格式为年-月-日 时:分:秒
    uid: '', // 作者uid
    img: '', // 图片地址，直接用图片的网络地址即可
    id: '' // 作品id
  }

  例：
  info: {
    type: '0',
    title: '【MMD】咩栗女士，吃QQ糖嘛',
    auth: '倦长祈',
    time: '2021-05-16 14:02:30',
    uid: '27660293',
    img:
      'https://i0.hdslb.com/bfs/archive/9517915d95295793dd7e15ffdafac7a1ba3cac55.jpg@380w_240h_100Q_1c.webp',
    id: '460602858'
  }

  作者框需要传入的参数：
  info: {
    type: '4', // 类型是作者，固定是4
    name: '', // 作者昵称
    vid: '', // 视屏数量
    img: '', // 绘图数量
    art: '', // 文章数量
    workType: '', // 最近更新作品类型
    title: '', // 最近更新作品标题
    time: '', // 最近更新作品时间，时间格式为年-月-日 时:分:秒
    head: '', // 作者头像，直接用图片的网络地址即可
    authUid: '' // 作者uid
  }

  例：
  info: {
    type: '4',
    name: '努力的灵风',
    vid: '639',
    img: '0',
    art: '8',
    workType: '0',
    title: '【呜米】《一直都在》——2021.5.28生贺原创曲',
    time: '2021-05-28 20:45:28',
    head:
      'https://i2.hdslb.com/bfs/face/679ba3aab7b0bebd12564d5cba94c6f3ceee1a22.jpg@128w_128h_1o.webp',
    authUid: '62921501'
  }

  直接将对象传入即可

  ————霜飔慕雪 2021/6/7
 -->
  <div style="width: 100%" @contextmenu.prevent="rightClick">
    <!-- 视频框 -->
    <videoBox
      v-if="info.workType === '0'"
      :isPhone="isPhone"
      :info="information"
    >
    </videoBox>
    <!-- 绘图框 -->
    <div v-else-if="info.workType === '1'">
      <imageBox :isPhone="isPhone" :info="information"></imageBox>
    </div>
    <!-- 文章框 -->
    <div v-else-if="info.workType === '2'">
      <articalBox :isPhone="isPhone" :info="information"></articalBox>
    </div>
    <!-- 素材框 -->
    <div v-else-if="info.workType === '3'">
      <materialBox :isPhone="isPhone" :info="information"></materialBox>
    </div>
    <!-- 创作者框 -->
    <div v-else>
      <authBox :isPhone="isPhone" :info="showInfo"> </authBox>
    </div>
    <rightMenu
      v-if="right !== '0'"
      :x="x_index"
      :y="y_index"
      :showMenu="showMenu"
      :isPhone="isPhone"
      @close="closeMenu"
      @open="openWorks"
      @report="reportWorks"
      @clo="closeWorks"
    >
    </rightMenu>
  </div>
</template>

<script>
import videoBox from "./blocks/videoBox";
import imageBox from "./blocks/imageBox";
import articalBox from "./blocks/articalBox";
import authBox from "./blocks/authBox";
import materialBox from "./blocks/materialBox";
import rightMenu from "./rightMenu";

export default {
  name: "showBox",
  components: {
    videoBox,
    imageBox,
    articalBox,
    authBox,
    materialBox,
    rightMenu,
  },
  props: ["info", "isPhone", "right"],
  created() {
    if (this.showInfo.workType) {
      this.information = this.formatInfo(this.info);
    } else {
      this.info.time = this.formatTime(this.info.time);
    }
  },
  data() {
    return {
      showInfo: this.info,
      information: "",
      showMenu: false,
      x_index: 0,
      y_index: 0,
    };
  },
  watch: {
    // 加个定时关闭弹窗功能
    showMenu(newState) {
      if (newState === true) {
        setTimeout(() => {
          this.showMenu = false;
        }, "5000");
      }
    },
  },
  methods: {
    rightClick(e) {
      if (this.info.workType !== "4") {
        this.showMenu = true;
        this.x_index = e.pageX;
        this.y_index = e.pageY;
      }
    },
    // 关闭回调
    closeMenu(state) {
      this.showMenu = state;
    },
    // 跳转作品页
    async openWorks() {
      await this.closeWorks();
      window.open(this.information.workPath);
    },
    // 跳转举报页
    reportWorks() {
      window.open("https://message.bilibili.com/#/whisper/mid2488613");
      this.closeWorks();
    },
    // 关闭弹窗
    closeWorks() {
      this.showMenu = false;
    },
  },
};
</script>

<style scoped>
</style>