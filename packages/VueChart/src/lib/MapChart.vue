<template>
  <div ref="domChart" style="height: 100%; width: 100%">
    <span style="display: none">{{ option.type }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, onMounted, onUpdated, onBeforeUnmount, } from 'vue';
import * as echarts from 'echarts';
import { toolUtil } from '../../../utils/toolUtils';
import { defaultConfig } from '../defaultConfig';
import { dark } from '../theme/dark';
import { light } from '../theme/light';
import 'echarts/lib/component/geo';
import 'echarts/lib/chart/map'; // 引入地图
import 'echarts-gl'; // 必须
import '../map/js/china';
import '../map/js/province/jiangsu';
import '../map/js/province/zhejiang';
import '../map/js/province/guangdong';
import '../map/js/province/beijing';
import '../map/js/province/shanghai';
import '../map/js/province/henan';
import '../map/js/province/shandong';
import '../map/js/province/sichuan';
import '../map/js/province/fujian';
import '../map/js/province/hebei';
import '../map/js/province/chongqing';
import '../map/js/province/shanxi1';
import '../map/js/province/anhui';
import '../map/js/province/jiangxi';
import '../map/js/province/heilongjiang';
import '../map/js/province/jilin';
import '../map/js/province/shanxi';
import '../map/js/province/hunan';
import '../map/js/province/liaoning';
import '../map/js/province/guangxi';
import '../map/js/province/yunnan';
import '../map/js/province/tianjin';
import '../map/js/province/hubei';
import '../map/js/province/neimenggu';
import '../map/js/province/guizhou';
import '../map/js/province/xinjiang';
import '../map/js/province/hainan';
import '../map/js/province/ningxia';
import '../map/js/province/gansu';
import '../map/js/province/xizang';
import '../map/js/province/qinghai';

interface MapChartStateModel {
  mapChart: any;
}

export default defineComponent({
  name: 'MapChart',
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  components: {},
  setup(props) {
    // constants
    const defaultOption = toolUtil.extend({}, defaultConfig.map.option);
    let mapChart = null;

    // states
    const domChart = ref(null);
    // functions
    const onWindowResize = () => {
      mapChart.resize();
    };

    const setMapOption = (option: any) => {
      const opts = toolUtil.merge(defaultOption, option, true);
    };

    // life cycles
    onMounted(() => {
      if (props.option) {
        mapChart = echarts.init(domChart, props.option.theme === 'dark' ? dark : light);
        setMapOption(props.option);
        window.addEventListener('resize', onWindowResize);
      }
    });

    onBeforeUnmount(() => {
      if (mapChart) {
        mapChart.clear();
        mapChart.dispose();
      }
    });

    // returns
    return {
      domChart,
    };
  }
})
</script>


