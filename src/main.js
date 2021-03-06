import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import '@/icon/iconfont.css'
import CodeEditor from "@/components/CodeEditor";
import '@/styles/index.scss'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import request from "@/utils/request";
import rule from "@/utils/rules";
import filters from "@/filters";
import directives from "@/directives"
import clipboard from "@/utils/clipboard";
import globalComps from "@/components";

import './icon/svg'

Vue.use(ElementUI )
Vue.use(CodeEditor)

Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$rule = rule

Vue.prototype.$clipboard = clipboard

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
//注册全局组件
Object.keys(globalComps).forEach(key =>{
  Vue.component(key,globalComps[key])
})
//注册全局自定义指令
Object.values(directives).forEach(value=>{
  Vue.use(value.install)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

