import Vue from 'vue'
import App from './views/mainPage/Main.vue'
import router from './router'
import './font/font.css'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
