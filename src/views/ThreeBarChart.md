[comment]: <> (2022/01/06 gqd 新增README文档;)

# 使用three.js编写的3D柱状图组件

## 基本

本组件为3D柱状图，依赖于[threejs](https://threejs.org)。

## 配置项

### props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :------- | :-- | :-- | :--- | :-------- |
| option | echarts图表配置项 | ThreeBarOption | - | - |
| dataOption | 3D柱状图数据配置(暂未使用) | DataOption | - | - |
| exportOption | 3D柱状图数据导出配置(暂未使用) | ExportOption | - | - |
| customizeOption | 暂未使用 | Array\<Object\> | - | - |
| GridX | 暂未使用 | number | 0 | - |
| GridY | 暂未使用 | number | 0 | - |
| w | 暂未使用 | number | 24 | - |
| h | 暂未使用 | number | 24 | - |

### ThreeBarOption

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :----- |
| theme | 图表主题 | string | 'light' | - | - |
| type | 图表类型 | string | 'threeBar' | - | - |
| title | 图表标题 | string | '3D柱图' | - | - |
| keyName | x轴字段名 | string | 'provincename' | - | - |
| valueName | 统计数据字段名 | string | 'totalcnt' | - | - |
| keyPosition | x轴标签位置(相对于柱状) | string | 'bottom' | - | - |
| dataLength | 柱体个数 | number | 5 | - | - |
| barSize | 柱体的大小(宽度) | number | 1.2 | - | - |
| barHeight | 柱体的大小(高度) | Array\<number\> | [9, 7, 5, 3, 1] | - | - |
| data | 数据数组 | Array\<any\> | [] | - | - |
| rotate | 底部标签旋转角度(deg) | number | 0 | - | - |

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

