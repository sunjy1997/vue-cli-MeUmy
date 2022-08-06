<template>
  <div class="info_body" :class="{ phone_info_body: isPhone }">
    <div class="info_box" :class="{ phone_info_box: isPhone }">
      <div class="name_box" :class="{ phone_name_box: isPhone }">
        <span class="user" :class="{ phone_user: isPhone }">
          {{ info.user }}
        </span>
        <div class="line" :class="{ phone_line: isPhone }"></div>
        <span class="tag" :class="{ phone_tag: isPhone }">{{ info.tag }}</span>
      </div>
      <div class="net" :class="{ phone_net: isPhone }">
        <a
          class="net_text slightFadeInTopRight"
          :class="{ phone_net_text: isPhone }"
          :href="info.weibo"
          target="__blank"
        >
          {{ info.weiboName }}
        </a>
        <a
          class="net_text slightFadeInRight"
          :class="{ phone_net_text: isPhone }"
          :href="info.question"
          target="__blank"
        >
          {{ info.questionName }}
        </a>
        <a
          class="net_text slightFadeInBottomRight"
          :href="info.cloud"
          target="__blank"
        >
          {{ info.cloudName }}
        </a>
      </div>
    </div>
    <div class="bottom_box" :class="{ phone_bottom_box: isPhone }">
      <!-- 跳转直播间按钮 -->
      <button
        class="btn"
        :class="[
          info.id === 'Umy' ? 'Umy_btn' : 'Merry_btn',
          isPhone ? 'phone_btn' : '',
        ]"
        @click="jumpToNet(info.live)"
      >
        <span class="animate__animated animate__fadeIn animate__faster">直播间</span>
      </button>
      <!-- 跳转主播主页按钮 -->
      <button
        class="btn"
        :class="[
          info.id === 'Umy' ? 'Umy_btn' : 'Merry_btn',
          isPhone ? 'phone_btn' : '',
        ]"
        @click="jumpToNet(info.homepage)"
      >
        <span class="animate__animated animate__fadeIn animate__faster">主播</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "infoBox",
  props: ["info", "isPhone"],
  methods: {
    // 跳转微博、提问箱、网易云、直播间、主播首页
    jumpToNet(url) {
      window.open(url);
    },
  },
};
</script>

<style scoped>
@keyframes slightFadeInTopRight {
  from {
    opacity: 0;
    transform: translate3d(10%, -10%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slightFadeInRight {
  from {
    opacity: 0;
    transform: translate3d(10%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slightFadeInBottomRight {
  from {
    opacity: 0;
    transform: translate3d(10%, 10%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slightFadeInTopLeft {
  from {
    opacity: 0;
    transform: translate3d(-10%, -10%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slightFadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-10%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slightFadeInBottomLeft {
  from {
    opacity: 0;
    transform: translate3d(-10%, 10%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.slightFadeInTopRight {
  animation: slightFadeInTopRight 500ms;
}
.slightFadeInRight {
  animation: slightFadeInRight 500ms;
}
.slightFadeInBottomRight {
  animation: slightFadeInBottomRight 500ms;
}

a:link {
  color: #b0b0b0;
}
a:visited {
  color: #b0b0b0;
}
a:hover {
  color: #919191;
}
.info_body {
  width: 50%;
  height: 100%;
  margin-top: 0;
  pointer-events: auto;
}
.phone_info_body {
  width: 58%;
  height: 13rem;
  pointer-events: auto;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.info_box {
  display: flex;
  background: white;
  height: 66%;
  border-radius: 0.6rem;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  box-shadow: 2px 2px 4px -2px #cccccc;
  border: 1px solid rgba(0,0,0,.125);
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
  animation: slightFadeInTopLeft 500ms;
  white-space: nowrap;
}
.phone_user {
  font-size: 2.5rem;
}
.line {
  background: #b8b8b8;
  width: 100%;
  height: 1px;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  animation: slightFadeInLeft 500ms;
}
.phone_line {
  width: 100%;
}
.tag {
  align-self: flex-end;
  font-size: 0.9rem;
  animation: slightFadeInBottomLeft 500ms;
}
.phone_tag {
  font-size: 1.8rem;
  white-space: nowrap;
}
.net {
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  align-items: flex-end;
  justify-content: flex-end;
  white-space: nowrap;
  color: #b0b0b0;
  text-decoration: underline;
  width: 50%;
  padding-left: 1rem;
  padding-top: 0.3rem;
}
.phone_net {
  white-space: nowrap;
  font-size: 1.7rem;
  padding-left: 0rem;
}
.net_text:link {
  padding-bottom: 0.3rem;
}
.phone_net_text {
  padding-bottom: 0rem;
}
.bottom_box {
  display: flex;
  position: relative;
  height: 28%;
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
  width: 20%;
  border-radius: 0.4rem;
  border: 0;
  margin-left: 4%;
}
.btn:hover {
  cursor: pointer;
}
.phone_btn {
  width: 7rem;
  height: 4rem;
  border-radius: 0.9rem;
  margin-left: 1.5rem;
  font-size: 1.8rem;
}
.Umy_btn {
  background: linear-gradient(to right, #e774b7, #d53138);
}
.Umy_btn:hover {
  background: linear-gradient(to right, #ff80ca, #ff3b41);
}
.Merry_btn {
  background: linear-gradient(to right, #935fca, #e17dc3);
}
.Merry_btn:hover {
  background: linear-gradient(to right, #b072f2, #ff8fdd);
}
</style>
