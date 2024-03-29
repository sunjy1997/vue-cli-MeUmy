<template>
  <!-- 网页版头部样式 -->
  <div v-if="!isPhone" class="header_body">
    <div class="header_tags_out">
      <!-- 遍历展示头部标题按钮，包括视频、绘图、文章、创作者 -->
      <div class="header_tags" v-for="item in tabList" :key="item.key">
        <!-- 仅有首页有进入页面时的头部动画效果，样式为header_btn_animate -->
        <!-- 被选中的页面下方高亮，样式为btn_choose -->
        <div
          class="header_btn"
          :class="[
            pageNum === ''
              ? 'header_btn_animate'
              : pageNum === item.page
              ? 'btn_choose'
              : '',
          ]"
          @click="jumpToMenuPage(item.path)"
        >
          {{ item.name }}
        </div>
        <!-- 仅在绘图按钮右边展示标题图片 -->
        <div @click="jumpToMenuPage('mainPage')" class="header_img_div">
          <img
            v-if="item.name === '绘图'"
            class="header_img"
            :class="{ header_img_animate: pageNum === '' }"
            src="../assets/img/head_title.png"
            oncontextmenu="return false"
            onselectstart="return false"
            draggable="false"
          />
        </div>
      </div>
    </div>
    <!-- 右侧创作素材及关于按钮 -->
    <div class="right_div" :class="{ right_div_animate: pageNum === '' }">
      <div
        class="icon_font"
        @mouseleave="showMenu = false"
        @click="showMenu = !showMenu"
      >
        创作素材
        <!-- 添加子菜单框的显示控制与动画效果 -->
        <transition
          enter-active-class="right_div_list_in_animate"
          leave-active-class="right_div_list_out_animate"
        >
          <div class="menu_body" v-show="showMenu">
            <!-- 遍历展示子菜单按钮，包括素材库、草原路灯、草原录播 -->
            <div
              v-for="item in menuList"
              :key="item.key"
              class="list_font"
              @click="jumpToMenuPage(item.path)"
            >
              {{ item.name }}
            </div>
          </div>
        </transition>
      </div>
      <div @click="jumpToMenuPage('aboutPage')" class="info_icon">
        <img
          src="../assets/img/info.svg"
          class="icon_img"
          oncontextmenu="return false"
          onselectstart="return false"
          draggable="false"
        />
      </div>
    </div>
  </div>
  <!-- 移动端头部样式 -->
  <div v-else class="phone_header_body">
    <div style="width: 100%" @click="jumpToMenuPage('mainPage')">
      <img
        class="phone_header_img"
        :class="{ header_img_animate: pageNum === '' }"
        src="../assets/img/head_title.png"
        oncontextmenu="return false"
        onselectstart="return false"
        draggable="false"
      />
    </div>
    <div class="more_img">
      <div
        class="more_imgs"
        :class="{ right_div_animate: pageNum === '' }"
        @click="clickMenuBtn"
      ></div>
      <transition
        enter-active-class="right_div_list_in_animate"
        leave-active-class="right_div_list_out_animate"
      >
        <div class="phone_menu_body" v-show="showMenu">
          <!-- 遍历展示子菜单按钮 -->
          <!-- 包括视频、绘图、文章、创作者、素材库、草原路灯、草原录播 -->
          <div
            v-for="item in tabList"
            :key="item.key"
            class="list_font phone_list_font"
            @click="jumpToMenuPage(item.path)"
          >
            {{ item.name }}
          </div>
          <div
            v-for="item in menuList"
            :key="item.key"
            class="list_font phone_list_font"
            @click="jumpToMenuPage(item.path)"
          >
            {{ item.name }}
          </div>
          <div
            class="list_font phone_list_font"
            @click="jumpToMenuPage('aboutPage')"
          >
            关于
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageHeader",
  props: ["isPhone", "pageNum"],
  data() {
    return {
      tabList: [
        // 遍历头部按钮
        {
          name: "视频",
          page: "0",
          path: "videoPage",
        },
        {
          name: "绘图",
          page: "1",
          path: "imagePage",
        },
        {
          name: "文章",
          page: "2",
          path: "articlePage",
        },
        {
          name: "创作者",
          page: "3",
          path: "authorPage",
        },
      ],
      showMenu: false, // 是否展示子菜单
      clickMenu: false, // 控制点击监听让展示框消失
      menuList: [
        // 遍历创作素材按钮
        // {
        //   name: '素材库',
        //   path: 'materialPage'
        // },
        {
          name: "草原录播",
          path: "https://space.bilibili.com/674622242/video",
        },
        {
          name: "草原路灯",
          path: "https://lamp.meumy.club/",
        },
        {
          name: "主页",
          path: "mainPage",
        },
      ],
    };
  },
  mounted() {
    // 监听body上的点击
    document.querySelector("body").addEventListener("click", this.closeMenu);
  },
  beforeDestroy() {
    // 移除监听
    document.querySelector("body").removeEventListener("click", this.closeMenu);
  },
  methods: {
    // 跳转各个页面
    jumpToMenuPage(paths) {
      if (paths.indexOf("https") === -1) {
        // 视频等菜单为项目内页面，使用$router跳转
        try {
          this.$router.push({
            path: paths,
            name: paths,
          });
        } catch (e) {
          return;
        }
      } else {
        // 路灯、录播为外链，用https作为判断依据，打开新页面跳转
        window.open(paths);
      }
    },
    // 点击别处时隐藏目录
    closeMenu() {
      if (this.showMenu === true && this.clickMenu === true) {
        this.showMenu = false;
        this.clickMenu = false;
      }
    },
    // 延时改变clickMenu的值实现点击别处让弹窗消失
    clickMenuBtn() {
      if (this.showMenu === false) {
        this.showMenu = true;
        setTimeout(() => {
          this.clickMenu = true;
        }, 30);
      }
    },
  },
};
</script>

