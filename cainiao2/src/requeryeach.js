// import store from 'vuex';
// import requery from './utlis/request';

import store from './store'
import  router from './router'


router.beforeEach(async(to,from,next,)=>{
const token=store.getters.token;
if(token){
    if(to.path==='/login'){
        next(from.path);
    }else{
        let  userInfo =store.getters.userInfo;
      
        if(userInfo){
            console.log(typeof userInfo,'userInfo');
            userInfo=typeof userInfo=== 'object'?JSON.stringify(userInfo):userInfo;
            if(userInfo==='{}'||userInfo===""){
                //判断能不能找到该用户
                const response=await store.dispatch('handleUserInfo');
                console.log(response,'sss');
                if(response){
                    next()
                }else{
                    next('/login')
                }
            }else{
                next()
            }
        }
    }


}else{
    if(to.path==='/login'){
        next()
    }else{
        next('/login')
    }
}
})
