<template>
  <div
    v-if="show"
    class="menu_style"
    :class="{ phone_menu_style: isPhone }"
    :style="{ top: y + 'px', left: x + 'px' }"
  >
    <ul>
      <!-- 分别传递事件给父元素调用 -->
      <li
        @click.stop="
          () => {
            $emit('open');
          }
        "
      >
        打开
      </li>
      <li
        @click.stop="
          () => {
            $emit('report');
          }
        "
      >
        举报
      </li>
      <li
        @click.stop="
          () => {
            $emit('clo');
          }
        "
      >
        关闭
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "rightMenu",
  props: {
    x: {
      type: [Number],
      default: 0,
    },
    y: {
      type: [Number],
      default: 0,
    },
    showMenu: {
      type: [Boolean],
      default: false,
    },
    isPhone: {
      type: [Boolean],
      default: false,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    // 点击别处时隐藏目录，并传递一个关闭事件
    closeMenu() {
      if (this.show === true) {
        this.show = false;
        this.$emit("close", false);
      }
    },
  },
  mounted() {
    // 监听body上的点击
    document.querySelector("body").addEventListener("click", this.closeMenu);
  },
  beforeDestroy() {
    // 移除监听
    document.querySelector("body").removeEventListener("click", this.closeMenu);
  },
  watch: {
    // 监听，保持显示状态与父元素一致
    showMenu(val) {
      this.show = val;
    },
  },
};
</script>
<style scoped>
.menu_style {
  position: absolute;
  width: 9rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 1rem #d0d0d0;
  z-index: 1;
}
.phone_menu_style {
  width: 15rem;
}
.menu_style > ul > li {
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1.2rem;
  border-bottom: 1px dashed #f0f0f0;
  text-align: center;
  cursor: pointer;
}
.phone_menu_style > ul > li {
  height: 4rem;
  line-height: 4rem;
  font-size: 1.8rem;
}
.menu_style > ul > li:hover {
  background: #deedff;
}
</style>