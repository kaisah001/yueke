<template>
    <div> 
        <!-- 头部 -->
        <ShopHeader></ShopHeader>
        <!-- tab切换 -->
        <div>
        <div class="tab">
            <div class="tab-item">
                <router-link to="/shop/goods" replace>服务</router-link>
                <router-link to="/shop/rating" replace>评价</router-link> 
                <router-link to="/shop/info" replace>信息</router-link>  
            </div>
        </div> 
        <transition>
        <router-view></router-view>
        </transition>
        </div>
   
    </div>


</template>
<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
import {mapActions} from 'vuex'
export default{
  components:{
    ShopHeader
  },
   mounted(){
      this.$store.dispatch('getShopInfo');

    },
    methods:{
 /*     ...mapActions(['getShopInfo'])*/
    }

};   
</script>

<style lang="scss" scoped>
@import "../../common/stylus/mixins.scss";
.tab {
  height: 40px;
  line-height: 40px;
  background: #fff;
  .tab-item {
    text-align: center;
    font-size: 14px;
    display:flex;
    justify-content:space-around;
    a {
      color:black;
      display: block;
      position: relative;     
      &.mui-active {
        color: #258cff;
        border-bottom:2px solid #258cff;

      }
    }
  }

}
  .v-enter{
    opacity:0;
    transform:translateX(200%);
}
.v-leave-to{
    opacity:0;
    transform: translateX(-200%);
    position: absolute;
}
.v-enter-active,
.v-leave-active{
    transition:all .4s ease;
}

</style>