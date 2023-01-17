/**
 * v0.0.1 2023/01/16 gqd 组件支持全局调用，也支持局部调用;
 */
import type { App, Plugin } from 'vue';
// 引入组件，组件必须声明 name
import BaseTable from './src/index.vue';

export const BaseTablePlugin: Plugin = {
    install(app: App) {
        app.component('act-base-table', BaseTable);
    }
};

// 导出组件
export { BaseTable };
