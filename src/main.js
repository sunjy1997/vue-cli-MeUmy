import Vue from 'vue';
import App from './views/mainPage/Main.vue';
import router from './router';
import animated from 'animate.css';
import './font/font.css';
import common from './assets/utils/common';

Vue.config.productionTip = false;
Vue.use(animated);
Vue.use(common);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
