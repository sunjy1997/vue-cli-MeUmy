<template>
  <div class="height_box">
    <div class="MeUmy_box">
      <div class="single_box" style="margin-right: 12.5rem">
        <div class="img_box">
          <img
            :src="UmyHead"
            class="head_img"
            oncontextmenu="return false"
            onselectstart="return false"
            draggable="false">
        </div>
        <infoBox
          :info = Umy></infoBox>
      </div>
      <div class="single_box">
        <infoBox
          :info = Merry></infoBox>
        <div class="img_box">
          <img
            :src="MerryHead"
            class="head_img"
            oncontextmenu="return false"
            onselectstart="return false"
            draggable="false">
        </div>
      </div>
    </div>
    <img
      src="../../../assets/img/anchor.png"
      class="background"
      oncontextmenu="return false"
      onselectstart="return false"
      draggable="false">
  </div>
</template>

<script>
  import infoBox from './infoBox';

  export default {
    name: "anchorInfo",
    props: {
      MerryHead: String ,
      UmyHead: String
    },
    components: {
      infoBox
    },
    data() {
      return {
        Merry: {
          id: 'Merry',
          user: '咩栗-电击小羊',
          tag: '咩，咩啊？',
          weiboName: '微博：电击咩阿栗', // 微博用户名
          weibo: 'https://weibo.com/u/7080286241', // 微博
          questionName: '提问箱：咩阿栗信箱', // 提问箱字段名
          question: 'https://www.pomeet.com/Merry0', // 提问箱
          cloudName: '网易云：咩栗咩咩咩', // 网易云用户名
          cloud: 'https://music.163.com/#/user/home?id=1356709812', // 网易云
          live: 'https://live.bilibili.com/8792912', // 直播间
          homepage: 'https://space.bilibili.com/745493/' // 主页
        },
        Umy: {
          id: 'Umy',
          user: '呜米-光能雪狼',
          tag: 'Kira☆Kira☆',
          weiboName: '微博：呜米嗷呜', // 微博用户名
          weibo: 'https://weibo.com/u/7079069131', // 微博
          questionName: '提问箱：呜米', // 提问箱字段名
          question: 'https://www.pomeet.com/Umyyy1', // 提问箱
          cloudName: '网易云：呜米嗷嗷嗷', // 网易云用户名
          cloud: 'https://music.163.com/#/user/home?id=1306304320', // 网易云
          live: 'https://live.bilibili.com/22384516', // 直播间
          homepage: 'https://space.bilibili.com/617459493' // 主页
        }
      }
    }
  }
</script>

<style scoped>
  html{
      font-size:20px;
  }
  .height_box {
    width: 100%;
    position: relative;
  }
  .background {
    max-width: 100%;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  .MeUmy_box {
    position: absolute;
    display: flex;
    bottom: -2rem;
    width: 100%;
  }
  .single_box {
    display: flex;
    justify-content: center;
    width: 50%;
  }
  .img_box {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 0.4rem;
    box-shadow: #b9b9b9 0.05rem 0.1rem 0.15rem 0.05rem;
  }
  .head_img {
    vertical-align: bottom;
    width: 4.5rem;
    border: 0.5px black solid;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  .head_img:hover {
    animation: heartBeat;
    animation-duration: 2s;
  }
</style>
