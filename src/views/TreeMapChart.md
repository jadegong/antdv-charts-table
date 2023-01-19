[comment]: <> (2022/01/07 gqd 新增README文档;)

# 层级数据、树状数据图组件

## 基本

本组件为层级数据、树状数据图。

## 配置项

### props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :------- | :-- | :-- | :--- | :-------- |
| option | echarts图表配置项(默认未列出的配置项暂不知道是否有用并生效) | TreeMapOption | - | - |

### TreeMapOption

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :----- |
| data | 图表类型 | Array\<any\> \| null | null | - | - |
| childKey(默认未列出) | 数据中子级的key | string | 'children' | - | - |
| title | 图表标题 | string | '' | - | title.text |
| keyName | 统计字段名 | string | '' | - | - |
| valueName | 统计数据字段 | string | '' | - | - |
| colorList | 数据的颜色列表 | Array\<string\> | ['#f25118','#32bbe0','#4d7fff','#f95d60','#f4ac4e','#a179f1','#f1598d','#0080d9','#d05757','#83d540','#f46d9b','#346ef9','#ffdf33','#84adff','#ff8484','#3cb371',] | - | - |
| clickEvent(默认未列出) | 点击事件 | (e: Event) =\> void | '' | - | - |
| treeMapOption(默认未列出) | 对echarts图的配置补充，会覆盖前面的配置 | Object | {} | - | - |
| toolTipFormatter(默认未列出) | toolTip展示格式 | (params, scope?) => string | - | - | tooltip.formatter |
| legendShow(默认未列出) | 图例是否显示 | boolean | true | - | legend.show |
| legendLeft(默认未列出) | 图例组件离容器左侧的距离 | string | 'center' | - | legend.left |
| legendTop(默认未列出) | 图例组件离容器上侧的距离 | string | '20px' | - | legend.top |
| gridLeft(默认未列出) | grid组件离容器左侧的距离 | string | '10%' | - | grid.left |
| gridRight(默认未列出) | grid组件离容器右侧的距离 | string | '10%' | - | grid.right |
| gridTop(默认未列出) | grid组件离容器顶侧的距离 | string | '20%' | - | grid.top |
| gridBottom(默认未列出) | grid组件离容器底侧的距离 | string | '20%' | - | grid.bottom |
| xRotate(默认未列出) | x轴标签旋转角度 | number | 0 | - | xAxis[0].axisLabel.rotate |
| xAxisFormatter(默认未列出) | x轴标签展示格式 | (value) => string | toolUtil.formatCharts(value, 12) | - | xAxis[0].axisLabel.formatter |
| y1AxisName(默认未列出) | y1轴名称 | string | 'Y1轴' | - | yAxis[0].name |
| y1Rotate(默认未列出) | y1轴标签旋转角度 | number | 0 | - | yAxis[0].axisLabel.rotate |
| y1AxisFormatter(默认未列出) | y1轴标签展示格式 | (value, scope) => string | toolUtil.commafy(value) | - | yAxis[0].axisLabel.formatter |
| y2AxisName(默认未列出) | y2轴名称 | string | 'Y1轴' | - | yAxis[1].name |
| y2Rotate(默认未列出) | y2轴标签旋转角度 | number | 0 | - | yAxis[1].axisLabel.rotate |
| y2AxisFormatter(默认未列出) | y2轴标签展示格式 | (value, scope) => string | toolUtil.commafy(value) | - | yAxis[1].axisLabel.formatter |

### DataOption(暂未使用)

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :------ |
| url | 请求地址 | string | '/json/test.json' | - | - |
| objName | - | string | 'barChart' | - | - |
| method | 请求方法 | 'get' \| 'post' | 'get' | - | - |
| data | 数据数组 | Array\<any\> | [] | - | - |

[comment]: <> (注释掉不需要的行)
[comment]: <> (\| params \| 请求参数 \| Object\<{}\> \| {intfcType: 'baseProvince', intfcTypeName: '测试intfcTypeName',} \| - \| - \|)

### ExportOption(暂未使用)

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :------ |
| exportPermission | - | boolean | true | - | - |
| property | - | Array\<{}\> | [{exportName: '{dateName} {tab}', exportRiskType: '', exportAddress: 'riskPlatform/exportJson', exportParams: '',}] | - | - |

