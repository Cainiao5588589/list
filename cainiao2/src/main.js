import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/reset.css'
import './requeryeach'
Vue.use(ElementUI);
console.log(process.env.VUE_APP_SERVICE_SS,'process.env.VUE_APP_SERVICE_URL');
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
