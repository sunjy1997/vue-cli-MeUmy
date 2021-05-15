<template>
  <div class="header-body">
    <div class="header_tags">
      <!-- 遍历展示头部标题按钮，包括视频、绘图、文章、创作者 -->
      <div
        class="header_tags"
        v-for="item in tabList"
        :key="item.key">
        <!-- 仅有首页有进入页面时的头部动画效果，样式为header_btn_animate -->
        <!-- 被选中的页面下方高亮，样式为btn_choose -->
        <div
          class="header_btn"
          :class="
            [pageNum === '' ?
            'header_btn_animate' :
            pageNum === item.page ?
            'btn_choose' :
            '']"
          @click="jumpToTabPage(item.path)">
          {{ item.name }}
        </div>
        <!-- 仅在绘图按钮右边展示标题图片 -->
        <img
          v-if="item.name === '绘图'"
          class="header_img"
          :class="{header_img_animate: pageNum === ''}"
          src="../assets/img/head_title.png"
          oncontextmenu="return false"
          onselectstart="return false"
          draggable="false">
      </div>
    </div>
    <!-- 右侧创作素材及关于按钮 -->
    <div
      class="right_div"
      :class="{right_div_animate: pageNum === ''}">
      <div
        class="icon_font"
        @click="showMenu = !showMenu">
        创作素材
        <!-- 添加子菜单框的显示控制与动画效果 -->
        <transition
          enter-active-class="animate__animated animate__backInRight"
          leave-active-class="animate__bounceOut">
          <div
            class="menu_body"
            v-if="showMenu">
            <!-- 遍历展示子菜单按钮，包括素材库、草原路灯、草原录播 -->
            <div
              v-for="item in menuList"
              :key="item.key"
              class="list_font"
              @click="jumpToMenuPage(item.path)">
              {{ item.name }}
            </div>
          </div>
        </transition>
      </div>
      <img
        src="../assets/img/icon.png"
        class="icon_img"
        oncontextmenu="return false"
        onselectstart="return false"
        draggable="false">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'head',
    props: {
      // 视频：0;绘图：1;文章：2;创作者：3;首页：''
      pageNum: { type: String }
    },
    data() {
      return {
        tabList: [ // 遍历头部按钮
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
        showMenu: false, // 是否展示子菜单
        menuList: [ // 遍历创作素材按钮
          {
            name: '素材库',
            path: ''
          },
          {
            name: '草原录播',
            path: 'https://space.bilibili.com/674622242/video'
          },
          {
            name: '草原路灯',
            path: 'https://meumy.club/'
          }
        ]
      }
    },
    watch: {
      // 在手机版测试遇到问题，手机版点击后会立刻触发onmouseleave事件
      // 所以添加逻辑设定点击4秒后关闭弹窗
      showMenu(newState, oldState) {
        if (newState === true) {
          setTimeout(() => {
            this.showMenu = false;
          }, '4000')
        }
      }
    },
    methods: {
      // 跳转tab目录，由于都是项目内页面，使用$router跳转
      jumpToTabPage(path) {
        this.$router.push(path)
      },
      // 跳转子菜单目录
      jumpToMenuPage(path) {
        if (path.indexOf('https') === -1) {
          // 素材库为项目内页面，使用$router跳转
          this.$router.push(path);
        } else {
          // 路灯和录播为外链，用https作为判断依据，打开新页面跳转
          window.open(path);
        }
      },
      // 跳转关于页面，由于是项目内页面，使用$router跳转
      jumpToAboutPage() {
        this.$router.push('');
      }
    }
  }
</script>

<style scoped>
  html{
      font-size:20px;
  }
  .header-body {
    display: flex;
    justify-content: space-between;
    padding-left: 13rem;
    padding-right: 1rem;
    padding-top: 0.3rem;
    box-shadow: #616161 1px 2px 3px 1px;
  }
  .header_tags {
    display: flex;
    height: 3rem;
  }
  .header_img {
    height: 3.5rem;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    margin-right: 0.5rem;
  }
  .header_img_animate {
    animation: zoomIn;
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
    margin-right: 0.5rem;
  }
  .header_btn_animate {
    animation: zoomIn;
    animation-duration: 2.5s;
  }
  .header_btn:hover {
    background: #DEDEDE;
    cursor: pointer;
    border-radius: 1rem;
  }
  .btn_choose {
    border-bottom: 0.3rem solid aqua;
  }
  /* .btn_choose:hover {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 0rem;
    border-bottom-right-radius: 0rem;
  } */
  .right_div {
    display: flex;
    align-items: center;
  }
  .right_div_animate {
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
    height: 3.2rem;
    margin-right: 0.4rem;
    margin-bottom: 0.3rem;
  }
  .icon_font:hover {
    background: #DEDEDE;
    border-radius: 1rem;
  }
  .icon_img {
    width: 1.6rem;
    height: 1.6rem;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  .menu_body {
    border-radius: 0.5rem;
    overflow: auto;
    background: rgba(245, 245, 245, 0.5);
    width: 8rem;
    position: fixed;
    right: 0rem;
    top: 4rem;
    margin-right: 3rem;
    z-index: 1;
  }
  .list_font {
    font-family: cjkFonts;
    background: rgba(245, 245, 245, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
  }
  .list_font:hover {
    background: rgba( 222, 222, 222, 0.8);
    cursor: pointer;
    border-radius: 0.5rem;
  }
</style>
