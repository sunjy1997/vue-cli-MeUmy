<template>
  <div>
    <div class="header-body">
      <div class="header_tags">
        <div class="header_tags" v-for="item in menu" :key="item.key">
          <div
            class="header_btn"
            :class="{btn_choose: pageNum === item.page}"
            @click="jumpToVideo(item.path)">
            {{ item.name }}
          </div>
          <img
            v-if="item.name === '绘图'"
            class="header_img"
            src="../assets/img/head_title.png">
        </div>
      </div>
      <div class="right_div">
        <div
          class="icon_font"
          @mouseenter="showMenu = true"
          @mouseleave="showMenu = false">
          创作素材
          <transition
            enter-active-class="animate__animated animate__backInRight"
            leave-active-class="animate__bounceOut">
            <div
              class="menu_body"
              v-if="showMenu">
              <div
                v-for="item in list"
                :key="item.key"
                class="list_font">
                {{item.name}}
              </div>
            </div>
          </transition>
        </div>
        <img
          src="../assets/img/icon.png"
          class="icon_img">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data() {
      return {
        menu: [ // 遍历头部按钮
          {
            name: '视频',
            page: '0',
            path: ''
          },
          {
            name: '绘图',
            page: '1',
            path: ''
          },
          {
            name: '文章',
            page: '2',
            path: ''
          },
          {
            name: '创作者',
            page: '3',
            path: ''
          }
        ],
        pageNum: '', // 视频：0；绘图：1；文章：2；创作者：3
        showMenu: false, // 是否展示子菜单
        list: [
          {
            name: '素材库',
            path: ''
          },
          {
            name: '草原录播',
            path: ''
          },
          {
            name: '草原路灯',
            path: ''
          }
        ]
      }
    },
    methods: {
      // 页面跳转
      jumpToVideo(path) {
        // this.$router.push(path)
      },
    }
  }
</script>

<style scoped>
  html{
      font-size:20px;
  }
  .header-body {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 3.5rem;
    padding-left: 4.5rem;
    /* background: pink; */
  }
  .header_tags {
    display: flex;
    height: 3rem;
  }
  .header_img {
    height: 3.5rem;
    animation: zoomInUp;
    animation-duration: 2s;
  }
  .header_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Microsoft YaHei;
    color: #5E5E5E;
    font-weight: 900;
    font-size: 1.3rem;
    width: 4.5rem;
    height: 3.2rem;
    margin-bottom: 0.3rem;
    animation: zoomIn;
    animation-duration: 2.5s;
  }
  .header_btn:hover {
    background: #DEDEDE;
    cursor: pointer;
    border-radius: 1rem;
    /* animation: pulse;
    animation-duration: 1s; */
    /* --animate-repeat: 2; */
  }
  .btn_choose {
    border-bottom: 0.3rem solid aqua;
  }
  .right_div {
    display: flex;
    align-items: center;
    animation: rotateInDownRight;
    animation-duration: 1.5s;
  }
  .right_div:hover {
    cursor: pointer;
  }
  .icon_font {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: emoji;
    font-size: 1.2rem;
    width: 5.5rem;
    height: 3.5rem;
    margin-right: 0.4rem;
  }
  .icon_font:hover {
    background: #DEDEDE;
    border-radius: 1rem;
  }
  .icon_img {
    width: 1.6rem;
    height: 1.6rem;
  }
  .menu_body {
    border: 1px solid gray;
    border-radius: 0.5rem;
    width: 8rem;
    position: fixed;
    right: 0rem;
    top: 4rem;
    margin-right: 3rem;
  }
  .list_font {
    font-family: cjkFonts;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
  }
  .list_font:hover {
    background: #DEDEDE;
    cursor: pointer;
    border-radius: 0.5rem;
  }
</style>
