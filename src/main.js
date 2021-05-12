import Vue from 'vue'
import App from './views/mainPage/Main.vue'
import router from './router'
import animated from 'animate.css'
import './font/font.css'

Vue.config.productionTip = false;
Vue.use(animated)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
