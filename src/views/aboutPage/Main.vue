<template>
  <div class="namePage">
    <!-- 页面头部 -->
    <pageHead pageNum="9" :isPhone="isPhone"> </pageHead>
    <div class="body" :class="{ phone_body: isPhone }">
      <div>
        <span class="about" :class="{ phone_about: isPhone }">关于</span>
        <div class="line"></div>
        <span class="info" :class="{ phone_info: isPhone }">介绍</span>
        <p class="text_1" :class="{ phone_text_1: isPhone }">
          &nbsp;&nbsp;&nbsp;
          MeUmy平行草原时空是一个属于MeUmy的同人网站，收录了bilibili上有关MeUmy的视频、文章和绘图等二创作品，并进行了简单的分类统计，便于草民们查找。
        </p>
        <p class="text_1" :class="{ phone_text_1: isPhone }">
          &nbsp;&nbsp;&nbsp;
          使用咩栗、呜米形象及设定的全部MeUmy二创作品及素材禁止用于商业用途，网站收录的全部作品版权归同人作品原作者所有，侵权删除。
        </p>
        <p class="text_1" :class="{ phone_text_1: isPhone }">
          &nbsp;&nbsp;&nbsp;
          同时，本同人站无法查看任何作品详情，目的仅仅是为二创作者引流，欣赏作品请点击跳转作品详情页，每一位作者的付出都值得被用心对待，请不要吝惜您的点赞，您的鼓励能间接地创造更优秀的作品。
        </p>
        <p class="text_1" :class="{ phone_text_1: isPhone }">
          &nbsp;&nbsp;&nbsp;
          感谢您对MeUmy的关注与支持，让我们共同努力，一同创造并见证属于MeUmy的更美好的未来！
        </p>
      </div>
      <div class="second_box">
        <span class="info" :class="{ phone_info: isPhone }"
          >对网站有建议/想要加入？</span
        >
        <div class="second_title" :class="{ phone_second_title: isPhone }">
          &nbsp;&nbsp;&nbsp; 请私信以下网站制作/运营：
        </div>
        <div class="show_auth">
          <div
            v-for="item in showAuth"
            :key="item.i"
            class="out_box"
            :class="{ phone_out_box: isPhone }"
          >
            <div>{{ item.job }}</div>
            <div class="first_box">
              <img
                class="image"
                :class="{ phone_image: isPhone }"
                :src="item.head"
                oncontextmenu="return false"
                onselectstart="return false"
                draggable="false"
              />
              <div
                class="name"
                :class="{ phone_name: isPhone }"
                @click="jumpToAuth(item.uid)"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <div>
          <div class="second_title" :class="{ phone_second_title: isPhone }">
            &nbsp;&nbsp;&nbsp;
            特别鸣谢以下成员对本网站的帮助（排名顺序不分先后）：
          </div>
          <br />
          <div>
            <span class="second_title" :class="{ phone_second_title: isPhone }">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 网站策划：
            </span>
            <span
              class="helper_name"
              :class="{ phone_second_title: isPhone }"
              @click="jumpToAuth('19291133')"
              >@73老师</span
            >、
            <span
              class="helper_name"
              :class="{ phone_second_title: isPhone }"
              @click="jumpToAuth('1818479062')"
              >@呜米小姐的吃饭小虎牙</span
            >、
            <span
              class="helper_name"
              :class="{ phone_second_title: isPhone }"
              @click="jumpToAuth('2488613')"
              >@霜飔慕雪</span
            >、
            <span
              class="helper_name"
              :class="{ phone_second_title: isPhone }"
              @click="jumpToAuth('62921501')"
              >@努力的灵风</span
            >
          </div>
          <br />
          <div>
            <span class="second_title" :class="{ phone_second_title: isPhone }">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 客户端开发：
            </span>
            <span
              class="helper_name"
              :class="{ phone_second_title: isPhone }"
              @click="jumpToAuth('2488613')"
              >@霜飔慕雪</span
            >
          </div>
          <br />
          <div>
            <span class="second_title" :class="{ phone_second_title: isPhone }">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 管理端、后端开发：
            </span>
            <span
              class="helper_name"
              :class="{ phone_second_title: isPhone }"
              @click="jumpToAuth('1818479062')"
              >@呜米小姐的吃饭小虎牙</span
            >
          </div>
          <br />
          <div>
            <span class="second_title" :class="{ phone_second_title: isPhone }">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 技术支援：
            </span>
            <span
              class="helper_name"
              :class="{ phone_second_title: isPhone }"
              @click="jumpToAuth('503')"
              >@流河老师</span
            >、
            <span
              class="helper_name"
              :class="{ phone_second_title: isPhone }"
              @click="jumpToAuth('9420577')"
              >@特斯拉老师</span
            >、
            <span
              class="helper_name"
              :class="{ phone_second_title: isPhone }"
              @click="jumpToAuth('573732342')"
              >@进栈检票老师</span
            >
          </div>
          <br />
          <div>
            <span class="second_title" :class="{ phone_second_title: isPhone }">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 网站供图：
            </span>
            <span
              class="helper_name"
              :class="{ phone_second_title: isPhone }"
              @click="jumpToAuth('17311506')"
              >@凪青太太</span
            >
          </div>
          <br />
          <div>
            <span class="second_title" :class="{ phone_second_title: isPhone }">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              6天时间对多达6300+视频进行手工分类的成员：
            </span>
            <br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span
              class="helper_name"
              :class="{ phone_second_title: isPhone }"
              @click="jumpToAuth('2488613')"
              >@霜飔慕雪</span
            >、
            <span
              class="helper_name"
              :class="{ phone_second_title: isPhone }"
              @click="jumpToAuth('19291133')"
              >@73老师</span
            >、
            <span
              class="helper_name"
              :class="{ phone_second_title: isPhone }"
              @click="jumpToAuth('1818479062')"
              >@呜米小姐的吃饭小虎牙</span
            >、
            <span
              class="helper_name"
              :class="{ phone_second_title: isPhone }"
              @click="jumpToAuth('12007970')"
              >@遗世尘嚣</span
            >、
            <span
              class="helper_name"
              :class="{ phone_second_title: isPhone }"
              @click="jumpToAuth('11601497')"
              >@发烟酸-</span
            >、
            <span
              class="helper_name"
              :class="{ phone_second_title: isPhone }"
              @click="jumpToAuth('172467764')"
              >@温柔可爱的砜酱</span
            >、
            <span
              class="helper_name"
              :class="{ phone_second_title: isPhone }"
              @click="jumpToAuth('9420577')"
              >@特斯拉老师</span
            >
          </div>
        </div>
      </div>
    </div>
    <bottomBox />
  </div>
