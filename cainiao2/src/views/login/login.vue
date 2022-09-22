<template>
  <div class="login">
    <div class="box">
      <el-form
        :model="form"
        :rules="rules"
        :inline="true"
        label-position="right"
        ref="ruleForm"
        label-width="100px"
        class="ruleForm"
      >
        <el-form-item label="用户名称" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="用户名称" prop="password">
          <el-input v-model="form.password" type="password" autocomplete="off"
            >></el-input
          >
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {Message} from 'element-ui'
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 5,
            max: 11,
            message: "最少5位，最多11位",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    async login() {
      try {
        const token = await this.$store.dispatch("login", this.form);
        if (!token) return;
        const userInfo = await this.$store.dispatch("handleUserInfo");
        if (!userInfo) return;
        this.$message({
          type: "success", // success error warning
          message: "登录成功",
          duration: 2000,
        });
        this.$router.push("/");
      } catch (e) {
        console.log(e, "e");
      }
    },

    submitForm(form) {
      //确定
      this.$refs[form].validate((valid) => {
        if (valid) {
          // localStorage.setItem("token", Math.random());

          this.login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(form) {
      //取消
      this.$refs[form].resetFields();
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  background: url("http://vue.mengxuegu.com/img/login.b665435f.jpg");
  width: 100%;
  height: 100%;
}
.box {
  background-color: #cccccca1;
  width: 400px;
  height: 300px;
  border-radius: 30px;
  transform: translate(-50%, -50%);
  position: fixed;
  left: 50%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>