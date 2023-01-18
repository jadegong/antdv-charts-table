<template>
  <div>
    <div style="width: 60%; margin: 0 auto;">
      <act-table-chart :option="lineChartOptions"></act-table-chart>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { toolUtil } from '../../utils/toolUtils';

export default defineComponent({
  name: 'LineChartPage',
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
});
</script>
