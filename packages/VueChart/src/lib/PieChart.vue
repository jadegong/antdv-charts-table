<!-- v1.0.0 2022/03/18 gqd 饼图组件; -->
<!--        2022/08/16 gqd 使用普通变量接收echarts实例，否则echarts实例会赋值给ref响应式Proxy对象，导致tooltip不显示; -->
<!--        2023/01/16 gqd 修改为typescript; -->
<template>
  <div ref="domChart" style="height: 100%; width: 100%">
    <span style="display: none">{{ option.type }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import * as echarts from 'echarts';
import { toolUtil } from '../../../utils/toolUtils';
// import constants from '@/utils/constants';
import { defaultConfig } from '../defaultConfig';
import { dark } from '../theme/dark';
import { light } from '../theme/light';

let pieChart = null;

export default defineComponent({
  name: 'PieChart',
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      flagClickEvent: false,
      defaultOption: toolUtil.extend({}, defaultConfig.pie.option),
    };
  },
  mounted() {
    if (this.option) {
      pieChart = echarts.init(
        this.$refs.domChart,
        this.option.theme === 'dark' ? dark : light
      );
      this.setPieOption(this.option);
      window.addEventListener('resize', this.onWindowResize);
    }
  },
  updated() {
    this.setPieOption(this.option);
    pieChart.resize();
  },
  beforeUnmount() {
    if (pieChart) {
      pieChart.clear();
      pieChart.dispose();
    }
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    onWindowResize() {
      pieChart.resize();
    },
    setPieOption(option) {
      // const self = this;
      const opts = toolUtil.merge(this.defaultOption, option, true);
      const optionPie = {
        tooltip: {
          show: opts.showTooltip || false,
          formatter(params, ticket, callback) {
            return option.toolTipFormatter.call(this, params, ticket, callback);
          },
        },
        title: {
          text: opts.title,
          x: 'center',
          y: 10,
          /* textStyle: {
                        fontSize: 14,
                        color: '#fff'
                    } */
        },
        legend: {
          show: opts.legendShow,
          orient: opts.orient,
          left: opts.legendLeft,
          top: opts.legendTop,
          align: opts.legendAlign,
          itemHeight: 8,
          itemWidth: 8,
          // textStyle: {color: '#fff'},
          itemGap: 20,
          data: [],
          // pageIconInactiveColor: '#2f4554',
          // pageIconColor: '#aaa',
          pageTextStyle: {
            // color: '#aaa',
          },
        },
        series: [
          {
            name: '数量占比',
            type: 'pie',
            center: opts.pieCenter,
            radius: opts.pieRadius,
            startAngle: 90,
            minAngle: 5,
            selectedMode: 'multiple',
            clockWise: true,
            itemStyle: {
              normal: {},
            },
            roseType: opts.roseType === 'false' ? false : opts.roseType,
            avoidLabelOverlap: !opts.centerLabel,
            labelLine: {
              show: !opts.centerLabel,
            },
            label: {
              show: opts.labelShow,
              position: opts.centerLabel ? 'center' : 'outside',
              textStyle: {
                color: '#000',
                baseline: 'bottom',
                fontSize: opts.centerLabel ? 24 : 12,
                // fontWeight: opts.centerLabel ? 'bold' : 'normal',
                fontFamily: 'SimHei,Arial, Verdana, sans-serif',
              },
              formatter(params: any) {
                if (opts.labelFormatter) {
                  return eval(opts.labelFormatter).call(this, params, toolUtil)
                }
                return `${params.name}:${toolUtil.commafy(params.value, 2)}(${params.percent}%)`
              },
            },
            emphasis: {
              label: {
                show: opts.centerLabel,
                fontSize: opts.centerLabel ? 24 : 12,
                // fontWeight: opts.centerLabel ? 'bold' : 'normal',
              },
            },
            data: [],
          },
        ],
      };

      const { data } = opts;
      if (data && data.length > 0) {
        if (!opts.rewriteOption) {
          optionPie.series[0].data = [];
          const result = [];
          const legendData = [];

          data.forEach((item, i) => {
            let select = false;

            if (i === 0) {
              select = true;
            }

            result.push({
              value: item[opts.valueName],
              name: item[opts.keyName],
              selected: select,
              itemStyle: {
                normal: {
                  color: opts.colorList[i],
                },
              },
            });
            legendData.push({ name: item[opts.keyName] });
          });

          optionPie.legend.data = legendData;
          optionPie.series[0].data = result;
          optionPie.series[0].name = opts.name;
        }
      } else {
        optionPie.series = [];
      }

      toolUtil.extend(optionPie, opts.optionPie);
      pieChart.setOption(optionPie, true);
    },
  },
});
</script>
