const { defineConfig } = require("@vue/cli-service");


// # 代理名称
// VUE_APP_BASE_API = "/dev-api"

// # 跨域的地址
// VUE_APP_SERVICE_URL = "https://www.fastmock.site/mock/2d526a200efc32dba45597f2e563208a/api"










module.exports = defineConfig({
  transpileDependencies: true,
  // 项目打包之后白屏问题
  publicPath : "./",
  devServer: {
    // 端口号
    // port: 8000,
    port: 8888,
    // 主机名
    host: "localhost",
    // 启动项目时是否自动打开浏览器
    open: true,
    // 是否开启https
    https: false,
    // 配置跨域
    proxy : {
      // 代理1
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_SS,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API] : ""
        }
      },
      // 代理2
     
     
    }
  },
  // 关闭eslint
  lintOnSave : false
});
