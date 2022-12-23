<!-- v1.0.0 2022/04/22 gqd 折线图组件; -->
<!--        2022/03/31 gqd 增加xy轴标签格式化的参数index; -->
<!--        2022/08/16 gqd 使用普通变量接收echarts实例，否则echarts实例会赋值给ref响应式Proxy对象，导致tooltip不显示; -->
<template>
    <div ref="domChart" style="height: 100%; width: 100%;">
        <span style="display: none;">{{option.type}}</span>
    </div>
</template>
<script>
import * as echarts from 'echarts';
import { toolUtil } from '../../../utils/toolUtils';
// import constants from '@/utils/constants';
import { defaultConfig } from '../defaultConfig';
import { dark } from '../theme/dark';
import { light } from '../theme/light';

let linesChart = null;

export default {
    name: 'LinesChart',
    props: {
        option: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            flagClickEvent: false,
            defaultOption: toolUtil.extend({}, defaultConfig.lines.option),
        };
    },
    created() {},
    mounted() {
        if (this.option) {
            linesChart = echarts.init(this.$refs.domChart, this.option.theme === 'dark' ? dark : light);
            this.setLinesOption(this.option);
            window.addEventListener('resize', this.onWindowResize);
        }
    },
    updated() {
        this.setLinesOption(this.option);
        linesChart.resize();
    },
    beforeDestroy() {
        if (linesChart) {
            linesChart.clear();
            linesChart.dispose();
        }
        window.removeEventListener('resize', this.onWindowResize);
    },
    methods: {
        onWindowResize() {
            linesChart.resize();
        },
        setLinesOption(option) {
            const self = this;
            const opts = toolUtil.merge(this.defaultOption, option, true);
            const optionLines = {
              tooltip: {
                trigger: 'axis',
                formatter(params, ticket, callback) {
                  if (opts.toolTipFormatter) {
                    return eval(opts.toolTipFormatter).call(this, params, ticket, callback);
                  }
                  if (opts.lastDotted) {
                    const res = params[0].axisValue;
                    params = params.filter((n) => {
                      return n.value !== '_';
                    });
                    params = params.sort((a, b) => {
                      return b.value - a.value;
                    });
                    // params.forEach((value, index) => {});
                    /* $(params).each(function (index) {
                                     if ($.inArray(this.seriesName + ":" + this.value, list) < 0) {
                                     res += "</br>" + this.seriesName + ":" + $.apiUtil.commafy(this.value);
                                     list.push(this.seriesName + ":" + this.value);
                                     }
                                     }); */
                    return res;
                  }
                  params = params.sort((a, b) => {
                    return b.value - a.value;
                  });
                  let res = params[0].name;
                  for (let i = 0, l = params.length; i < l; i++) {
                    res += `<br/>${params[i].seriesName} : ${toolUtil.commafy(params[i].value)}`;
                  }
                  return res;
                },
              },
              title: {
                text: opts.title,
                left: 'center',
                /* textStyle: {
                         fontSize: "14",
                         color: "white"
                         }, */
                top: 5,
              },
              grid: {
                left: opts.gridLeft,
                right: opts.gridRight,
                top: opts.gridTop,
                bottom: opts.gridBottom,
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
                formatter(params) {
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
                         color: "#666666",
                         fontFamily: "SimHei,Arial, Verdana, sans-serif",
                         fontSize: 12
                         }, */
                data: [],
              },
              xAxis: [
                {
                  show: true,
                  type: 'category',
                  boundaryGap: false,
                  data: [],
                  axisLabel: {
                    // color: opts.xAxisLabelColor,
                    rotate: opts.xRotate,
                    formatter(value) {
                      if (opts.xAxisFormatter) {
                        return eval(opts.xAxisFormatter).call(this, value);
                      }
                      return `${value.substr(0, 4)}/${value.substr(4, 2)}`;
                    },
                  },
                },
              ],
              yAxis: [
                {
                  show: true,
                  type: 'value',
                  name: opts.y1AxisName,
                  axisLabel: {
                    interval: 0,
                    // color: opts.y1AxisLabelColor,
                    rotate: opts.y1Rotate,
                    formatter(value) {
                      if (opts.yAxisFormatter) {
                        return opts.yAxisFormatter(value);
                      }
                      if (opts.y1AxisFormatter) {
                        return eval(opts.y1AxisFormatter).call(this, value);
                      }
                      return toolUtil.commafy(value);
                    },
                  },
                  /* nameTextStyle: {
                             color: "#000",
                             fontSize: 12
                             } */
                },
                {
                  type: 'value',
                  name: opts.y2AxisName,
                  show: opts.enableDoubleYAxis,
                  axisLabel: {
                    show: true,
                    interval: 0,
                    // color: opts.y2AxisLabelColor,
                    rotate: opts.y2Rotate,
                    formatter(value) {
                      if (opts.yAxisFormatter) {
                        return opts.yAxisFormatter(value);
                      }
                      if (opts.y2AxisFormatter) {
                        return eval(opts.y2AxisFormatter).call(this, value);
                      }
                      return toolUtil.commafy(value);
                    },
                  },
                  /* nameTextStyle: {
                             color: "#ffffff",
                             fontSize: 12
                             }, */
                  axisLine: {
                    show: opts.enableDoubleYAxis,
                  },
                },
              ],
              series: [],
              dataZoom: opts.showDataZoom
                ? toolUtil.extend(
                    true,
                    [
                      {
                        type: 'slider',
                        show: true,
                        height: 6,
                        bottom: 4,
                        handleColor: '#2b85ff',
                        dataBackgroundColor: 'rgba(0,0,0,0)',
                        backgroundColor: '#e5e5e5',
                        fillerColor: '#2b85ff',
                        handleIcon: 'image:///images/datazoom-dot.png',
                        handleSize: '200%',
                        textStyle: {
                          color: '#2b85ff',
                        },
                        start: opts.dataZoomStart || 50,
                        end: opts.dataZoomEnd || 100,
                      },
                    ],
                    opts.showDataZoom,
                  )
                : [{ type: 'slider', show: false }],
            };
            if (opts.enableDoubleYAxis) {
              // opts.doubleYAxis[0].name = opts.y1Name?opts.y1Name:opts.doubleYAxis[0].name;
              // opts.doubleYAxis[1].name = opts.y2Name?opts.y2Name:opts.doubleYAxis[1].name;
              // optionLines.yAxis = opts.doubleYAxis;
            }
            const keyNameMap = {};
            opts.keys.forEach((key, index) => {
              keyNameMap[key] = opts.names[index];
            });

            const tempData = opts.data;

            const seriesData = [];
            const legendData = [];
            const legendSelected = {};
            let xAxisData = [];
            const xAxisSet = new Set();
            const y1Keys = new Set(opts.y1Keys || []);
            const y2Keys = new Set(opts.y2Keys || []);
            const value = {};
            const data = [];
            if (tempData && tempData.length > 0) {
              for (const key in keyNameMap) {
                value[key] = [];
                tempData.forEach((item) => {
                  xAxisSet.add(item[opts.keyName] || item.key);
                  value[key].push(item[key]);
                });
              }
              xAxisData = Array.from(xAxisSet);
              for (const key in value) {
                data.push({
                  name: keyNameMap[key],
                  key: xAxisData,
                  value: value[key],
                  yName: y1Keys.has(key) ? opts.y1AxisName : y2Keys.has(key) ? opts.y2AxisName : '',
                });
              }
            }

            if (data && data.length > 0) {
              if (opts.resetOrder) {
                xAxisData = xAxisData.sort();
              }
              data.forEach((item, i) => {
                // 遍历构造虚线
                const s = {
                  type: 'line',
                  symbol: 'emptyCircle',
                  smooth: 'true',
                  data: [],
                  name: item.name,
                  yName: item.yName, // fix bug by rjh:多折线双Y轴，optionLines.doubleYAxis里面的name（用于显示在y轴上面的文字）与data里面name不一致的情况时无法显示双Y轴
                };
                if (opts.isAreaStyle) {
                  s.itemStyle = {
                    normal: {
                      color: opts.colorList[i],
                      areaStyle: {
                        type: 'default',
                      },
                    },
                  };
                } else {
                  s.itemStyle = {
                    normal: {
                      color: opts.colorList[i],
                    },
                  };
                }
                let tempData = [];
                // 补全数据0
                if (xAxisData.toString() !== item.key.toString()) {
                  tempData.length = xAxisData.length;
                  const { value } = item;
                  item.key.forEach((currentKey, j) => {
                    for (const l in xAxisData) {
                      if (xAxisData[l] === currentKey.toString()) {
                        tempData[l] = value[j];
                      } else if (!tempData[l]) {
                        tempData[l] = 0;
                      }
                    }
                  });
                } else {
                  tempData = item.value;
                }

                if (opts.enableDoubleYAxis) {
                  optionLines.yAxis.forEach((item, i) => {
                    if (item.name === s.name || item.name === s.yName) {
                      s.yAxisIndex = i;
                      return false;
                    }
                    return true;
                  });
                }

                // 最后一个月虚线展示
                if (opts.lastDotted) {
                  const s1 = toolUtil.extend({}, s);
                  s1.lineStyle = {
                    normal: {
                      width: 2,
                      color: opts.colorList[i],
                      type: 'dotted',
                    },
                  };
                  tempData.forEach((item, index) => {
                    const value = item.toString();
                    if (index > tempData.length - 3) {
                      s1.data.push(value);
                    } else {
                      s1.data.push('_');
                    }
                    if (index < tempData.length - 1) {
                      s.data.push(value);
                    } else {
                      s.data.push('_');
                    }
                  });
                  seriesData.push(s1);
                } else {
                  s.data = tempData;
                }
                seriesData.push(s);
                legendData.push({ name: s.name, icon: 'circle' });
                legendSelected[s.name] = false;
              });
              if (seriesData.length > 0 && seriesData[0].data.length <= 1) {
                optionLines.xAxis[0].boundaryGap = true;
                seriesData.forEach((item) => {
                  item.symbolSize = 2;
                });
              } else {
                optionLines.xAxis[0].boundaryGap = false;
              }
              optionLines.legend.data = legendData;
              if (data.length > 0) {
                optionLines.xAxis[0].data = xAxisData;
              }
              optionLines.series = seriesData;

              // 设置默认展示的legend
              if (opts.defaultLegend instanceof Array && opts.defaultLegend.length > 0) {
                opts.defaultLegend.forEach((item) => {
                  legendSelected[item] = true;
                });
              } else {
                for (const key in legendSelected) {
                  legendSelected[key] = true;
                }
              }
              optionLines.legend.selected = legendSelected;
            } else {
              optionLines.xAxis[0].show = false;
              optionLines.yAxis[0].show = false;
              optionLines.dataZoom[0].show = false;
              optionLines.series = [];
            }
            if (!this.flagClickEvent && opts.clickEvent) {
              this.flagClickEvent = true;
              linesChart.on('click', opts.clickEvent);
            }
            toolUtil.extend(optionLines, opts.optionLines);
            linesChart.setOption(optionLines, true);
        },
    },
}
</script>
