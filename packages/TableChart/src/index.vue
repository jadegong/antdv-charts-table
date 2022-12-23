<!-- v1.0.0 2022/02/25 gqd TableChart component; -->
<!--        2022/04/25 gqd 加载中; -->
<!--        2022/08/17 gqd 增加table部分逻辑; -->
<template>
    <a-spin :spinning="option.loading || false">
        <div class="table-chart-wrapper" :style="{ height: `${baseChartOption.height}px` }">
            <no-data v-if="baseChartOption.data && baseChartOption.data.length === 0" :data="baseChartOption.data"></no-data>
            <div v-else class="table-chart-container">
                <div v-if="config[1].length > 0" class="table-chart-operator-wrapper">
                    <span
                        v-for="iconItem in config[1]"
                        :key="iconItem.id"
                        class="table-chart-toolbar-icon-wrapper"
                        :class="{ active: iconItem.id === showType }"
                        @click="onUIClick(iconItem.id)"
                    >
                        <bar-chart-outlined v-if="iconItem.id === 'chart'" />
                        <table-outlined v-if="iconItem.id === 'table'" />
                        <export-outlined v-if="iconItem.id === 'export'" />
                    </span>
                </div>
                <div ref="tableRef" class="table-chart-content-container" :style="{ 'height': config[1].length > 0 ? `calc(100% - 25px)` : '100%'}">
                    <vue-chart v-if="showType === 'chart' || showType === 'export'" :type="baseChartOption.type" :option="{...baseChartOption}"></vue-chart>
                    <base-table v-else-if="showType === 'table'" :option="baseTableOption" />
                </div>
            </div>
        </div>
    </a-spin>
</template>
<script>
import { Spin } from 'ant-design-vue';
import {
    ExportOutlined,
    BarChartOutlined,
    TableOutlined,
} from '@ant-design/icons-vue';
import NoData from '../../Common/NoData.vue';
import VueChart from '../../VueChart';
import BaseTable from '../../BaseTable'
import { toolUtil } from '../../utils/toolUtils';
import './index.less';
export default {
    name: 'TableChart',
    components: {
        ASpin: Spin,
        ExportOutlined,
        BarChartOutlined,
        TableOutlined,
        NoData,
        VueChart,
        BaseTable,
    },
    props: {
        option: {
            type: Object,
            default: () => {
                return {
                    toolBar: false,
                    onTypeChange: () => {},
                    height: 600,
                    padding: 0,
                    type: '',
                    columns: [],
                    data: undefined,
                    tableHeight: undefined,
                    showLineNo: true,
                    tableClassName: '',
                    onTableChange: () => {},
                    tableData: undefined,
                    scrollX: undefined,
                    loading: false,
                    theme: 'light',
                };
            },
        },
        loading: {
            type: Boolean,
            default: () => false,
        },
    },
    data() {
        return {
            showType: 'chart',
            tableHeaderHeight: 50,
        };
    },
    computed: {
        config() {
            const defaultToolBar = {
                displaySwitch: true,
                export: false,
                exportParams: {
                    intfcType: '',
                    intfcTypeName: '',
                    fileName: '',
                    url: '',
                },
            };
            const {
                toolBar,
            } = this.option;
            let newToolBar = {};
            let bars = [];
            if (typeof toolBar === 'boolean') {
                if (toolBar) {
                    newToolBar = defaultToolBar;
                } else {
                    newToolBar = {};
                }
            } else if (typeof toolBar === 'object') {
                newToolBar = { ...defaultToolBar, ...toolBar };
            }
            if (newToolBar.displaySwitch) {
                bars = bars.concat([
                    {
                        id: 'chart',
                        // Component: BarChartOutlined,
                    },
                    {
                        id: 'table',
                        // Component: TableOutlined,
                    },
                ]);
            }
            if (newToolBar.export) {
                bars = bars.concat([
                    {
                        id: 'export',
                        // Component: ExportOutlined,
                    },
                ]);
            }
            return [newToolBar, bars.reverse()];
        },
        baseChartOption() {
            return toolUtil.extend({height: 600, data: [], theme: 'light'}, this.option);
        },
        baseTableOption() {
            const {
                height,
                columns,
                data,
                tableHeight,
                showLineNo,
                tableClassName,
                onTableChange,
                tableData,
                scrollX,
                padding,
            } = this.option;
            return {
                showHeader: true,
                columns,
                dataSource: tableData || data || [],
                pagination: true,
                scroll: {
                    x: scrollX,
                    y: tableHeight || height - this.tableHeaderHeight - 10
                },
                showLineNo,
                onChange: onTableChange,
                styleName: tableClassName || 'striped',
                padding,
            };
        },
    },
    mounted() {
    },
    methods: {
        /**
         * 切换统计图表显示类型事件
         * @param type String 切换后的显示类型；
         * @return null
         */
        onUIClick(type) {
            const {
                onTypeChange = () => {},
            } = this.option;
            if (type === 'export') {
                if (this.config[0].onExport && typeof this.config[0].onExport === 'function') {
                    this.config[0].onExport();
                } else if (this.config[0].exportParams.url) {
                    const { url, ...restParams } = this.config[0].exportParams;
                    toolUtil.export(url, restParams);
                }
            } else {
                this.showType = type;
            }
            if (onTypeChange && typeof onTypeChange === 'function') {
                onTypeChange(type);
            }
        },
    },
}
</script>
