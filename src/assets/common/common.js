export default {
  install(Vue) {
    // 根据页面宽度不同动态改变默认字体样式，实现字体大小的动态变化
    Vue.prototype.switchFontSize = function() {
      // 获取屏幕宽度
      let w = document.documentElement.clientWidth;
      //fontsize为当前屏幕的基数字体。
      let fontsize = w / 1920 * 40;
      // if (w <= 1500) {
        $("template").css("font-size", `${fontsize}px`);
      // }
    }
  }
}
