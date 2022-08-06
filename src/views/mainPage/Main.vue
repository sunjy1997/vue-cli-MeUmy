<template>
  <div class="namePage">
    <!-- 页面头部 -->
    <pageHead pageNum="" :isPhone="isPhone" />
    <div class="body">
      <!-- 主播信息 -->
      <anchorInfo :MerryHead="MerryHead" :UmyHead="UmyHead" :isPhone="isPhone">
      </anchorInfo>
      <!-- MeUmy精选 -->
      <excellentWorks :info="excellWorksInfo" :isPhone="isPhone">
      </excellentWorks>
      <!-- 最新作品 -->
      <newWorks :info="newWorksInfo" :isPhone="isPhone"> </newWorks>
    </div>
    <bottomBox :isPhone="isPhone" />
  </div>
</template>

<script>
import pageHead from "../../components/pageHead";
import anchorInfo from "./components/anchorInfo";
import excellentWorks from "./components/excellentWorks";
import newWorks from "./components/newWorks";
import bottomBox from "../../components/bottomBox";

export default {
  name: "mainPage",
  components: {
    pageHead,
    anchorInfo,
    excellentWorks,
    newWorks,
    bottomBox,
  },
  data() {
    return {
      isPhone: false, // 判断是否是移动设备访问
      MerryHead: require("../../assets/img/MerryHead.png"), // 咩栗头像
      UmyHead: require("../../assets/img/UmyHead.png"), // 呜米头像
      excellWorksInfo: [], // 推荐作品信息
      newWorksInfo: [
        {
          name: "视频",
          path: "videoPage",
          works: [
            {
              workType: "0",
            },
            {
              workType: "0",
            },
            {
              workType: "0",
            },
          ],
        },
        {
          name: "绘图",
          path: "imagePage",
          works: [
            {
              workType: "1",
            },
            {
              workType: "1",
            },
            {
              workType: "1",
            },
          ],
        },
        {
          name: "文章",
          path: "articlePage",
          works: [
            {
              workType: "2",
            },
            {
              workType: "2",
            },
            {
              workType: "2",
            },
          ],
        },
        {
          name: "创作者",
          path: "authorPage",
          works: [
            {
              workType: "0",
            },
            {
              workType: "0",
            },
            {
              workType: "0",
            },
          ],
        },
      ], // 最新作品信息
    };
  },
  created() {
    this.userIsPhone();
  },
  mounted() {
    window.onresize = () => {
      // 实时检测页面宽度
      this.userIsPhone();
    };
    this.getNewWorksInfo();
    this.getExcellWorksInfo();
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
    // 获取推荐作品信息
    async getExcellWorksInfo() {
      let exlWork = {
        getExcellentWorks: {},
      };
      this.getWorksInfo(exlWork)
        .then((item) => {
          this.excellWorksInfo = item[0];
        })
        .catch(function (e) {
          console.log(e);
        });
    },
    // 获取视频、文章、绘图、创作者信息
    async getNewWorksInfo() {
      let newVid = {
        getWorks: {
          workType: "0",
          pageNum: 1,
          classifyChoice: "0",
        },
      };
      let newImg = {
        getWorks: {
          workType: "1",
          pageNum: 1,
          classifyChoice: "0",
        },
      };
      let newArt = {
        getWorks: {
          workType: "2",
          pageNum: 1,
          classifyChoice: "0",
        },
      };
      let auths = {
        getAuthors: {
          pageNum: 1,
        },
      };
      let newWorksList = [newVid, newImg, newArt, auths];
      newWorksList.map((item, i) => {
        this.getWorksInfo(item)
          .then((member) => {
            this.newWorksInfo[i].works.splice(0, 3);
            setTimeout(() => {
              this.newWorksInfo[i].works = this.newWorksInfo[i].works.concat(
                member.worksList.slice(0, 3)
              );
            }, 0);
          })
          .catch((err) => {
            // 如果有接口报错则给作品赋值空数组，展示兜底图片
            console.log(err);
            this.newWorksInfo[i].works.splice(0, 3);
            setTimeout(() => {
              this.newWorksInfo[i].works = [];
            }, 0);
          });
      });
    },
  },
};
</script>

<style scoped>
* {
  -webkit-touch-callout: none; /*系统默认菜单被禁用*/
  -webkit-user-select: none; /*webkit浏览器*/
  -khtml-user-select: none; /*早起浏览器*/
  -moz-user-select: none; /*火狐浏览器*/
  -ms-user-select: none; /*IE浏览器*/
  user-select: none; /*用户是否能够选中文本*/
  -o-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.namePage {
  display: flex;
  flex-direction: column;
  font-family: "Microsoft YaHei";
  background: #f5f5f5;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
.body {
  align-self: center;
  padding-top: 0.2rem;
  max-width: 1250px;
}
</style>
