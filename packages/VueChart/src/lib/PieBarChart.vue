<!-- v0.0.4-alpha 2023/04/12 gqd 柱状图饼图联动组件; -->
<!-- v0.0.5-alpha 2023/09/18 gqd 每次data更新后，需要移除更新事件里的函数，否则事件回调里引用的数据还是旧数据; -->
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

let pieBarChart = null;

export default defineComponent({
  name: 'PieBarChart',
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      flagClickEvent: false,
      defaultOption: toolUtil.extend({}, defaultConfig.pieBar.option),
    };
  },
  created() {},
  mounted() {
    if (this.option) {
      pieBarChart = echarts.init(
        this.$refs.domChart,
        this.option.theme === 'dark' ? dark : light
      );
      this.setPieBarOption(this.option);
      window.addEventListener('resize', this.onWindowResize);
    }
  },
  updated() {
    this.setPieBarOption(this.option);
    pieBarChart.resize();
  },
  beforeUnmount() {
    if (pieBarChart) {
      pieBarChart.clear();
      pieBarChart.dispose();
    }
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    onWindowResize() {
      pieBarChart.resize();
    },
    setPieBarOption(option: any) {
      const opts = toolUtil.merge(this.defaultOption, option, true);

      const pieBarOptionV = {
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
              formatter(value: any, index: number) {
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
              formatter(value: any, index: number) {
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
      const pieBarOptionH = {
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
              formatter(value: any, index: number) {
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
              formatter(value: any, index: number) {
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

      const pieBarOption =
        opts.barType === 'vertical'
          ? toolUtil.extend({}, pieBarOptionV, opts.optionBar)
          : toolUtil.extend({}, pieBarOptionH, opts.optionBar);

      const { data } = opts;

      if (data && data.length > 0) {
        pieBarOption.yAxis[0].data = [];
        pieBarOption.xAxis[0].data = [];
        pieBarOption.series[0].data = [];
        if (opts.resetOrder) {
          data.sort((a: any, b: any) => {
            return a[opts.keyName] - b[opts.keyName];
          });
        }

        const valueNames = opts.valueName;
        if (valueNames.length > 1) {
          valueNames.forEach((item: any, index: number) => {
            pieBarOption.series[index] = toolUtil.extend({}, pieBarOption.series[0]);
            pieBarOption.series[index].data = [];
            if (opts.name.length > 1 && opts.name[index]) {
              pieBarOption.series[index].name = opts.name[index];
            }
          });
        }

        opts.name.forEach((item: any, index: number) => {
          pieBarOption.legend.data.push({
            name: opts.name[index],
            icon: 'circle',
          });
          // pieBarOption.legend.selected[opts.name[index]] = false
        });

        if (pieBarOption.yAxis.length > 1) {
          pieBarOption.yAxis.forEach((item: any, index: number) => {
            pieBarOption.series[index].yAxisIndex = index;
          });
        }
        data.forEach((item: any, indexA: number) => {
          const key = item[opts.keyName]
          if (opts.barType === 'vertical') {
            pieBarOption.yAxis[0].data.push(key)
          } else {
            pieBarOption.xAxis[0].data.push(key)
          }
          if (valueNames.length >= 1) {
            // 多类别柱图
            valueNames.forEach((itemValueName: any, indexValueName: number) => {
              if (opts.lastDotted && indexA === data.length - 1) {
                // 最后一组数据是虚线预测数据
                pieBarOption.series[indexValueName].data.push({
                  value: item[itemValueName],
                  itemStyle: {
                    borderColor: opts.barColor[indexValueName % valueNames.length],
                    borderType: 'dotted',
                    borderWidth: '3',
                    color: 'rgba(0,0,0,0.07)',
                  },
                  originalData: item,
                })
              } else {
                // 最后一组数据不是虚线预测数据
                pieBarOption.series[indexValueName].data.push(item[itemValueName])
              }
            })
          }
        })
        // 堆积图
        pieBarOption.series.forEach((item: any) => {
          if (opts.overlap) {
            item.stack = '总量';
          }
          if (!opts.label) {
            item.label.show = false;
          }
        });

        if (opts.name.length >= 1) {
          pieBarOption.series.forEach((item: any, index: number) => {
            pieBarOption.series[index].name = opts.name[index];
          });
        }
        // 多类别柱图:每个类别柱图颜色设置
        if (opts.name.length >= 1) {
          pieBarOption.series.forEach((item: any, index: number) => {
            pieBarOption.series[index].itemStyle.color = opts.barColor[index];});
        }

        // self.showLabel = pieBarOption.series[0].label.show;

        // 设置默认展示的legend
        if (opts.defaultLegend instanceof Array && opts.defaultLegend.length > 0) {
          opts.defaultLegend.forEach((item: any) => {
            pieBarOption.legend.selected[item] = true;
          });
        } else {
          for (const key in pieBarOption.legend.selected) {
            pieBarOption.legend.selected[key] = true;
          }
        }
      } else {
        pieBarOption.xAxis[0].show = false;
        pieBarOption.yAxis[0].show = false;
        pieBarOption.series = [];
      }

      // Set pie series
      let pieData = []
      opts.valueName.forEach((valueNameItem: any, valueNameIndex: number) => {
        let item = data[0]
        pieData.push({
          value: item[valueNameItem],
          name: opts.name[valueNameIndex],
          itemStyle: {
            color: opts.barColor[valueNameIndex % opts.valueName.length],
          },
        })
      })
      pieBarOption.series[opts.valueName.length] = {
        name: '饼图',
        type: 'pie',
        id: 'pie',
        radius: opts.pieRadius,
        center: opts.pieCenter,
        label: {
          formatter: `{b}: {c} ({d}%)`,
        },
        data: pieData,
      }

      // Mouse hover event
      // DONE: 每次data更新后，需要移除更新事件里的函数，否则事件回调里引用的数据还是旧数据.
      pieBarChart.off('updateAxisPointer')
      pieBarChart.on('updateAxisPointer', function (event: any) {
        const xAxisInfo = event.axesInfo[0]
        if (xAxisInfo) {
          let retArr = []
          const dimension = xAxisInfo.value
          opts.valueName.forEach((valueNameItem: any, valueNameIndex: number) => {
            let item = data[dimension]
            retArr.push({
              value: item[valueNameItem],
              name: opts.name[valueNameIndex],
              itemStyle: {
                color: opts.barColor[valueNameIndex % opts.valueName.length],
              },
            })
          })
          pieBarChart.setOption({
            series: {
              id: 'pie',
              data: retArr,
            },
          })
        }
      })

      toolUtil.extend(pieBarOption, opts.pieBarOption);
      pieBarChart.setOption(pieBarOption, true);
    },
  },
});
</script>

