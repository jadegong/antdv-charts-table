[comment]: <> (2021/12/30 gqd 新增README文档;)

# 饼图组件

## 配置项

### props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :------- | :-- | :-- | :--- | :-------- |
| option | 自定义echarts图表配置项 | PieOption | - | - |
| dataOption | 折线图数据配置(暂未使用) | DataOption | - | - |
| exportOption | 折线图数据导出配置(暂未使用) | ExportOption | - | - |
| customizeOption | 暂未使用 | Array\<Object\> | - | - |
| GridX | 暂未使用 | number | 0 | - |
| GridY | 暂未使用 | number | 0 | - |
| w | 暂未使用 | number | 24 | - |
| h | 暂未使用 | number | 24 | - |

### PieOption

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :----- |
| theme | 主题 | 'light' \| 'dark' | 'light' | - | - |
| type | echart图表类型 | string | 'line' | - | - |
| data(暂未启用) | - | Array\<any\> | [] | - | - |
| title | 图表标题 | string | '' | - | title.text |
| name | 折线图名称 | string | '折线图' | - | series[0].name |
| keyName | x轴数据的索引 | string | 'key' | - | - |
| valueName | y轴数据的索引 | string | 'value' | - | - |
| yAxisName | y轴名称 | string | 'Y轴坐标' | - | yAxis[0].name |
| xRotate | x轴标签旋转角度 | number | 0 | - | xAxis[0].axisLabel.rotate |
| xAxisLabelColor | x轴标签颜色(暂未启用) | string | theme['chart-axisLine'] | - | - |
| yRotate | y轴标签旋转角度 | number | 0 | - | yAxis[0].axisLabel.rotate |
| yAxisLabelColor | y轴标签颜色(暂未启用) | string | theme['chart-axisLine'] | - | - |
| nameTextColor | y轴名称颜色(暂未启用) | string | theme['chart-label'] | - | - |
| color | 折线颜色 | string | '' | - | series[0].['itemStyle'\|'lineStyle'].color |
| symbolSize | 折线每个节点的symbol大小 | number | 6 | - | series[0].symbolSize |
| colorList(默认未定义) | 横轴每条数据的颜色列表 | string | ['#27a9f4'] | - | - |
| isAreaStyle | 折线图显示区域面积图 | boolean | true | - | series[0].areaStyle = Obejct |
| colorStops | ??区域面积图的颜色方案 | Array\<Object\<{offset: number, color: string}\>\> | - | - | series[0].areaStyle.normal.color.colorStops |
| resetOrder | 设置是否对数据重排序 | boolean | true | - | - |
| showDataZoom(暂未使用) | - | boolean | false | - | - |
| lastDotted | 最后数据是否虚线显示 | boolean | false | - | - |
| optionLine | 对echarts图的配置补充，会覆盖前面的配置 | Object | {} | - | - |
| legendFormatter | 图例展示格式(不用配置，单折线图不需要图例) | (params) => string | toolUtil.formatCharts(params, 22) | - | legend.formatter |
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

