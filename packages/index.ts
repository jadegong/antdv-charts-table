/**
 * v0.0.1 2023/01/06 gqd 组件库导出文件：组件支持全局调用，也支持局部调用;
 */
import type { App, Plugin } from 'vue';

// import { TypeDatePickerPlugin } from './TypeDatePicker';
import { TableChartPlugin } from './TableChart';

const AntdvChartsTablePlugin: Plugin = {
  install(app: App) {
    // TypeDatePickerPlugin.install?.(app);
    TableChartPlugin.install?.(app);
  },
};

export default AntdvChartsTablePlugin;

export * from './TableChart';
