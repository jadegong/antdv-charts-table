declare const _sfc_main: import("vue").DefineComponent<{
    option: {
        type: ObjectConstructor;
        default: () => {
            showHeader: boolean;
            columns: any[];
            dataSource: any[];
            pagination: boolean;
            scroll: {
                x: any;
                y: number;
            };
            showLineNo: boolean;
            onChange: () => void;
            styleName: string;
            padding: number;
        };
    };
}, unknown, {}, {
    defaultOptions(): {
        size: string;
        pagination: boolean;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    option: {
        type: ObjectConstructor;
        default: () => {
            showHeader: boolean;
            columns: any[];
            dataSource: any[];
            pagination: boolean;
            scroll: {
                x: any;
                y: number;
            };
            showLineNo: boolean;
            onChange: () => void;
            styleName: string;
            padding: number;
        };
    };
}>>, {
    option: Record<string, any>;
}>;
export default _sfc_main;
