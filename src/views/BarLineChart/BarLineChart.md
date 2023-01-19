[comment]: <> (2021/12/28 gqd 新增README文档;)

# 柱状折线图组件

## 配置项

### props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :------- | :-- | :-- | :--- | :-------- |
| option | echarts图表配置项 | BarLineOption | - | - |
| dataOption | 柱状图数据配置(暂未使用) | DataOption | - | - |
| exportOption | 柱状图数据导出配置(暂未使用) | ExportOption | - | - |
| customizeOption | 暂未使用 | Array\<Object\> | - | - |
| GridX | 暂未使用 | number | 0 | - |
| GridY | 暂未使用 | number | 0 | - |
| w | 暂未使用 | number | 24 | - |
| h | 暂未使用 | number | 24 | - |

### BarLineOption

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :----- |
| theme | 主题 | 'light' \| 'dark' | 'light' | - | - |
| type | echart图表类型 | string | 'barLine' | - | - |
| keyName | x轴数据的索引 | string | 'key' | - | - |
| barValueName | y轴柱状数据的索引(支持多个y轴统计数据) | Array\<string\> | ['value', 'value2'] | - | - |
| lineValueName | y轴折线数据的索引(支持多个y轴统计数据) | Array\<string\> | ['value1'] | - | - |
| barName | y轴柱状统计名称，计入图例 | Array\<string\> | ['总用户数', '停机用户数'] | - | series[index].name |
| lineName | y轴折线统计名称，计入图例 | Array\<string\> | ['停机用户数'] | - | series[index].name |
| barColor | 不同数据柱状颜色 | Array\<string\> | ['#27a9f4', '#4ccb70'] | - | series[index].itemStyle.normal.color |
| lineColor | 不同数据折线颜色 | Array\<string\> | ['#f6ca3f'] | - | series[index].itemStyle.normal.color |
| title | 图表标题 | string | '' | - | title.text |
| legendAlign(未启用) | - | string | 'left' | - | - |
| gridLeft | grid组件离容器左侧的距离 | string | '10%' | - | grid.left |
| gridRight | grid组件离容器右侧的距离 | string | '10%' | - | grid.right |
| gridTop | grid组件离容器顶侧的距离 | string | '20%' | - | grid.top |
| gridBottom | grid组件离容器底侧的距离 | string | '20%' | - | grid.bottom |
| legendShow | 图例是否显示 | boolean | true | - | legend.show |
| overlap | 是否数据堆叠 | boolean | false | - | series[index].stack = '总量' |
| hideMarkPoint | 是否隐藏图表标注 | boolean | false | - | seriesLine.markPoint = Object |
| xAxisLabelColor(*暂未启用*) | x轴标签颜色 | string | theme['chart-label'] | - | - |
| xRotate | x轴标签旋转角度 | number | 0 | - | xAxis[index].axisLabel.rotate |
| orient | 图例列表的布局朝向 | string | 'horizontal' | - | legend.orient |
| legendLeft | 图例组件离容器左侧的距离 | string | 'center' | - | legend.left |
| legendTop | 图例组件离容器上侧的距离 | string | '20px' | - | legend.top |
| y1AxisName | y1轴默认名称 | string | '' | - | yAxis[0].name |
| y2AxisName | y2轴默认名称 | string | '' | - | yAxis[1].name |
| y1AxisLabelColor(*暂未启用*) | y轴标签颜色 | string | theme['chart-label'] | - | - |
| y2AxisLabelColor(*暂未启用*) | y轴标签颜色 | string | theme['chart-label'] | - | - |
| y1Rotate | y1轴标签旋转角度 | number | 0 | - | yAxis[0].axisLabel.rotate |
| y2Rotate | y2轴标签旋转角度 | number | 0 | - | yAxis[1].axisLabel.rotate |
| showY2Axis | y2轴是否显示 | boolean | true | - | yAxis[1].show |
| showYAxisName | 是否显示y轴名称 | boolean | true | - | yAxis[index].name = '' |
| splitYAxis | 是否分割y坐标轴，会自动设置坐标轴刻度及最大最小值 | boolean | true | - | yAxis[index].['interval'|'min'|'max'] = number |
| optionBarLine | 对echarts图的配置补充，会覆盖前面的配置 | string | {} | - | - |
| toolTipFormatter | toolTip展示格式 | (params, toolUtil) => string | - | - | tooltip.formatter |
| xAxisFormatter | x轴标签展示格式 | (value, toolUtil) => string | toolUtil.commafy(value) | - | xAxis[index].axisLabel.formatter |
| y1AxisFormatter | y1轴标签展示格式 | (value, toolUtil) => string | toolUtil.commafy(value) | - | yAxis[0].axisLabel.formatter |
| y2AxisFormatter | y2轴标签展示格式 | (value, toolUtil) => string | toolUtil.commafy(value) | - | yAxis[1].axisLabel.formatter |
| labelFormatter | ??数据标签展示格式 | (value, toolUtil) => string | value => value | - | seriesBar.label.normal.formatter |
| markPointFormatter | 图表标注展示格式 | (value, toolUtil) => string | toolUtil.commafy(value) | - | seriesLine.markPoint.data[index].label.['normal'|'emphasis'].formatter |

[comment]: <> (| colorList | 横轴每条数据的颜色列表 | string | ['#27a9f4'] | - | - |)

### DataOption(暂未使用)

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :------ |
| url | 请求地址 | string | '/json/test.json' | - | - |
| objName | - | string | 'barLineChart' | - | - |
| method | 请求方法 | 'get' \| 'post' | 'get' | - | - |
| data | 数据数组 | Array\<any\> | [] | - | - |
| params | 请求参数 | Object\<{}\> | {intfcType: 'baseProvince', intfcTypeName: '测试intfcTypeName',} | - | - |

### ExportOption(暂未使用)

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :------ |
| exportPermission | - | boolean | true | - | - |
| property | - | Array\<{}\> | [{exportName: '{dateName} {tab}', exportRiskType: '', exportAddress: 'riskPlatform/exportJson', exportParams: '',}] | - | - |

