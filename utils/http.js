import {config} from "../config/config";

class Http{
    static request(url, data, callback, method='GET') {
        wx.request({
            url:`${config}`,
            data,
            method,
            header:{
                appkey:config.appkey
            },
            success(res) {
                callback(res.data)
            }
        })
    }
}
export {
    Http
}