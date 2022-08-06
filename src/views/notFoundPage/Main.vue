<template>
  <div class="namePage">
    <!-- 页面头部 -->
    <pageHead :isPhone="isPhone"> </pageHead>
    <div class="body">
        <h1 class="text404">404</h1>
        <h2 class="text404Des">你来到了一处荒芜的平行时空</h2>
        <h3 class="text404Des2">不如试着看看<router-link :to="link.link">{{link.name}}</router-link>？</h3>
        <img class="pic404" :src="pic" />
    </div>
  </div>
</template>

<script>
import pageHead from "../../components/pageHead";
export default {
  name: "notFoundPage",
  components: {
    pageHead
  },
  created() {
    this.userIsPhone();
  },
  mounted() {
    window.onresize = () => {
      // 实时检测页面宽度
      this.userIsPhone();
    };
    // 随机一个图片
    this.pic = this.randomItem(this.pics);
    // 随机一个链接
    this.link = this.randomItem(this.links);
  },
  data() {
    return {
      isPhone: false, // 是否移动设备
      pics: [
          require("@/assets/img/umy.png"),
          require("@/assets/img/merry.png")
      ],
      pic: null,
      links: [
          {name: "视频", link: "/videoPage"},
          {name: "绘图", link: "/imagePage"},
          {name: "文章", link: "/articlePage"},
          {name: "创作者", link: "/authorPage"}
      ],
      link: {name: null, link: null}
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
    randomItem(l) {
        return l[Math.floor(Math.random()*l.length)];
    }
  }
};
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  margin: 3rem;
  max-width: 1250px;
}
.pic404 {
    margin-top: 1rem;
    max-width: 100%;
}
.text404 {
    margin-top: 0rem;
    margin-bottom: 0rem;
    font-weight: lighter;
    font-size: 10rem;
}
.text404Des {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: normal;
}
.text404Des2 {
    margin-top: 0rem;
    margin-bottom: 3rem;
    font-size: 1.5rem;
    font-weight: normal;
}
</style>