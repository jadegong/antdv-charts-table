<!-- v0.0.1-alpha 2022/08/13 gqd VueChart component; -->
<!--              2022/08/13 gqd 单、多折线图; -->
<!--              2023/04/12 gqd 柱状图饼图联动图，折线图饼图联动图; -->
<template>
  <div class="vue-chart-wrapper">
    <bar-chart v-if="type === 'bar'" :option="option"></bar-chart>
    <pie-chart v-else-if="type === 'pie'" :option="option"></pie-chart>
    <bar-line-chart v-else-if="type === 'barLine'" :option="option"></bar-line-chart>
    <line-chart v-else-if="type === 'line'" :option="option"></line-chart>
    <lines-chart v-else-if="type === 'lines'" :option="option"></lines-chart>
    <radar-chart v-else-if="type === 'radar'" :option="option"></radar-chart>
    <pie-bar-chart v-else-if="type === 'pieBar'" :option="option"></pie-bar-chart>
    <pie-lines-chart v-else-if="type === 'pieLines'" :option="option"></pie-lines-chart>
    <no-data v-else></no-data>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NoData from '../../Common/NoData.vue';
import BarChart from './lib/BarChart.vue';
import PieChart from './lib/PieChart.vue';
import BarLineChart from './lib/BarLineChart.vue';
import LineChart from './lib/LineChart.vue';
import LinesChart from './lib/LinesChart.vue';
import RadarChart from './lib/RadarChart.vue';
import PieBarChart from './lib/PieBarChart.vue';
import PieLinesChart from './lib/PieLinesChart.vue';

import './index.less';
export default defineComponent({
  name: 'VueChart',
  components: {
    NoData,
    BarChart,
    BarLineChart,
    PieChart,
    LineChart,
    LinesChart,
    RadarChart,
    PieBarChart,
    PieLinesChart,
  },
  props: {
    type: {
      type: String,
      default: () => '',
    },
    option: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
  },
});
</script>
