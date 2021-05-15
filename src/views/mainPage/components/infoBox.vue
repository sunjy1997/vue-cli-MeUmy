<template>
  <div class="info_body">
    <div class="info_box">
      <div class="name_box">
        <span class="user">{{ infos.user }}</span>
        <div class="line"></div>
        <span class="tag">{{ infos.tag }}</span>
      </div>
      <div class="net">
        <span
          class="net_text animate__animated animate__fadeInTopRight"
          @click="jumpToNet(infos.weibo)">
          {{ infos.weiboName }}
        </span>
        <span
          class="net_text animate__animated animate__fadeInRight"
          @click="jumpToNet(info.question)">
          {{ infos.questionName }}
        </span>
        <span
          class="net_text animate__animated animate__fadeInBottomRight"
          @click="jumpToNet(info.cloud)">
          {{ infos.cloudName }}
        </span>
      </div>
    </div>
    <div class="bottom_box">
      <!-- 跳转直播间按钮 -->
      <div
        class="btn"
        :class="[
          infos.id === 'Umy' ?
          'Umy_btn' :
          'Merry_btn']"
        @click="jumpToNet(infos.live)">
        <span class="animate__animated animate__zoomIn">直播间</span>
      </div>
      <!-- 跳转主播主页按钮 -->
      <div
        class="btn"
        :class="[
          infos.id === 'Umy' ?
          'Umy_btn' :
          'Merry_btn']"
        @click="jumpToNet(infos.homepage)">
        <span class="animate__animated animate__zoomIn">主播</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'infoBox',
    props: [ 'info' ],
    data() {
      return {
        infos: this.info
      }
    },
    methods: {
      // 跳转微博、提问箱、网易云、直播间、主播首页
      jumpToNet(url) {
        window.open(url);
      }
    }
  }
</script>

<style scoped>
  html{
    font-size:20px;
  }
  .info_body {
    width: 16.5rem;
    height: 6rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0;
  }
  .info_body:hover {
    cursor: pointer;
  }
  .info_box {
    display: flex;
    background: white;
    width: 15.7rem;
    height: 4rem;
    border-radius: 0.6rem;
    padding: 0.5rem;
    padding-bottom: 0.4rem;
    box-shadow: #b9b9b9 0.05rem 0.1rem 0.15rem 0.05rem;
  }
  .name_box {
    display: flex;
    flex-direction: column;
    width: 44%;
  }
  .user {
    align-self: center;
    font-size: 0.9rem;
    animation: fadeInTopLeft;
    animation-duration: 1s;
  }
  .line {
    background: #B8B8B8;
    width: 100%;
    height: 1px;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    animation: fadeInLeft;
    animation-duration: 1s;
  }
  .tag {
    align-self: flex-end;
    font-size: 0.8rem;
    animation: fadeInBottomLeft;
    animation-duration: 1s;
  }
  .net {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    align-items: flex-end;
    justify-content: flex-end;
    color: #B0B0B0;
    text-decoration: underline;
    padding-left: 1.2rem;
    padding-top: 0.3rem;
  }
  .net_text {
    padding-bottom: 0.3rem;
  }
  .bottom_box {
    display: flex;
    position: absolute;
    bottom: 0.3rem;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 3.5rem;
    height: 1.7rem;
    border-radius: 0.5rem;
    margin-left: 0.55rem;
  }
  .Umy_btn {
    background: linear-gradient( to right, #E774B7, #D53138);
  }
  .Umy_btn:hover {
    background: linear-gradient( to right, #FF80CA, #FF3B41);
  }
  .Merry_btn {
    background: linear-gradient( to right, #935FCA, #E17DC3);
  }
  .Merry_btn:hover {
    background: linear-gradient( to right, #A76CE6, #FF8FDD);
  }
</style>
