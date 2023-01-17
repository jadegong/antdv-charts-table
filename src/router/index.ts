import HomeView from '../views/HomeView.vue'
import DemoContainer from '../layouts/index.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '首页' },
  },
  {
    path: '/chartsDemo',
    name: 'chartsDemo',
    component: DemoContainer,
    meta: { title: '图表组件示例' },
    children: [
      {
        path: '/chartsDemo/line',
        name: 'chartsDemoLine',
        component: () => import('../views/LineChart/index.vue'),
        meta: { title: '折线图' },
      },
    ],
  }
];

export default routes;
