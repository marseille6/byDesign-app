// 业务对象
// theme  banner  spu   sku  user  address
import {config} from "../config/config";
import {Http} from "../utils/http";

class Theme{
    static getHomeLocationA(callback) {
        Http.request(url,data,meth)
        wx.request({
            url:`${config.apiBaseUrl}theme/by/names`,
            method:'GET',
            data:{
                names:'t-1'
            },
            header:{
                appkey:config.appkey
            },
            success: res => {
                callback(res.data)
                // this.setData({
                //     topTheme:res.data[0]
                // })
            }
        })
    }
}
export {
    Theme
}