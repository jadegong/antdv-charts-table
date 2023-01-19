export declare const defaultConfig: {
    queryInput: {
        queryName: string;
        cnName: string;
        validator: string;
        placeholder: string;
        type: string;
    };
    querySelect: {
        queryName: string;
        cnName: string;
        validator: string;
        placeholder: string;
        type: string;
        dataType: string;
        mode: string;
        clear: boolean;
        dataOption: {
            url: string;
            objName: string;
            method: string;
            keyName: string;
            valueName: string;
        };
        staticData: {
            key: number;
            value: string;
        }[];
    };
    queryDate: {
        queryName: string;
        cnName: string;
        validator: string;
        placeholder: string;
        type: string;
    };
    queryDateRange: {
        queryName: string;
        queryParam: string[];
        cnName: string;
        format: string[];
        defaultTime: any;
        validator: string;
        placeholder: string[];
        type: string;
    };
    pageSetting: {
        col: number;
        pageZoom: string;
        margin: string;
        avatar: string;
        pageWidth: string;
        pageHeight: string;
    };
    industrySelect: {
        queryName: string;
        type: string;
    };
    line: {
        option: {
            theme: string;
            type: string;
            data: any[];
            title: string;
            name: string;
            keyName: string;
            valueName: string;
            gridLeft: string;
            gridRight: string;
            gridTop: string;
            gridBottom: string;
            yAxisName: string;
            xRotate: number;
            xAxisLabelColor: string;
            yRotate: number;
            yAxisLabelColor: string;
            nameTextColor: string;
            color: string;
            symbolSize: number;
            optionLine: {};
            isAreaStyle: boolean;
            colorStops: {
                offset: number;
                color: string;
            }[];
            resetOrder: boolean;
            showDataZoom: boolean;
            lastDotted: boolean;
            toolTipFormatter: any;
            legendFormatter: any;
            xAxisFormatter: any;
            yAxisFormatter: any;
        };
        dataOption: {
            url: string;
            objName: string;
            method: string;
            data: any[];
            params: {
                intfcType: string;
                intfcTypeName: string;
            };
        };
        exportOption: {
            property: {
                exportName: string;
                exportRiskType: string;
                exportAddress: string;
                exportParams: string;
            }[];
            exportPermission: boolean;
        };
        customizeOption: {
            index: number;
            customizeType: string;
            customizeIcon: string;
            customizeDisable: string;
            buttonConfig: {
                url: string;
                params: {
                    searchParam: boolean;
                    selectParam: boolean;
                    configParam: {
                        key: string;
                        value: string;
                    }[];
                };
                fileType: string;
                fileSize: string;
            };
        }[];
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    lines: {
        option: {
            theme: string;
            type: string;
            data: any[];
            title: string;
            name: string;
            keyName: string;
            valueName: string;
            gridLeft: string;
            gridRight: string;
            gridTop: string;
            gridBottom: string;
            legendShow: boolean;
            orient: string;
            legendLeft: string;
            legendTop: string;
            xRotate: number;
            xAxisLabelColor: string;
            y1Rotate: number;
            y1AxisName: string;
            y1AxisLabelColor: string;
            y2Rotate: number;
            y2AxisName: string;
            y2AxisLabelColor: string;
            names: string[];
            keys: string[];
            y1Keys: any[];
            y2Keys: any[];
            isAreaStyle: boolean;
            colorList: string[];
            optionLines: {};
            enableDoubleYAxis: boolean;
            resetOrder: boolean;
            symbolSize: number;
            showDataZoom: boolean;
            lastDotted: boolean;
            toolTipFormatter: any;
            legendFormatter: any;
            xAxisFormatter: any;
            yAxisFormatter: any;
        };
        dataOption: {
            url: string;
            objName: string;
            method: string;
            data: any[];
            params: {
                intfcType: string;
                intfcTypeName: string;
            };
        };
        exportOption: {
            property: {
                exportName: string;
                exportRiskType: string;
                exportAddress: string;
                exportParams: string;
            }[];
            exportPermission: boolean;
        };
        customizeOption: {
            index: number;
            customizeType: string;
            customizeIcon: string;
            customizeDisable: string;
            buttonConfig: {
                url: string;
                params: {
                    searchParam: boolean;
                    selectParam: boolean;
                    configParam: {
                        key: string;
                        value: string;
                    }[];
                };
                fileType: string;
                fileSize: string;
            };
        }[];
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    bar: {
        option: {
            theme: string;
            type: string;
            keyName: string;
            valueName: string[];
            barType: string;
            title: string;
            name: string[];
            barColor: string[];
            colorList: string[];
            gridLeft: string;
            gridRight: string;
            gridTop: string;
            gridBottom: string;
            legendShow: boolean;
            xAxisLabelColor: string;
            yAxisLabelColor: string;
            orient: string;
            legendLeft: string;
            legendTop: string;
            optionBar: {};
        };
        dataOption: {
            url: string;
            objName: string;
            method: string;
            data: any[];
            params: {
                intfcType: string;
                intfcTypeName: string;
            };
        };
        exportOption: {
            property: {
                exportName: string;
                exportRiskType: string;
                exportAddress: string;
                exportParams: string;
            }[];
            exportPermission: boolean;
        };
        customizeOption: {
            index: number;
            customizeType: string;
            customizeIcon: string;
            customizeDisable: string;
            buttonConfig: {
                url: string;
                params: {
                    searchParam: boolean;
                    selectParam: boolean;
                    configParam: {
                        key: string;
                        value: string;
                    }[];
                };
                fileType: string;
                fileSize: string;
            };
        }[];
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    pie: {
        option: {
            theme: string;
            type: string;
            title: string;
            keyName: string;
            valueName: string;
            orient: string;
            legendAlign: string;
            legendLeft: string;
            legendTop: string;
            showTooltip: boolean;
            colorList: string[];
            optionPie: {};
            legendShow: boolean;
            pieCenter: string[];
            pieRadius: string[];
            roseType: string;
        };
        dataOption: {
            url: string;
            objName: string;
            method: string;
            data: any[];
            params: {
                intfcType: string;
                intfcTypeName: string;
            };
        };
        exportOption: {
            property: {
                exportName: string;
                exportRiskType: string;
                exportAddress: string;
                exportParams: string;
            }[];
            exportPermission: boolean;
        };
        customizeOption: {
            index: number;
            customizeType: string;
            customizeIcon: string;
            customizeDisable: string;
            buttonConfig: {
                url: string;
                params: {
                    searchParam: boolean;
                    selectParam: boolean;
                    configParam: {
                        key: string;
                        value: string;
                    }[];
                };
                fileType: string;
                fileSize: string;
            };
        }[];
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    barLine: {
        option: {
            theme: string;
            type: string;
            keyName: string;
            barValueName: string[];
            lineValueName: string[];
            barName: string[];
            lineName: string[];
            barColor: string[];
            lineColor: string[];
            title: string;
            legendAlign: string;
            optionBarLine: {};
            gridLeft: string;
            gridRight: string;
            gridTop: string;
            gridBottom: string;
            legendShow: boolean;
            overlap: boolean;
            hideMarkPoint: boolean;
            xAxisLabelColor: string;
            xRotate: number;
            orient: string;
            legendLeft: string;
            legendTop: string;
            y1AxisName: string;
            y2AxisName: string;
            y1AxisLabelColor: string;
            y2AxisLabelColor: string;
            y1Rotate: number;
            y2Rotate: number;
            showY2Axis: boolean;
            showYAxisName: boolean;
            splitYAxis: boolean;
        };
        dataOption: {
            url: string;
            objName: string;
            method: string;
            data: any[];
            params: {
                intfcType: string;
                intfcTypeName: string;
            };
        };
        exportOption: {
            property: {
                exportName: string;
                exportRiskType: string;
                exportAddress: string;
                exportParams: string;
            }[];
            exportPermission: boolean;
        };
        customizeOption: {
            index: number;
            customizeType: string;
            customizeIcon: string;
            customizeDisable: string;
            buttonConfig: {
                url: string;
                params: {
                    searchParam: boolean;
                    selectParam: boolean;
                    configParam: {
                        key: string;
                        value: string;
                    }[];
                };
                fileType: string;
                fileSize: string;
            };
        }[];
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    radar: {
        option: {
            theme: string;
            type: string;
            title: string;
            dimensionKey: string[];
            dimensionName: string[];
            max: number[];
            lineColor: string[];
            legendShow: boolean;
            orient: string;
            legendLeft: string;
            legendTop: string;
            legendAlign: string;
            name: string[];
            center: string[];
            radius: string[];
            shape: string;
            splitAreaShow: boolean;
            splitAreaColor: string[];
            splitLineShow: boolean;
            splitLineColor: string[];
            fillingStyle: boolean;
            fillingStyleColor: string[];
            optionRadar: {};
        };
        dataOption: {
            url: string;
            objName: string;
            method: string;
            data: any[];
        };
        exportOption: {
            property: {
                exportName: string;
                exportRiskType: string;
                exportAddress: string;
                exportParams: string;
            }[];
            exportPermission: boolean;
        };
        customizeOption: {
            index: number;
            customizeType: string;
            customizeIcon: string;
            customizeDisable: string;
            buttonConfig: {
                url: string;
                params: {
                    searchParam: boolean;
                    selectParam: boolean;
                    configParam: {
                        key: string;
                        value: string;
                    }[];
                };
                fileType: string;
                fileSize: string;
            };
        }[];
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    threeBar: {
        option: {
            theme: string;
            type: string;
            title: string;
            keyName: string;
            valueName: string;
            keyPosition: string;
            dataLength: number;
            barSize: number;
            barHeight: number[];
            rotate: number;
        };
        dataOption: {
            url: string;
            objName: string;
            method: string;
            data: any[];
        };
        exportOption: {
            property: {
                exportName: string;
                exportRiskType: string;
                exportAddress: string;
                exportParams: string;
            }[];
            exportPermission: boolean;
        };
        customizeOption: {
            index: number;
            customizeType: string;
            customizeIcon: string;
            customizeDisable: string;
            buttonConfig: {
                url: string;
                params: {
                    searchParam: boolean;
                    selectParam: boolean;
                    configParam: {
                        key: string;
                        value: string;
                    }[];
                };
                fileType: string;
                fileSize: string;
            };
        }[];
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    threeBar2: {
        option: {
            theme: string;
            type: string;
            title: string;
            keyName: string;
            valueName: string;
            dataLength: number;
            barSize: number;
            barHeight: number[];
        };
        dataOption: {
            url: string;
            objName: string;
            method: string;
            data: any[];
        };
        exportOption: {
            property: {
                exportName: string;
                exportRiskType: string;
                exportAddress: string;
                exportParams: string;
            }[];
            exportPermission: boolean;
        };
        customizeOption: {
            index: number;
            customizeType: string;
            customizeIcon: string;
            customizeDisable: string;
            buttonConfig: {
                url: string;
                params: {
                    searchParam: boolean;
                    selectParam: boolean;
                    configParam: {
                        key: string;
                        value: string;
                    }[];
                };
                fileType: string;
                fileSize: string;
            };
        }[];
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    threeBar3: {
        option: {
            theme: string;
            type: string;
            title: string;
            keyName: string;
            valueName: string;
            dataLength: number;
            barSize: number;
            barHeight: number[];
        };
        dataOption: {
            url: string;
            objName: string;
            method: string;
            data: any[];
        };
        exportOption: {
            property: {
                exportName: string;
                exportRiskType: string;
                exportAddress: string;
                exportParams: string;
            }[];
            exportPermission: boolean;
        };
        customizeOption: {
            index: number;
            customizeType: string;
            customizeIcon: string;
            customizeDisable: string;
            buttonConfig: {
                url: string;
                params: {
                    searchParam: boolean;
                    selectParam: boolean;
                    configParam: {
                        key: string;
                        value: string;
                    }[];
                };
                fileType: string;
                fileSize: string;
            };
        }[];
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    particles: {
        option: {
            theme: string;
            type: string;
            title: string;
            keyName: string;
            valueName: string;
            lineColor: string;
            xAxisLabelColor: string;
            yAxisLabelColor: string;
            yAxisName: string;
            gridLeft: string;
            gridRight: string;
            gridTop: string;
            gridBottom: string;
            name: string[];
            dataUnit: string;
            unit: string;
            legendShow: boolean;
            orient: string;
            legendLeft: string;
            legendTop: string;
            circleSize: number;
            barSize: string;
            dataLength: number;
            style: string;
        };
        dataOption: {
            url: string;
            objName: string;
            method: string;
            data: any[];
        };
        exportOption: {
            property: {
                exportName: string;
                exportRiskType: string;
                exportAddress: string;
                exportParams: string;
            }[];
            exportPermission: boolean;
        };
        customizeOption: {
            index: number;
            customizeType: string;
            customizeIcon: string;
            customizeDisable: string;
            buttonConfig: {
                url: string;
                params: {
                    searchParam: boolean;
                    selectParam: boolean;
                    configParam: {
                        key: string;
                        value: string;
                    }[];
                };
                fileType: string;
                fileSize: string;
            };
        }[];
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    map: {
        option: {
            theme: string;
            type: string;
            title: string;
            selectName: string;
        };
        dataOption: {
            url: string;
            objName: string;
            method: string;
            data: any[];
        };
        exportOption: {
            property: {
                exportName: string;
                exportRiskType: string;
                exportAddress: string;
                exportParams: string;
            }[];
            exportPermission: boolean;
        };
        customizeOption: {
            index: number;
            customizeType: string;
            customizeIcon: string;
            customizeDisable: string;
            buttonConfig: {
                url: string;
                params: {
                    searchParam: boolean;
                    selectParam: boolean;
                    configParam: {
                        key: string;
                        value: string;
                    }[];
                };
                fileType: string;
                fileSize: string;
            };
        }[];
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    bar3D: {
        option: {
            type: string;
            title: string;
            name: string;
            hours: string[];
            days: string[];
            data: number[][];
        };
        dataOption: {
            url: string;
            objName: string;
            method: string;
            data: any[];
        };
        exportOption: {
            property: {
                exportName: string;
                exportRiskType: string;
                exportAddress: string;
                exportParams: string;
            }[];
            exportPermission: boolean;
        };
        customizeOption: {
            index: number;
            customizeType: string;
            customizeIcon: string;
            customizeDisable: string;
            buttonConfig: {
                url: string;
                params: {
                    searchParam: boolean;
                    selectParam: boolean;
                    configParam: {
                        key: string;
                        value: string;
                    }[];
                };
                fileType: string;
                fileSize: string;
            };
        }[];
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    tabLines: {
        option: {
            theme: string;
            type: string;
            keyName: string;
            valueName: string;
            title: string;
            name: string;
            y1Keys: string[];
            y2Keys: string[];
            names: string[];
            keys: string[];
            y1AxisName: string;
            y2AxisName: string;
            xAxisLabelColor: string;
            y1AxisLabelColor: string;
            y2AxisLabelColor: string;
            y2AxisFormatter: string;
            y1Rotate: number;
            y2Rotate: number;
            legendShow: boolean;
            orient: string;
            gridLeft: string;
            gridRight: string;
            gridTop: string;
            gridBottom: string;
            legendLeft: string;
            legendTop: string;
            colorList: string[];
            enableDoubleYAxis: boolean;
            optionLines: {};
            tabs: {
                id: string;
                name: string;
                objName: string;
                url: string;
                method: string;
            }[];
        };
        dataOption: {
            id: string;
            url: string;
            objName: string;
            method: string;
            data: any[];
        }[];
        exportOption: {
            property: {
                exportName: string;
                exportRiskType: string;
                exportAddress: string;
                exportParams: string;
            }[];
            exportPermission: boolean;
        };
        customizeOption: {
            index: number;
            customizeType: string;
            customizeIcon: string;
            customizeDisable: string;
            buttonConfig: {
                url: string;
                params: {
                    searchParam: boolean;
                    selectParam: boolean;
                    configParam: {
                        key: string;
                        value: string;
                    }[];
                };
                fileType: string;
                fileSize: string;
            };
        }[];
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    tabBar: {
        option: {
            theme: string;
            type: string;
            keyName: string;
            valueName: string[];
            barType: string;
            title: string;
            name: string[];
            barColor: string[];
            colorList: string[];
            gridLeft: string;
            gridRight: string;
            gridTop: string;
            gridBottom: string;
            legendShow: boolean;
            xAxisLabelColor: string;
            yAxisLabelColor: string;
            orient: string;
            legendLeft: string;
            legendTop: string;
            optionBar: {};
            tabs: {
                id: string;
                name: string;
                objName: string;
                url: string;
                method: string;
            }[];
        };
        dataOption: {
            id: string;
            url: string;
            objName: string;
            method: string;
            data: any[];
        }[];
        exportOption: {
            property: {
                exportName: string;
                exportRiskType: string;
                exportAddress: string;
                exportParams: string;
            }[];
            exportPermission: boolean;
        };
        customizeOption: {
            index: number;
            customizeType: string;
            customizeIcon: string;
            customizeDisable: string;
            buttonConfig: {
                url: string;
                params: {
                    searchParam: boolean;
                    selectParam: boolean;
                    configParam: {
                        key: string;
                        value: string;
                    }[];
                };
                fileType: string;
                fileSize: string;
            };
        }[];
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    customCard: {
        option: {};
        dataOption: {};
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    table: {
        option: {};
        dataOption: {
            url: string;
            objName: string;
            method: string;
            data: any[];
            params: {
                intfcType: string;
                intfcTypeName: string;
            };
        };
        exportOption: {
            property: {
                exportName: string;
                exportRiskType: string;
                exportAddress: string;
                exportParams: string;
            }[];
            exportPermission: boolean;
        };
        customizeOption: {
            index: number;
            customizeType: string;
            customizeIcon: string;
            customizeDisable: string;
            buttonConfig: {
                url: string;
                params: {
                    searchParam: boolean;
                    selectParam: boolean;
                    configParam: {
                        key: string;
                        value: string;
                    }[];
                };
                fileType: string;
                fileSize: string;
            };
        }[];
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    riskOverviewCeil: {
        option: {
            type: string;
        };
        dataOption: {
            url: string;
            objName: string;
            method: string;
            data: any[];
            params: {
                intfcType: string;
                intfcTypeName: string;
            };
        };
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    blackListTable: {
        option: {
            type: string;
        };
        dataOption: {
            url: string;
            objName: string;
            method: string;
            data: any[];
            params: {
                intfcType: string;
                intfcTypeName: string;
            };
        };
        exportOption: {
            property: {
                exportName: string;
                exportRiskType: string;
                exportAddress: string;
                exportParams: string;
            }[];
            exportPermission: boolean;
        };
        customizeOption: {
            index: number;
            customizeType: string;
            customizeIcon: string;
            customizeDisable: string;
            buttonConfig: {
                url: string;
                params: {
                    searchParam: boolean;
                    selectParam: boolean;
                    configParam: {
                        key: string;
                        value: string;
                    }[];
                };
                fileType: string;
                fileSize: string;
            };
        }[];
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    tabCard: {
        tabs: ({
            id: string;
            name: string;
            cardOption: {
                option: {
                    theme: string;
                    type: string;
                    data: any[];
                    title: string;
                    name: string;
                    keyName: string;
                    valueName: string;
                    gridLeft: string;
                    gridRight: string;
                    gridTop: string;
                    gridBottom: string;
                    legendShow: boolean;
                    orient: string;
                    legendLeft: string;
                    legendTop: string;
                    xRotate: number;
                    xAxisLabelColor: string;
                    y1Rotate: number;
                    y1AxisName: string;
                    y1AxisLabelColor: string;
                    y2Rotate: number;
                    y2AxisName: string;
                    y2AxisLabelColor: string;
                    names: string[];
                    keys: string[];
                    y1Keys: any[];
                    y2Keys: any[];
                    isAreaStyle: boolean;
                    colorList: string[];
                    optionLines: {};
                    enableDoubleYAxis: boolean;
                    resetOrder: boolean;
                    symbolSize: number;
                    showDataZoom: boolean;
                    lastDotted: boolean;
                    toolTipFormatter: any;
                    legendFormatter: any;
                    xAxisFormatter: any;
                    yAxisFormatter: any;
                };
                dataOption: {
                    url: string;
                    objName: string;
                    method: string;
                    data: any[];
                    params: {
                        intfcType: string;
                        intfcTypeName: string;
                    };
                };
                exportOption: {
                    property: {
                        exportName: string;
                        exportRiskType: string;
                        exportAddress: string;
                        exportParams: string;
                    }[];
                    exportPermission: boolean;
                };
                customizeOption: {
                    index: number;
                    customizeType: string;
                    customizeIcon: string;
                    customizeDisable: string;
                    buttonConfig: {
                        url: string;
                        params: {
                            searchParam: boolean;
                            selectParam: boolean;
                            configParam: {
                                key: string;
                                value: string;
                            }[];
                        };
                        fileType: string;
                        fileSize: string;
                    };
                }[];
                GridX: number;
                GridY: number;
                w: number;
                h: number;
                key: string;
            }[];
        } | {
            id: string;
            name: string;
            cardOption: {
                option: {
                    theme: string;
                    type: string;
                    keyName: string;
                    valueName: string[];
                    barType: string;
                    title: string;
                    name: string[];
                    barColor: string[];
                    colorList: string[];
                    gridLeft: string;
                    gridRight: string;
                    gridTop: string;
                    gridBottom: string;
                    legendShow: boolean;
                    xAxisLabelColor: string;
                    yAxisLabelColor: string;
                    orient: string;
                    legendLeft: string;
                    legendTop: string;
                    optionBar: {};
                };
                dataOption: {
                    url: string;
                    objName: string;
                    method: string;
                    data: any[];
                    params: {
                        intfcType: string;
                        intfcTypeName: string;
                    };
                };
                exportOption: {
                    property: {
                        exportName: string;
                        exportRiskType: string;
                        exportAddress: string;
                        exportParams: string;
                    }[];
                    exportPermission: boolean;
                };
                customizeOption: {
                    index: number;
                    customizeType: string;
                    customizeIcon: string;
                    customizeDisable: string;
                    buttonConfig: {
                        url: string;
                        params: {
                            searchParam: boolean;
                            selectParam: boolean;
                            configParam: {
                                key: string;
                                value: string;
                            }[];
                        };
                        fileType: string;
                        fileSize: string;
                    };
                }[];
                GridX: number;
                GridY: number;
                w: number;
                h: number;
                key: string;
            }[];
        })[];
        GridX: number;
        GridY: number;
        w: number;
        h: number;
    };
    treeMap: {
        option: {
            data: any;
            title: string;
            keyName: string;
            valueName: string;
            colorList: string[];
        };
    };
};