<style scoped>
img {
  pointer-events: none;
}
.header_body {
  display: flex;
  box-shadow: #9e9e9e 1px 2px 3px 1px;
}
.phone_header_body {
  display: flex;
  align-items: center;
  height: 8.5rem;
  padding-top: 0.8rem;
  padding-left: 1rem;
  box-shadow: #616161 1px 2px 3px 1px;
}
.header_tags_out {
  display: flex;
  justify-content: center;
  height: 3.8rem;
  width: 100%;
}
.header_tags {
  display: flex;
  height: 3rem;
  margin-top: 0.3rem;
}
.header_img_div {
  height: 3.5rem;
}
.header_img_div:hover {
  cursor: pointer;
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
.more_imgs {
  background: url("../assets/img/more.png");
  width: 5rem;
  height: 5rem;
  background-size: cover;
}
.header_img_animate {
  animation: zoomIn;
  animation-duration: 500ms;
}
.header_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Microsoft YaHei;
  color: #5e5e5e;
  font-weight: 900;
  font-size: 1.3rem;
  width: 4.5rem;
  height: 3.2rem;
  margin-right: 0.5rem;
}
.header_btn_animate {
  animation: zoomIn;
  animation-duration: 500ms;
  animation-delay: 200ms;
  animation-fill-mode: backwards;
}
.header_btn:hover {
  background: #dedede;
  cursor: pointer;
  border-radius: 0.8rem;
}
.btn_choose {
  border-bottom: 0.3rem solid aqua;
}
.right_div {
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20%;
  top: 0.81rem;
  right: 2rem;
}
.right_div_animate {
  animation: fadeIn;
  animation-duration: 1s;
  animation-delay: 500ms;
  animation-fill-mode: backwards;
}
.right_div_list_in_animate {
  animation: fadeIn;
  animation-duration: 300ms;
}
.right_div_list_out_animate {
  animation: fadeOut;
  animation-duration: 300ms;
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
  background: #dedede;
  border-radius: 1rem;
  cursor: pointer;
}
.icon_img {
  width: 2rem;
  height: 2rem;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.info_icon:hover {
  cursor: pointer;
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
  font-family: Microsoft YaHei;
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
  background: rgba(222, 222, 222, 0.8);
  cursor: pointer;
  border-radius: 0.5rem;
}
</style>
