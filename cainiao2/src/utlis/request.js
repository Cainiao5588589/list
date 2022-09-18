import axios from 'axios';

axios.defaults.headers['Content-Type']="application/x-www-form-urlencoded;charset=UTF-8"
const service=axios.create({
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:1000*10
})

//拦截器
service.interceptors.request.use(config=>{
    // if(localStorage.getItem('token')){
    //     // config.headers['Authorization']='bearer'+localStorage.getItem('token');
    // }
    return config
},error=>{
    Promise.reject(error)
})



//响应拦截器
service.interceptors.response.use(res=>{
    const code=res.data.code||201;
    const message=res.data.data.msg
    if(code===401){
        message({
            message:message,
            type:'error'
        })
    }else if(code===403){
        message({
            message:message,
            type:'error'
        })
        return Promise.reject(new Error(message))
    }else if(code!==201){
        Notification.error({
            title:message
        })
        return Promise.reject('error')
    }else{
        return res
    }
})

export default service