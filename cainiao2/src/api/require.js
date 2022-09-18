// 封装请求参数
import service from '../utlis/request'
 
function request({ method = "get", url, data = {}, params = {} }) {
    return service({
        method,
        url,
        data,
        params,
    })
}
 
export default request