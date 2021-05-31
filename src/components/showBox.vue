<template>
  <div style="width: 100%"
  @contextmenu.prevent="rightClick">
    <!-- 视频框 -->
      <videoBox
        v-if="info.type === '0'"
        :isPhone = isPhone
        :info = information>
      </videoBox>
    <!-- 绘图框 -->
    <div v-else-if="info.type === '1'">
      <imageBox
        :isPhone = isPhone
        :info = information></imageBox>
    </div>
    <!-- 文章框 -->
    <div v-else-if="info.type === '2'">
      <articalBox
        :isPhone = isPhone
        :info = information></articalBox>
    </div>
    <!-- 素材框 -->
    <div v-else-if="info.type === '3'">
      <materialBox
        :isPhone = isPhone
        :info = information></materialBox>
    </div>
    <!-- 创作者框 -->
    <div v-else-if="info.type === '4'">
      <authBox
        :isPhone = isPhone
        :info = showInfo></authBox>
    </div>
    <rightMenu
      :x="x_index"
      :y="y_index"
      :showMenu="showMenu"
      @close="closeMenu"
      @open="openWorks"
      @report="reportWorks"
      @clo="closeWorks">
    </rightMenu>
  </div>
</template>

<script>
import videoBox from './blocks/videoBox';
import imageBox from './blocks/imageBox';
import articalBox from './blocks/articalBox';
import authBox from './blocks/authBox';
import materialBox from './blocks/materialBox';
import rightMenu from './rightMenu';

export default {
  name: 'showBox',
  components: {
    videoBox,
    imageBox,
    articalBox,
    authBox,
    materialBox,
    rightMenu
  },
  props: ['info', 'isPhone'],
  created() {
    if (this.showInfo.type !== '4') {
      this.information = this.formatInfo(this.info)
    } else {
      this.info.time = this.formatTime(this.info.time)
    }
  },
  data() {
    return {
      showInfo: this.info,
      information: '',
      showMenu: false,
      x_index: 0,
      y_index: 0,
    }
  },
  watch: {
    // 在手机版测试遇到问题，手机版点击后会立刻触发onmouseleave事件
    showMenu(newState) {
      if (newState === true) {
        setTimeout(() => {
          this.showMenu = false;
        }, '4000')
      }
    }
  },
  methods: {
    rightClick(e) {
      this.showMenu = true
      this.x_index = e.pageX;
      this.y_index = e.pageY;
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
      let param = {
        workPath: this.information.workPath
      }
      this.$router.push('', param);
      this.closeWorks();
    },
    // 关闭弹窗
    closeWorks() {
      this.showMenu = false;
    }
  }
}
</script>

<style scoped>

</style>