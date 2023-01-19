<!-- v1.0.0 2023/01/18 gqd Add RadarChart demo page; -->
<!--        2023/01/19 gqd Add markdown doc; -->
<template>
  <div>
    <div style="width: 60%; margin: 0 auto">
      <act-table-chart :option="radarChartOptions"></act-table-chart>
      <code-preview :sourceCode="sourceCode"> </code-preview>
      <read-me-doc />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import CodePreview from '../../components/CodePreview.vue';
import ReadMeDoc from './RadarChart.md';

export default defineComponent({
  name: 'RadarChartPage',
  components: {
    CodePreview,
    ReadMeDoc
  },
  data() {
    const radarData = [
      {
        playerName: 'Stephen Curry',
        three: 99,
        two: 95,
        dunk: 70,
        assist: 96,
        organization: 94,
        defense: 85,
      },
      {
        playerName: 'Lebrone James',
        three: 85,
        two: 95,
        dunk: 99,
        assist: 90,
        organization: 90,
        defense: 80,
      },
    ];
    // 折线图demo配置
    const radarColumns = [
      {
        title: '序号',
        width: 60,
        dataIndex: '',
        customRender: (item) => {
          return item.index + 1;
        },
      },
      {
        title: '球员',
        dataIndex: 'playerName',
      },
      {
        title: '三分球',
        dataIndex: 'three',
      },
      {
        title: '两分球',
        dataIndex: 'two',
      },
      {
        title: '扣篮',
        dataIndex: 'dunk',
      },
      {
        title: '助攻',
        dataIndex: 'assist',
      },
      {
        title: '组织',
        dataIndex: 'organization',
      },
      {
        title: '防守',
        dataIndex: 'defense',
      },
    ];
    return {
      sourceCode: '',
      radarChartOptions: {
        title: '球员能力分布雷达图',
        type: 'radar',
        data: radarData,
        columns: radarColumns,
        toolBar: true,
        dimensionKey: ['three', 'two', 'dunk', 'assist', 'organization', 'defense'],
        dimensionName: ['三分球', '两分球', '扣篮', '助攻', '组织', '防守'],
        max: [100, 100, 100, 100, 100],
        name: ['Stephen Curry', 'Lebrone James'],
        // toolTipFormatter: (params: any) => {
          // return `${params.marker}<br/>行业名称：${params.name}<br/>生产总值：${toolUtil.dataUnit('COUNT_BILLION_DISUNITY', '', params.value)}<br/>占比：${params.percent}%`;
        // },
        lineColor: ['#27a9f4', '#4ccb70'],
        legendShow: true,
        fillingStyleColor: ['#3D91F7', '#61BE67'],

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
