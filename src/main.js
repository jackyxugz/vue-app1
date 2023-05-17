import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'  //懒加载

import './assets/css/index.css'
import './assets/font/iconfont.css'
import './components/global' //引入全局组件定义

Vue.use(VueLazyload);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
