<template>
  <!--
    分页组件

    引用方法：
    <template>
      <div>
        // html调用 参数:pageSize(总页数);pageNo(当前页)
        <pager
          :pageSize="pageSize"
          v-model="pageNo"
          @on-jump="jump"
          :isPhone="isPhone">
        </pager>
      </div>
    </template>

    data() {
      return {
        pageSize: 15,
        pageNo: 1,
        isPhone: true
      };
    },
    //接收跳转事件
    methods: {
      jump(id) {
        console.log(id);
      },
    },

    ————霜飔慕雪 2021/6/7
 -->
  <div class="pager_body" :class="{ phone_pager_body: isPhone }" ref="pager">
    <div class="pager_box" :class="{ phone_pager_box: isPhone }">
      <div
        class="last_page"
        :class="[
          { pager_disabled: prevDisable },
          { phone_switch_page: isPhone },
        ]"
        href=""
        @click="jumpPrev()"
      >
        <!-- 小于符号/上一页按钮 -->
        <span>&lt;</span>
      </div>
      <div class="pages_box">
        <div
          v-for="(val, key) in pages"
          :key="key"
          @click="jump(val)"
          class="pages"
          :class="{ phone_pages: isPhone }"
        >
          <div
            class="on_choose"
            :class="[
              { on_choose_first: pageNo == 1 },
              { on_choose_last: pageNo == pageSize },
            ]"
            v-if="val == pageNo"
          >
            {{ val }}
          </div>
          <div v-else>
            {{ val }}
          </div>
        </div>
      </div>
      <div
        class="next_page"
        :class="[
          { pager_disabled: nextDisable },
          { phone_switch_page: isPhone },
        ]"
        href=""
        @click="jumpNext()"
      >
        <!-- 大于符号/下一页按钮 -->
        <span>&gt;</span>
      </div>
    </div>
    <!-- 输入页码及跳转按钮 -->
    <div class="pager_input" :class="{ phone_pager_input: isPhone }">
      <input
        type="text"
        v-model="jumpPage"
        class="input_box"
        :class="{ phone_input_box: isPhone }"
      />
      <div
        class="pager_btn_go"
        :class="{ phone_pager_btn_go: isPhone }"
        @click="Go()"
      >
        GO
      </div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    //通过v-model传过来的参数
    prop: "pageNo",
    event: "jumpPage",
  },
  props: {
    pageSize: {
      type: Number,
      default: 1,
    },
    pageNo: {
      //通过v-model传过来的参数
      type: Number,
      default: 1,
    },
    isPhone: {
      // 是否是移动端进入页面
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      jumpPage: "", //避免操作props参数
      pages: [],
    };
  },
  watch: {
    pageNo(pageNo) {
      console.log(pageNo);
      if (this.pageSize > 8) {
        if (pageNo < 5) {
          this.pages = [1, 2, 3, 4, 5, 6, "...", this.pageSize];
        } else if (5 <= pageNo && pageNo <= this.pageSize - 4) {
          this.pages = [
            1,
            "...",
            pageNo - 2,
            pageNo - 1,
            pageNo,
            pageNo + 1,
            pageNo + 2,
            "...",
            this.pageSize,
          ];
        } else {
          this.pages = [
            1,
            "...",
            this.pageSize - 5,
            this.pageSize - 4,
            this.pageSize - 3,
            this.pageSize - 2,
            this.pageSize - 1,
            this.pageSize,
          ];
        }
      }
    },
  },
  mounted() {
    // 初始化渲染的页码数组
    if (this.pageSize <= 8) {
      let i = 1;
      for (i; i <= this.pageSize; i++) {
        this.pages.push(i);
      }
    } else {
      this.pages = [1, 2, 3, 4, 5, 6, "...", this.pageSize];
    }
  },
  computed: {
    prevDisable: function () {
      //“上一页”按钮是否可点
      if (this.pageNo > 1) {
        return false;
      } else {
        return true;
      }
    },
    nextDisable: function () {
      //“下一页”按钮是否可点
      if (this.pageNo < this.pageSize && this.pageSize > 1) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    jumpPrev: function () {
      //点击上一页
      if (this.pageNo == 1) {
        return;
      } else {
        this.$emit("jumpPage", this.pageNo - 1);
        this.$emit("on-jump", this.pageNo - 1);
      }
    },
    jumpNext: function () {
      //点击下一页
      if (this.pageNo == this.pageSize) {
        return;
      } else {
        this.$emit("jumpPage", this.pageNo + 1); //修改当前页码
        this.$emit("on-jump", this.pageNo + 1); //跳转
      }
    },
    jump: function (id) {
      // 页码相同不跳转
      if (id == this.pageNo || typeof id === "string") {
        return;
      }
      //直接跳转
      if (id > this.pageSize) {
        id = this.pageSize;
      }
      this.jumpPage = "";
      this.$emit("jumpPage", id); //修改当前页码
      this.$emit("on-jump", id); //跳转
    },
    Go: function () {
      if (this.jumpPage == "") {
        //判空处理
        return;
      } else if (/^\d*$/.test(parseInt(this.jumpPage))) {
        //填写数字才能跳转
        this.jump(parseInt(this.jumpPage));
        this.jumpPage = "";
      } else {
        this.jumpPage = "";
        return;
      }
    },
  },
};
</script>

