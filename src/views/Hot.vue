<template>
	<div>
		<app-tab :param="param" :tabCallback="changeTab"></app-tab>

		<app-good v-bind:goods="goods"></app-good>
	</div>
</template>

<script>

import Tab from '../components/Tab';
import Good from '../components/Good';

export default {
	name: 'hot',
	components: {
	    "app-tab": Tab,
	    "app-good": Good
  	},
    data(){
	    return {
	      goods: [],
	      param: {sort:1,page:1,page_size:100,cat:0,min_price:0,max_price:100000,is_new:0,is_ju:0,is_tqg:0,searchWord:''},
	      apiUrl: ''
	    }
	},
	methods:{
		loadGoodData: function(){
			let self = this;
			let param = self.param;

			let index = Math.floor(Math.random() * 3);
			let appKey = process.env.VUE_APP_APPkEY.split(",")[index];

			self.apiUrl = "/apis/baokuan?app_key="+ appKey +"&v=1.0&cat=" + param.cat;
 
	        this.$axios.get(self.apiUrl)
			.then(function(response) {
	        	return response.data;
	        }).then(function(data) {
	        	self.goods = data.data;
	        });  

	        /*fetch(self.apiUrl)
	        .then(function(response) {
	        	// console.log(response);
	        	return response.json();
	        }).then(function(data) {
	        	self.goods = data.data;
	        }); */ 
		},
		changeTab: function(cParam) {
	    	this.param = cParam;
	    	console.log("回调的参数是："+JSON.stringify(this.param));
	    	this.loadGoodData();
	    },
	},
    mounted(){
		this.loadGoodData();
    }
}
</script>

<style>

</style>