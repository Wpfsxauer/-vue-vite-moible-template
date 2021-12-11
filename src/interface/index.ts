//接口参数配置
export interface requestConfigFace {
    [key: string]: string | boolean;
}

//get接口参数配置
export interface getRequestFace {
    (
        url: string,
        params?: requestConfigFace | string,
        config?: requestConfigFace,
        timeout?: number
    ): any;
}

//post接口参数配置
export interface postRequestFace {
    (
        url: string,
        data: requestConfigFace | string,
        config?: requestConfigFace,
        timeout?: number
    ): any;
}

//jsonp接口参数配置
export interface jsonpRequestFace {
    (url: string, data?: requestConfigFace): any;
}

//后端返回数据
export interface httpReturnParam {
    code: number;
    data: object;
    message: string;
}

// Promise错误信息
export interface promiseErr {
    <T>(error: T): Promise<T>;
}

//url解析约束
export interface parseUrlFace {
    [key: string]: string;
}

//评价列表ItemList接口
export interface evaluateListItemListFace {
    text: string;
    value: string;
    active: boolean;
}

//评价列表item接口
export interface evaluateListItemFace {
    desc: string;
    key: string;
    list: evaluateListItemListFace[];
}

//评价列表接口
export type evaluateListFace = Array<evaluateListItemFace>;

//App.vue data接口
export interface dataFace {
    list: evaluateListFace;
    remark: string;
}

//提交数据接口
export interface serviceDataFace {
    [key: string]: string;
}

export interface toastOptionsFace {
    message: string;
    time: number;
}

export interface toastFace {
    (props: toastOptionsFace): void;
}
