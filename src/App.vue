<template>
  <div id="app" class="go-top">
    <div class="content-width">
        <app-header ref="header" :searchCallback="search"></app-header>
    </div>

    <div class="content-width">
        <app-menu ref="menu" :menuCallback="menuBack"></app-menu>
    </div>

    <div class="content-width">
      <router-view ref="child" @onAdjustFooter="adjustFooter"></router-view>
    </div>

    <br>

    <div class="content-width" v-bind:style="(isAdjustFooter ? footerStyle : false)">
        <app-footer></app-footer>
    </div>

    <button class="top-btn" @click="goTop" ref="btn" title="回到顶部"></button>
  </div>
</template>

<script>
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';

let timer = null
export default {
  components: {
    "app-header": Header,
    "app-menu": Menu,
    "app-footer": Footer
  },
  data () {
    return {
      isTop: true,
      isAdjustFooter: false,
      footerStyle: {
        'margin-top': '435px'
    },
    }
  },
  mounted () {
    this.needScroll();
  },
  methods: {
    adjustFooter: function(count){
        //根据商品总数动态调整footer的margin-top的值
        if((count % 4) != 0){
            this.isAdjustFooter = true;
        }     
    },
    menuBack: function(menuNumber){
        //清空搜索栏的搜索词
        this.$refs.header.initKeyWord(); 
    },
    search: function(keyWord){
        //初始化菜单项选中
        this.$refs.menu.initMenuNumber(1); 

        console.log("回调的搜索关键词为："+keyWord);
        if (keyWord == null || keyWord == '' || keyWord == undefined) {
            window.location.href='/';
        } else {
            if(this.$route.path == '/home'){
                this.$refs.child.goSearch(keyWord); 
            }else {
                this.$router.push({ name: 'homeLink', params: { isSearch: true, keyWord: keyWord }});
            }
       }
    },
    needScroll () {
      let clientHeight = document.documentElement.clientHeight
      let obtn = this.$refs.btn
      window.onscroll = function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        if (osTop >= clientHeight) {
          obtn.style.display = 'block'
        } else {
          obtn.style.display = 'none'
        }
        if (!this.isTop) {
          clearInterval(timer)
        }
        this.isTop = false
      }
    },
    goTop () {
      timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
        this.isTop = true
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    }
  }
}
</script>

<style>
.content-width{
    width: 1200px;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
}
.go-top{
  .box{
    img{
      float: left;
      width: 100%;
  }
}
}
.top-btn{
    width: 50px;
    height: 50px;
    position: fixed;
    right: 50px;
    bottom: 50px;
    border: none;
    background-image:url('./assets/gotop.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: none; 
}

</style>
