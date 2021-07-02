<template>
  <div  class="namePage" :class="{phone_namePage: isPhone}">
    <!-- 页面头部 -->
    <pageHead
      pageNum = '1'
      :isPhone = isPhone>
    </pageHead>
    <div class="body" :class="{phone_body: isPhone}">
      <div class="title" :class="{phone_title: isPhone}">
        <!-- 标题框 -->
        <div
          class="title_background"
          :class="{phone_title_background: isPhone}"
        >
          <!-- 单纯的背景渐变 -->
          <div class="title_top">
            <div class="top_left"></div>
            <div class="top_middle"></div>
            <div class="top_right"></div>
          </div>
          <!-- 标题图 -->
          <img
            src="../../assets/img/image.png"
            class="title_img"
            :class="{phone_title_img: isPhone}"
            oncontextmenu="return false"
            onselectstart="return false"
            draggable="false"
          >
          <!-- 搜索框 -->
          <searchModule
            @on-search='search'
            :isPhone='isPhone'>
          </searchModule>
          <!-- 底部边框 -->
          <div class="title_bottom"></div>
        </div>
      </div>
      <!-- 视频框 -->
      <div class="works">
        <!-- 展示区域 -->
        <div
          class="excellent_div"
          :class="{phone_excellent_div: isPhone}">
          <!-- 框体组件 -->
          <div
            v-for="item in showWorks"
            :key="item.key"
            class="works_div"
            :class="{phone_works_div: isPhone}">
            <showBox
              :isPhone = isPhone
              :info = item>
            </showBox>
          </div>
        </div>
        <div class="pager" :class="{phone_pager: isPhone}">
          <pager
            :pageSize="pageSize"
            v-model="pageNo"
            @on-jump="jump"
            :isPhone="isPhone">
          </pager>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import pageHead from '../../components/pageHead';
  import searchModule from '../../components/searchModule';
  import showBox from '../../components/showBox';
  import pager from '../../components/pager';
  export default {
    name: 'imagePage',
    components: {
      pageHead,
      searchModule,
      showBox,
      pager
    },
    created() {
      this.userIsPhone();
    },
    mounted() {
      window.onresize = () => { // 实时检测页面宽度
        this.userIsPhone();
      };
    },
    data() {
      return {
        isPhone: false, // 是否移动设备
        showWorks: [
          {
            type: '1',
            title: '夏天[牛年][牛年][牛年]',
            auth: '迷幺叶yoko',
            time: '2021-05-22',
            uid: '32376366',
            img:
              '	https://i0.hdslb.com/bfs/album/17caf4f9d26b4e75c53180eb7f021016284fa50f.jpg@240w_320h_1e_1c.webp',
            id: '527534082601352021'
          },
          {
            type: '1',
            title: 'gachi浓度超高哒  听说～情侣间在一起久了会越来越像对方～嘛～现在看来没错了',
            auth: '呜米嗷嗷嗷',
            time: '2021-05-21',
            uid: '32376366',
            img:
              'https://i0.hdslb.com/bfs/album/449ee6ae7b6123b341aa815db11b6d1c22bb37f3.jpg@104w_104h_1e_1c.webp',
            id: '527288908690349952'
          },
          {
            type: '1',
            title: '为了赶出生贺视频所以，最近比较忙...。没画什么贴贴图，那就放一张生贺偷跑图吧',
            auth: '凪青',
            time: '2021-05-24',
            uid: '17311506',
            img:
              'https://i0.hdslb.com/bfs/album/80be11a1b27668337f064810f2c3026d4c6f166a.png@320w_180h_1e_1c.webp',
            id: '528313911221960029'
          },{
            type: '1',
            title: '狗狗伯爵，出击！',
            auth: '柒沐同学',
            time: '2021-05-13',
            uid: '25461195',
            img:
              'https://i0.hdslb.com/bfs/album/50b592f597a16d27f1cb2d2c5c6b96da2d8b4a74.jpg@320w_249h_1e_1c.webp',
            id: '524114906381391492'
          },
          {
            type: '1',
            title: '给崽崽做了套光标皮肤[捂眼]',
            auth: '芥末味Banana',
            time: '2021-05-15',
            uid: '160446326',
            img:
              'https://i0.hdslb.com/bfs/album/da68825453815e98603735e350d88a472963cc0d.png@104w_104h_1e_1c.webp',
            id: '524990160587246247'
          },
          {
            type: '1',
            title: 'MeUmy幼儿园🐺🐏',
            auth: '影片美伽的心上人',
            time: '2021-05-14',
            uid: '12302327',
            img:
              'https://i0.hdslb.com/bfs/album/8e2d32ecd3a4e4ec390d587a7e43705b5a17d304.jpg@320w_320h_1e_1c.webp',
            id: '524610528429313870'
          },{
            type: '1',
            title: '夏天[牛年][牛年][牛年]',
            auth: '迷幺叶yoko',
            time: '2021-05-22',
            uid: '32376366',
            img:
              '	https://i0.hdslb.com/bfs/album/17caf4f9d26b4e75c53180eb7f021016284fa50f.jpg@240w_320h_1e_1c.webp',
            id: '527534082601352021'
          },
          {
            type: '1',
            title: 'gachi浓度超高哒  听说～情侣间在一起久了会越来越像对方～嘛～现在看来没错了',
            auth: '呜米嗷嗷嗷',
            time: '2021-05-21',
            uid: '32376366',
            img:
              'https://i0.hdslb.com/bfs/album/449ee6ae7b6123b341aa815db11b6d1c22bb37f3.jpg@104w_104h_1e_1c.webp',
            id: '527288908690349952'
          },
          {
            type: '1',
            title: '为了赶出生贺视频所以，最近比较忙...。没画什么贴贴图，那就放一张生贺偷跑图吧',
            auth: '凪青',
            time: '2021-05-24',
            uid: '17311506',
            img:
              'https://i0.hdslb.com/bfs/album/80be11a1b27668337f064810f2c3026d4c6f166a.png@320w_180h_1e_1c.webp',
            id: '528313911221960029'
          },{
            type: '1',
            title: '狗狗伯爵，出击！',
            auth: '柒沐同学',
            time: '2021-05-13',
            uid: '25461195',
            img:
              'https://i0.hdslb.com/bfs/album/50b592f597a16d27f1cb2d2c5c6b96da2d8b4a74.jpg@320w_249h_1e_1c.webp',
            id: '524114906381391492'
          }
        ],  // 当前页展示的作品
        pageSize: 100, // 作品总页数
        pageNo: 1, // 当前页
        onSearch: [], // 搜索框正在搜索的内容
      }
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
      // 获取总页数及加载页面是展示内容
      wholePageNum() {
        // 发送接口
      },
      // 搜索并更新展示内容
      searchWorks() {
        // 发送接口搜索
        let param = {
          type: this.onSearch.type,
          word: this.onSearch.word,
          page: this.pageNo
        }
      },
      // 搜索框组件返回信息
      search(param) {
        this.onSearch = param;
        this.pageNo = 1;
        this.searchWorks();
        // console.log(param)
      },
      // 页面跳转
      jump(id) {
        // console.log(id);
        // 页码切换时搜索该页内容
        this.searchWorks();
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    align-items: center;
    padding-top: 4rem;
    padding-bottom: 3rem;
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
    background:
      repeating-linear-gradient(
        to right,#F5F5F5,white 5%,white 95%,#F5F5F5
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
    background:
      radial-gradient(circle  at 100% 100%, white, #F2F2F2);
  }
  .top_middle {
    text-align: center;
    width: 90%;
    height: 100%;
    background:
      repeating-linear-gradient(to bottom,#F5F5F5,#FFFFFF);
  }
  .top_right {
    width: 5%;
    height: 100%;
    background:
      radial-gradient(circle  at 0% 100%, white, #F2F2F2);
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
    color: #5E5E5E;
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
  }
  .excellent_div {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background: #FAFAFA;
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
    background: #FAFAFA;
    padding: 1rem 0 3rem 0;
  }
  .phone_pager {
    width: 95%;
  }
</style>