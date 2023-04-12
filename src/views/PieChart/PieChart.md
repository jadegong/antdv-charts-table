[comment]: <> (2021/12/30 gqd 新增README文档;)

# 饼图组件

## 配置项

### props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :------- | :-- | :-- | :--- | :-------- |
| option | 自定义echarts图表配置项 | PieOption | - | - |
| dataOption | 饼图数据配置(暂未使用) | DataOption | - | - |
| exportOption | 饼图数据导出配置(暂未使用) | ExportOption | - | - |
| customizeOption | 暂未使用 | Array\<Object\> | - | - |
| GridX | 暂未使用 | number | 0 | - |
| GridY | 暂未使用 | number | 0 | - |
| w | 暂未使用 | number | 24 | - |
| h | 暂未使用 | number | 24 | - |

### PieOption

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :----- |
| theme | 主题 | 'light' \| 'dark' | 'light' | - | - |
| type | echart图表类型 | string | 'pie' | - | - |
| title | 图表标题 | string | '' | - | title.text |
| name | 饼图名称 | string | '饼图' | - | series[0].name |
| keyName | 文字的索引 | string | 'key' | - | - |
| valueName | 数据的索引 | string | 'value' | - | - |
| orient | 图例列表的布局朝向 | string | 'horizontal' | - | legend.orient |
| legendShow | 图例是否显示 | boolean | true | - | legend.show |
| legendAlign | 图例布局 | string | 'left' | - | legend.align |
| legendLeft | 图例组件离容器左侧的距离 | string | 'center' | - | legend.left |
| legendTop | 图例组件离容器上侧的距离 | string | '20px' | - | legend.top |
| colorList | 每条数据的颜色列表 | string | ['#f25118', '#f4db4e', '#32bbe0', '#a5ec7f', '#4d7fff', '#f95d60', '#f4ac4e', '#a179f1', '#f1598d', '#0080d9', '#d05757', '#83d540', '#f46d9b', '#346ef9', '#ffdf33', '#84adff', '#ff8484', '#3cb371'] | - | - |
| pieCenter | 饼图圆心位置 | Array\<String\> | ['48%', '50%'] | - | series[0].center |
| pieRadius | 饼图圆大小 | Array\<String\> \| String | ['30%', '50%'] | - | series[0].radius |
| roseType | 是否展示成南丁格尔图 | Boolean | false | - | series[0].roseType |
| optionPie | 对echarts图的配置补充，会覆盖前面的配置 | Object | {} | - | - |
| legendFormatter | 图例展示格式(不用配置，单饼图不需要图例) | (params) => string | toolUtil.formatCharts(params, 22) | - | legend.formatter |
| showTooltip | 是否显示tooltip | boolean | false | - | tooltip.show |
| toolTipFormatter | toolTip展示格式 | (params, ticket, callback) => string | - | - | tooltip.formatter |
| xAxisFormatter | x轴标签展示格式 | (value) => string | toolUtil.commafy(value) | - | xAxis[0].axisLabel.formatter |
| yAxisFormatter | y轴标签展示格式 | (value, indexNumber) => string | toolUtil.formatCharts(value, 18) | - | yAxis[0].axisLabel.formatter |

### DataOption(暂未使用)

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :------ |
| url | 请求地址 | string | '/json/test.json' | - | - |
| objName | - | string | 'barChart' | - | - |
| method | 请求方法 | 'get' \| 'post' | 'get' | - | - |
| data | 数据数组 | Array\<any\> | [] | - | - |
| params | 请求参数 | Object\<{}\> | {intfcType: 'baseProvince', intfcTypeName: '测试intfcTypeName',} | - | - |

### ExportOption(暂未使用)

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :------ |
| exportPermission | - | boolean | true | - | - |
| property | - | Array\<{}\> | [{exportName: '{dateName} {tab}', exportRiskType: '', exportAddress: 'riskPlatform/exportJson', exportParams: '',}] | - | - |

