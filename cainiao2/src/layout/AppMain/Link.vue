<template>
    <div class="Link">
        <el-breadcrumb separator="/">
    <el-breadcrumb-item class="item"  :to="{ path: '/' }">
        {{breadcrumbText}}
    </el-breadcrumb-item>
  </el-breadcrumb>
    </div>
</template>
<script>
export default {
    computed: {
        breadcrumbText () {
            return  this.$route.meta.title
        },
    },
}
</script>
<style scoped>
.el-breadcrumb__item{
   
 margin-left: 10px;
  
}
::v-deep.el-breadcrumb{
 border-left: 4px red solid;
}

   

</style>