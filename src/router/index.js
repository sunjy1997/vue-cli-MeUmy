import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';

import mainPage from '../views/mainPage/Main.vue'; // 引入主页
import videoPage from '../views/videoPage/Main.vue'; // 引入视频页
import imagePage from '../views/imagePage/Main.vue'; // 引入图片页
import articlePage from '../views/articlePage/Main.vue'; // 引入文章页
import authorPage from '../views/authorPage/Main.vue'; // 引入作者页
import materialPage from '../views/materialPage/Main.vue'; // 引入素材页
// import testPage from '../views/testPage/test.vue'; // 测试页
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
      path: '/videoPage',
      name: 'videoPage',
      component: videoPage
    },
    {
      path: '/imagePage',
      name: 'imagePage',
      component: imagePage
    },
    {
      path: '/articlePage',
      name: 'articlePage',
      component: articlePage
    },
    {
      path: '/authorPage',
      name: 'authorPage',
      component: authorPage
    },
    {
      path: '/materialPage',
      name: 'materialPage',
      component: materialPage
    },
    // {
    //   path: '/testPage',
    //   name: 'testPage',
    //   component: testPage
    // }
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
