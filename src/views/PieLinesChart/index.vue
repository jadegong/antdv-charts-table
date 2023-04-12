<!-- v0.0.4-alpha 2023/04/12 gqd Add pieLines chart demo; -->
<template>
  <div>
    <div style="width: 80%; margin: 0 auto">
      <act-table-chart :option="pieLinesChartOptions"></act-table-chart>
      <code-preview :sourceCode="sourceCode"> </code-preview>
      <read-me-doc />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { toolUtil } from '../../utils/toolUtils';
import CodePreview from '../../components/CodePreview.vue';
import ReadMeDoc from './PieLinesChart.md';

export default defineComponent({
  name: 'PieLinesChartPage',
  components: {
    CodePreview,
    ReadMeDoc
  },
  data() {
    const generateRandomInt = (max) => {
      return Math.floor(Math.random() * max);
    };
    let pieLinesData = [];
    for (let i = 0; i < 12; i++) {
      pieLinesData.push({
        statsDate: 202101 + i,
        food: generateRandomInt(4000) + 5000,
        clothes: generateRandomInt(4000) + 5000,
        traffic: generateRandomInt(4000) + 5000,
      });
    }
    // 多折线图demo配置
    const pieLinesColumns = [
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
      pieLinesChartOptions: {
        title: '个人消费趋势',
        type: 'pieLines',
        data: pieLinesData,
        columns: pieLinesColumns,
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
        yAxisFormatter: (value) => toolUtil.dataUnit('COUNT_BILLION_DISUNITY', '', value),
        pieCenter: ['15%', '50%'],
        pieRadius: '30%',
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