<style scoped>
* {
  font-family: SimHei;
  -webkit-touch-callout: none; /*系统默认菜单被禁用*/
  -webkit-user-select: none; /*webkit浏览器*/
  -khtml-user-select: none; /*早期浏览器*/
  -moz-user-select: none; /*火狐*/
  -ms-user-select: none; /*IE10*/
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.pager_body {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: #77797a;
  height: 4rem;
}
.phone_pager_body {
  height: 6rem;
}
.pager_box {
  display: flex;
  justify-content: space-between;
  width: 45rem;
  height: 100%;
}
.phone_pager_box {
  width: 50rem;
}
.last_page,
.next_page {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0ef;
  font-size: 1.3rem;
  width: 4rem;
  font-weight: 900;
  border-radius: 50%;
}
.phone_switch_page {
  width: 6rem;
  font-size: 2.5rem;
}
.pager_disabled {
  cursor: not-allowed;
}
.pages_box {
  display: flex;
  background: #f0f0ef;
  border-radius: 5rem;
  height: 100%;
  max-width: 36rem;
  margin: 0 0.5rem;
}
.pages {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-size: 1.3rem;
  width: 4.5rem;
  height: 100%;
}
.phone_pages {
  font-size: 2.3rem;
}
.dont_show {
  display: none;
}
.on_choose {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #1f75ff;
  width: 100%;
  height: 100%;
  border-radius: 0.7rem;
}
.on_choose_first {
  border-top-left-radius: 5rem;
  border-bottom-left-radius: 5rem;
}
.on_choose_last {
  border-top-right-radius: 5rem;
  border-bottom-right-radius: 5rem;
}
.pager_input {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f0f0ef;
  border-radius: 0.7rem;
  width: 6rem;
  height: 100%;
  margin-left: 0.5rem;
  padding: 0 0.5rem;
}
.phone_pager_input {
  width: 9rem;
}
.input_box {
  text-align: center;
  background: #f0f0ef;
  width: 50%;
  height: 75%;
  font-size: 1.3rem;
  border: 1px solid #d4d1d1;
  border-radius: 0.3rem;
  -webkit-user-select: text !important;
}
.input_box:focus {
  outline: none;
}
.phone_input_box {
  font-size: 2rem;
}
.pager_btn_go {
  font-weight: 900;
  font-size: 1.3rem;
}
.phone_pager_btn_go {
  white-space: nowrap;
  font-size: 2.4rem;
}
</style>