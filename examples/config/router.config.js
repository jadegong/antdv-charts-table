import Home from '../pages/Home.vue';
import ChartsDemo from '../pages/chartsDemo';
import LineChartPage from '../pages/LineChart';
import LinesChartPage from '../pages/LinesChart';
import BarLineChartPage from '../pages/BarLineChart';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'index',
        meta: { title: '首页' },
    },
    {
        path: '/pureChartsDemo',
        component: ChartsDemo,
        name: 'pureChartsDemo',
        meta: { title: '单图表组件' },
        children: [
            {
                path: '/pureChartsDemo/line',
                component: LineChartPage,
                name: 'lineChartDemo',
                meta: { title: '单折线图' },
            },
            {
                path: '/pureChartsDemo/lines',
                component: LinesChartPage,
                name: 'linesChartDemo',
                meta: { title: '多折线图' },
            },
        ],
    },
    {
        path: '/mixedChartsDemo',
        component: ChartsDemo,
        name: 'mixedChartsDemo',
        meta: { title: '混合图表组件' },
        children: [
            {
                path: '/mixedChartsDemo/barLine',
                component: BarLineChartPage,
                name: 'barLineChartDemo',
                meta: { title: '柱状折线图' },
            },
        ],
    },
];

export default routes;
