<template>
  <div id="app" class="namePage">
    <pageHead
      pageNum = ''>
    </pageHead>
    <anchorInfo
      :MerryHead = MerryHead
      :UmyHead = UmyHead></anchorInfo>
  </div>
</template>

<script>
  import pageHead from '../../components/pageHead';
  import anchorInfo from './components/anchorInfo';

  export default {
    name: "mainPage",
    components: {
      pageHead,
      anchorInfo
    },
    data() {
      return {
        MerryHead: '', // 咩栗头像
        UmyHead: '' // 呜米头像
      }
    },
    created() {
      this.getHeadPage();
    },
    methods: {
      // 获取咩栗、呜米头像
      getHeadPage() {
        this.MerryHead = require('../../assets/img/MerryHead.png');
        this.UmyHead = require('../../assets/img/UmyHead.png');
      }
    }
  }
</script>

<style scoped>
  html{
      font-size:20px;
  }
  .namePage {
    font-family: 'cjkFonts';
    background: #F5F5F5;
    width: 100%;
    height: 50rem;
  }
</style>
