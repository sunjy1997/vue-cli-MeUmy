<template>
<!--
    分页组件

    引用方法：
    <template>
      <div>
        // html调用 参数:pageSize(总页数);pageNo(当前页)
        <pager :pageSize="pageSize" v-model="pageNo" @on-jump="jump"></pager>
      </div>
    </template>

    data() {
      return {
        pageSize: 15,
        pageNo: 1,
      };
    },
    //接收跳转事件
    methods: {
      jump(id) {
        console.log(id);
      },
    },
 -->
  <div class="pager-body" ref="pager">
    <div class="pager-box">
      <div
        class="last-page"
        :class="{ 'pager-disabled': prevDisable }"
        href=""
        @click="jumpPrev()"
      >
        <!-- 小于符号/上一页按钮 -->
        <span>&lt;</span>
      </div>
      <div class="pages_box">
        <!--
          v-for生成的div即便没有内容也会占位，
          下列去除方法相当繁琐，也很丑，但是暂时没有别的解决办法，
          等有办法了再优化
        -->
        <div
          v-for="i in pageSize"
          :key="i"
          @click="jump(i)"
          class="pages"
          :class="{
            dont_show:
              (pageNo < 5 && i > 7 && i !== pageSize) ||
              (pageNo >= 5 && i <= pageSize - 1 && i >= pageNo + 4) ||
              (pageNo <= pageSize - 3 && i <= pageNo -4 && i !== 1) ||
              (pageNo == pageSize -2 && i <= pageNo - 5 && i !== 1) ||
              (pageNo == pageSize -1 && i <= pageNo - 6 && i !== 1) ||
              (pageNo == pageSize && i <= pageNo - 7 && i !== 1)
          }">
          <!-- 被选中的页码 -->
          <div
            class="on_choose"
            :class="[
              {on_choose_first: pageNo == 1},
              {on_choose_last: pageNo == pageSize}]"
            v-if="i == pageNo"
          >
            {{ i }}
          </div>
          <!-- 下方两个都是控制展示的页码的 -->
          <div
            v-else-if="
              (pageNo < 5 && i < 7) ||
              (pageNo > pageSize - 3 && i > pageSize - 6)
            "
            href=""
          >
            {{ i }}
          </div>
          <div
            v-else-if="
              pageSize < 6 ||
              i == 1 ||
              i == pageSize ||
              (pageNo - 2 <= i && i <= pageNo + 2)
            "
            href=""
          >
            {{ i }}
          </div>
          <!-- 不展示的部分用...包含 -->
          <div v-else-if="pageNo < 5 && i == 7">…</div>
          <div v-else-if="pageNo == 5 && i == 8">…</div>
          <div v-else-if="pageNo > 4 && i == pageNo - 3">…</div>
          <div v-else-if="pageNo > 4 && i == pageNo + 3">…</div>
          <div
            v-else-if="pageNo > pageSize-3 && (i >= pageNo - 6)"
           >…</div>
        </div>
      </div>
      <div
        class="next_page"
        :class="{ 'pager-disabled': nextDisable }"
        href=""
        @click="jumpNext()"
      >
        <!-- 大于符号/下一页按钮 -->
        <span>&gt;</span>
      </div>
    </div>
    <!-- 输入页码及跳转按钮 -->
    <div class="pager-input">
      <input type="text" v-model="jumpPage" class="input_box" />
      <div class="pager-btn-go" href="" @click="Go()">GO</div>
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
  },
  data() {
    return {
      jumpPage: "", //避免操作props参数
    };
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
      if (id == this.pageNo) {
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
  *{
    -webkit-touch-callout:none;  /*系统默认菜单被禁用*/
    -webkit-user-select:none; /*webkit浏览器*/
    -khtml-user-select:none; /*早期浏览器*/
    -moz-user-select:none; /*火狐*/
    -ms-user-select:none; /*IE10*/
    user-select:none;
  }
  .pager-body {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    color: #77797A;
  }
  .pager-box {
    display: flex;
    justify-content: space-between;
    width: 50vw;
    height: 5vw;
  }
  .last-page,
  .next_page {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0f0ef;
    font-size: 1.3rem;
    width: 5vw;
    font-weight: 900;
    border-radius: 50%;
  }
  .pager-disabled {
    cursor: not-allowed;
  }
  .pages_box {
    display: flex;
    background: #f0f0ef;
    border-radius: 5rem;
    width: 80%;
    height: 100%;
    margin: 0 0.5rem;
  }
  .pages {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    width: 15%;
    height: 100%;
  }
  .dont_show {
    display: none;
  }
  .on_choose {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #1F75FF;
    width: 100%;
    height: 100%;
    border-radius: 0.7rem;
  }
  .on_choose_first {
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }
  .on_choose_last {
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }
  .pager-input {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #f0f0ef;
    border-radius: 0.7rem;
    width: 9%;
    height: 5vw;
    margin-left: 0.5rem;
    padding: 0 0.5rem;
  }
  .input_box {
    text-align: center;
    background: #f0f0ef;
    width: 3rem;
    height: 3vw;
    font-size: 1.3rem;
    border: 1px solid #d4d1d1;
    border-radius: 0.3rem;
  }
  .input_box:focus {
    outline: none;
  }
  .pager-btn-go {
    font-weight: 900;
  }
</style>