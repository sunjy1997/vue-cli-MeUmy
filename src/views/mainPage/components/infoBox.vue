<template>
  <div
    class="info_body"
    :class="{phone_info_body : isPhone}">
    <div
      class="info_box"
      :class="{phone_info_box : isPhone}">
      <div
        class="name_box"
        :class="{phone_name_box : isPhone}">
        <span
          class="user"
          :class="{phone_user : isPhone}">
          {{ info.user }}
        </span>
        <div
          class="line"
          :class="{phone_line: isPhone}"></div>
        <span
          class="tag"
          :class="{phone_tag: isPhone}">{{ info.tag }}</span>
      </div>
      <div
        class="net"
        :class="{phone_net : isPhone}">
        <span
          class="net_text animate__animated animate__fadeInTopRight"
          :class="{phone_net_text: isPhone}"
          @click="jumpToNet(info.weibo)">
          {{ info.weiboName }}
        </span>
        <span
          class="net_text animate__animated animate__fadeInRight"
          :class="{phone_net_text: isPhone}"
          @click="jumpToNet(info.question)">
          {{ info.questionName }}
        </span>
        <span
          class="net_text animate__animated animate__fadeInBottomRight"
          @click="jumpToNet(info.cloud)">
          {{ info.cloudName }}
        </span>
      </div>
    </div>
    <div
      class="bottom_box"
      :class="{phone_bottom_box: isPhone}">
      <!-- 跳转直播间按钮 -->
      <div
        class="btn"
        :class="[
          info.id === 'Umy' ?
          'Umy_btn' :
          'Merry_btn' ,
          isPhone ?
          'phone_btn':'']"
        @click="jumpToNet(info.live)">
        <span class="animate__animated animate__zoomIn">直播间</span>
      </div>
      <!-- 跳转主播主页按钮 -->
      <div
        class="btn"
        :class="[
          info.id === 'Umy' ?
          'Umy_btn' :
          'Merry_btn' ,
          isPhone ?
          'phone_btn':'']"
        @click="jumpToNet(info.homepage)">
        <span class="animate__animated animate__zoomIn">主播</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'infoBox',
    props: [ 'info', 'isPhone' ],
    methods: {
      // 跳转微博、提问箱、网易云、直播间、主播首页
      jumpToNet(url) {
        window.open(url);
      }
    }
  }
</script>

<style scoped>
  .info_body {
    width: 16.5rem;
    height: 6rem;
    margin-top: 0;
  }
  .phone_info_body {
    width: 58%;
    height: 13rem;
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
  .phone_info_box {
    width: 94%;
    height: 9rem;
    padding: 1rem;
  }
  .name_box {
    display: flex;
    flex-direction: column;
    width: 44%;
  }
  .phone_name_box {
    width: 55%;
  }
  .user {
    align-self: center;
    font-size: 1rem;
    animation: fadeInTopLeft;
    animation-duration: 1s;
  }
  .phone_user {
    font-size: 2.5rem;
    white-space: nowrap;
    /* padding-left: 2rem; */
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
  .phone_line {
    width: 100%;
  }
  .tag {
    align-self: flex-end;
    font-size: 0.9rem;
    animation: fadeInBottomLeft;
    animation-duration: 1s;
  }
  .phone_tag {
    font-size: 1.8rem;
    white-space: nowrap;
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
  .phone_net {
    white-space: nowrap;
    font-size: 1.7rem;
    padding-left: 0rem;
  }
  .net_text {
    padding-bottom: 0.3rem;
  }
  .phone_net_text {
    padding-bottom: 1rem;
  }
  .bottom_box {
    display: flex;
    position: relative;
    bottom: 1rem;
  }
  .phone_bottom_box {
    bottom: 2rem;
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
  .phone_btn {
    width: 8rem;
    height: 4rem;
    margin-left: 1rem;
    font-size: 2.1rem;
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
    background: linear-gradient( to right, #B072F2, #FF8FDD);
  }
</style>
