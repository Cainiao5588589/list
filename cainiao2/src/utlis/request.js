import axios from 'axios';


//自定义错误信息提示内容
const excetionMessage={
    1000:"用户名或则密码发生错误",
    3000:''
}

import {Message} from 'element-ui'
import  store from '../store'

// axios.defaults.headers['Content-Type']="application/x-www-form-urlencoded;charset=UTF-8"
const service=axios.create({
    // baseURL:'http://vue.mengxuegu.com',
    timeout:5000
})





//拦截器
service.interceptors.request.use(config=>{
    const token=store.getters.token;
    if(token) config.headers.Authorization="Bearer "+token
     return config
},(error)=>{
    return Promise.reject(error);
})



//响应拦截器
service.interceptors.response.use(response=>{
    if(response.status< 400){
        return response.data.data
    }
    if(response.status===401){
        return
    }

    _showError(response.data.code,response.data.message)
 
    return response.data.data
},error=>{
    return Promise.reject(error);
})

const _showError=(errorCode,message)=>{
    let title
    title=excetionMessage[errorCode]||message||"发生未知错误"
    Message.error(title);
}





const request=(options)=>{
    options.method=options.method||"get"
    //.toLowerCase()转换为小写字符
    if(options.method.toLowerCase()==="get"){
        options.params=options.data||options.params
        // 如果时params方式则删除当中的data属性
        delete options.data
    }

    service.defaults.baseURL = options.proxy || process.env.VUE_APP_BASE_API

    return service(options)
}




export default request