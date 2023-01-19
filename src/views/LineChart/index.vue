<!-- v1.0.0 2023/01/17 gqd Line chart table demo; -->
<!--        2023/01/19 gqd Add markdown doc; -->
<template>
  <div>
    <div style="width: 60%; margin: 0 auto;">
      <act-table-chart :option="lineChartOptions"></act-table-chart>
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

import { toolUtil } from '../../utils/toolUtils';
import CodePreview from '../../components/CodePreview.vue';
import ReadMeDoc from './LineChart.md';

export default defineComponent({
  name: 'LineChartPage',
  components: {
    CodePreview,
    ReadMeDoc
  },
  data() {
    const lineData = [
      {
        statsDate: 202101,
        totalCount: 7000,
        successCount: 4000,
        sucRate: '50%',
      },
      {
        statsDate: 202102,
        totalCount: 7030,
        successCount: 3000,
        sucRate: '50%',
      },
      {
        statsDate: 202103,
        totalCount: 8030,
        successCount: 4000,
        sucRate: '50%',
      },
      {
        statsDate: 202104,
        totalCount: 8600,
        successCount: 3600,
        sucRate: '50%',
      },
      {
        statsDate: 202105,
        totalCount: 8200,
        successCount: 4800,
        sucRate: '50%',
      },
      {
        statsDate: 202106,
        totalCount: 7900,
        successCount: 4300,
        sucRate: '50%',
      },
    ];
    // 折线图demo配置
    const lineColumns = [
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
      lineChartOptions: {
        title: '单折线图demo',
        type: 'line',
        data: lineData,
        columns: lineColumns,
        toolBar: true,
        name: '成功数',
        keyName: 'statsDate',
        valueName: 'successCount',
        yAxisName: '数量',
        xRotate: 45,
        isAreaStyle: false,
        color: '#1890ff',
        toolTipFormatter: (params) => {
          let res = `时间：${params[0].name}`;
          res += `<br/>${params[0].seriesName} : ${toolUtil.commafy(params[0].value)}`;
          return res;
        },
        xAxisFormatter: (value) => {
          return value;
        },
        yAxisFormatter: (value) => toolUtil.commafy(value),
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
