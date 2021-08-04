import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from '@/plugins/echarts/index'
import components from '@/components/index'

Vue.config.productionTip = false
Vue.use(echarts)
Vue.use(components)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')