
import require from './require'


// 封装页面请求
// import request from '@/network/request.js'
 
// api请求
 
// post方式
export const POST= (data) => require({ url: '/post', method: "post", data, })
 

// get方式
export const GET= (params) =>require({ url: '/get', params, })