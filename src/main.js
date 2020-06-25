import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'

Vue.config.productionTip = false 

new Vue({
  render: h => h(App),
  // 所有组件都能看到 $router 和 $route  <router-link></router-link> <router-view></router-view>
  router,
}).$mount('#app')
