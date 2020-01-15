import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import List from './components/List'
import Detail from './components/Detail'
import './mock'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{ path: '/', component: List },
		{ name: 'detail', path: '/detail', component: Detail }
	]
})

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
