import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';

import mainPage from '../views/mainPage/Main.vue'; // 引入主页
import testPage from '../views/testPage/test.vue'; // 测试页
Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/testPage',
      name: 'testPage',
      component: testPage
    }
  ]
});

function format(data) {
  return data.map(item => {
    const result = {
      ...item
    };
    let { component, children, redirect, path } = result;
    if (!component) {
      //result.component = Noop;
    }

    if (children) {
      if (!redirect) {
        result.redirect = `${path}/${children[0].path}`;
      }

      const child = format(children);
      //Reduce memory usage
      result.children = child;
    }
    return result;
  })
}
