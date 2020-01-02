import Vue from 'vue'
import App from './App.vue'
import VueMDCAdapter from 'vue-mdc-adapter'
import "vue-mdc-adapter/dist/vue-mdc-adapter.css";

Vue.config.productionTip = false
Vue.use(VueMDCAdapter)

new Vue({
  render: h => h(App)
}).$mount('#app')
