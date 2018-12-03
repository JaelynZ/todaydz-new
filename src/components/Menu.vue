<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light" style="height:50px;margin-bottom: 25px;">
		<ul class="navbar-nav">
			<li><router-link :to="{name:'homeLink'}" class="nav-link" v-bind:style="(menuNumber == 1 ? checkStyle : unCheckStyle)" v-on:click.native="checkMenu(1)">商品库</router-link></li>
			<li><router-link :to="{name:'hotLink'}" class="nav-link" v-bind:style="(menuNumber == 2 ? checkStyle : unCheckStyle)" v-on:click.native="checkMenu(2)">爆款</router-link></li>
		</ul> 
	</nav>
</template>
<script>
	export default{
		data(){
			return {
				checkStyle: {
			    	'color': '#FF4400'
				},
				unCheckStyle: {
					'color': 'black'
				},
				menuNumber: 1
			}
		},
		props: {
            menuCallback: {
                type: Function,
                default(menuNumber) {
                    console.log("菜单选中值为：" + menuNumber);
                }
            }
        },
		methods:{
			initMenuNumber:function(value){
				this.menuNumber = value;
			},
			checkMenu:function(value){
				this.menuNumber = value;
				this.menuCallback(value);
			}
		}
	}
</script>