<template>
	<header>
		<nav class="navbar hc">
	        <span onclick="window.location.href='/'"><img class="logo" src="../assets/logo.png"></span>
	        <input id="search" class="searchIpt" type="text" placeholder="关键词 / 链接 / 品牌 / ID" maxlength="500" ref="search" @keyup.enter="search()"/>
            <button class="btn searchBtn" @click="search()">搜索</button>
		</nav>
	</header>
</template>
<script>
	export default{
        props: {
            searchCallback: {
                type: Function,
                default(keyWord) {
                    console.log("搜索词为：" + keyWord);
                }
            }
        },
		methods: {
			search() {
                this.searchCallback(this.$refs.search.value);
			},
            initKeyWord:function(){
                this.$refs.search.value = '';
            },
		}
	}
</script>
<style>
.hc{
    border-bottom: 2px solid #E53243;
}
.logo{
	float:left;
    width: 120px;
    padding: 5px;
    text-align: center;
}
.searchIpt{
    width: 30%;
    height: 34px;
    cursor: text;
    float: right;
    margin-left: 50%;
    /* margin-top: 15px; */
    text-align: center;
    background-color: #eee;
    border-style: none;
}
.searchBtn{
    background-color: #FF0000;
    color: white
}	
</style>