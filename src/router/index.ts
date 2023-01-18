import HomeView from '../views/HomeView.vue';
import DemoContainer from '../layouts/index.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '首页' },
  },
  {
    path: '/simpleCharts',
    name: 'simpleCharts',
    component: DemoContainer,
    meta: { title: '简单图表示例' },
    children: [
      {
        path: '/simpleCharts/bar',
        name: 'simpleChartsBar',
        component: () => import('../views/BarChart/index.vue'),
        meta: { title: '柱状图' },
      },
      {
        path: '/simpleCharts/line',
        name: 'simpleChartsLine',
        component: () => import('../views/LineChart/index.vue'),
        meta: { title: '单折线图' },
      },
      {
        path: '/simpleCharts/lines',
        name: 'simpleChartsLines',
        component: () => import('../views/LinesChart/index.vue'),
        meta: { title: '多折线图' },
      },
        {
            path: '/simpleCharts/pie',
            name: 'simpleChartsPie',
            component: () => import('../views/PieChart/index.vue'),
            meta: { title: '饼图' },
        },
        {
            path: '/simpleCharts/radar',
            name: 'simpleChartsRadar',
            component: () => import('../views/RadarChart/index.vue'),
            meta: { title: '雷达图' },
        },
    ],
  },
  {
    path: '/mixedCharts',
    name: 'mixedCharts',
    component: DemoContainer,
    meta: { title: '混合图表示例' },
    children: [
      {
        path: '/mixedChartsDemo/barLine',
        name: 'mixedChartsDemoBarLine',
        component: () => import('../views/BarLineChart/index.vue'),
        meta: { title: '柱状折线图' },
      },
    ],
  },
];

export default routes;
