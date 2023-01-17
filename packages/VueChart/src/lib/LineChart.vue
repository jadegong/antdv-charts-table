<!-- v1.0.0 2022/08/09 gqd 折线图组件; -->
<!--        2022/08/16 gqd 使用普通变量接收echarts实例，否则echarts实例会赋值给ref响应式Proxy对象，导致tooltip不显示; -->
<!--        2023/01/17 gqd 修改为typescript; -->
<template>
  <div ref="domChart" style="height: 100%; width: 100%">
    <span style="display: none">{{ option.type }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import * as echarts from 'echarts'
import { toolUtil } from '../../../utils/toolUtils'
// import constants from '@/utils/constants';
import { defaultConfig } from '../defaultConfig'
import { dark } from '../theme/dark'
import { light } from '../theme/light'

// 使用普通变量接收echarts实例，否则echarts实例会赋值给ref响应式Proxy对象，导致tooltip不显示。
let lineChart = null

export default defineComponent({
    name: 'LineChart',
    props: {
        option: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            flagClickEvent: false,
            defaultOption: toolUtil.extend({}, defaultConfig.line.option),
        }
    },
    created() {},
    mounted() {
        if (this.option) {
            lineChart = echarts.init(
                this.$refs.domChart,
                this.option.theme === 'dark' ? dark : light
            )
            this.setLineOption(this.option)
            window.addEventListener('resize', this.onWindowResize)
        }
    },
    updated() {
        this.setLineOption(this.option)
        lineChart.resize()
    },
    beforeUnmount() {
        if (lineChart) {
            lineChart.clear()
            lineChart.dispose()
        }
        window.removeEventListener('resize', this.onWindowResize)
    },
    methods: {
        onWindowResize() {
            lineChart.resize()
        },
        setLineOption(option) {
            const self = this
            const opts = toolUtil.extend({}, this.defaultOption, option)
            const optionLine = {
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    formatter(params, ticket, callback) {
                        if (opts.toolTipFormatter) {
                            return opts.toolTipFormatter.call(
                                this,
                                params,
                                ticket,
                                callback
                            )
                        }
                        if (opts.lastDotted) {
                            let res = ''
                            let value = 0
                            if (params[0].value !== '_') {
                                value = params[0].value
                            } else {
                                value = params[1].value
                            }
                            res = `${params[0].axisValue}</br>${
                                params[0].seriesName
                            }:${toolUtil.commafy(value)}`
                            return res
                        }
                        let res = params[0].name
                        for (let i = 0, l = params.length; i < l; i++) {
                            res += `<br/>${
                                params[i].seriesName
                            } : ${toolUtil.commafy(params[i].value)}`
                        }
                        return res
                    },
                },
                title: {
                    text: opts.title,
                    left: 'center',
                    /*  textStyle: {
                         fontSize: '14',
                         color: 'white'
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
                    show: false,
                    x: 'right',
                    y: 'center',
                    orient: 'vertical',
                    itemHeight: 8,
                    padding: 20,
                    itemGap: 20,
                    formatter(params) {
                        if (opts.legendFormatter) {
                            return opts.legendFormatter.call(this, params)
                        }
                        // return $.apiUtil.formatCharts(params, 22);
                        return toolUtil.formatCharts(params, 22)
                    },
                    /* textStyle: {
                         color: '#fff',
                         fontFamily: 'SimHei,Arial, Verdana, sans-serif',
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
                                    const xAxisFormatter = eval(
                                        opts.xAxisFormatter
                                    )
                                    const tp = xAxisFormatter.call(this, value)
                                    return tp
                                }
                                return value
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        show: true,
                        type: 'value',
                        name: opts.yAxisName,
                        axisLabel: {
                            interval: 0,
                            // color: opts.yAxisLabelColor,
                            rotate: opts.yRotate,
                            formatter(value) {
                                if (opts.yAxisFormatter) {
                                    return opts.yAxisFormatter.call(this, value)
                                }
                                return toolUtil.commafy(value)
                            },
                        },
                        nameTextStyle: {
                            // color: opts.nameTextColor,
                            fontSize: 12,
                        },
                    },
                ],
                series: [
                    {
                        name: opts.name,
                        // symbol: '/images/em-c122.png',
                        symbol: 'emptyCircle',
                        symbolSize: opts.symbolSize,
                        type: 'line',
                        lineStyle: opts.isAreaStyle
                            ? { opacity: 1, color: opts.color }
                            : {
                                  color: opts.color,
                              },
                        itemStyle: {
                            color: opts.color,
                        },
                        areaStyle: opts.isAreaStyle
                            ? {
                                  normal: {
                                      color: {
                                          type: 'linear',
                                          x: 0,
                                          y: 0,
                                          x2: 0,
                                          y2: 1,
                                          colorStops: opts.colorStops,
                                          globalCoord: false, // 缺省为 false
                                      },
                                  },
                              }
                            : null,
                        data: [],
                    },
                ],
            }

            let { data } = opts
            if (data && data.length > 0) {
                optionLine.xAxis[0].data = []
                optionLine.series[0].data = []
                // 最后数据是否虚线显示
                if (opts.lastDotted) {
                    const s1 = toolUtil.extend({}, optionLine.series[0])
                    s1.lineStyle = {
                        normal: {
                            width: 3,
                            color: opts.colorList
                                ? opts.colorList[0]
                                : '#27a9f4',
                            type: 'dotted',
                        },
                    }
                    optionLine.series.push(s1)
                }

                if (opts.resetOrder) {
                    data = data.sort((a, b) => {
                        return a[opts.keyName] - b[opts.keyName]
                    })
                }

                data.forEach((item, index) => {
                    const key = item[opts.keyName]
                    const value = item[opts.valueName]
                    optionLine.xAxis[0].data.push(key)

                    if (opts.lastDotted) {
                        if (index > data.length - 3) {
                            optionLine.series[1].data.push(value)
                        } else {
                            optionLine.series[1].data.push('_')
                        }

                        if (index < data.length - 1) {
                            optionLine.series[0].data.push(value)
                        } else {
                            optionLine.series[0].data.push('_')
                        }
                    } else {
                        optionLine.series[0].data.push(value)
                    }
                })
            } else {
                optionLine.xAxis[0].show = false
                optionLine.yAxis[0].show = false
                optionLine.series = []
            }

            toolUtil.extend(optionLine, opts.optionLine)
            lineChart.setOption(optionLine, true)
        },
    },
});
</script>
