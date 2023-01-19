[comment]: <> (2022/01/07 gqd 新增README文档;)

# 使用three.js编写的3D柱状图组件3

## 基本

本组件为3D柱状图3，依赖于[threejs](https://threejs.org)实现基础柱状功能，以及[tween.js](https://github.com/tweenjs/tween.js)实现动画效果。本组件具备粒子效果。

## 配置项

### props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :------- | :-- | :-- | :--- | :-------- |
| option | echarts图表配置项 | ThreeBar3Option | - | - |
| dataOption | 3D柱状图数据配置(暂未使用) | DataOption | - | - |
| exportOption | 3D柱状图数据导出配置(暂未使用) | ExportOption | - | - |
| customizeOption | 暂未使用 | Array\<Object\> | - | - |
| GridX | 暂未使用 | number | 0 | - |
| GridY | 暂未使用 | number | 0 | - |
| w | 暂未使用 | number | 24 | - |
| h | 暂未使用 | number | 24 | - |

### ThreeBar3Option

| 参数 | 说明 | 类型 | 默认值 | 版本 | 等同echarts配置项 |
| :------- | :-- | :-- | :--- | :-------- | :----- |
| theme | 图表主题 | string | 'light' | - | - |
| type | 图表类型 | string | 'threeBar3' | - | - |
| title | 图表标题 | string | '3D柱图3' | - | - |
| keyName | x轴字段名 | string | 'provincename' | - | - |
| valueName | 统计数据字段名 | string | 'totalcnt' | - | - |
| dataLength | 柱体个数 | number | 5 | - | - |
| barSize | 柱体的大小(宽度) | number | 1.2 | - | - |
| barHeight | 柱体的大小(高度) | Array\<number\> | [9, 7, 5, 3, 1] | - | - |

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

