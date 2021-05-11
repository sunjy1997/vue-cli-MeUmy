import Vue from 'vue'
import Router from 'vue-router'
import pageRouters from './config'
import VueResource from 'vue-resource'

Vue.use(Router);
Vue.use(VueResource);

const router = new Router({
  mode: 'history',
  base: __dirname,
  routers: format(pageRouters)
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

export default router;
