<!-- v1.0.0 2023/01/18 gqd Add PieChart demo page; -->
<!--        2023/01/19 gqd Add markdown doc; -->
<template>
  <div>
    <div style="width: 60%; margin: 0 auto">
      <act-table-chart :option="pieChartOptions"></act-table-chart>
      <code-preview :sourceCode="sourceCode"> </code-preview>
      <read-me-doc />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Mock from 'mockjs';

import { toolUtil } from '../../utils/toolUtils';
import CodePreview from '../../components/CodePreview.vue';
import ReadMeDoc from './PieChart.md';

export default defineComponent({
  name: 'PieChartPage',
  components: {
    CodePreview,
    ReadMeDoc
  },
  data() {
    const pieData = Mock.mock({
      result: [
        {
          industry: 'building',
          industryName: '建筑建材',
          'outputValue|10000-100000': 100000,
        },
        {
          industry: 'mineral',
          industryName: '冶金矿产',
          'outputValue|10000-100000': 100000,
        },
        {
          industry: 'chemical',
          industryName: '石油化工',
          'outputValue|10000-100000': 100000,
        },
        {
          industry: 'traffic',
          industryName: '交通运输',
          'outputValue|10000-100000': 100000,
        },
        {
          industry: 'infomation',
          industryName: '信息产业',
          'outputValue|10000-100000': 100000,
        },
        {
          industry: 'agriculture',
          industryName: '农林牧渔',
          'outputValue|10000-100000': 100000,
        },
        {
          industry: 'organization',
          industryName: '机构组织',
          'outputValue|10000-100000': 100000,
        },
        {
          industry: 'hydropower',
          industryName: '水利水电',
          'outputValue|10000-100000': 100000,
        },
        {
          industry: 'mechanical',
          industryName: '机械机电',
          'outputValue|10000-100000': 100000,
        },
        {
          industry: 'textile',
          industryName: '服装纺织',
          'outputValue|10000-100000': 100000,
        },
        {
          industry: 'travel',
          industryName: '旅游休闲',
          'outputValue|10000-100000': 100000,
        },
      ],
    });
    // 饼图demo配置
    const pieColumns = [
      {
        title: '序号',
        width: 70,
        dataIndex: '',
        customRender: (item) => {
          return item.index + 1;
        },
      },
      {
        title: '行业名称',
        dataIndex: 'industryName',
      },
      {
        title: '行业字段',
        dataIndex: 'industry',
      },
      {
        title: '行业生产总值',
        dataIndex: 'outputValue',
        customRender: (item) =>
          toolUtil.dataUnit('COUNT_BILLION_DISUNITY', '亿', item.text),
      },
    ];
    return {
      sourceCode: '',
      pieChartOptions: {
        title: '2021年国民生产总值行业分布',
        type: 'pie',
        data: pieData.result,
        columns: pieColumns,
        toolBar: true,
        keyName: 'industryName',
        valueName: 'outputValue',
        pieRadius: ['25%', '50%'],
        labelFormatter: (params: any) => {
          // console.log(params);
          return `${params.name}:${toolUtil.dataUnit('COUNT_BILLION_DISUNITY', '亿', params.value)}\n${params.percent}%`;
        },
        toolTipFormatter: (params: any) => {
          return `${params.marker} ${params.name}<br/>生产总值：${toolUtil.dataUnit('COUNT_BILLION_DISUNITY', '亿', params.value)}<br/>占比：${params.percent}%`;
        },
        showTooltip: true,
        pieCenter: ['48%', '60%'],
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
