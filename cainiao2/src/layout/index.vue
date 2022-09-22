<template>
    <div class="indexs">
           <el-container>
  <el-header><AppHeader /></el-header>
  <el-container>
    <el-aside width="200px"><AppAside /></el-aside>
    <el-main>
        <AppMain />
  
    </el-main>
  </el-container>
</el-container>
    </div>
</template>
<script>
// import {AppAside} from '../layout/AppAside'
// import {AppHeader} from '../layout/AppHeader'
// import {AppMain} from '../layout/AppMain'
import AppHeader from "./AppHeader"
import AppAside from "./AppAside"
import AppMain from "./AppMain"
export default {
    components: {
        AppAside,
        AppHeader,
        AppMain
    },
}
</script>
<style scoped>
.indexs{
    height: 100%;
}
.el-aside{
    height: 100%;
}
.el-container{
  height : 100%;
}
.el-header {
  height : 50px!important;
  line-height: 50px;
  /* background-color: #4c5766; */
  padding:0;
}

.el-aside {
  background-color:#545c64;
  height : 100%;
}

.el-main {
  background-color: #fff;
  height : 100%;
}


</style>