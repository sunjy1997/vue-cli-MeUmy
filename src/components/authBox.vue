<template>
  <div
    class="auth_body"
    :class="{phone_auth_body: isPhone}">
    <div class="head">
      <img
        class="headImg"
        :class="{phone_headImg: isPhone}"
        oncontextmenu="return false"
        onselectstart="return false"
        draggable="false"
        :src="headImg">
    </div>
    <div class="info">
      <div
        class="name"
        :class="{phone_name: isPhone}">
        <span>{{ authName }}</span>
      </div>
      <div
        class="items"
        :class="{phone_items: isPhone}"
        @click="jumpToAuthPage(authUid)">
        <div
          class="items_left"
          :class="{phone_items_left: isPhone}">
          <div>已创作</div>
          <div class="items_num">
            <span>视频：{{ vidNum }}条</span>
            <span>绘图：{{ imgNum }}幅</span>
            <span>文章：{{ artNum }}篇</span>
          </div>
        </div>
        <div class="items_right">
          <span class="new_work">最近更新：{{ updateType }}|{{ workTitle }}</span>
          <span>{{ workTime }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "authBox",
  props: ['info', 'isPhone'],
  data() {
    return {
      authName: this.info.name, // 作者昵称
      vidNum: this.info.vid, // 视屏数量
      imgNum: this.info.img, // 绘图数量
      artNum: this.info.art, // 文章数量
      updateType: '', // 最近更新作品类型
      workTitle: this.info.title, // 最近更新作品标题
      workTime: this.info.time, // 最近更新作品时间
      headImg: this.info.head, // 作者头像
      authUid: this.info.uid // 作者uid
    }
  },
  mounted() {
    this.formatType();
  },
  methods: {
    // 跳转创作者页面
    jumpToAuthPage(uid) {
      let path = '';
      this.$router.push(path, uid);
    },
    // 处理作品类型的展示
    formatType() {
      switch(this.info.type) {
        case '0':
          this.updateType = '视频';
          break;
        case '1':
          this.updateType = '绘图';
          break;
        case '2':
          this.updateType = '文章';
          break;
      }
    }
  }
};
</script>

<style scoped>
  .auth_body {
    display: flex;
    background: white;
    overflow: auto;
    width: 100%;
    height: 7rem;
    border-radius: 0.6rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-shadow: #838383 0px 2px 3px 1px;
  }
  .phone_auth_body {
    height: 12rem;
  }
  .auth_body:hover {
    cursor: default;
  }
  .head {
    width: 30%;
  }
  .headImg {
    width: 7rem;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  .phone_headImg {
    width: 12rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 0.5rem;
  }
  .name {
    font-size: 1.2rem;
    height: 20%;
  }
  .name:hover {
    cursor: pointer;
    color: #FF3B41;
  }
  .phone_name {
    font-size: 2.1rem;
  }
  .items {
    display: flex;
    font-size: 0.9rem;
    height: 80%;
  }
  .phone_items {
    font-size: 1.7rem;
  }
  .items_left {
    display: flex;
    width: 45%;
    margin-right: 0.6rem;
    padding: 0.5rem 0rem 0.5rem 0rem;
  }
  .phone_items_left {
    padding: 1rem 0rem 1rem 0rem;
  }
  .items_num {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.5rem;
  }
  .items_right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    padding-left: 0.4rem;
  }
  .new_work {
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
</style>