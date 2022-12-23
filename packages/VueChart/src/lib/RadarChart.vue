<!-- v1.0.0 2022/07/26 gqd 雷达图组件; -->
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

let radarChart = null;

export default {
    name: 'RadarChart',
    props: {
        option: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            flagClickEvent: false,
            defaultOption: toolUtil.extend({}, defaultConfig.radar.option),
        };
    },
    mounted() {
        if (this.option) {
            radarChart = echarts.init(this.$refs.domChart, this.option.theme === 'dark' ? dark : light);
            this.setRadarOption(this.option);
            window.addEventListener('resize', this.onWindowResize);
        }
    },
    updated() {
        this.setRadarOption(this.option);
        radarChart.resize();
    },
    beforeDestroy() {
        if (radarChart) {
            radarChart.clear();
            radarChart.dispose();
        }
        window.removeEventListener('resize', this.onWindowResize);
    },
    methods: {
        onWindowResize() {
            radarChart.resize();
        },
        setRadarOption(option) {
            // const self = this;
            const opts = toolUtil.merge(this.defaultOption, option, true);
            const optionRadar = {
                tooltip: {
                    trigger: 'item',
                    confine: true,
                    formatter(params) {
                        if (opts.toolTipFormatter) {
                            return eval(opts.toolTipFormatter).call(this, params);
                        }
                        let res = `${params.name}<br>`;
                        for (let i = 0; i < opts.dimensionName.length; i++) {
                            res += `${opts.dimensionName[i]} : ${params.value[i]}<br>`;
                        }
                        return res;
                    },
                },
                title: {
                    left: 'center',
                    top: 0,
                    textStyle: {
                        fontSize: 14,
                        color: '#fff',
                        width: 20,
                    },
                    text: opts.title,
                },
                legend: {
                    show: opts.legendShow,
                    left: opts.legendLeft,
                    top: opts.legendTop,
                    orient: opts.orient,
                    align: opts.legendAlign,
                    itemHeight: 10,
                    itemWidth: 20,
                    itemGap: 20,
                    /* textStyle: {
                            color: '#fff',
                            fontFamily: 'SimHei,Arial, Verdana, sans-serif',
                            fontSize: 12
                            }, */
                    data: opts.name,
                    formatter(params) {
                        if (opts.legendFormatter) {
                            return eval(opts.legendFormatter).call(this, params);
                        }
                        return params;
                    },
                },
                series: {
                    type: 'radar',
                    data: [
                        {
                            value: [],
                            name: '',
                        },
                    ],
                },
                color: ['#3D91F7', '#61BE67'],
                radar: {
                    nameGap: 10,
                    center: opts.center,
                    shape: opts.shape,
                    radius: opts.radius, // 图表区域大小
                    name: {
                        /* textStyle: {
                                color: '#fff',
                                fontSize: 12
                                } */
                    },
                    indicator: [],
                    axisLine: {
                        show: true,
                    },
                    splitArea: {
                        show: opts.splitAreaShow,
                        areaStyle: {
                            // color: opts.splitAreaColor, // 图表背景网格的颜色
                            opacity: 1,
                        },
                    },
                    splitLine: {
                        show: opts.splitLineShow,
                        lineStyle: {
                            width: 0.8,
                            // color: opts.splitLineColor, // 图表背景网格线的颜色
                        },
                    },
                },
            };

            const {data} = opts;
            if (data && data.length > 0) {
                // 构建雷达图series
                const {dimensionName} = opts;
                const {dimensionKey} = opts;

                // 系列名称
                if (opts.name) {
                    for (let i = 0; i < opts.name.length; i++) {
                        optionRadar.series.data[i] = toolUtil.extend({}, optionRadar.series.data[0]);
                        optionRadar.series.data[i].name = opts.name[i];
                    }
                }

                opts.data.forEach((item, index) => {
                    for (let k = 0; k < dimensionKey.length; k++) {
                        // 添加雷达图数据
                        optionRadar.series.data[index].value.push(item[dimensionKey[k]]);
                        // 添加维度名称
                        optionRadar.radar.indicator[k] = {name: dimensionName[k]};
                        // 刻度最大值
                        // 刻度最小值
                        if (opts.max) {
                            if (opts.max instanceof Array) {
                                optionRadar.radar.indicator[k].max = opts.max[k];
                            } else {
                                optionRadar.radar.indicator[k].max = opts.max;
                            }
                        }
                        // 刻度最小值
                        if (opts.min) {
                            if (opts.min instanceof Array) {
                                optionRadar.radar.indicator[k].min = opts.min[k];
                            } else {
                                optionRadar.radar.indicator[k].min = opts.min;
                            }
                        }
                    }
                    // 雷达图数据线条边框颜色
                    opts.lineColor.forEach((item2, j) => {
                        optionRadar.color[j] = opts.lineColor[j];
                    });
                });

                // 填充区域
                if (opts.fillingStyle) {
                    for (let i = 0; i < opts.data.length; i++) {
                        optionRadar.series.data[i].areaStyle = {
                            normal: {color: opts.fillingStyleColor[i % opts.fillingStyleColor.length]},
                        };
                    }
                }
            } else {
                optionRadar.series = [];
                optionRadar.radar = Object();
            }

            toolUtil.extend(optionRadar, opts.optionRadar);
            radarChart.setOption(optionRadar, true);
        },
    },
}
</script>
