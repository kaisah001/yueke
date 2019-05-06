/*入口组件*/
import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/index.js'
import './mock/mockServer' //加载mockServer
import animate from 'animate.css'
import Vuelazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
import VuePreview from 'vue-preview'

import './filters/index.js'
/*import axios from './http'

Vue.prototype.$axios=axios;
Vue.config.productionTip = false

axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';*/
Vue.use(VuePreview)


Vue.use(Vuelazyload,{
    loading
})


new Vue({
  el:"#app",
  router,
  store,
  render: h => h(App)
})



import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
