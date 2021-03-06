import Vue from 'vue'
import App from './App.vue'

//+引入组件库及相关样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VCharts from 'v-charts'

Vue.use(VCharts)

//让Vue使用ElementUI
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
