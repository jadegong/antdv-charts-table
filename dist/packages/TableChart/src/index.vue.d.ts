declare const _sfc_main: import("vue").DefineComponent<{
    option: {
        type: ObjectConstructor;
        default: () => {
            toolBar: boolean;
            onTypeChange: () => void;
            height: number;
            padding: number;
            type: string;
            columns: any[];
            data: any;
            tableHeight: any;
            showLineNo: boolean;
            tableClassName: string;
            onTableChange: () => void;
            tableData: any;
            scrollX: any;
            loading: boolean;
            theme: string;
        };
    };
    loading: {
        type: BooleanConstructor;
        default: () => boolean;
    };
}, unknown, {
    showType: string;
    tableHeaderHeight: number;
}, {
    config(): {}[];
    baseChartOption(): any;
    baseTableOption(): {
        showHeader: boolean;
        columns: any;
        dataSource: any;
        pagination: boolean;
        scroll: {
            x: any;
            y: any;
        };
        showLineNo: any;
        onChange: any;
        styleName: any;
        padding: any;
    };
}, {
    /**
      * 切换统计图表显示类型事件
      * @param type String 切换后的显示类型；
      * @return null
      */
    onUIClick(type: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    option: {
        type: ObjectConstructor;
        default: () => {
            toolBar: boolean;
            onTypeChange: () => void;
            height: number;
            padding: number;
            type: string;
            columns: any[];
            data: any;
            tableHeight: any;
            showLineNo: boolean;
            tableClassName: string;
            onTableChange: () => void;
            tableData: any;
            scrollX: any;
            loading: boolean;
            theme: string;
        };
    };
    loading: {
        type: BooleanConstructor;
        default: () => boolean;
    };
}>>, {
    loading: boolean;
    option: Record<string, any>;
}>;
export default _sfc_main;
