<template>
  <div class="namePage">
    <!-- 页面头部 -->
    <pageHead pageNum="2" :isPhone="isPhone"> </pageHead>
    <div class="body" :class="{ phone_body: isPhone }">
      <div class="title" :class="{ phone_title: isPhone }">
        <!-- 标题框 -->
        <div
          class="title_background"
          :class="{ phone_title_background: isPhone }"
        >
          <!-- 单纯的背景渐变 -->
          <div class="title_top">
            <div class="top_left"></div>
            <div class="top_middle"></div>
            <div class="top_right"></div>
          </div>
          <!-- 标题图 -->
          <img
            src="../../assets/img/article.png"
            class="title_img"
            :class="{ phone_title_img: isPhone }"
            oncontextmenu="return false"
            onselectstart="return false"
            draggable="false"
          />
          <!-- 搜索框 -->
          <searchModule @on-search="search" :isPhone="isPhone" page="article">
          </searchModule>
          <!-- 底部边框 -->
          <div class="title_bottom"></div>
        </div>
      </div>
      <!-- 视频框 -->
      <div class="works">
        <!-- 展示区域 -->
        <div class="excellent_div" :class="{ phone_excellent_div: isPhone }">
          <!-- 框体组件 -->
          <div
            v-for="item in showWorks"
            :key="item.key"
            class="works_div"
            :class="{ phone_works_div: isPhone }"
          >
            <showBox :isPhone="isPhone" :info="item"> </showBox>
          </div>
        </div>
        <div class="pager" :class="{ phone_pager: isPhone }">
          <pager
            :pageSize="pageSize"
            v-model="pageNo"
            @on-jump="searchWorks()"
            :isPhone="isPhone"
          >
          </pager>
        </div>
      </div>
    </div>
    <bottomBox />
  </div>
</template>

<script>
import pageHead from "../../components/pageHead";
import searchModule from "../../components/searchModule";
import showBox from "../../components/showBox";
import pager from "../../components/pager";
import bottomBox from "../../components/bottomBox";
export default {
  name: "articlePage",
  components: {
    pageHead,
    searchModule,
    showBox,
    pager,
    bottomBox
  },
  created() {
    this.userIsPhone();
    this.searchWorks();
  },
  mounted() {
    window.onresize = () => {
      // 实时检测页面宽度
      this.userIsPhone();
    };
  },
  data() {
    return {
      isPhone: false, // 是否移动设备
      showWorks: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}], // 当前页展示的作品
      pageSize: 100, // 作品总页数
      pageNo: 1, // 当前页
      onSearch: [], // 搜索框正在搜索的内容
    };
  },
  methods: {
    // 获取浏览器宽度，动态调整样式
    userIsPhone() {
      // 获取屏幕宽度
      let w = document.documentElement.clientWidth;
      if (w < 1000) {
        this.isPhone = true;
      } else {
        this.isPhone = false;
      }
    },
    // 获取总页数及加载页面是展示内容
    wholePageNum() {
      // 发送接口
    },
    // 搜索并更新展示内容
    searchWorks() {
      // 发送接口搜索
      let param = {
        getWorks: {
          workType: "2",
          searchType: this.onSearch.type,
          searchWord: this.onSearch.word,
          pageNum: this.pageNo,
          classifyChoice: "0",
        },
      };
      Promise.all([this.getWorksInfo(param)]).then((item) => {
        this.pageSize = this.switchPageNum(item[0].worksNum);
        if (this.showWorks.length === 0) {
          this.showWorks = this.showWorks.concat(item[0].worksList);
        } else {
          this.showWorks.splice(0, 10);
          setTimeout(() => {
            this.showWorks = this.showWorks.concat(item[0].worksList);
          }, 0);
        }
      });
    },
    // 搜索框组件返回信息
    search(param) {
      this.onSearch = param;
      this.pageNo = 1;
      this.searchWorks();
      // console.log(param)
    },
  },
};
</script>

<style scoped>
* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.namePage {
  display: flex;
  flex-direction: column;
  font-family: "Microsoft YaHei";
  background: #f5f5f5;
  height: 100%;
  min-height: 100vh;
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 3rem;
  width: 100%;
  max-width: 1250px;
}
.phone_body {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.title {
  width: 90%;
}
.phone_title {
  width: 95%;
}
.title_background {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 14rem;
  background: repeating-linear-gradient(
    to right,
    #f5f5f5,
    white 5%,
    white 95%,
    #f5f5f5
  );
}
.phone_title_background {
  height: 20rem;
}
.title_top {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 3rem;
}
.top_left {
  width: 5%;
  height: 100%;
  background: radial-gradient(circle at 100% 100%, white, #f2f2f2);
}
.top_middle {
  text-align: center;
  width: 90%;
  height: 100%;
  background: repeating-linear-gradient(to bottom, #f5f5f5, #ffffff);
}
.top_right {
  width: 5%;
  height: 100%;
  background: radial-gradient(circle at 0% 100%, white, #f2f2f2);
}
.title_img {
  position: relative;
  width: 40%;
  top: -3.5rem;
}
.phone_title_img {
  width: 60%;
}
.classify_div {
  position: relative;
  display: flex;
  font-size: 2.3rem;
  top: -2rem;
}
.phone_classify_div {
  font-size: 2.8rem;
}
.classify_choice {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.classify_img {
  width: 2.2rem;
  height: 2.2rem;
}
.name {
  color: #b072f2;
}
.not_name {
  color: #5e5e5e;
}
.not_name:hover {
  cursor: default;
  color: #ff3b41;
}
.title_bottom {
  width: 100%;
  height: 4rem;
  bottom: 0;
  box-shadow: #afafaf 0px 20px 25px -10px;
}
.works {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
}
.excellent_div {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: #fafafa;
  width: 90%;
  padding: 2rem 0 2rem 0;
  margin-top: 1rem;
}
.phone_excellent_div {
  width: 95%;
}
.works_div {
  display: flex;
  flex-wrap: wrap;
  width: 45%;
}
.phone_works_div {
  width: 90%;
}
.pager {
  width: 90%;
  background: #fafafa;
  padding: 1rem 0 3rem 0;
}
.phone_pager {
  width: 95%;
}
</style>