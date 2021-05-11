
const routes = [
  {
    path: '/',
    name: 'mainPage',
    meta: {
      title: '首页'
    },
    component: () =>
      /* webpackChunkName: "mainPage" */ '../views/mainPage/Main'
  }
];

export default routes;