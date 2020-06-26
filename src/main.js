import Vue from 'vue'
import App from './App.vue'
import  VueWindowModal  from  'vue-window-modal'

Vue.use(VueWindowModal)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
