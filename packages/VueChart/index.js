// 引入组件，组件必须声明 name
import VueChart from './src';

// 为组件添加 install 方法，供按需引入
VueChart.install = function (Vue) {
    Vue.component(VueChart.name, VueChart);
};

// 导出组件
export default VueChart;
