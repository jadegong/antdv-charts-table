[comment]: <> (2021/12/30 gqd 新增README文档;)

# 3D柱状图组件

## 基本

本组件来源于[echarts-gl](https://echarts.apache.org/v4/zh/option-gl.html#globe)，其中type配置为bar3D。

## 配置项

### props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :------- | :-- | :-- | :--- | :-------- |
| option | echarts图表配置项 | Bar3DOption | - | - |
| dataOption | 柱状图数据配置(暂未使用) | DataOption | - | - |
| exportOption | 柱状图数据导出配置(暂未使用) | ExportOption | - | - |
| customizeOption | 暂未使用 | Array\<Object\> | - | - |
| GridX | 暂未使用 | number | 0 | - |
| GridY | 暂未使用 | number | 0 | - |
| w | 暂未使用 | number | 24 | - |
| h | 暂未使用 | number | 24 | - |

### Bar3DOption

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :----- |
| type | echart图表类型 | string | 'bar3D' | - | - |
| title | 图表标题 | string | 'Bar3D - Punch Card' | - | title.text |
| name | 统计数据名称seriesName | string | '测试seriesName' | - | series[0].name |

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