</template>

<script>
import pageHead from "../../components/pageHead";
import bottomBox from "../../components/bottomBox";
export default {
  name: "aboutPage",
  data() {
    return {
      isPhone: false,
      showAuth: [
        {
          job: "网站前端",
          name: "@霜飔慕雪",
          head: require("../../assets/img/myHead.png"),
          uid: "2488613",
        },
        {
          job: "网站后端",
          name: "@八角老师",
          head: require("../../assets/img/octaveHead.png"),
          uid: "1818479062",
        },
        {
          job: "绘图画师",
          name: "@凪青",
          head: "https://i0.hdslb.com/bfs/face/4b9df1254484bffca2c23093d31f41bca860ddec.jpg@128w_128h_1o.webp",
          uid: "17311506",
        },
        /* 可恶 不要她
        {
          job: "发起人",
          name: "@努力的灵风",
          head: "https://i2.hdslb.com/bfs/face/679ba3aab7b0bebd12564d5cba94c6f3ceee1a22.jpg@128w_128h_1o.webp",
          uid: "62921501",
        },
        */
      ],
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
  },
  components: {
    pageHead,
    bottomBox
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
    // 跳转作者页
    jumpToAuth(uid) {
      window.open("https://space.bilibili.com/" + uid);
    }
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
  background: #fafafa;
  padding: 2rem;
  margin-top: 2.3rem;
  margin-bottom: 2rem;
  width: 80%;
  max-width: 1250px;
}
.phone_body {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.about {
  font-size: 3rem;
}
.phone_about {
  font-size: 6rem;
}
.line {
  background: #a8a8a8;
  width: 100%;
  height: 1px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.info {
  font-size: 1.7rem;
}
.phone_info {
  font-size: 3.4rem;
}
.text_1 {
  font-size: 1.4rem;
  margin-top: 1rem;
  line-height: 1.8rem;
}
.phone_text_1 {
  font-size: 2.8rem;
  line-height: 3rem;
}
.second_box {
  margin-top: 1rem;
}
.second_title {
  margin-top: 1rem;
}
.phone_second_title {
  font-size: 2rem;
}
.out_box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 9rem;
  height: 15rem;
  margin-top: 1rem;
  font-size: 1.4rem;
}
.phone_out_box {
  width: 18rem;
  height: 30rem;
  margin-top: 2rem;
  font-size: 2.8rem;
}
.first_box {
  text-align: center;
  width: 100%;
  height: 78%;
  border-radius: 0.6rem;
  box-shadow: #838383 0px 2px 3px 1px;
}
.image {
  width: 9rem;
  height: 9rem;
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.phone_image {
  width: 18rem;
  height: 18rem;
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
}
.name {
  font-size: 1.2rem;
  margin-top: 0.5rem;
  color: #935fca;
}
.name:hover {
  color: #ff3b41;
}
.phone_name {
  font-size: 2.4rem;
  margin-top: 1rem;
}
.show_auth {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}
.helper_name {
  margin-top: 1rem;
  color: #935fca;
}
.helper_name:hover {
  color: #ff3b41;
}
</style>