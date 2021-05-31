<template>
  <div style="width: 100%">
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
  </div>
</template>

<script>
import videoBox from './blocks/videoBox';
import imageBox from './blocks/imageBox';
import articalBox from './blocks/articalBox';
import authBox from './blocks/authBox';
import materialBox from './blocks/materialBox';

export default {
  name: 'showBox',
  components: {
    videoBox,
    imageBox,
    articalBox,
    authBox,
    materialBox
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
      information: ''
    }
  }
}
</script>

<style scoped>

</style>