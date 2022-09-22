<template>

    <div class="index">
        <!-- import goods from '../views/goods' //商品管理
import indexs from "../views/index"//首页
import member from "../views/member" //会员管理
import staff from "../views/staff" //员工管理
import supplier from "../views/supplier" //供应商管理 -->
           <el-menu
      :default-active="routepath"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
        <el-menu-item index="/indexs">
        <i class="el-icon-document"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/goods">
        <i class="el-icon-menu"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="/member">
        <i class="el-icon-setting"></i>
        <span slot="title">会员管理</span>
      </el-menu-item>
         <el-menu-item index="/staff">
        <i class="el-icon-setting"></i>
        <span slot="title">员工管理</span>
      </el-menu-item>
         <el-menu-item index="/supplier">
        <i class="el-icon-setting"></i>
        <span slot="title">供应商管理</span>
      </el-menu-item>
    </el-menu>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },computed: {
        routepath () {
            return  this.$route.path
        },
    },
}
</script>