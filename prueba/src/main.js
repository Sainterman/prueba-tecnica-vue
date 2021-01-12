/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import VueTelInputVuetify from 'vue-tel-input-vuetify'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'


Vue.config.productionTip = false

Vue.use(VueTelInputVuetify, {
  vuetify,
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
