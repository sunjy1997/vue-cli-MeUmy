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
      this.getExcellWorksInfo();
      this.getNewWorksInfo();
    },
    mounted() {
      this.getHeadPage();
      window.onresize = () => { // 实时检测页面宽度
        this.userIsPhone();
      };
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
          {
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
        ];
        this.excellWorksInfo = param;
      },
      // 获取视频、文章、绘图、创作者信息
      getNewWorksInfo() {
        let param = [
          {
            name: '视频',
            works: [
              {
                type: '0',
                title: '【呜米】《一直都在》——2021.5.28生贺原创曲',
                auth: '努力的灵风',
                time: '2021-05-28 20:45:28',
                uid: '62921501',
                img:
                  'https://i2.hdslb.com/bfs/archive/2f2691e2e203333f278103466bc8e953c826d7e6.jpg@380w_240h_100Q_1c.webp',
                id: '205850362'
              },
              {
                type: '0',
                title: '【呜米MMD/花嫁配布】这是谁家的新娘？',
                auth: '73先生',
                time: '2021-05-27 12:00:15',
                uid: '19291133',
                img:
                  'https://i2.hdslb.com/bfs/archive/724e7672e1316aa4a350d2f2993be0a7ea3b8193.jpg@380w_240h_100Q_1c.webp',
                id: '973299388'
              },
              {
                type: '0',
                title: '【呜米x咩栗】magnet',
                auth: '呜米',
                time: '2021-05-21 18:00:00',
                uid: '617459493',
                img:
                  'https://i1.hdslb.com/bfs/archive/e444757b00eeb9cbb85bbf8bd912450f565354fe.jpg@160w_100h_100Q_1c.webp',
                id: '930635056'
              }
            ]
          },
          {
            name: '绘图',
            works: [
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
              }
            ]
          },
          {
            name: '文章',
            works: [
              {
                type: '2',
                title: '【MeUmy】淋雨',
                auth: '努力的灵风',
                time: '2021-5-24',
                uid: '62921501',
                img:
                  'https://i0.hdslb.com/bfs/article/4ebca0465b042df1adeb64fa749c0ef72eb43866.png',
                id: '11413342'
              },
              {
                type: '2',
                title: '午后',
                auth: '耋堞疊迭',
                time: '2021-5-8',
                uid: '43658770',
                img: '',
                id: '11204256'
              },
              {
                type: '2',
                title: '[MeUmy同人]咩栗不在的七天（糖刀，高虐）',
                auth: '南宫鸢_Iris',
                time: '2021-5-10',
                uid: '8045830',
                img: '',
                id: '11227618'
              }
            ]
          },
          {
            name: '创作者',
            works: [
              {
                type: '4',
                name: '努力的灵风',
                vid: '639',
                img: '0',
                art: '8',
                workType: '0',
                title: '【呜米】《一直都在》——2021.5.28生贺原创曲',
                time: '2021-05-28 20:45:28',
                head:
                  'https://i2.hdslb.com/bfs/face/679ba3aab7b0bebd12564d5cba94c6f3ceee1a22.jpg@128w_128h_1o.webp',
                authUid: '62921501'
              },
              {
                type: '4',
                name: '73先生',
                vid: '42',
                img: '0',
                art: '21',
                workType: '0',
                title: '【MMD/呜米三点式】沙滩性感热舞',
                time: '2021-05-28 00:00:10',
                head:
                  'https://i2.hdslb.com/bfs/face/99b528a87536696096c83877470cdb300c3ffd76.jpg@128w_128h_1o.webp',
                authUid: '973299388'
              },
              {
                type: '4',
                name: '霜飔慕雪',
                vid: '0',
                img: '0',
                art: '0',
                workType: '0',
                title: '这人就是个废物什么都不会',
                time: '2021-05-27 22:58',
                head:
                  'https://i2.hdslb.com/bfs/face/62b754c0cd99cab4aafd661fa7781c5dd6c7bf66.jpg@128w_128h_1o.webp',
                authUid: ''
              }
            ]
          }
        ];
        this.newWorksInfo = param;
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
