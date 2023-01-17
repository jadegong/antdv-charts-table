/**
 * v0.0.1 2023/01/16 gqd 组件支持全局调用，也支持局部调用;
 */
import type { App, Plugin } from 'vue';
import TableChart from './src/index.vue';

export const  TableChartPlugin: Plugin = {
    install(app: App) {
        app.component('act-table-chart', TableChart);
    },
};

// 导出组件
export { TableChart };
