import axios from "axios";
import qs from "qs";
import JSONP from "jsonp";

import {
    getRequestFace,
    postRequestFace,
    jsonpRequestFace,
    requestConfigFace,
    promiseErr,
} from "../interface";

class axiosRequest {
    constructor(timeout: number, headers: requestConfigFace) {
        this.request = axios.create({
            timeout: 1000 * timeout,
            withCredentials: true,
        });
        this.requestHeaders(headers);
        this.response();
    }

    request: any = null;

    err: promiseErr = (error) => Promise.reject(error);

    requestHeaders = (headers: requestConfigFace) => {
        this.request.interceptors.request.use((config: any) => {
            if (JSON.stringify(headers) !== "{}") {
                Object.keys(headers).forEach((item) => {
                    config.headers[item] = headers[item];
                });
            }
            return config;
        }, this.err);
    };

    response = () => {
        this.request.interceptors.response.use((response: any) => {
            return response.data;
        }, this.err);
    };
}

export const httpGet: getRequestFace = (url, params = {}, config = {}, timeout = 3) => {
    const request = new axiosRequest(timeout, config).request;
    return request({
        url,
        method: "get",
        params,
    });
};

export const httpPost: postRequestFace = (url, data, config = {}, timeout = 5) => {
    const request = new axiosRequest(timeout, config).request;
    return request({
        url,
        method: "post",
        data,
    });
};

export const httpJsonp: jsonpRequestFace = (url, data = {}) => {
    const param = url + "?" + qs.stringify(data);
    return new Promise((resolve, reject) =>
        JSONP(param, (err, response) => (err ? reject(err) : resolve(response)))
    );
};
