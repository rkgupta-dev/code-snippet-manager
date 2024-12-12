import Vue from 'vue'
import App from './App.vue'
import router from './router/routes';
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
