import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//重置html样式
import  './assets/css/reset.css'
//解决click 移动端300ms延迟
import FastClick from 'fastclick';  
FastClick.attach(document.body)

//引入图标
import './assets/css/iconfont.css'
//适配
import './assets/js/font.js'
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/swiper.css'
Vue.use(VueAwesomeSwiper)
//animate 动画
import animate from 'animate.css'
Vue.use(animate)
//axios
import axios from 'axios'
Vue.prototype.axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
