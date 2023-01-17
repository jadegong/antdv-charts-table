// 引入组件，组件必须声明 name
import type { App, Plugin } from 'vue';
import VueChart from './src/index.vue';

// 为组件添加 install 方法，供按需引入
export const VueChartPlugin: Plugin = {
    install(app: App) {
        app.component('act-vue-chart', VueChart);
    },
};

// 导出组件
export { VueChart };
