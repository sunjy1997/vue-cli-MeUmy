<template>
  <div class="newWorks_body">
    <!-- 最新作品标题 -->
    <img
      src="../../../assets/img/newWorks.png"
      class="newWorks_img"
      :class="{phone_newWorks_img: isPhone}"
      oncontextmenu="return false"
      onselectstart="return false"
      draggable="false">
    <!-- 展示框 -->
    <div class="newWorks_div">
      <!-- 框体组件 -->
      <div
        v-for="item in info"
        :key="item.key"
        class="works_box"
        :class="{phone_works_box: isPhone}">
        <div
          class="title"
          :class="{phone_title: isPhone}">
          {{ item.name }}
        </div>
        <div v-for="i in item.works" :key="i.key" class="works_body">
          <showBox
            :isPhone = isPhone
            :info = i>
          </showBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import showBox from '../../../components/showBox';

export default {
  name: 'newWorks',
  props: [ 'info', 'isPhone'],
  components: {
    showBox
  }
}
</script>

<style scoped>
  .newWorks_body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    padding-bottom: 3rem;
  }
  .newWorks_img {
    width: 15%;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  .phone_newWorks_img {
    width: 25%;
  }
  .newWorks_div {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-evenly;
    background: #FAFAFA;
    width: 90%;
    margin-top: 1rem;
    padding-top: 2rem;
  }
  .works_box {
    display: flex;
    flex-direction: column;
    width: 45%;
    margin-bottom: 2rem;
  }
  .phone_works_box {
    width: 90%;
  }
  .title {
    font-size: 2rem;
  }
  .phone_title {
    font-size: 2.8rem;
  }
  .works_body {
    width: 100%;
  }
</style>