<template>
  <div class="namePage">
    <!-- 页面头部 -->
    <pageHead
      pageNum = ''
      :isPhone = isPhone>
    </pageHead>
    <div class="body">
      <!-- 主播信息 -->
      <anchorInfo
        :MerryHead = MerryHead
        :UmyHead = UmyHead
        :isPhone = isPhone>
      </anchorInfo>
      <!-- MeUmy精选 -->
      <excellentWorks
        :info = excellWorksInfo
        :isPhone = isPhone>
      </excellentWorks>
      <!-- 最新作品 -->
      <newWorks
        :info = newWorksInfo
        :isPhone = isPhone>
      </newWorks>
    </div>
  </div>
</template>

<script>
  import pageHead from '../../components/pageHead';
  import anchorInfo from './components/anchorInfo';
  import excellentWorks from './components/excellentWorks';
  import newWorks from './components/newWorks';

  export default {
    name: "mainPage",
    components: {
      pageHead,
      anchorInfo,
      excellentWorks,
      newWorks
    },
    data() {
      return {
        isPhone: false, // 判断是否是移动设备访问
        MerryHead: '', // 咩栗头像
        UmyHead: '', // 呜米头像
        excellWorksInfo: [], // 推荐作品信息
        newWorksInfo: [
          {
            name: '视频',
            path: 'videoPage',
            works: []
          },
          {
            name: '绘图',
            path: 'imagePage',
            works: []
          },
          {
            name: '文章',
            path: 'articlePage',
            works: []
          },
          {
            name: '创作者',
            path: 'authorPage',
            works: []
          }
        ] // 最新作品信息
      }
    },
    created() {
      this.userIsPhone();
    },
    mounted() {
      this.getHeadPage();
      window.onresize = () => { // 实时检测页面宽度
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
        if ( w < 1000 ) {
          this.isPhone = true;
        } else {
          this.isPhone = false;
        }
      },
      // 获取咩栗、呜米头像
      getHeadPage() {
        this.MerryHead = require('../../assets/img/MerryHead.png');
        this.UmyHead = require('../../assets/img/UmyHead.png');
      },
      // 获取推荐作品信息
      async getExcellWorksInfo() {
        let exlWork = {
          getExcellentWorks: {}
        }
        Promise.all([this.getWorksInfo(exlWork)]).then(item => {
          this.excellWorksInfo = item[0];
        }).catch(function(e) {
          console.log(e);
        })
      },
      // 获取视频、文章、绘图、创作者信息
      async getNewWorksInfo() {
        let newVid = {
          getWorks: {
            workType: '0',
            pageNum: 1,
            classifyChoice: '0'
          }
        }
        let newImg = {
          getWorks: {
            workType: '1',
            pageNum: 1,
            classifyChoice: '0'
          }
        }
        let newArt = {
          getWorks: {
            workType: '2',
            pageNum: 1,
            classifyChoice: '0'
          }
        }
        let auths = {
          getAuthors: {
            pageNum: 1
          }
        }
        Promise.all(
          [
            this.getWorksInfo(newVid),
            this.getWorksInfo(newImg),
            this.getWorksInfo(newArt),
            this.getWorksInfo(auths)
          ]
        ).then(item => {
          this.newWorksInfo.map((mem, i) => {
            mem.works = item[i].worksList.slice(0,3)
          })
        }).catch(function(err){
          console.log(err);
        });
      }
    }
  }
</script>

<style scoped>
  * {
    -webkit-touch-callout:none;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    -o-user-select:none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .namePage {
    display: flex;
    flex-direction: column;
    font-family: 'cjkFonts';
    background: #F5F5F5;
    height: 100%;
  }
  .body {
    align-self: center;
    padding-top: 0.2rem;
    max-width: 1250px;
  }
</style>
