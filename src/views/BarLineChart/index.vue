<!-- v1.0.0 2023/01/17 gqd BarLine chart table demo; -->
<template>
  <div>
    <div style="width: 60%; margin: 0 auto">
      <act-table-chart :option="barLineChartOptions"></act-table-chart>
      <code-preview :sourceCode="sourceCode"> </code-preview>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CodePreview from '../../components/CodePreview.vue';

import { toolUtil } from '../../utils/toolUtils';
export default defineComponent({
  name: 'BarLineChartPage',
  components: {
    CodePreview
  },
  data() {
    const barLineData = [
      {
        year: 2011,
        birthNum: 16150000,
        deathNum: 9660000,
        birthRate: 13.27,
        deathRate: 7.14,
      },
      {
        year: 2012,
        birthNum: 16460000,
        deathNum: 9720000,
        birthRate: 14.57,
        deathRate: 7.13,
      },
      {
        year: 2013,
        birthNum: 16520000,
        deathNum: 9790000,
        birthRate: 13.03,
        deathRate: 7.13,
      },
      {
        year: 2014,
        birthNum: 16830000,
        deathNum: 9740000,
        birthRate: 13.83,
        deathRate: 7.12,
      },
      {
        year: 2015,
        birthNum: 16550000,
        deathNum: 10130000,
        birthRate: 11.99,
        deathRate: 7.07,
      },
      {
        year: 2016,
        birthNum: 17860000,
        deathNum: 10230000,
        birthRate: 13.57,
        deathRate: 7.04,
      },
      {
        year: 2017,
        birthNum: 17230000,
        deathNum: 9860000,
        birthRate: 12.64,
        deathRate: 7.06,
      },
      {
        year: 2018,
        birthNum: 15230000,
        deathNum: 9930000,
        birthRate: 10.86,
        deathRate: 7.08,
      },
      {
        year: 2019,
        birthNum: 14650000,
        deathNum: 9980000,
        birthRate: 10.41,
        deathRate: 7.09,
      },
      {
        year: 2020,
        birthNum: 12030000,
        deathNum: 10360000,
        birthRate: 8.52,
        deathRate: 7.07,
      },
      {
        year: 2021,
        birthNum: 10620000,
        deathNum: 10140000,
        birthRate: 7.52,
        deathRate: 7.18,
      },
    ];
    // 柱状折线图demo配置
    const barLineColumns = [
      {
        title: '序号',
        width: 60,
        dataIndex: '',
        customRender: ({ text, record, index }) => {
          return index + 1;
        },
      },
      {
        title: '年份',
        dataIndex: 'year',
      },
      {
        title: '出生人口数',
        dataIndex: 'birthNum',
        customRender: ({ text }) => toolUtil.commafy(text),
      },
      {
        title: '死亡人口数',
        dataIndex: 'deathNum',
        customRender: ({ text }) => toolUtil.commafy(text),
      },
      {
        title: '出生率',
        dataIndex: 'birthRate',
        customRender: ({ text }) => `${text}‰`,
      },
      {
        title: '死亡率',
        dataIndex: 'deathRate',
        customRender: ({ text }) => `${text}‰`,
      },
    ];
    return {
      sourceCode: '',
      barLineChartOptions: {
        title: '出生死亡人口数统计及人口出生率死亡率曲线',
        type: 'barLine',
        data: barLineData,
        columns: barLineColumns,
        toolBar: true,
        keyName: 'year',
        barValueName: ['birthNum', 'deathNum'],
        lineValueName: ['birthRate', 'deathRate'],
        barName: ['出生人口数', '死亡人口数'],
        lineName: ['出生率', '死亡率'],
        lineColor: ['#f6ca3f', '#ff7f4c'],
        xRotate: 45,
        y1AxisName: '数量',
        y2AxisName: '比率(‰)',
        hideMarkPoint: true,
        splitYAxis: false,
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
