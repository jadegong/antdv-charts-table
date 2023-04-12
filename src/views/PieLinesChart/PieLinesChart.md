[comment]: <> (2023/04/12 gqd 新增README文档;)

# 多折线图饼图联动组件

## 配置项

### props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :------- | :-- | :-- | :--- | :-------- |
| option | 自定义echarts图表配置项 | LinesOption | - | - |
| dataOption | 折线图数据配置(暂未使用) | DataOption | - | - |
| exportOption | 折线图数据导出配置(暂未使用) | ExportOption | - | - |
| customizeOption | 暂未使用 | Array\<Object\> | - | - |
| GridX | 暂未使用 | number | 0 | - |
| GridY | 暂未使用 | number | 0 | - |
| w | 暂未使用 | number | 24 | - |
| h | 暂未使用 | number | 24 | - |

### LinesOption

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :----- |
| theme | 主题 | 'light' \| 'dark' | 'light' | - | - |
| type | echart图表类型 | string | 'pieLines' | - | - |
| data | 折线图数据源 | Array\<any\> | [] | - | - |
| title | 图表标题 | string | '' | - | title.text |
| name(暂未使用) | 折线图名称 | string | '多折线图' | - | - |
| keyName | x轴数据的索引 | string | 'key' | - | - |
| valueName(暂未使用) | y轴数据的索引 | string | 'value' | - | - |
| gridLeft | grid组件离容器左侧的距离 | string | '30%' | - | grid.left |
| gridRight | grid组件离容器右侧的距离 | string | '10%' | - | grid.right |
| gridTop | grid组件离容器顶侧的距离 | string | '20%' | - | grid.top |
| gridBottom | grid组件离容器底侧的距离 | string | '20%' | - | grid.bottom |
| legendShow | 图例是否显示 | boolean | true | - | legend.show |
| orient | 图例列表的布局朝向 | string | 'horizontal' | - | legend.orient |
| legendLeft | 图例组件离容器左侧的距离 | string | 'center' | - | legend.left |
| legendTop | 图例组件离容器上侧的距离 | string | '20px' | - | legend.top |
| xRotate | x轴标签旋转角度 | number | 0 | - | xAxis[0].axisLabel.rotate |
| xAxisLabelColor(暂未启用) | x轴标签颜色 | string | theme['chart-label'] | - | - |
| y1Rotate | y1轴标签旋转角度 | number | 0 | - | yAxis[0].axisLabel.rotate |
| y1AxisName | y1轴名称 | string | 'Y1轴' | - | yAxis[0].name |
| y1AxisLabelColor(暂未启用) | y1轴标签颜色 | string | theme['chart-label'] | - | - |
| y2Rotate | y2轴标签旋转角度 | number | 0 | - | yAxis[1].axisLabel.rotate |
| y2AxisName | y2轴名称 | string | 'Y2轴' | - | yAxis[1].name |
| y2AxisLabelColor(暂未启用) | y2轴标签颜色 | string | theme['chart-label'] | - | - |
| names | 每条折线数据的名称 | Array\<string\> | ['用户总数', '新增用户数'] | - | - |
| keys | 每条折线数据的key | Array\<string\> | ['key1Value', 'key2Value'] | - | - |
| y1Keys | 每条折线数据相对于y1轴的key | Array\<string\> | [] | - | - |
| y2Keys | 每条折线数据相对于y2轴的key | Array\<string\> | [] | - | - |
| isAreaStyle | 折线图显示区域面积图 | boolean | false | - | series[index].areaStyle = Obejct |
| colorList | 横轴每条折线的颜色列表 | Array\<string\> | ['#478ff7','#ff7f4c','#7fa7b8','#f1485b','#26cdcb','#7565c7','#27a9f4','#778efe','#4ccb70','#ffca3a',] | - | series[index].lineStyle.normal.color |
| optionLines | 对echarts图的配置补充，会覆盖前面的配置 | Object | {} | - | - |
| enableDoubleYAxis | 是否启用双y轴 | boolean | false | - | - |
| resetOrder | 设置是否对数据重排序 | boolean | true | - | - |
| symbolSize | 折线每个节点的symbol大小 | number | 6 | - | series[0].symbolSize |
| showDataZoom | 是否启用区域缩放 | boolean | false | - | dataZoom = Array\<any\> |
| lastDotted | 最后数据是否虚线显示 | boolean | false | - | - |
| toolTipFormatter | toolTip展示格式 | (params, ticket, callback) => string | - | - | tooltip.formatter |
| legendFormatter | 图例展示格式(不用配置，单折线图不需要图例) | (params) => string | toolUtil.formatCharts(params, 22) | - | legend.formatter |
| xAxisFormatter | x轴标签展示格式 | (value) => string | toolUtil.commafy(value) | - | xAxis[0].axisLabel.formatter |
| yAxisFormatter | y轴标签展示格式 | (value, indexNumber) => string | toolUtil.formatCharts(value, 18) | - | yAxis[0].axisLabel.formatter |
| pieCenter | 饼图圆心位置 | Array\<String\> | ['48%', '50%'] | - | series[{type: 'pie'}].center |
| pieRadius | 饼图圆大小 | Array\<String\> \| String | ['30%', '50%'] | - | series[{type: 'pie'}].radius |

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

