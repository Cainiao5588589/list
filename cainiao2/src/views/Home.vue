<template>
  <div class="home">
  <el-container>
  <el-header>
 <span class="span1">
   <el-button type="primary" :icon="isCollapse?'el-icon-s-fold':'el-icon-s-unfold'" @click="isCollapse=!isCollapse">{{isCollapse?'收缩':'展开'}} </el-button>
 </span>
 <h3>后台管理系统</h3>
   <span class="span3" style="display:flex;">
     <el-button type="primary" @click="sub">推出</el-button>
      <el-avatar v-if="token" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
   </span>
  </el-header>
  <el-container>
    <el-aside :width="isCollapse?'0px':'200px'">
      <el-menu :default-active="$route.fullPath"  class="el-menu-vertical-demo" :collapse="isCollapse" router  @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-submenu index="1">
      <span slot="title">首页</span>
      <el-menu-item index="/Home">首页</el-menu-item>
    </el-submenu>
     <el-submenu index="2">
      <span slot="title">列表</span>
      <el-menu-item index="/about">学生列表</el-menu-item>
    </el-submenu>

</el-menu>


    </el-aside>
    <el-container>
      <el-main><router-view></router-view></el-main>
    
    </el-container>
  </el-container>
</el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { GET, POST } from "../api/colllect";
export default {
  name: "Home",
  components: {
    // HelloWorld,
  },data() {
    return {
      token:"",
      isCollapse:false,
    }
  },
  created() {
    this.query();
    this.token=localStorage.getItem('token')
  },
  methods: {
    sub(){
      localStorage.removeItem('token');
      this.$router.push('/')
    },
    query() {

      // POST({
      //   url: "/lejuAdmin/index/login",
      // method: "post",
      //   data: {
      //     icon: "1",
      //     nickname: "cainiao1",
      //     password: "wan_5588589",
      //     personalizedSignature: "cainiao",
      //     username: "cainiao",
      //   },
      // }).then((res) => {
      //   console.log(res);
      // });
    },
  },
};
</script>
<style lang="scss" scoped>
.el-header{
  display: flex;
    justify-content: space-between;
    align-items: center;
}
.el-menu {
  width: 100%;
  height: 100vh;
}
</style>
