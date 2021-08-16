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
        newWorksInfo: [] // 最新作品信息
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
      getExcellWorksInfo() {
        let param = [
          // {
          //   type: '1',
          //   title: '狗狗伯爵，出击！',
          //   auth: '柒沐同学',
          //   time: 1596101962,
          //   uid: '25461195',
          //   img:
          //     'https://i0.hdslb.com/bfs/album/50b592f597a16d27f1cb2d2c5c6b96da2d8b4a74.jpg@320w_249h_1e_1c.webp',
          //   id: '524114906381391492'
          // },
          // {
          //   type: '1',
          //   title: '给崽崽做了套光标皮肤[捂眼]',
          //   auth: '芥末味Banana',
          //   time: '2021-05-15',
          //   uid: '160446326',
          //   img:
          //     'https://i0.hdslb.com/bfs/album/da68825453815e98603735e350d88a472963cc0d.png@104w_104h_1e_1c.webp',
          //   id: '524990160587246247'
          // },
          // {
          //   type: '1',
          //   title: 'MeUmy幼儿园🐺🐏',
          //   auth: '影片美伽的心上人',
          //   time: '2021-05-14',
          //   uid: '12302327',
          //   img:
          //     'https://i0.hdslb.com/bfs/album/8e2d32ecd3a4e4ec390d587a7e43705b5a17d304.jpg@320w_320h_1e_1c.webp',
          //   id: '524610528429313870'
          // },
          // {
          //   type: '0',
          //   title: '【咩栗MMD】与梦盛开-这么可爱的咩栗确定不来看看吗？',
          //   auth: '星空future',
          //   time: '2021-05-10 01:34:15',
          //   uid: '489676359',
          //   img:
          //     'https://i1.hdslb.com/bfs/archive/34977197285be205fd407322655bbc83191fdbfb.jpg@380w_240h_100Q_1c.webp',
          //   id: '418087077'
          // },
          // {
          //   type: '0',
          //   title: '性 感 狼 宝 在 线 劝 分 性 感 羊 宝 在 线 贴 贴',
          //   auth: '糖炒板栗sama',
          //   time: '2021-05-15 06:00:18',
          //   uid: '426368456',
          //   img:
          //     'https://i0.hdslb.com/bfs/archive/71adbf07178b1df0294cda5d1536bd6fc0a70f72.jpg@380w_240h_100Q_1c.webp',
          //   id: '375570663'
          // },
          // {
          //   type: '0',
          //   title: '【MMD】咩栗女士，吃QQ糖嘛',
          //   auth: '倦长祈',
          //   time: '2021-05-16 14:02:30',
          //   uid: '27660293',
          //   img:
          //     'https://i0.hdslb.com/bfs/archive/9517915d95295793dd7e15ffdafac7a1ba3cac55.jpg@380w_240h_100Q_1c.webp',
          //   id: '460602858'
          // },
          // {
          //   type: '0',
          //   title: '《过 于 生 艹》',
          //   auth: '萌糖_Channel',
          //   time: '2021-05-15 02:48:14',
          //   uid: '408473935',
          //   img:
          //     'https://i0.hdslb.com/bfs/archive/1ee0d49405b0d43be6e37499f23bc855571b8d4e.jpg@160w_100h_100Q_1c.webp',
          //   id: '503063574'
          // },
          // {
          //   type: '0',
          //   title: '【呜米】马桶盖可以许愿',
          //   auth: '切段墨鱼',
          //   time: '2021-05-14 15:02:43',
          //   uid: '14352056',
          //   img:
          //     'https://i0.hdslb.com/bfs/archive/8a8c8838fa6944b8aa1ea97454846450cf81c5fa.jpg@160w_100h_100Q_1c.webp',
          //   id: '503092736'
          // },
          // {
          //   type: '0',
          //   title: '参加崽崽咩咩结婚二周年纪念日时竟然遇到这种事情？',
          //   auth: '呜米嗷嗷嗷',
          //   time: '2021-05-10 23:13:05',
          //   uid: '85774607',
          //   img:
          //     'https://i0.hdslb.com/bfs/archive/712f5624c132ab623dbc3d83263d1e8cb0c89b9b.jpg@160w_100h_100Q_1c.webp',
          //   id: '888080581'
          // },
        ];
        this.excellWorksInfo = param;
      },
      // 获取视频、文章、绘图、创作者信息
      async getNewWorksInfo() {
        let newVid = {
          getWorks: {
            workType: '0',
            searchType: '0',
            searchWord: '',
            pageNum: 1,
            classifyChoice: '0'
          }
        }
        let newImg = {
          getWorks: {
            workType: '1',
            searchType: '0',
            searchWord: '',
            pageNum: 1,
            classifyChoice: '0'
          }
        }
        let newArt = {
          getWorks: {
            workType: '2',
            searchType: '0',
            searchWord: '',
            pageNum: 1,
            classifyChoice: '0'
          }
        }
        let auths = {
          getAuthors: {
            searchType: '1',
            searchWord: '',
            pageNum: 1
          }
        }
        Promise.all(
          [
            this.getWorksInfo(newVid),
            this.getWorksInfo(newImg),
            this.getWorksInfo(newArt)
          ]
        ).then(item => {
          this.newWorksInfo = [
            {
              name: '视频',
              path: 'videoPage',
              works: item[0].slice(0,3)
            },
            {
              name: '绘图',
              path: 'imagePage',
              works: item[1].slice(0,3)
            },
            {
              name: '文章',
              path: 'articlePage',
              works: item[2].slice(0,3)
            },
            {
              name: '创作者',
              path: 'authorPage',
              works: [
                {
                  workType: '4',
                  authName: '努力的灵风',
                  vidNum: '639',
                  imgNum: '0',
                  artNum: '8',
                  newWork: '0',
                  workTitle: '【呜米】《一直都在》——2021.5.28生贺原创曲',
                  time: '2021-05-28 20:45:28',
                  imgAddr:
                    'https://i2.hdslb.com/bfs/face/679ba3aab7b0bebd12564d5cba94c6f3ceee1a22.jpg@128w_128h_1o.webp',
                  authUid: '62921501'
                },
                {
                  workType: '4',
                  authName: '73先生',
                  vidNum: '42',
                  imgNum: '0',
                  artNum: '21',
                  newWork: '0',
                  workTitle: '【MMD/呜米三点式】沙滩性感热舞',
                  time: '2021-05-28 00:00:10',
                  imgAddr:
                    'https://i2.hdslb.com/bfs/face/99b528a87536696096c83877470cdb300c3ffd76.jpg@128w_128h_1o.webp',
                  authUid: '973299388'
                },
                {
                  workType: '4',
                  authName: '霜飔慕雪',
                  vidNum: '0',
                  imgNum: '0',
                  artNum: '0',
                  newWork: '0',
                  workTitle: '这人就是个废物什么都不会',
                  time: '2021-05-27 22:58',
                  imgAddr:
                    'https://i2.hdslb.com/bfs/face/62b754c0cd99cab4aafd661fa7781c5dd6c7bf66.jpg@128w_128h_1o.webp',
                  authUid: ''
                }
              ]
            }
          ];
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
