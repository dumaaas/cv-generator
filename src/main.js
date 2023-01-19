import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { createPinia, PiniaVuePlugin } from 'pinia'
Vue.use(PiniaVuePlugin)

const pinia = createPinia()

Vue.config.productionTip = false
Vue.use(VueMaterial);

new Vue({
  el: '#app',
  pinia,
  render: h => h(App),
})