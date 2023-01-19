[comment]: <> (2022/01/05 gqd 新增README文档;)

# 地图echarts组件

## 基本

本组件为地图散点气泡图，依赖于[echarts-gl](https://echarts.apache.org/v4/zh/option-gl.html#globe)，其中type配置为bar3D。

## 配置项

### props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :------- | :-- | :-- | :--- | :-------- |
| option | echarts图表配置项 | MapOption | - | - |
| dataOption | 地图echarts图数据配置(暂未使用) | DataOption | - | - |
| exportOption | 地图echarts图数据导出配置(暂未使用) | ExportOption | - | - |
| customizeOption | 暂未使用 | Array\<Object\> | - | - |
| GridX | 暂未使用 | number | 0 | - |
| GridY | 暂未使用 | number | 0 | - |
| w | 暂未使用 | number | 24 | - |
| h | 暂未使用 | number | 24 | - |

### MapOption

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :----- |
| theme | echart图表主体 | string | 'light' | - | - |
| type | echart图表类型 | string | 'map' | - | - |
| title | 图表标题 | string | '地图' | - | title.text |
| selectName | 地图层级：省份或者全国 | string | '全国' | - | geo.map = 'china' \| selectName |
| data | 数据数组 | Array\<any\> | [] | - | - |
| mapOption | 额外的配置项 | Object | {} | - | - |

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

