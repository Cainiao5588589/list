import Vue from 'vue'
import Vuex from 'vuex'
import {setToken, getToken, setUserInfo, getUserInfo} from "../utlis/auth"
import {login,userInfoo} from '../api/colllect'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:getToken()||"",
    userInfo:getUserInfo()||""
  },
  mutations: {
    SET_TOKEN(state,token){
      state.token=token;
      setToken(token)
    },
    SET_USER_INFO(state,userInfo){
      state.userInfo=userInfo;
      setUserInfo(userInfo)
      return state.userInfo
    }
  },getters:{
    token(state){
      return state.token
    },
    userInfo(state){
      return state.userInfo
    }
  },
  actions: {
    async handleUserInfo({commit}){
      try{
       const userInfo= await userInfoo();
       commit('SET_USER_INFO',userInfo);
       console.log(userInfo,'222');
       return userInfo
      }catch (e){
        console.log(e);
      }
    },
    async login({commit},form){
    try{
      const response = await login(form)
      commit("SET_TOKEN",response)
      return response
    }catch (e){
      console.log(e.message)
    }
  },
  },
  modules: {
  }
})
