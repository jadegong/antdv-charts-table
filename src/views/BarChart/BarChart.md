[comment]: <> (2021/12/27 gqd 新增README文档;)

# 柱状图组件

## 配置项

### props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :------- | :-- | :-- | :--- | :-------- |
| option | echarts图表配置项 | BarOption | - | - |
| dataOption | 柱状图数据配置(暂未使用) | DataOption | - | - |
| exportOption | 柱状图数据导出配置(暂未使用) | ExportOption | - | - |
| customizeOption | 暂未使用 | Array\<Object\> | - | - |
| GridX | 暂未使用 | number | 0 | - |
| GridY | 暂未使用 | number | 0 | - |
| w | 暂未使用 | number | 24 | - |
| h | 暂未使用 | number | 24 | - |

### BarOption

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :----- |
| theme | 主题 | 'light' \| 'dark' | 'light' | - | - |
| type | echart图表类型 | string | 'bar' | - | - |
| keyName | x轴数据的索引 | string | 'key' | - | - |
| valueName | y轴数据的索引(支持多个y轴统计数据) | Array\<string\> | ['value', 'value1'] | - | - |
| barType | x轴方向：水平或者垂直 | 'horizontal' \| 'vertical' | 'horizontal' | - | - |
| title | 图表标题 | string | '物联卡总体发展趋势' | - | title.text |
| name | y轴名称 | Array\<string\> | ['用户数', '总用户数'] | - | series[index].name |
| barColor | 不同数据柱状颜色 | Array\<string\> | ['#27a9f4', '#4ccb70'] | - | series[index].itemStyle.normal.color |
| colorList | 横轴每条数据的颜色列表 | string | ['#27a9f4'] | - | - |
| gridLeft | grid组件离容器左侧的距离 | string | '10%' | - | grid.left |
| gridRight | grid组件离容器右侧的距离 | string | '10%' | - | grid.right |
| gridTop | grid组件离容器顶侧的距离 | string | '20%' | - | grid.top |
| gridBottom | grid组件离容器底侧的距离 | string | '20%' | - | grid.bottom |
| legendShow | 图例是否显示 | boolean | true | - | legend.show |
| xRotate | x轴标签旋转角度 | number | 0 | - | xAxis[index].axisLabel.rotate |
| orient | 图例列表的布局朝向 | string | 'horizontal' | - | legend.orient |
| legendLeft | 图例组件离容器左侧的距离 | string | 'center' | - | legend.left |
| legendTop | 图例组件离容器上侧的距离 | string | '20px' | - | legend.top |
| xAxisLabelColor | x轴标签颜色(暂未启用) | string | theme['chart-label'] | - | - |
| yAxisLabelColor | y轴标签颜色(暂未启用) | string | theme['chart-label'] | - | - |
| optionBar | 对echarts图的配置补充，会覆盖前面的配置 | string | {} | - | - |
| legendFormatter | legend展示格式 | (params) => string | toolUtil.formatCharts(params, 22) | - | legend.formatter |
| toolTipFormatter | toolTip展示格式 | (params, ticket, callback) => string | - | - | tooltip.formatter |
| xAxisFormatter | x轴标签展示格式 | (value) => string | toolUtil.commafy(value) | - | xAxis[index].axisLabel.formatter |
| yAxisFormatter | y轴标签展示格式 | (value, indexNumber) => string | toolUtil.formatCharts(value, 18) | - | yAxis[index].axisLabel.formatter |
| labelFormatter | ??数据标签展示格式 | (param) => string | toolUtil.commafy(value) | - | series[index].label.normal.formatter |

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

