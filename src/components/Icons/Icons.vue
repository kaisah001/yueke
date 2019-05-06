<template>
	<div class="Icon_container">
		
       <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4">
                <router-link class="rl" to="/company">
                    <span class="icon1"><img class="img2" src="./imgs/icon1.png"></span>
                    <div class="mui-media-body">文化课</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <router-link class="rl" to="/company">
                    <span class="icon1"><img class="img2" src="./imgs/icon2.png"></span>
                    <div class="mui-media-body">舞蹈</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            	<router-link class="rl" to="#">
                    <span class="icon1"><img class="img2" src="./imgs/icon3.png"></span>
                    <div class="mui-media-body">美术</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            	<router-link class="rl" to="#">
                    <span class="icon1"><img class="img2" src="./imgs/icon4.png"></span>
                    <div class="mui-media-body">乐器</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            	<router-link class="rl" to="#">
                    <span class="icon1"><img class="img2" src="./imgs/icon5.png"></span>
                    <div class="mui-media-body">兴趣</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            	<router-link class="rl" to="#">
                    <span class="icon1"><img class="img2" src="./imgs/icon6.png"></span>
                    <div class="mui-media-body">体育</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            	<router-link class="rl" to="#">
                    <span class="icon1"><img class="img2" src="./imgs/icon7.png"></span>
                    <div class="mui-media-body">外语</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            	<router-link class="rl" to="#">
                    <span class="icon1"><img class="img2" src="./imgs/icon8.png"></span>
                    <div class="mui-media-body">更多</div>
                </router-link></li>
        </ul>
	</div>

</template>
<script>
	

</script>
<style lang="stylus" rel="stylesheet/stylus">
 .mui-grid-view.mui-grid-9 .mui-table-view-cell
  border none !important
  background-color #FFF !important
  padding 4px 8px !important
  .rl
    padding 4px 2px !important
    .mui-media-body
      line-height 16px 
      font-size 14px
    .icon1
      display block
      height 50px
      width 50px
      margin 0 auto
      .img2
  	    width 100%
  	    display block
</style>