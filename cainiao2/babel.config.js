module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}

 
// module.exports ={
//   transpileDependencies: true,
//   lintOnSave: false,
//   devServer: {
//     proxy: { //配置跨域
//       '/api': {
//         target: 'http://localhost:80', //填写请求的目标地址
//         // ws: true,
//         changOrigin: true, //允许跨域
//         pathRewrite: {
//           '^/api': '' //请求的时候使用这个api就可以
//         }
//       }
//     }
//   }
 
// }