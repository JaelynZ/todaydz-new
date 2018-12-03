import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import { routes } from './routes'
import ckq from 'vue-ckq-layer'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ckq)

//全局守卫
/*router.beforeEach((to,from,next) => {
	// alert("还没有登录，请先登录！");
	// next();
	// console.log(to);

	//判断store.gettes.isLogin == false
	if(to.path == '/login' || to.path == '/register'){
		next();
	}else{
		alert("还没有登录，请先登录！");
		next('/login');
	}
})*/

//后置勾子
/*router.afterEach((to,from) => {
	alert("after each");
})*/


const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior(to,from,savePosition){
		//return { x:0, y:100 }
		// return {selector: '.btn'}
		
		if(savePosition){
			return savePosition
		}else{
			return { x:0, y:0}
		}
	}
})

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
