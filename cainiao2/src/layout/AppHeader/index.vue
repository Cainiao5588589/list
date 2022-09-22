<template>
    <div class="header1">
               <router-link  class="link" to="/">
                  <img class="logo" src="http://vue.mengxuegu.com/img/logo.7156be27.png" alt="logo" width="25px">
                   <span>积云学生管理系统</span>
               </router-link>
               <el-dropdown trigger="click" @command="command" @visible-change="visiblechange">
      <span class="el-dropdown-link">
      {{$store.getters.userInfo.name||''}}<i :class="flge?'el-icon-arrow-up':'el-icon-arrow-down el-icon--right'"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit" command="changepass">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-fold"  command="loginout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
</template>
<script>
import {Message} from 'element-ui'
export default {
    data() {
        return {
                flge:false,
        }
    },methods: {
        async dellogin(){
            try{
                const flag=   await this.$store.dispatch('removelogin');
                setTimeout(() => {
                    this.$router.push('/login')
                },1000);
                  Message.success('退出成功') // 正确 success, 错误 error
            }catch(e){
                console.log(e.Message);
            }
         
        }
        ,
        visiblechange(flge){
            this.flge=flge;
            // console.log(this.flge);
        },
        command(command){
            console.log(command);
           switch (command) {
               case 'changepass':
                   alert('修改密码')
                   break;
           
             case'loginout':
            //    alert('推出登录');
               this.dellogin()
                   break;
           }
        }
    }
}
</script>
<style lang="scss" >
.header1{
    display: flex;
    justify-content: space-between;
    justify-items: center;
    .link{
        padding-left: 80px;
           display: flex;
    align-items: center;
     .logo{
        padding-right:10px ;
    }
    }
    .el-dropdown-link{
        padding-right: 80px;
         
   
    }
}
</style>