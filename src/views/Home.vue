<template>
	<div>
		<app-tab :param="param" :tabCallback="changeTab"></app-tab>

		<app-condition :param="param" :condtionCallback="changeCondtion"></app-condition>

		<app-good v-bind:goods="goods"></app-good>

		<app-paging :totalPage="total" :currentPage="param.page" :pagingCallback="changePaging"></app-paging>
	</div>
</template>

<script>

import Tab from '../components/Tab';
import Condition from '../components/Condition';
import Good from '../components/Good';
import Paging from '../components/Paging';

export default {
	name: 'home',
	components: {
	    "app-tab": Tab,
	    "app-condition": Condition,
	    "app-good": Good,
	    "app-paging": Paging
  	},
    data(){
	    return {
	      goods: [],
	      param: {sort:1,page:1,page_size:100,cat:0,min_price:0,max_price:100000,is_new:0,is_ju:0,is_tqg:0,searchWord:''},
	      apiUrl: '',
	      currentCheckApiType: 'goodList',
          total : 100
	    }
	},
	methods:{
		loadGoodData: function(){
			let self = this;
			let param = self.param;

			let index = Math.floor(Math.random() * 3);
			let appKey = process.env.VUE_APP_APPkEY.split(",")[index];

			if (self.currentCheckApiType == 'goodList') {
				self.apiUrl = "/apis/qingsoulist?&app_key="+ appKey +"&v=1.0&sort=" + param.sort + "&page=" + param.page + "&page_size=" + param.page_size +
					"&cat=" + param.cat + "&min_price=" + param.min_price + "&max_price=" + param.max_price + "&new=" + param.is_new +
					"&is_ju=" + param.is_ju + "&is_tqg=" + param.is_tqg + "&is_ali=0";
			} else if (self.currentCheckApiType == 'goodSearch') {
				self.apiUrl = "/apis/search?app_key="+ appKey +"&v=1.0&s_type=1&key_word=" + param.searchWord + "&page=" + param.page + "&cat=" + param.cat +
					"&min_price=" + param.min_price + "&max_price=" + param.max_price + "&sort=" + param.sort +
					"&new=" + param.is_new + "&is_ju=" + param.is_ju + "&is_tqg=" + param.is_tqg + "&is_ali=0";
			}

			this.$axios.get(self.apiUrl)
			.then(function(response) {
				return response.data;
			})
			.then(function(data) {
	        	if(data.data.total == 0){
					self.$ckq.layer({
			          message: '查无此相关数据',
			          time: 3000
			        })
					return;
	        	}
	        	self.goods = data.data.list;
	        	self.total = Math.round(data.data.total / param.page_size);
	        	if(self.total > 600){
	        		self.total = 600;
	        	}
	        	//根据页面数据调整Footer
	        	self.$emit('onAdjustFooter', data.data.list.length);
	        }); 
	        /*fetch(self.apiUrl)
	        .then(function(response) {
	        	// console.log(response);
	        	return response.json();
	        }).then(function(data) {
	        	if(data.data.total == 0){
					self.$ckq.layer({
			          message: '查无此相关数据',
			          time: 3000
			        })
					return;
	        	}
	        	self.goods = data.data.list;
	        	self.total = Math.round(data.data.total / param.page_size);
	        	if(self.total > 600){
	        		self.total = 600;
	        	}
	        	//根据页面数据调整Footer
	        	self.$emit('onAdjustFooter', data.data.list.length);
	        }); */   
		},
		changePaging: function(cPage) {
	      //这里是页码变化后要做的事
	      this.param.page = cPage;
	      console.log("currentPage:"+this.param.page);
	      document.body.scrollTop = 0
		  document.documentElement.scrollTop = 0
	      this.loadGoodData();
	    },
	    changeCondtion: function(cParam) {
	    	this.param = cParam;
	    	console.log("回调的参数是："+JSON.stringify(this.param));
	    	this.loadGoodData();
	    },
	    changeTab: function(cParam) {
	    	this.param = cParam;
	    	console.log("回调的参数是："+JSON.stringify(this.param));
	    	this.loadGoodData();
	    },
	    goSearch: function(searchWord){
            this.param.searchWord = searchWord;
            this.param.page = 1;
            this.currentCheckApiType = 'goodSearch';
            this.loadGoodData();
        }
	},
	mounted(){
		console.log("route跳转传过来的参数："+ JSON.stringify(this.$route.params) );
		if(this.$route.params != null && this.$route.params != undefined && this.$route.params.isSearch == true){
			this.param.searchWord = this.$route.params.keyWord;
            this.param.page = 1;
            this.currentCheckApiType = 'goodSearch';
		}
		this.loadGoodData();
    }
}
</script>

<style>
	
</style>