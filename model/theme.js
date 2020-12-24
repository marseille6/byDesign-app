// 业务对象
// theme  banner  spu   sku  user  address
import {config} from "../config/config";
import {Http} from "../utils/http";

class Theme{
    static async getHomeLocationA() {
        const res = await Http.request({
            url: `theme/by/names`,
            data: {
                names: 't-1'
            }
        });
        return res.data
    }
}
export {
    Theme
}