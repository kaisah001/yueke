<template>
 
    <div class="footer_container">
    <footer class="my-bar mui-bar mui-bar-tab ">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon iconfont icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/company">
        <span class="mui-icon iconfont icon-thin-_book_writi"></span>
        <span class="mui-tab-label">机构</span>
      </router-link>
      <router-link class="mui-tab-item" to="/order">
        <span class="mui-icon iconfont icon-dingdan"><span class="mui-badge" id="badge" v-if="orderCar.length && userInfo._id">{{orderCar[0].count}}</span></span>
        <span class="mui-tab-label">订单</span>
      </router-link>
      <router-link class="mui-tab-item" to="/profile">
        <span class="mui-icon iconfont icon-gerenzhongxin"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </footer>
  </div>







</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
...mapState(['orderCar','userInfo'])
}
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../lib/mui/css/iconfont.css"
.footer_container
  background-color #fff
  .my-bar
    box-shadow 0 0 1px #e1e1e1 !important
    background-color #fff

  










</style>