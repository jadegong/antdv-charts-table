<!-- v1.0.0 2023/01/17 gqd Lines chart table demo; -->
<template>
  <div>
    <div style="width: 60%; margin: 0 auto">
      <act-table-chart :option="linesChartOptions"></act-table-chart>
      <code-preview :sourceCode="sourceCode"> </code-preview>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { toolUtil } from '../../utils/toolUtils';
import CodePreview from '../../components/CodePreview.vue';

export default defineComponent({
  name: 'LinesChartPage',
  components: {
    CodePreview,
  },
  data() {
    const generateRandomInt = (max) => {
      return Math.floor(Math.random() * max);
    };
    let linesData = [];
    for (let i = 0; i < 12; i++) {
      linesData.push({
        statsDate: 202101 + i,
        food: generateRandomInt(4000) + 5000,
        clothes: generateRandomInt(4000) + 5000,
        traffic: generateRandomInt(4000) + 5000,
      });
    }
    // 多折线图demo配置
    const linesColumns = [
      {
        title: '序号',
        width: 60,
        dataIndex: '',
        customRender: ({ text, record, index }) => {
          return index + 1;
        },
      },
      {
        title: '月度',
        dataIndex: 'statsDate',
      },
      {
        title: '饮食消费',
        dataIndex: 'food',
        customRender: ({ text }) => toolUtil.commafy(text),
      },
      {
        title: '衣着消费',
        dataIndex: 'clothes',
        customRender: ({ text }) => toolUtil.commafy(text),
      },
      {
        title: '交通消费',
        dataIndex: 'traffic',
        customRender: ({ text }) => toolUtil.commafy(text),
      },
    ];
    return {
      sourceCode: '',
      linesChartOptions: {
        title: '个人消费趋势',
        type: 'lines',
        data: linesData,
        columns: linesColumns,
        toolBar: true,
        keyName: 'statsDate',
        keys: ['food', 'clothes', 'traffic'],
        names: ['饮食', '衣着', '交通'],
        y1AxisName: '金额(元)',
        xRotate: 45,
        toolTipFormatter: (params) => {
          let res = `月度：${params[0].name}`;
          let totalCost = 0;
          for (let i = 0, l = params.length; i < l; i++) {
            res += `<br/>${params[i].seriesName} : ${toolUtil.commafy(
              params[i].value
            )}元`;
            totalCost += params[i].value;
          }
          res += `<br/>总额：${toolUtil.commafy(totalCost)}元`;
          return res;
        },
        xAxisFormatter: (value) => {
          // return toolUtil.iotDateFormat(value, rangePickerType, {ysp: '/', msp: rangePickerType === 'month' ? '' : '/', dsp: '', dtsp: ' ', housp: '',});
          return value;
        },
        yAxisFormatter: (value) =>
          toolUtil.dataUnit('COUNT_BILLION_DISUNITY', '', value),
        // smooth: true,
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
      this.sourceCode = (await import('./demo.vue?raw')).default;
    },
  },
});
</script>
