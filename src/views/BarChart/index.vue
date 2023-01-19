<!-- v1.0.0 2023/01/18 gqd Add BarChart demo page; -->
<!--        2023/01/19 gqd Add markdown doc; -->
<template>
  <div>
    <div style="width: 60%; margin: 0 auto;">
      <act-table-chart :option="barChartOptions"></act-table-chart>
      <code-preview
        :sourceCode="sourceCode"
      >
      </code-preview>
      <read-me-doc />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Mock from 'mockjs';

import { toolUtil } from '../../utils/toolUtils';
import CodePreview from '../../components/CodePreview.vue';
import ReadMeDoc from './BarChart.md';

export default defineComponent({
  name: 'BarChartPage',
  components: {
    CodePreview,
    ReadMeDoc
  },
  data() {
    const mockData = Mock.mock({
      'result|12': [{
        'statsDate|+1': 202101,
        'totalCount|7000-9000': 9000,
        'successCount|3000-7000': 7000,
        'sucRate': '50%',
      }]
    });
    // 柱状图demo配置
    const barColumns = [
      {
        title: '序号',
        width: 70,
        dataIndex: '',
        customRender: (item) => {
          return item.index + 1;
        }
      },
      {
        title: '时间',
        dataIndex: 'statsDate',
      },
      {
        title: '调用总数',
        dataIndex: 'totalCount',
        customRender: (item) => toolUtil.commafy(item.text),
      },
      {
        title: '成功数',
        dataIndex: 'successCount',
        customRender: (item) => toolUtil.commafy(item.text),
      },
      {
        title: '成功率',
        dataIndex: 'sucRate',
        customRender: (item) => `${((item.record.successCount / item.record.totalCount) * 100).toFixed(2)}%`,
      },
    ];
    return {
      sourceCode: '',
      barChartOptions: {
        title: '柱状图demo',
        type: 'bar',
        data: mockData.result,
        columns: barColumns,
        toolBar: true,
        keyName: 'statsDate',
        valueName: ['successCount', 'totalCount'],
        name: ['成功数', '总数'],
        barColor: ['#52c41a', '#7687a1'],
        xRotate: 45,
        toolTipFormatter: (params: any) => {
          // console.log(params);
          let res = `时间：${params[0].name}`;
          res += `<br/>${params[0].marker} ${params[0].seriesName}：${toolUtil.commafy(params[0].value)}`;
          res += `<br/>${params[1].marker} ${params[1].seriesName}：${toolUtil.commafy(params[1].value)}`;
          // res += `<br/>失败次数：${toolUtil.commafy(params[0].data.originalData.failCount)}`;
          res += `<br/>成功率：${(params[0].value * 100 / params[1].value).toFixed(2)}%`;
          return res;
        },
        xAxisFormatter: (value: any) => value,
        yAxisName: '数量',
        yAxisFormatter: (value: any) => toolUtil.commafy(value),
        loading: false,
      },
    };
  },
  mounted() {
    this.loadSourceCode();
  },
  methods: {
    /**
     * 加载示例源代码
     */
    async loadSourceCode() {
      this.sourceCode = (
        await import('./demo.vue?raw')
      ).default;
    },
  },
});
</script>
