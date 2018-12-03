<template>
	<div id="good" style="margin-top: 10px;height: 100%">
		<div class="good-out-border" v-for="good in goods">
			<div class="good-inner-border">
				<div class="good-pic-box">
					<a class="good-pic-url" target="_blank" v-bind:href="toHref(good.goods_id, good.coupon_id)">
						<img class="good-pic" v-bind:src="toPic(good.goods_pic)">
					</a>
				</div>
				<div class="good-title-box">
					<a class="good-title-url" rel="nofollow" target="_blank" v-bind:href="toHref">
						<p class="good-title" v-bind:title="good.goods_short_title">
							{{ good.goods_short_title }}
						</p>
					</a>
				</div>
				<div class="good-price-box">
					<div class="good-price-left">
						<span class="good-price-icon">券后 <i class="good-price-num-font">¥</i></span>
						<span class="good-price-num"> {{ (good.goods_price - good.coupon_price).toFixed(1) }} </span>
					</div>
					<div class="good-price-right">月销：{{ good.goods_sales }}</div>
				</div>
				<div class="good-price-box">
					<div class="good-price-left">
						<span class="good-price-icon">优惠券 <i class="good-price-num-font">¥</i></span>
						<span class="good-price-num"> {{ good.coupon_price }} </span>
					</div>
					<div class="good-price-right">余量：{{ good.coupon_number }}</div>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
	export default {
		name: 'good',
		data(){
			return {

			}
		},
		props:{
			goods:{
				type:Array,
				required:true
			}
		},
		methods:{
			toHref: function(goods_id, coupon_id){
				return "https://uland.taobao.com/coupon/edetail?pid=mm_31587245_36774800_169834419&itemId=" + goods_id + "&activityId=" + coupon_id +"";
			},
			toPic: function(goods_pic){
				return goods_pic + "_300x300.jpg";
			}
		}
	}
</script>

<style>
#good{
	/*background: url('../../src/assets/pizza.jpg');*/
	height: 80vh;
	background-color: #F8F9FA;
}	
.good-out-border{
    width: 300px;
    height: 435px;
    background-color: #F5F5F5;
    text-align: center;
    float: left;
}
.good-inner-border{
    width: 290px;
    height: 425px;
    background-color: #FFFFFF;
    text-align:center;
    display: inline-block;
    margin-top: 5px;
}
.good-pic-box{
    width: 268px;
    height: 268px;
    text-align:center;
    display: inline-block;
    margin-top: 5px;
}
.good-pic-url{
    width: 268px;
    height: 268px;
}
.good-pic{
    width: 268px;
    height: 268px;
}
.good-title-box{
    width: 268px;
    height: 24px;
    text-align:center;
    display: inline-block;
    margin-top: 20px;
}
.good-title-url{
    width: 268px;
    height: 24px;
    text-decoration: none;
}
.good-title{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Simsun;
    font-size: 14px;
    color: black;
}
.good-price-box{
    width: 268px;
    height: 33px;
    text-align:center;
    display: inline-block;
    font-size: 14px;
    margin-top: 5px;
}
.good-price-left{
    color: #ff6600;
    overflow: hidden;
    width: auto;
    height: 30px;
    line-height: 30px;
    float: left;
    font-size: 14px;
}
.good-price-right{
    font-size: 14px;
    padding-top: 10px;
    color: #8a8a8a;
    float: right;
}
.good-price-icon{
    margin-right: 3px;
    font-size: 14px;
    float: left;
    color: #a8a5a5;
    margin: 3px 5px 0 0;
}
.good-price-num-font{
    color: #ff6600;
    vertical-align: bottom;
    font-family: Arial !important;
    font-size: 14px;
}
.good-commission-box{
    color: #969696;
    font-size: 12px;
    overflow: hidden;
    margin-top: 5px;
    width: 268px;
    height: 21px;
    text-align:center;
    display: inline-block;
}
.good-commission-item{
    float: left;
}
.percent{
    color: #48aade;
    font-size: 16px;
    font-weight: bold;
}
.float{
    color: #48aade;
    font-size: 16px;
    font-weight: bold;
}
.good-group-icons-box{
    margin-top: 5px;
    vertical-align: bottom;
    font-size: 12px;
    overflow: hidden;
    background-color: #FFF;
    width: 268px;
    height: 21px;
    text-align:center;
    display: inline-block;
}
.good-group-coupon{
    font-size: 12px;
    color: #929292;
    width: auto;
    height: 21px;
    line-height: 21px;
    float: left;
}
.good-group-coupon-url{
    cursor: pointer;
    float: left;
}
.good-group-coupon-icon{
    width: 44px !important;
    height: 21px;
    line-height: 21px;
    /*background-image: url(../images/icon1.png?t=20180927003);*/
}
.good-group-coupon-price{
    display: inline-block;
    width: auto;
    height: 19px;
    line-height: 19px;
    padding: 0 3px;
    text-align: center;
    color: #ff4400;
    border: 1px solid #ff4400;
    border-left: none;
    float: left;
}
.good-group-flag{
    float: right;
}
.good-group-panic-flag{
    width: 16px;
    height: 16px;
    display: inline-block;
    float: right;
    margin: 7px auto auto 5px;
    position: relative;
    /*background-image: url(../images/icon1.png?t=20180927003);*/
}
.good-group-tmall-flag{
    width: 16px;
    height: 16px;
    display: inline-block;
    float: right;
    margin: 7px auto auto 5px;
    position: relative;
    /*background-image: url(../images/icon1.png?t=20180927003);*/
}

.price-span {
    float: left;
    position: relative;
    display: inline-block;
}
</style>