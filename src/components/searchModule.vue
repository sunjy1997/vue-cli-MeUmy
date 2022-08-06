<template>
  <!--
    搜索组件导入方法

    <searchModule @on-search='search' :isPhone='isPhone'></searchModule>

    data() {
      return {
        isPhone: false
      };
    },
    search(param) {
      console.log(param)
    }

  根据需要可以在组件内通过props传入参数进行修改
  例如，不需要根据标题或者作者搜索的页面

  霜飔慕雪  ————2021/6/17
   -->
  <div class="all">
    <div class="search_body" :class="{ phone_search_body: isPhone }">
      <!-- 下拉框 -->
      <div
        class="pull_box"
        :class="{ phone_pull_box: isPhone }"
        @click="clickMenuBtn()"
      >
        <span> {{ searchTypeList[placeNum].name }} </span>
        <img
          src="../assets/img/pull.png"
          class="pull_img"
          :class="{ phone_pull_img: isPhone }"
        />
      </div>
      <!-- 输入框 -->
      <div class="search_box" :class="{ phone_search_box: isPhone }">
        <input
          type="text"
          class="input_box"
          :class="{ phone_input_box: isPhone }"
          v-model="search"
          :placeholder="placeholderList[placeNum]"
        />
        <!-- 搜索按钮 -->
        <div class="right_btn" @click="searchWorks(search)">
          <img
            src="../assets/img/line.png"
            class="search_img line"
            :class="{ phone_search_img: isPhone }"
          />
          <img
            src="../assets/img/search.png"
            class="search_img search"
            :class="{ phone_search_img: isPhone }"
          />
        </div>
      </div>
    </div>
    <div class="menu_box" :class="{ phone_menu_box: isPhone }">
      <!-- 搜索方式选择框 -->
      <transition
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
      >
        <div
          class="menu_body"
          :class="{ phone_menu_body: isPhone }"
          v-show="showMenu"
        >
          <!-- 遍历展示子菜单按钮，包括标题、作者等 -->
          <div
            v-for="item in searchTypeList"
            :key="item.id"
            @click="switchsearch(item.id)"
          >
            <div
              v-if="item.name !== ''"
              class="list_font"
              :class="{ phone_list_font: isPhone }"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchModule",
  props: {
    isPhone: {
      // 是否是移动端进入页面
      type: Boolean,
      default: false,
    },
    page: {
      // 进入的页面
      type: String,
      default: "video",
    },
  },
  data() {
    return {
      searchTypeList: [
        {
          id: "0",
          name: "标题",
        },
        {
          id: "1",
          name: "作者",
        },
      ], // 弹窗内容
      placeholderList: ["按标题搜索：", "按作者搜索："], // 默认展示内容
      placeNum: "0", // 控制上面两个展示内容
      search: "", // 输入的搜索内容
      showMenu: false, // 是否展示子菜单
      clickMenu: false, // 控制点击监听让展示框消失
    };
  },
  created() {
    this.switchSearchType();
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
    // 点击别处时隐藏目录
    closeMenu() {
      if (this.showMenu === true && this.clickMenu === true) {
        this.showMenu = this.clickMenu = false;
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
    // 切换搜索方式
    switchsearch(i) {
      this.placeNum = i;
    },
    // 搜索
    searchWorks(data) {
      // 如果没有输入内容，则不操作
      if (data === "") {
        return;
      }
      // 将搜索类型和关键字传递到父组件
      // 0：标题；1：作者；
      let param = {
        type: this.placeNum,
        word: data,
      };
      this.$emit("on-search", param);
    },
    // 根据不同的页面，改变搜索方式
    switchSearchType() {
      switch (this.page) {
        case "video":
        case "article":
        case "material":
          this.searchTypeList = [
            {
              id: "0",
              name: "标题",
            },
            {
              id: "1",
              name: "作者",
            },
          ];
          break;
        case "image":
          this.searchTypeList = [
            {
              id: "0",
              name: "",
            },
            {
              id: "1",
              name: "作者",
            },
          ];
          this.placeholderList = ["", "按作者搜索："];
          this.placeNum = "1";
          break;
        case "author":
          this.searchTypeList = [
            {
              id: "0",
              name: "",
            },
            {
              id: "1",
              name: "作者",
            },
            {
              id: "2",
              name: "uid",
            },
          ];
          this.placeholderList = ["", "按作者搜索：", "按uid搜索："];
          this.placeNum = "1";
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
.all {
  font-family: Microsoft YaHei;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-touch-callout: none; /*系统默认菜单被禁用*/
  -webkit-user-select: none; /*webkit浏览器*/
  -khtml-user-select: none; /*早期浏览器*/
  -moz-user-select: none; /*火狐*/
  -ms-user-select: none; /*IE10*/
  user-select: none;
}
img {
  pointer-events: none;
}
.search_body {
  display: flex;
  width: 85%;
  height: 2.5rem;
  cursor: default;
  max-width: 1000px;
}
.phone_search_body {
  width: 90vw;
  height: 8vw;
}
.pull_box {
  font-family: Microsoft YaHei;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #8b8b8b;
  width: 10vw;
  border: 2px solid #757575;
  border-radius: 5rem;
  margin-right: 3vw;
  font-size: 1.3rem;
}
.phone_pull_box {
  width: 20vw;
  font-size: 2.5rem;
}
.pull_box_date {
  font-size: 1.2rem;
  margin-right: 1vw;
}
.phone_pull_box_date {
  width: 17vw;
  font-size: 2.1rem;
}
.pull_img {
  width: 1rem;
}
.phone_pull_img {
  width: 1.9rem;
}
.pull_img_date {
  width: 0.7rem;
}
.phone_pull_img_date {
  width: 1.2rem;
}
.menu_box {
  display: flex;
  width: 53vw;
}
.phone_menu_box {
  width: 90vw;
}
.menu_body {
  position: absolute;
  overflow: auto;
  background: rgba(245, 245, 245, 0.5);
  width: 10vw;
  border-radius: 0.5rem;
  z-index: 1;
  font-size: 1.3rem;
  margin-left: 3.2vw;
}
.phone_menu_body {
  width: 20vw;
  font-size: 2.4rem;
  margin-left: 0.2vw;
}
.list_font {
  font-family: Microsoft YaHei;
  background: rgba(245, 245, 245, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
}
.list_font:hover {
  background: rgba(222, 222, 222, 0.8);
  cursor: pointer;
  border-radius: 0.5rem;
}
.phone_list_font {
  height: 4rem;
}
.search_box {
  display: flex;
  width: 39vw;
  border: 2px solid #757575;
  border-radius: 5rem;
}
.phone_search_box {
  width: 65vw;
}
.input_box {
  font-family: Microsoft YaHei;
  width: 85%;
  padding-left: 1rem;
  border: none;
  border-radius: 5rem;
  font-size: 1.2rem;
}
.input_box:focus {
  outline: none;
}
.phone_input_box {
  font-size: 2.5rem;
}
.right_btn {
  display: flex;
  color: #8b8b8b;
}
.right_btn:hover {
  cursor: pointer;
}
.search_img {
  align-self: center;
  width: 2rem;
  height: 2rem;
}
.phone_search_img {
  width: 5vw;
  height: 5vw;
}
.line {
  width: 0.8rem;
}
.search {
  padding-right: 0.6rem;
}
.right_btn_date {
  display: flex;
  width: 39vw;
}
.phone_right_btn_date {
  width: 65.5vw;
}
.search_btn {
  font-family: Microsoft YaHei;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #8b8b8b;
  width: 8vw;
  border: 2px solid #757575;
  border-radius: 5rem;
  font-size: 1.3rem;
}
.search_btn:hover {
  background: #f0f0ef;
  color: #646464;
}
.phone_search_btn {
  width: 12vw;
  font-size: 2.2rem;
}
.year_body {
  position: absolute;
  overflow: auto;
  background: rgba(245, 245, 245, 0.5);
  width: 10vw;
  border-radius: 0.5rem;
  z-index: 1;
  font-size: 1.3rem;
  left: 36vw;
  max-height: 15rem;
}
.phone_year_body {
  width: 17vw;
  font-size: 2.4rem;
  left: 28.5vw;
}
.month_body {
  left: 46.4vw;
}
.phone_month_body {
  left: 46.2vw;
}
.month_body::-webkit-scrollbar {
  width: 0 !important;
}
.month_body::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
.day_body {
  left: 56.7vw;
}
.phone_day_body {
  left: 63.9vw;
}
.day_body::-webkit-scrollbar {
  width: 0 !important;
}
.day_body::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
.alert_text {
  position: absolute;
  color: #ff565b;
  font-size: 1.3rem;
  margin-top: 4.4vw;
}
.phone_alert_text {
  font-size: 2.4rem;
  margin-top: 8.4vw;
  right: 0;
  margin-right: 6.5vw;
}
</style>