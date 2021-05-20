<template>
  <div class="excellent_body">
    <!-- MeUmy推荐标题 -->
    <img
      src="../../../assets/img/excellentWork.png"
      class="excellent_img"
      :class="{phone_excellent_img: isPhone}"
      oncontextmenu="return false"
      onselectstart="return false"
      draggable="false">
    <!-- 展示框 -->
    <div
      class="excellent_div"
      :class="{phone_excellent_div: isPhone}">
      <!-- 框体组件 -->
      <div
        v-for="item in info"
        :key="item.key"
        class="works_div"
        :class="{phone_works_div: isPhone}">
        <videoBox
          :isPhone = isPhone>
        </videoBox>
        <imageBox
          :isPhone = isPhone>
        </imageBox>
      </div>
    </div>
  </div>
</template>

<script>
import videoBox from '../../../components/videoBox';
import imageBox from '../../../components/imageBox';

export default {
  name: 'excellentWorks',
  props: ['excellWorksInfo', 'isPhone'],
  components: {
    videoBox,
    imageBox
  },
  data() {
    return {
      info: this.excellWorksInfo
    }
  }
}
</script>

<style scoped>
  .excellent_body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
  }
  .excellent_img {
    width: 20%;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  .phone_excellent_img {
    width: 35%;
  }
  .excellent_div {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background: white;
    width: 90%;
    padding: 0.5rem 0 0.5rem 0;
    margin-top: 1rem;
  }
  .phone_excellent_div {
    width: 90%;
  }
  .works_div {
    display: flex;
    flex-wrap: wrap;
    width: 45%;
  }
  .phone_works_div {
    width: 90%;
  }
</style>