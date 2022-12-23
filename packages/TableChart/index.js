// 引入组件，组件必须声明 name
import TableChart from './src';

// 为组件添加 install 方法，供按需引入
TableChart.install = function (Vue) {
    Vue.component(TableChart.name, TableChart);
};

// 导出组件
export default TableChart;
