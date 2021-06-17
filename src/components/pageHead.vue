<template>
  <!-- 网页版头部样式 -->
  <div v-if="!isPhone" class="header-body">
    <div class="header_tags_out">
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
          @click="jumpToMenuPage(item.path)">
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
        @mouseenter="showMenu = true"
        @mouseleave="showMenu = false"
        @click="showMenu = !showMenu">
        创作素材
        <!-- 添加子菜单框的显示控制与动画效果 -->
        <transition
          enter-active-class="animate__animated animate__backInRight"
          leave-active-class="animate__bounceOut">
          <div
            class="menu_body"
            v-show="showMenu">
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
        draggable="false"
        @click="jumpToAboutPage()">
    </div>
  </div>
  <!-- 移动端头部样式 -->
  <div v-else class="phone_header_body">
    <img
      class="phone_header_img"
      :class="{header_img_animate: pageNum === ''}"
      src="../assets/img/head_title.png"
      oncontextmenu="return false"
      onselectstart="return false"
      draggable="false">
    <div class="more_img">
      <img
        class="more_img"
        src="../assets/img/more.png"
        :class="{right_div_animate: pageNum === ''}"
        @click="clickMenuBtn">
      <transition
          enter-active-class="animate__bounceIn"
          leave-active-class="animate__bounceOut">
          <div
            class="phone_menu_body"
            v-show="showMenu">
            <!-- 遍历展示子菜单按钮 -->
            <!-- 包括视频、绘图、文章、创作者、素材库、草原路灯、草原录播 -->
            <div
              v-for="item in tabList"
              :key="item.key"
              class="list_font phone_list_font"
              @click="jumpToMenuPage(item.path)">
              {{ item.name }}
            </div>
            <div
              v-for="item in menuList"
              :key="item.key"
              class="list_font phone_list_font"
              @click="jumpToMenuPage(item.path)">
              {{ item.name }}
            </div>
            <div
              class="list_font phone_list_font"
              @click="jumpToAboutPage()">关于</div>
          </div>
        </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'head',
    props: [ 'isPhone', 'pageNum' ],
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
        clickMenu: false, // 控制点击监听让展示框消失
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
    },mounted() {
      // 监听body上的点击
      document.querySelector("body").addEventListener("click", this.closeMenu);
    },
    beforeDestroy() {
      // 移除监听
      document.querySelector("body").removeEventListener("click", this.closeMenu);
    },
    methods: {
      // 跳转各个页面
      jumpToMenuPage(path) {
        if (path.indexOf('https') === -1) {
          // 视频等菜单为项目内页面，使用$router跳转
          this.$router.push(path);
        } else {
          // 路灯、录播为外链，用https作为判断依据，打开新页面跳转
          window.open(path);
        }
      },
      // 跳转关于页面，由于是项目内页面，使用$router跳转
      jumpToAboutPage() {
        this.$router.push('');
      },
      // 点击别处时隐藏目录
      closeMenu(e) {
        if (this.showMenu === true && this.clickMenu === true) {
          this.showMenu = false;
          this.clickMenu = false;
        }
      },
      // 延时改变clickMenu的值实现点击别处让弹窗消失
      clickMenuBtn() {
        this.showMenu = true;
        setTimeout(() => {
          this.clickMenu = true;
        }, 10)
      }
    }
  }
</script>

<style scoped>
  .header-body {
    display: flex;
    padding-right: 1rem;
    padding-top: 0.3rem;
    box-shadow: #616161 1px 2px 3px 1px;
  }
  .phone_header_body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8.5rem;
    padding-top: 0.8rem;
    padding-left: 1rem;
    box-shadow: #616161 1px 2px 3px 1px;
  }
  .header_tags_out {
    display: flex;
    justify-content: flex-end;
    height: 3rem;
    width: 75%;
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
  .phone_header_img {
    width: 70%;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    margin-right: 0.5rem;
  }
  .more_img {
    width: 5rem;
    height: 5rem;
    padding-right: 2rem;
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
  .right_div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 25%;
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
  .phone_menu_body {
    border-radius: 0.5rem;
    overflow: auto;
    background: rgba(245, 245, 245, 0.5);
    width: 18rem;
    font-size: 3rem;
    position: relative;
    z-index: 1;
    right: 11rem;
    top: 1.7rem;
  }
  .list_font {
    font-family: cjkFonts;
    background: rgba(245, 245, 245, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
  }
  .phone_list_font {
    height: 6rem;
  }
  .list_font:hover {
    background: rgba( 222, 222, 222, 0.8);
    cursor: pointer;
    border-radius: 0.5rem;
  }
</style>
