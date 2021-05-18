<template>
  <div id="app" class="namePage">
    <!-- 页面头部 -->
    <pageHead
      pageNum = ''
      :isPhone = isPhone>
    </pageHead>
    <!-- 主播信息 -->
    <anchorInfo
      :MerryHead = MerryHead
      :UmyHead = UmyHead
      :isPhone = isPhone>
    </anchorInfo>
    <!-- MeUmy精选 -->
    <excellentWorks
      :excellWorksInfo = excellWorksInfo
      :isPhone = isPhone>
    </excellentWorks>
    <!-- 最新作品 -->
    <newWorks
      :newWorksInfo = newWorksInfo
      :isPhone = isPhone>
    </newWorks>
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
        newWorksInfo: [] // 最新作品信息
      }
    },
    created() {
      this.userIsPhone();
    },
    mounted() {
      this.getHeadPage();
      this.getExcellWorksInfo();
      this.getNewWorksInfo();
    },
    methods: {
      // 判断是否移动设备访问
      userIsPhone() {
        let w = document.documentElement.offsetWidth ||
                document.body.offsetWidth;
        // 若屏幕宽度小于1000，默认为移动设备
        if ( w < 1000 ) {
          this.isPhone = true;
        }
      },
      // 获取咩栗、呜米头像
      getHeadPage() {
        this.MerryHead = require('../../assets/img/MerryHead.png');
        this.UmyHead = require('../../assets/img/UmyHead.png');
      },
      // 获取推荐作品信息
      getExcellWorksInfo() {
        let param = [];
        this.excellWorksInfo = param;
      },
      // 获取视频、文章、绘图、创作者信息
      getNewWorksInfo() {
        let param = [
          {
            name: '视频',
            works: []
          },
          {
            name: '文章',
            works: []
          },
          {
            name: '绘图',
            works: []
          },
          {
            name: '创作者',
            works: []
          }
        ];
        this.newWorksInfo = param;
      }
    }
  }
</script>

<style scoped>
  .namePage {
    font-family: 'cjkFonts';
    background: #F5F5F5;
  }
</style>
