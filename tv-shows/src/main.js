import 'bootstrap'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'

import Button from './components/Button/Button'
import DangerButton from './components/CustomButton/DangerBtn'
import InfoButton from './components/CustomButton/InfoBtn'
import SuccessButton from './components/CustomButton/SuccessBtn'
import FormInput from './components/FormInput/FormInput'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.component("Button", Button)
Vue.component("DangerButton", DangerButton)
Vue.component("InfoButton", InfoButton)
Vue.component("SuccessButton", SuccessButton)
Vue.component("FormInput", FormInput)

Vue.use(VueRouter);

const router = new VueRouter({
  routes:Routes,
  mode:'history'
});

Vue.config.productionTip = false
Vue.prototype.axios = axios;

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
