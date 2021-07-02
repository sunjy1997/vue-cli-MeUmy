<template>
  <div  class="namePage" :class="{phone_namePage: isPhone}">
    <!-- 页面头部 -->
    <pageHead
      pageNum = '5'
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
            src="../../assets/img/material.png"
            class="title_img"
            :class="{phone_title_img: isPhone}"
            oncontextmenu="return false"
            onselectstart="return false"
            draggable="false"
          >
          <!-- 视频分类选择 -->
          <div
            class="classify_div"
            :class="{phone_classify_div: isPhone}"
          >
            <div
              class="classify_choice"
              v-for="i in classifyList"
              :key="i.id"
            >
              <span
                :class="{
                  name: i.id === classifyChoice,
                  not_name: i.id !== classifyChoice
                }"
                @click="switchChoice(i.id)"
              >
                {{ i.name }}
              </span>
              <img
                v-if="i.id !== 3"
                class="classify_img"
                src="../../assets/img/point.png"
                oncontextmenu="return false"
                onselectstart="return false"
                draggable="false"
              >
            </div>
          </div>
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
    name: 'materialPage',
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
        classifyList: [
          {
            id: 0,
            name: '全部'
          },
          {
            id: 1,
            name: 'MMD'
          },
          {
            id: 2,
            name: '音声'
          },
          {
            id: 3,
            name: '表情包'
          }
        ], // 作品分类
        classifyChoice: 0, // 现在选择的视频分类
        showWorks: [
          {
            type: '0',
            title: '【咩栗MMD】与梦盛开-这么可爱的咩栗确定不来看看吗？',
            auth: '星空future',
            time: '2021-05-10 01:34:15',
            uid: '489676359',
            img:
              'https://i1.hdslb.com/bfs/archive/34977197285be205fd407322655bbc83191fdbfb.jpg@380w_240h_100Q_1c.webp',
            id: '418087077'
          },
          {
            type: '0',
            title: '性 感 狼 宝 在 线 劝 分 性 感 羊 宝 在 线 贴 贴',
            auth: '糖炒板栗sama',
            time: '2021-05-15 06:00:18',
            uid: '426368456',
            img:
              'https://i0.hdslb.com/bfs/archive/71adbf07178b1df0294cda5d1536bd6fc0a70f72.jpg@380w_240h_100Q_1c.webp',
            id: '375570663'
          },
          {
            type: '0',
            title: '【MMD】咩栗女士，吃QQ糖嘛',
            auth: '倦长祈',
            time: '2021-05-16 14:02:30',
            uid: '27660293',
            img:
              'https://i0.hdslb.com/bfs/archive/9517915d95295793dd7e15ffdafac7a1ba3cac55.jpg@380w_240h_100Q_1c.webp',
            id: '460602858'
          },
          {
            type: '0',
            title: '《过 于 生 艹》',
            auth: '萌糖_Channel',
            time: '2021-05-15 02:48:14',
            uid: '408473935',
            img:
              'https://i0.hdslb.com/bfs/archive/1ee0d49405b0d43be6e37499f23bc855571b8d4e.jpg@160w_100h_100Q_1c.webp',
            id: '503063574'
          },
          {
            type: '0',
            title: '【咩栗MMD】与梦盛开-这么可爱的咩栗确定不来看看吗？',
            auth: '星空future',
            time: '2021-05-10 01:34:15',
            uid: '489676359',
            img:
              'https://i1.hdslb.com/bfs/archive/34977197285be205fd407322655bbc83191fdbfb.jpg@380w_240h_100Q_1c.webp',
            id: '418087077'
          },
          {
            type: '0',
            title: '性 感 狼 宝 在 线 劝 分 性 感 羊 宝 在 线 贴 贴',
            auth: '糖炒板栗sama',
            time: '2021-05-15 06:00:18',
            uid: '426368456',
            img:
              'https://i0.hdslb.com/bfs/archive/71adbf07178b1df0294cda5d1536bd6fc0a70f72.jpg@380w_240h_100Q_1c.webp',
            id: '375570663'
          },
          {
            type: '0',
            title: '【MMD】咩栗女士，吃QQ糖嘛',
            auth: '倦长祈',
            time: '2021-05-16 14:02:30',
            uid: '27660293',
            img:
              'https://i0.hdslb.com/bfs/archive/9517915d95295793dd7e15ffdafac7a1ba3cac55.jpg@380w_240h_100Q_1c.webp',
            id: '460602858'
          },
          {
            type: '0',
            title: '《过 于 生 艹》',
            auth: '萌糖_Channel',
            time: '2021-05-15 02:48:14',
            uid: '408473935',
            img:
              'https://i0.hdslb.com/bfs/archive/1ee0d49405b0d43be6e37499f23bc855571b8d4e.jpg@160w_100h_100Q_1c.webp',
            id: '503063574'
          },
          {
            type: '0',
            title: '【呜米】马桶盖可以许愿',
            auth: '切段墨鱼',
            time: '2021-05-14 15:02:43',
            uid: '14352056',
            img:
              'https://i0.hdslb.com/bfs/archive/8a8c8838fa6944b8aa1ea97454846450cf81c5fa.jpg@160w_100h_100Q_1c.webp',
            id: '503092736'
          },
          {
            type: '0',
            title: '参加崽崽咩咩结婚二周年纪念日时竟然遇到这种事情？',
            auth: '呜米嗷嗷嗷',
            time: '2021-05-10 23:13:05',
            uid: '85774607',
            img:
              'https://i0.hdslb.com/bfs/archive/712f5624c132ab623dbc3d83263d1e8cb0c89b9b.jpg@160w_100h_100Q_1c.webp',
            id: '888080581'
          },
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
          page: this.pageNo,
          choice: this.classifyChoice
          // 选择的视频类型，0全部，1MMD，2音声，3表情包
        }
      },
      // 搜索框组件返回信息
      search(param) {
        this.onSearch = param;
        this.pageNo = 1;
        this.searchWorks();
        // console.log(param)
      },
      // 切换选项
      switchChoice(i) {
        if (i === this.classifyChoice) {
          return;
        } else {
          this.classifyChoice = i;
          this.pageNo = 1;
          this.searchWorks();
        }
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
    height: 17rem;
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