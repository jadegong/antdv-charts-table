<!-- v0.0.1-alpha 2022/02/25 gqd 柱状图组件; -->
<!--              2022/03/31 gqd 增加xy轴标签格式化的参数index; -->
<!--              2022/04/25 gqd 标签长度溢出时处理，增加containLabel值; -->
<!--              2022/08/16 gqd 使用普通变量接收echarts实例，否则echarts实例会赋值给ref响应式Proxy对象，导致tooltip不显示; -->
<!--              2023/01/16 gqd 修改为typescript; -->
<!--              2023/03/14 gqd 修复柱状图和折线图颜色分配问题; -->
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

let barChart = null;

export default defineComponent({
  name: 'BarChart',
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      flagClickEvent: false,
      defaultOption: toolUtil.extend({}, defaultConfig.bar.option),
    };
  },
  created() {},
  mounted() {
    if (this.option) {
      barChart = echarts.init(
        this.$refs.domChart,
        this.option.theme === 'dark' ? dark : light
      );
      this.setBarOption(this.option);
      window.addEventListener('resize', this.onWindowResize);
    }
  },
  updated() {
    this.setBarOption(this.option);
    barChart.resize();
  },
  beforeUnmount() {
    if (barChart) {
      barChart.clear();
      barChart.dispose();
    }
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    onWindowResize() {
      barChart.resize();
    },
    setBarOption(option: any) {
      const self = this;
      const opts = toolUtil.merge(this.defaultOption, option, true);

      const barOptionV = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none',
          },
          formatter(params: any, ticket: any, callback: any) {
            if (option.toolTipFormatter) {
              return eval(option.toolTipFormatter).call(
                this,
                params,
                ticket,
                callback
              );
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
          y: 10,
          /* textStyle: {
                  fontSize: 12,
                  color: '#fff'
              }, */
          text: opts.title,
        },
        legend: {
          show: opts.legendShow,
          left: opts.legendLeft,
          top: opts.legendTop,
          orient: opts.orient,
          itemHeight: 8,
          padding: 10,
          itemGap: 10,
          formatter(params: any) {
            if (opts.legendFormatter) {
              return eval(opts.legendFormatter).call(this, params);
            }
            return toolUtil.formatCharts(params, 22);
          },
          pageIconInactiveColor: '#2f4554',
          pageIconColor: '#aaa',
          pageTextStyle: {
            color: '#aaa',
          },
          /* textStyle: {
            color: "#fff",
            fontFamily: "SimHei,Arial, Verdana, sans-serif",
            fontSize: 12
          }, */
          data: [],
        },
        grid: {
          left: opts.gridLeft,
          right: opts.gridRight,
          top: opts.gridTop,
          bottom: opts.gridBottom,
          containLabel: true,
        },
        xAxis: [
          {
            type: 'value',
            data: [],
            axisLabel: {
              rotate: opts.xRotate,
              formatter(value: any, index) {
                if (option.xAxisFormatter) {
                  return eval(option.xAxisFormatter).call(this, value, index);
                }
                return toolUtil.commafy(value);
              },
              // color: opts.xAxisLabelColor,
              fontSize: 12,
            },
            nameTextStyle: {
              // color: '#ffffff',
              fontSize: 12,
            },
          },
        ],
        yAxis: [
          {
            type: 'category',
            name: opts.yAxisName,
            splitLine: {
              show: false,
            },
            data: [],
            axisLabel: {
              interval: 0,
              rotate: opts.yRotate,
              formatter(value: any, index) {
                if (option.yAxisFormatter) {
                  return eval(option.yAxisFormatter).call(this, value, index);
                }
                return toolUtil.formatCharts(value, 18);
              },
              fontSize: 12,
            },
            nameTextStyle: {
              fontSize: 12,
            },
          },
        ],
        series: [
          {
            name: '柱状图',
            type: 'bar',
            barCategoryGap: '50%',
            barMinHeight: 5,
            barMaxWidth: 30,
            itemStyle: {
              color: '',
            },
            label: {
              show: true,
              position: 'right',
              formatter(param: any) {
                if (option.labelFormatter) {
                  return eval(option.labelFormatter).call(this, param);
                }
                return toolUtil.commafy(param.value);
              },
              fontSize: 12,
              // color: '#fff',
            },
            data: [],
          },
        ],
      };
      const barOptionH = {
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            type: 'none',
          },
          formatter: (params: any, ticket: any, callback: any) => {
            if (option.toolTipFormatter) {
              return eval(option.toolTipFormatter).call(
                this,
                params,
                ticket,
                callback
              );
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
          y: 10,
          /* textStyle: {
            fontSize: 14,
            color: '#fff'
          }, */
          text: opts.title,
        },
        legend: {
          show: opts.legendShow,
          left: opts.legendLeft,
          top: opts.legendTop,
          orient: opts.orient,
          selected: {},
          itemHeight: 8,
          padding: 10,
          itemGap: 10,
          formatter(params: any) {
            if (opts.legendFormatter) {
              return eval(opts.legendFormatter).call(this, params);
            }
            return toolUtil.formatCharts(params, 22);
          },
          // pageIconInactiveColor: '#2f4554',
          // pageIconColor: '#aaa',
          pageTextStyle: {
            // color: '#aaa',
          },
          /* textStyle: {
            color: "#fff",
            fontFamily: "SimHei,Arial, Verdana, sans-serif",
            fontSize: 12
          }, */
          data: [],
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
              rotate: opts.xRotate,
              formatter(value: any, index) {
                if (option.xAxisFormatter) {
                  return eval(option.xAxisFormatter).call(this, value, index);
                }
                return toolUtil.formatCharts(value, 12);
              },
              // color: opts.xAxisLabelColor,
              fontSize: 12,
            },
            splitLine: {
              show: false,
            },
            nameTextStyle: {
              // color: '#ffffff',
              fontSize: 12,
            },
          },
        ],
        yAxis: [
          {
            show: true,
            type: 'value',
            data: [],
            name: opts.yAxisName,
            axisLabel: {
              interval: 0,
              rotate: opts.yRotate,
              formatter(value: any, index) {
                if (option.yAxisFormatter) {
                  return eval(option.yAxisFormatter).call(this, value, index);
                }
                return toolUtil.commafy(value);
              },
              // color: opts.yAxisLabelColor,
              fontSize: 12,
            },
            nameTextStyle: {
              // color: '#ffffff',
              fontSize: 12,
            },
          },
        ],
        series: [
          {
            name: '柱状图',
            type: 'bar',
            barGap: '0%',
            barCategoryGap: '50%',
            // barMinHeight: 5,
            barMaxWidth: 30,
            label: {
              show: true,
              position: 'top',
              formatter(param: any) {
                if (option.labelFormatter) {
                  return eval(option.labelFormatter).call(this, param);
                }
                return toolUtil.commafy(param.value);
              },
              fontSize: 12,
              // color: '#fff',
            },
            itemStyle: {
              // color: '',
            },
            data: [],
          },
        ],
      };

      const barOption =
        opts.barType === 'vertical'
          ? toolUtil.extend({}, barOptionV, opts.optionBar)
          : toolUtil.extend({}, barOptionH, opts.optionBar);

      const { data } = opts;

      if (data && data.length > 0) {
        barOption.yAxis[0].data = [];
        barOption.xAxis[0].data = [];
        barOption.series[0].data = [];
        if (opts.resetOrder) {
          data.sort((a, b) => {
            return a[opts.keyName] - b[opts.keyName];
          });
        }

        const valueNames = opts.valueName;
        if (valueNames.length > 1) {
          valueNames.forEach((item: any, index: number) => {
            barOption.series[index] = toolUtil.extend({}, barOption.series[0]);
            barOption.series[index].data = [];
            if (opts.name.length > 1 && opts.name[index]) {
              barOption.series[index].name = opts.name[index];
            }
          });
        }

        opts.name.forEach((item: any, index: number) => {
          barOption.legend.data.push({
            name: opts.name[index],
            icon: 'circle',
          });
          // barOption.legend.selected[opts.name[index]] = false
        });

        if (barOption.yAxis.length > 1) {
          barOption.yAxis.forEach((item: any, index: number) => {
            barOption.series[index].yAxisIndex = index;
          });
        }
        data.forEach((item: any, indexA: number) => {
          const key = item[opts.keyName];
          if (opts.barType === 'vertical') {
            barOption.yAxis[0].data.push(key);
          } else {
            barOption.xAxis[0].data.push(key);
          }
          if (valueNames.length > 1) {
            // 多类别柱图
            barOption.series.forEach((itemB: any, indexB: number) => {
              barOption.series[indexB].data.push(item[valueNames[indexB]]);
            });
          } else if (opts.lastDotted) {
            if (indexA === data.length - 1) {
              barOption.series[0].data.push({
                value: item[valueNames[0]],
                itemStyle: {
                  borderColor:
                    opts.colorList.length > 1
                      ? opts.colorList[indexA]
                      : opts.colorList[0],
                  borderType: 'dotted',
                  borderWidth: '3',
                  color: 'rgba(0,0,0,0.07)',
                },
                originalData: item,
              });
            } else {
              barOption.series[0].data.push({
                value: item[valueNames[0]],
                itemStyle:
                  opts.colorList.length > 1
                    ? {
                        color: opts.colorList[indexA],
                      }
                    : {},
                originalData: item,
              });
            }
          } else {
            barOption.series[0].data.push({
              value: item[valueNames[0]],
              symbolFlag: item.symbolFlag || '', // 用于区分客户简称相同时，设置toolTip用于区分的标志（该值多为客户ID）
              itemStyle:
                opts.colorList.length > 1
                  ? {
                      color: opts.colorList[indexA],
                    }
                  : {},
              originalData: item,
            });
          }
        });
        // 堆积图
        barOption.series.forEach((item: any) => {
          if (opts.overlap) {
            item.stack = '总量';
          }
          if (!opts.label) {
            item.label.show = false;
          }
        });

        if (opts.name.length > 1) {
          barOption.series.forEach((item: any, index: number) => {
            barOption.series[index].name = opts.name[index];
          });
        } else {
          barOption.series[0].name = opts.name[0];
        }
        // 多类别柱图:每个类别柱图颜色设置
        if (opts.name.length > 1) {
          barOption.series.forEach((item: any, index: number) => {
            barOption.series[index].itemStyle.color = opts.barColor[index];});
        } else {
          // eslint-disable-next-line prefer-destructuring
          barOption.series[0].itemStyle.color = opts.barColor[0];
        }

        self.showLabel = barOption.series[0].label.show;

        // 设置默认展示的legend
        if (
          opts.defaultLegend instanceof Array &&
          opts.defaultLegend.length > 0
        ) {
          opts.defaultLegend.forEach((item: any) => {
            barOption.legend.selected[item] = true;
          });
        } else {
          for (const key in barOption.legend.selected) {
            barOption.legend.selected[key] = true;
          }
        }
      } else {
        barOption.xAxis[0].show = false;
        barOption.yAxis[0].show = false;
        barOption.series = [];
      }

      if (!this.flagClickEvent && opts.clickEvent) {
        this.flagClickEvent = true;
        barChart.on('click', opts.clickEvent);
      }
      toolUtil.extend(barOption, opts.barOption);
      barChart.setOption(barOption, true);
    },
  },
});
</script>
