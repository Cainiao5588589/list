import request from '../utlis/request'







// const getMemberList=(page=1,size=10,data={})=>{
// return request({
//     url:`/member/list/search/${page}/${size}`,
//     method:'POST',
//     data
// })
// }

export const login=(data={})=>{
    return request({
        url:'/admin/login',
        method:'POST',
        data
    })
}
export const userInfoo = () => {
    return request({
      url : '/admin/getUserInfo',
      method : "GET"
    })
  }
