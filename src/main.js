import Vue from 'vue'
import Shop from './components/shop/Shop.vue'
import store from './store/index.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  store,
  render: h => h(Shop)
}).$mount('#app');
