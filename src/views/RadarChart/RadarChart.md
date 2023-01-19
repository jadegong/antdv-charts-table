[comment]: <> (2021/12/31 gqd 新增README文档;)
[comment]: <> (2022/01/04 gqd 完成雷达图的参数项文档;)

# 雷达图组件

## 配置项

### props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :------- | :-- | :-- | :--- | :-------- |
| option | 自定义echarts图表配置项 | RadarOption | - | - |
| dataOption | 折线图数据配置(暂未使用) | DataOption | - | - |
| exportOption | 折线图数据导出配置(暂未使用) | ExportOption | - | - |
| customizeOption | 暂未使用 | Array\<Object\> | - | - |
| GridX | 暂未使用 | number | 0 | - |
| GridY | 暂未使用 | number | 0 | - |
| w | 暂未使用 | number | 24 | - |
| h | 暂未使用 | number | 24 | - |

### RadarOption

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :----- |
| theme | 主题 | 'light' \| 'dark' | 'light' | - | - |
| type | echart图表类型 | string | 'radar' | - | - |
| title | 图表标题 | string | '模型雷达评分图' | - | title.text |
| dimensionKey | 雷达图数据的索引 | Array\<string\> | ['value1', 'value2', 'value3', 'value4', 'value5'] | - | - |
| dimensionName | 雷达图数据的名称 | Array\<string\> | ['用户发展情况', '收入情况', '流量使用', '套餐量发展', '活跃度情况'] | - | radar.indicator[index].name |
| data | - | Array\<{'value1': number, 'value2': number, ...}\> | [] | - | - |
| max | 雷达图刻度最大值 | Array\<number\> \| number | [100, 100, 100, 100, 100] | - | radar.indicator[index].max |
| min | 雷达图刻度最小值 | Array\<string\> \| number| - | - | radar.indicator[index].min |
| lineColor | 雷达图数据线条边框颜色 | Array\<string\> | ['#27a9f4', '#4ccb70'] | - | color |
| toolTipFormatter | toolTip展示格式 | (params, ticket, callback) => string | - | - | tooltip.formatter |
| legendShow | 是否显示图例 | boolean | true | - | legend.show |
| orient | 图例显示方向 | string | 'vertical' | - | legend.orient |
| legendLeft | 图例组件离容器左侧的距离 | string | 'center' | - | legend.left |
| legendTop | 图例组件离容器上侧的距离 | string | '20px' | - | legend.top |
| legendAlign | 图例组件文字对齐方式 | string | 'left' | - | legend.align |
| legendFormatter | 图例展示格式 | (params) => string | - | - | legend.formatter |
| toolTipFormatter | toolTip展示格式 | (params, ticket, callback) => string | - | - | tooltip.formatter |
| name | 多条雷达图数据中每个数据名称 | Array\<string\> | ['客户1', '客户2'] | - | legend.data |
| center | 雷达图中心位置 | Array\<string\> | ['50%', '60%'] | - | radar.center |
| radius | 雷达图区域大小 | Array\<string\> | ['0%', '70%'] | - | radar.radius |
| shape | 雷达图区域形状 | string | 'polygon' | - | radar.shape |
| splitAreaShow | 是否显示网格 | boolean | true | - | radar.splitArea.show |
| splitAreaColor(暂未启用) | 网格背景颜色 | Array\<string\> | ['transparent'] | - | radar.splitArea.areaStyle.color |
| splitLineShow | 是否显示网格线 | boolean | true | - | radar.splitLine.show |
| splitLineColor(暂未启用) | 网格线颜色 | Array\<string\> | ['#0394e7'] | - | radar.splitLine.lineStyle.color |
| fillingStyle | 是否填充数据区域 | boolean | true | - | - |
| fillingStyleColor | 填充数据区域颜色列表 | Array\<string\> | ['#3D91F7', '#61BE67'] | - | series.data[index].areStyle.normal.color |
| optionRadar | 对echarts图的配置补充，会覆盖前面的配置 | Object | {} | - | - |

### DataOption(暂未使用)

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :------ |
| url | 请求地址 | string | '/json/test.json' | - | - |
| objName | - | string | 'radarChart' | - | - |
| method | 请求方法 | 'get' \| 'post' | 'get' | - | - |
| data | 数据数组 | Array\<any\> | [] | - | - |
| params | 请求参数 | Object\<{}\> | {intfcType: 'baseProvince', intfcTypeName: '测试intfcTypeName',} | - | - |

### ExportOption(暂未使用)

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :------ |
| exportPermission | - | boolean | true | - | - |
| property | - | Array\<{}\> | [{exportName: '{dateName} {tab}', exportRiskType: '', exportAddress: 'riskPlatform/exportJson', exportParams: '',}] | - | - |

