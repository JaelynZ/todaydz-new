<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light" style="height: 50px;margin-bottom: 5px">
		<ul class="navbar-nav">
			<li><a @click="setCat(0)" class="cct" v-bind:style="(this.param.cat == 0 ? checkStyle : false)">全部</a></li>
			<li><a @click="setCat(10)" class="cct" v-bind:style="(this.param.cat == 10 ? checkStyle : false)">女装</a></li>
			<li><a @click="setCat(11)" class="cct" v-bind:style="(this.param.cat == 11 ? checkStyle : false)">内衣</a></li>
			<li><a @click="setCat(12)" class="cct" v-bind:style="(this.param.cat == 12 ? checkStyle : false)">男装</a></li>
			<li><a @click="setCat(2)" class="cct" v-bind:style="(this.param.cat == 2 ? checkStyle : false)">母婴</a></li>
			<li><a @click="setCat(3)" class="cct" v-bind:style="(this.param.cat == 3 ? checkStyle : false)">美妆</a></li>
			<li><a @click="setCat(4)" class="cct" v-bind:style="(this.param.cat == 4 ? checkStyle : false)">居家</a></li>
			<li><a @click="setCat(5)" class="cct" v-bind:style="(this.param.cat == 5 ? checkStyle : false)">鞋包配饰</a></li>
			<li><a @click="setCat(6)" class="cct" v-bind:style="(this.param.cat == 6 ? checkStyle : false)">美食</a></li>
			<li><a @click="setCat(7)" class="cct" v-bind:style="(this.param.cat == 7 ? checkStyle : false)">文体</a></li>
			<li><a @click="setCat(8)" class="cct" v-bind:style="(this.param.cat == 8 ? checkStyle : false)">家电数码</a></li>
		</ul> 
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
	    	tabCallback: {
	        	type: Function,
	        	default(cParam) {
	        		console.log("当前请求参数为：" + cParam);
	        	}
	    	}
		},
		methods:{
			setCat:function(value){
				this.param.cat = value;
				this.tabCallback(this.param);
			}
		}
	}
</script>
<style>
.cct{
    width: auto;
    font-size: 15px;
    height: 50px;
    line-height: 50px;
    display: inline-block;
    padding: 0 17px;
    transition: color 0.2s;
    float: left;
    cursor: pointer;
}	
</style>