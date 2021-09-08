<template>
  <div class="namePage">
    <!-- 页面头部 -->
    <pageHead pageNum="5" :isPhone="isPhone"> </pageHead>
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
          <!-- 创作者信息框 -->
          <div class="author_body" :class="{ phone_author_body: isPhone }">
            <!-- 头像 -->
            <div class="head_body">
              <figure class="headImg_box">
                <img
                  class="headImg"
                  oncontextmenu="return false"
                  onselectstart="return false"
                  draggable="false"
                  :src="authInfo.imgAddr"
                />
              </figure>
              <div
                class="btn"
                :class="{ phone_btn: isPhone }"
                @click="jumpToAuth()"
              >
                <span>主页</span>
              </div>
            </div>
            <!-- 信息 -->
            <div class="info_body">
              <!-- 创作者id -->
              <div class="author_name" :class="{phone_author_name: isPhone}">
                {{ authInfo.authName }}
              </div>
              <!-- 创作信息 -->
              <div class="works_body" :class="{ phone_works_body: isPhone }">
                <!-- 创作总数 -->
                <div class="works_num" :class="{ phone_works_num: isPhone }">
                  <span>视频：{{ authInfo.vidNum }}条</span>
                  <span>文章：{{ authInfo.artNum }}篇</span>
                  <span>绘图：{{ authInfo.imgNum }}幅</span>
                </div>
                <!-- 最新作品 -->
                <div v-if="!isPhone" class="works_new">
                  <span>最新作品：</span>
                  <div v-for="item in newWork" :key="item.key">
                    <showBox
                      :info="item"
                      :isPhone="isPhone"
                      right="0"
                    ></showBox>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 底部边框 -->
          <div class="title_bottom" :class="{ phone_title_bottom: isPhone }"></div>
        </div>
      </div>
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
            @on-jump="jump"
            :isPhone="isPhone"
          >
          </pager>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageHead from "../../components/pageHead";
import showBox from "../../components/showBox";
import pager from "../../components/pager";
export default {
  name: "authorInfoPage",
  components: {
    pageHead,
    showBox,
    pager,
  },
  created() {
    this.userIsPhone();
    if (this.$route.params.id) {
      this.info = this.$route.params.id;
    }
  },
  mounted() {
    window.onresize = () => {
      // 实时检测页面宽度
      this.userIsPhone();
    };
    this.searchWorks();
    this.getAuthInfo();
  },
  data() {
    return {
      isPhone: false,
      info: "",
      authInfo: [],
      showWorks: [],
      newWork: [],
      pageSize: 10, // 作品总页数
      pageNo: 1, // 当前页
    };
  },
  methods: {
    // authUid
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
    jumpToAuth() {
      let url = "https://space.bilibili.com/" + this.info + "/";
      window.open(url);
    },
    // 页面跳转
    jump() {
      // console.log(id);
      // 页码切换时搜索该页内容
      this.searchWorks();
    },
    // 搜索并更新展示内容
    searchWorks() {
      // 发送接口搜索
      let param = {
        getWorks: {
          workType: "-1",
          pageNum: this.pageNo,
          searchType: "2",
          searchWord: this.info,
        },
      };
      this.getWorksInfo(param).then((item) => {
        this.pageSize = this.switchPageNum(item.worksNum);
        if (this.showWorks.length === 0) {
          this.showWorks = item.worksList;
          this.newWork[0] = item.worksList[0];
        } else {
          this.showWorks.splice(0, 10);
          setTimeout(() => {
            this.showWorks = this.showWorks.concat(item.worksList);
          }, 0);
        }
      });
    },
    // 获取作者信息
    getAuthInfo() {
      // 发送接口搜索
      let param = {
        getAuthors: {
          searchType: "2",
          searchWord: this.info,
          pageNum: 1,
        },
      };
      this.getWorksInfo(param).then((item) => {
        this.authInfo = item.worksList[0];
      });
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
img {
  pointer-events: none;
}
.namePage {
  display: flex;
  flex-direction: column;
  font-family: "Microsoft YaHei";
  background: #f5f5f5;
  height: 100%;
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  width: 90%;
  padding-top: 4rem;
  padding-bottom: 3rem;
  max-width: 1250px;
}
.phone_body {
  padding-top: 5rem;
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
  height: 18rem;
  background: repeating-linear-gradient(
    to right,
    #f5f5f5,
    white 5%,
    white 95%,
    #f5f5f5
  );
}
.phone_title_background {
  height: 17rem;
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
.title_bottom {
  position: relative;
  width: 100%;
  height: 4rem;
  bottom: -11rem;
  box-shadow: #afafaf 0px 20px 25px -10px;
}
.phone_title_bottom {
  bottom: -10rem;
}
.author_body {
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 80%;
  max-width: 1100px;
  height: 17rem;
}
.phone_author_body {
  width: 90%;
}
.head_body {
  width: 14rem;
  height: 14rem;
  border-radius: 0.5rem;
  box-shadow: #9e9e9e 0px 0px 8px -1px;
  z-index: 1;
}
.headImg_box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.headImg {
  border: black solid 1px;
  width: 90%;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 4.5rem;
  height: 2.5rem;
  border-radius: 0.8rem;
  font-size: 1.2rem;
  letter-spacing: 0.3rem;
  margin-left: 4%;
  top: -1.8rem;
  left: 7.5rem;
  background: linear-gradient(to right, #edb97c, #dec833);
}
.btn:hover {
  background: linear-gradient(to right, #fac282, #ebd336);
  cursor: pointer;
}
.phone_btn {
  width: 6.4rem;
  height: 3.4rem;
  border-radius: 0.9rem;
  margin-left: -1rem;
  margin-top: -0.5rem;
  font-size: 2.0rem;
}
.info_body {
  width: 70%;
}
.author_name {
  width: 100%;
  height: 22%;
  border-bottom: black solid 1px;
  font-size: 2.5rem;
}
.phone_author_name {
  margin-left: 2rem;
  width: 90%;
}
.works_body {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 62%;
  padding-top: 1rem;
}
.phone_works_body {
  padding-top: 1rem;
}
.works_num {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30%;
  font-size: 1.2rem;
}
.phone_works_num {
  width: 90%;
  font-size: 1.7rem;
}
.works_new {
  display: flex;
  flex-direction: column;
  width: 70%;
  font-size: 1.4rem;
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  min-height: 55vh;
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
  max-width: 1250px;
}
.phone_pager {
  width: 95%;
}
</style>