/*
 * @Description:
 * @Autor: weipengfei
 * @Date: 2021-06-24 20:03:16
 * @LastEditors: weipengfei
 * @LastEditTime: 2021-06-28 14:28:05
 */

import { httpPost, httpGet } from "../utils/request";

import { serviceDataFace } from "../interface";

const baseUrl = "https://www.baidu.com/";

export function evaluateSunmit(data: serviceDataFace) {
    const api = `${baseUrl}xxx`;
    return httpPost(api, data, {
        "Content-Type": "application/json",
    });
}

export function getEvaluateList(data: serviceDataFace) {
    const api = `${baseUrl}xxx`;
    return httpGet(api, data);
}
