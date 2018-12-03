<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light" style="height: 50px;">
		<a class="ccc" v-bind:style="(this.param.sort == 1 ? checkStyle : false)" id="sort1" @click="setSort(1)">
			人气降序
		</a>
		<a class="ccc" v-bind:style="(this.param.sort == 2 ? checkStyle : false)" id="sort2" @click="setSort(2)">
			最新降序
		</a>
		<a class="ccc" v-bind:style="(this.param.sort == 3 ? checkStyle : false)" id="sort3" @click="setSort(3)">
			销量降序
		</a>
		<a class="ccc" v-bind:style="(this.param.sort == 4 ? checkStyle : false)" id="sort4" @click="setSort(4)">
			价格升序
		</a>
		<a class="ccc" >
			<input type="checkbox" id="is_new" title="今日新品" value="1" @change="setNew()"/>今日新品
		</a>
		<a class="ccc">
			<input type="checkbox" id="is_ju" title="聚划算" value="1" @change="setJu()"/>聚划算
		</a>
		<a class="ccc">
			<input type="checkbox" id="is_tqg" title="淘抢购" value="1" @change="setTqg()"/>淘抢购
		</a>

		<a class="ccc">
			<div style="float: left;margin-right: 20px;">
				<span class="price-span">价格区间≥&nbsp;</span>
				<input class="price-input" type="text" maxlength="8" id="min_price" placeholder="¥" ref="min_price" @keyup.enter="setPrice()">
				<span class="price-span">&nbsp;-&nbsp;</span>
				<input class="price-input" type="text" maxlength="8" id="max_price" placeholder="¥" ref="max_price" @keyup.enter="setPrice()">
			</div>
		</a>
	</nav>
</template>
<script>
export default{
	data(){
		return {
			checkStyle: {
			    color: '#FF4400'
			}
		}
	},
	props: {
    	param:{
			type:Object,
			required:true
		},
    	condtionCallback: {
        	type: Function,
        	default(cParam) {
        		console.log("当前请求参数为：" + cParam);
        	}
    	}
	},
	methods:{
		setPrice:function() {
		    this.param.min_price = this.$refs.min_price.value;
		    if(this.param.min_price == ""){
		        this.param.min_price = 0;
		    }
		    this.param.max_price = this.$refs.max_price.value;
		    if(this.param.max_price == ""){
		        this.param.max_price = 100000;
		    }

	    	this.condtionCallback(this.param);
		},
		setSort:function(value){
			this.param.sort = value;
			this.setPrice();
		},
		setNew:function(){
			if(this.param.is_new == 1){
	    		this.param.is_new = 0;
	    	}else {
	    		this.param.is_new = 1;
	    	}
	    	this.setPrice();
		},
		setJu:function(){
			if(this.param.is_ju == 1){
	    		this.param.is_ju = 0;
	    	}else {
	    		this.param.is_ju = 1;
	    	}
	    	this.setPrice();
		},
		setTqg:function(){
			if(this.param.is_tqg == 1){
	    		this.param.is_tqg = 0;
	    	}else {
	    		this.param.is_tqg = 1;
	    	}
	    	this.setPrice();
		}
	},
	mounted(){
		console.log("当前请求参数为：" + JSON.stringify(this.param));
	}
}
</script>
<style>
.ccc{
    width: auto;
    font-size: 13px;
    height: 50px;
    line-height: 50px;
    display: inline-block;
    padding: 0 9px;
    transition: color 0.2s;
    float: left;
    margin-right: 10px;
    cursor: pointer;
}
.price-input {
    padding: 0 7px;
    width: 60px;
    height: 20px;
    line-height: 20px;
    border: 1px solid #ebebeb;
    float: left;
    margin-top: 13px;
}

.price-span {
    float: left;
    position: relative;
    display: inline-block;
}	
</style>