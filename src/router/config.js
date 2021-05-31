// 路由配置格式请参照首页
const routes = [
  {
    path: '/',
    name: 'mainPage',
    meta: {
      title: '首页'
    },
    component: () =>
      /* webpackChunkName: "mainPage" */ '../views/mainPage/Main'
  },
  {
    path: '/mainPage',
    name: 'mainPage',
    meta: {
      title: '首页'
    },
    component: () =>
      /* webpackChunkName: "mainPage" */ '../views/mainPage/Main'
  }
];

export default routes;