import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload)

new Vue({
  render: h=>h(App)
}).$mount('#app')
