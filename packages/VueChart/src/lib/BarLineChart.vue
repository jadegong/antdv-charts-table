<!-- v1.0.0 2022/03/22 gqd 柱状折线图组件; -->
<!--        2022/03/25 gqd keyName和valueName统一传字符串数组; -->
<!--        2022/03/30 gqd 多个y轴数值时，刻度对齐; -->
<!--        2022/03/31 gqd 增加xy轴标签格式化的参数index; -->
<!--        2022/04/25 gqd 数据刷新时是组件可调用updated函数; -->
<!--        2022/08/16 gqd 使用普通变量接收echarts实例，否则echarts实例会赋值给ref响应式Proxy对象，导致tooltip不显示; -->
<!--        2023/01/16 gqd 修改为typescript; -->
<!--        2023/03/14 gqd 修复柱状图和折线图颜色分配问题; -->
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
import maxPointImg from '../img/max-point.png';
import minPointImg from '../img/min-point.png';

let barLineChart = null;

export default defineComponent({
  name: 'BarLineChart',
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      flagClickEvent: false,
      defaultOption: toolUtil.extend({}, defaultConfig.barLine.option),
    };
  },
  created() {},
  mounted() {
    if (this.option) {
      barLineChart = echarts.init(
        this.$refs.domChart,
        this.option.theme === 'dark' ? dark : light
      );
      this.setBarLineOption(this.option);
      window.addEventListener('resize', this.onWindowResize);
    }
  },
  updated() {
    this.setBarLineOption(this.option);
    barLineChart.resize();
  },
  beforeUnmount() {
    if (barLineChart) {
      barLineChart.clear();
      barLineChart.dispose();
    }
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    onWindowResize() {
      barLineChart.resize();
    },
    setBarLineOption(option) {
      /* const self = this; */
      const opts = toolUtil.merge(this.defaultOption, option, true);
      const legendData = opts.barName.concat(opts.lineName);
      const barLineOption = {
        tooltip: {
          trigger: 'axis',
          formatter(params) {
            if (opts.toolTipFormatter) {
              return eval(opts.toolTipFormatter).call(this, params, toolUtil);
            }
            let res = params[0].name;
            for (let i = 0, l = params.length; i < l; i++) {
              res += `<br/>${params[i].seriesName} : ${toolUtil.commafy(
                params[i].value
              )}`;
            }
            return res;
          },
        },
        title: {
          x: 'center',
          y: 5,
          /* textStyle: { */
          /* fontSize: 14, */
          /* color: '#fff' */
          /* }, */
          text: opts.title,
        },
        legend: {
          show: opts.legendShow,
          left: opts.legendLeft,
          top: opts.legendTop,
          itemHeight: 10,
          itemWidth: 20,
          itemGap: 20,
          /* textStyle: { */
          /* color: '#fff', */
          /* fontFamily: 'SimHei,Arial, Verdana, sans-serif', */
          /* fontSize: 12 */
          /* }, */
          data: legendData,
        },
        grid: {
          left: opts.gridLeft,
          right: opts.gridRight,
          top: opts.gridTop,
          bottom: opts.gridBottom,
        },
        xAxis: [
          {
            show: true,
            type: 'category',
            data: [],
            axisLabel: {
              // color: opts.xAxisLabelColor,
              rotate: opts.xRotate,
              formatter(value, index) {
                if (opts.xAxisFormatter) {
                  return eval(opts.xAxisFormatter).call(this, value, index);
                }
                return toolUtil.formatCharts(value, 12);
              },
            },
          },
        ],
        yAxis: [
          {
            show: true,
            type: 'value',
            nameGap: 20,
            splitNumber: 4,
            name: opts.y1AxisName,
            alignTicks: true,
            axisLabel: {
              interval: 0,
              // color: opts.y1AxisLabelColor,
              rotate: opts.y1Rotate,
              formatter(value, index) {
                if (opts.y1AxisFormatter) {
                  return eval(opts.y1AxisFormatter).call(this, value, index);
                }
                return toolUtil.commafy(value);
              },
            },
          },
          {
            show: opts.showY2Axis,
            type: 'value',
            nameGap: 20,
            name: opts.y2AxisName,
            splitNumber: 4,
            alignTicks: true,
            axisLabel: {
              show: true,
              interval: 0,
              // color: opts.y2AxisLabelColor,
              rotate: opts.y2Rotate,
              formatter(value, index) {
                if (opts.y2AxisFormatter) {
                  return eval(opts.y2AxisFormatter).call(this, value, index);
                }
                return toolUtil.commafy(value);
              },
            },
          },
        ],
        series: [],
        seriesBar: {
          name: '',
          type: 'bar',
          barGap: '0%',
          barCategoryGap: '70%',
          barMaxWidth: 30,
          itemStyle: {
            normal: {},
          },
          label: {
            normal: {
              show: false,
              position: 'right',
              formatter(v) {
                if (opts.labelFormatter) {
                  return eval(opts.labelFormatter).call(this, v, toolUtil);
                }
                return v;
              },
              textStyle: {
                fontSize: 12,
                color: '#fff',
              },
            },
          },
          data: [],
        },
        seriesLine: {
          name: '',
          type: 'line',
          symbolSize: 6,
          symbol: 'circle',
          smooth: true,
          itemStyle: {
            normal: {},
          },
          lineStyle: {
            normal: {},
          },
          yAxisIndex: 1,
          data: [],
          markPoint:
            opts.data && opts.data.length > 0 && !opts.hideMarkPoint
              ? {
                  data: [
                    {
                      type: 'max',
                      name: '最大值',
                      symbol: `image://${maxPointImg}`,
                      symbolSize: [80, 45],
                      symbolOffset: [0, -18],
                      label: {
                        normal: {
                          offset: [0, -8],
                          textStyle: {
                            // color: '#fff',
                          },
                          formatter(a) {
                            if (opts.markPointFormatter) {
                              return eval(opts.markPointFormatter).call(
                                this,
                                a.value,
                                toolUtil
                              );
                            }
                            return toolUtil.commafy(a.value);
                          },
                        },
                        emphasis: {
                          offset: [0, -8],
                          textStyle: {
                            // color: '#fff',
                          },
                          formatter(a) {
                            if (opts.markPointFormatter) {
                              return eval(opts.markPointFormatter).call(
                                this,
                                a.value,
                                toolUtil
                              );
                            }
                            return toolUtil.commafy(a.value);
                          },
                        },
                      },
                    },
                    {
                      type: 'min',
                      name: '最小值',
                      symbol: `image://${minPointImg}`,
                      symbolSize: [80, 45],
                      symbolOffset: [0, -18],
                      label: {
                        show: true,
                        normal: {
                          offset: [0, -8],
                          textStyle: {
                            // color: '#fff',
                            fontSize: 12,
                          },
                          formatter(a) {
                            if (opts.markPointFormatter) {
                              return eval(opts.markPointFormatter).call(
                                this,
                                a.value,
                                toolUtil
                              );
                            }
                            return toolUtil.commafy(a.value);
                          },
                        },
                        emphasis: {
                          offset: [0, -8],
                          textStyle: {
                            // color: '#fff',
                          },
                          formatter(a) {
                            if (opts.markPointFormatter) {
                              return eval(opts.markPointFormatter).call(
                                this,
                                a.value,
                                toolUtil
                              );
                            }
                            return toolUtil.commafy(a.value);
                          },
                        },
                      },
                    },
                  ],
                }
              : {},
        },
      };
      if (opts.optionBarLine.seriesBar) {
        toolUtil.extend(barLineOption.seriesBar, opts.optionBarLine.seriesBar);
      }
      if (opts.optionBarLine.seriesLine) {
        toolUtil.extend(
          barLineOption.seriesLine,
          opts.optionBarLine.seriesLine
        );
      }

      const { data } = opts;

      if (data && data.length > 0) {
        barLineOption.xAxis[0].data = [];
        const { keyName } = opts;
        const lineName = opts.lineValueName;
        const barName = opts.barValueName;
        // 构建柱图series
        if (barName.length > 1) {
          barName.forEach((item, index) => {
            barLineOption.series[index] = toolUtil.extend(
              {},
              barLineOption.seriesBar
            );
            barLineOption.series[index].name = opts.barName[index];
            if (opts.overlap) {
              barLineOption.series[index].stack = '总量';
            }
            // 柱图series label
            if (opts.barSeriesLabel) {
              barLineOption.series[index].label = opts.barSeriesLabel;
            }
          });
        } else {
          barLineOption.series[0] = toolUtil.extend(
            {},
            barLineOption.seriesBar
          );
          barLineOption.series[0].name = opts.barName[0];
          if (opts.overlap) {
            barLineOption.series[0].stack = '总量';
          }
          // 柱图series label
          if (opts.barSeriesLabel) {
            barLineOption.series[0].label = opts.barSeriesLabel;
          }
        }
        // 构建线图series
        if (lineName.length > 1) {
          lineName.forEach((item, index) => {
            let lineIndex = index;
            if (barName.length > 1) {
              lineIndex = index + barName.length;
            } else {
              lineIndex++;
            }
            barLineOption.series[lineIndex] = toolUtil.extend(
              {},
              barLineOption.seriesLine
            );
            barLineOption.series[lineIndex].name = opts.lineName[index];
          });
        } else {
          let lineIndex: number;
          if (barName.length > 1) {
            lineIndex = barName.length;
          } else {
            lineIndex = 1;
          }
          barLineOption.series[lineIndex] = toolUtil.extend({}, barLineOption.seriesLine);
          barLineOption.series[lineIndex].name = opts.lineName[0];
        }

        // 柱图颜色
        if (opts.barName.length >= 1) {
          opts.barName.forEach((item: any, index: number) => {
            barLineOption.series[index].itemStyle.normal.color = opts.barColor[index % opts.barColor.length]
          })
        }
        // 线图颜色
        if (opts.lineName.length >= 1) {
          opts.lineName.forEach((item: any, index: number) => {
            barLineOption.series[opts.barName.length + index].itemStyle.normal.color = opts.lineColor[index % opts.lineColor.length]
          })
        }
        data.forEach((item: any) => {
          const keyValue = item[keyName];
          // const lineValue = item[lineName];
          // 添加柱图数据
          if (barName.length > 1) {
            barName.forEach((barItem: any, indexA: number) => {
              barLineOption.series[indexA].data.push(item[barName[indexA]]);
            });
          } else {
            barLineOption.series[0].data.push(item[barName[0]]);
          }

          // 添加线图数据
          if (lineName.length > 1) {
            if (barName.length > 1) {
              lineName.forEach((lineItem: any, indexB: number) => {
                barLineOption.series[barName.length + indexB].data.push(
                  item[lineName[indexB]]
                );
              });
            } else {
              lineName.forEach((lineItem: any, indexB: number) => {
                barLineOption.series[indexB + 1].data.push(
                  item[lineName[indexB]]
                );
              });
            }
          } else if (barName.length > 1) {
            barLineOption.series[barName.length].data.push(item[lineName[0]]);
          } else {
            barLineOption.series[1].data.push(item[lineName[0]]);
          }
          // 添加x轴数据
          barLineOption.xAxis[0].data.push(keyValue);
        });

        if (opts.splitYAxis) {
          // let temp = [];
          // let temp1 = [];
          // let temp2 = [];
          // v1.0.0 2022/01/19 gqd 改变最大最小值的获取方式
          let min1, min2, max1, max2;
          barLineOption.series.forEach((singleSeries, singleSeriesIndex) => {
            singleSeries.data.forEach((singleDataVal) => {
              if (singleSeriesIndex < barName.length) {
                // 获取bar类型最大最小值
                min1 =
                  min1 === undefined || min1 > singleDataVal
                    ? singleDataVal
                    : min1;
                max1 =
                  max1 === undefined || max1 < singleDataVal
                    ? singleDataVal
                    : max1;
              } else {
                // 获取bar类型最大最小值
                min2 =
                  min2 === undefined || min2 > singleDataVal
                    ? singleDataVal
                    : min2;
                max2 =
                  max2 === undefined || max2 < singleDataVal
                    ? singleDataVal
                    : max2;
              }
            });
          });
          // temp = barLineOption.series[0].data.map((val) => {
          // return val === '--' ? '' : val;
          // });
          // if (barLineOption.series.length === 3) {
          // temp1 = barLineOption.series[1].data.map((val) => {
          // return val === '--' ? '' : val;
          // });
          // temp2 = barLineOption.series[2].data.map((val) => {
          // return val === '--' ? '' : val;
          // });
          // } else {
          // temp2 = barLineOption.series[1].data.map((val) => {
          // return val === '--' ? '' : val;
          // });
          // }
          // const max = Math.max.apply(null, temp.concat(temp1));
          // const min =
          // Math.min.apply(null, temp.concat(temp1)) > 0
          // ? 0
          // : Math.min.apply(null, temp.concat(temp1));
          // const max1 = Math.max.apply(null, temp2);
          // const min1 = Math.min.apply(null, temp2) > 0 ? 0 : Math.min.apply(null, temp2);
          barLineOption.yAxis[0].min = min1;
          barLineOption.yAxis[0].max = max1;
          const diff = (max1 - min1) / 5;
          barLineOption.yAxis[0].interval = diff;
          barLineOption.yAxis[1].min = min2;
          barLineOption.yAxis[1].max = max2;
          const diff1 = (max2 - min2) / 5;
          barLineOption.yAxis[1].interval = diff1;
        }
        if (!opts.showYAxisName) {
          barLineOption.yAxis[0].name = '';
          barLineOption.yAxis[1].name = '';
        }
      } else {
        barLineOption.xAxis[0].show = false;
        barLineOption.yAxis[0].show = false;
        barLineOption.yAxis[1].show = false;
        barLineOption.series = [];
      }
      if (!this.flagClickEvent && opts.clickEvent) {
        this.flagClickEvent = true;
        barLineChart.on('click', opts.clickEvent);
      }
      toolUtil.extend(barLineOption, opts.optionBarLine);
      barLineChart.setOption(barLineOption, true);
    },
  },
});
</script>
