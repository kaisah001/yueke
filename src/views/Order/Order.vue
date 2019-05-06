<template>
    <section class="order">
        <!-- 头部 -->
        <HeadTop title="订单">
        </HeadTop>

    <div :style="userInfo._id?'':'display:none'">
        <!-- 选项卡 -->
        <div class="tab">
            <div class="tab_item">
                <router-link to='/order/notpaid' class="t_item">待付款<span class="count"><span v-if="orderCar.length">({{orderCar[0].count}})</span></span></router-link>
                <router-link to='/order/havepaid' class="t_item">已下单<span>(1)</span></router-link>
                <router-link to='/order/notrate' class="t_item">待评价</router-link>
                <router-link to='/order/haverate' class="t_item">已评价<span>(2)</span></router-link>
            </div>
        </div>
        <!--  订单详情 -->
        <div class="order_content">
            <transition>
                <router-view></router-view>
            </transition>
        </div>
    </div>
    <div :style="userInfo._id?'display:none':''">
        <Notlogin></Notlogin>
    </div>

        <!-- 底部 -->
        <FooterGuide></FooterGuide>
    </section>
</template>
<script>
import HeadTop from '../../components/HeadTop/HeadTop.vue'
import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
import Notlogin from '../../components/Notlogin/Notlogin.vue'
import {mapState} from 'vuex'
export default {
    components: {
        HeadTop,
        FooterGuide,
        Notlogin
    },
    mounted(){
        
    },
    data(){
        return{
            
        }
    },
    computed:{
    ...mapState(['orderCar','userInfo'])
}
};
</script>
<style lang="scss" scoped>
.tab {
    z-index:997;
    position: absolute;
    top: 45px;
    height: 40px;
    line-height: 40px;
    background: #fff;
    width: 100%;

    .tab_item {
        text-align: center;
        font-size: 14px;
        display: flex;
        justify-content: space-around;

        .t_item {
            color: #3e4346;
            display: block;
            postion: relative;

            &.mui-active {
                color: #258cff;
                border-bottom: 2px solid #258cff;
            }
        }

    }

}

.order_content {
    overflow-x:hidden;
.v-enter{
    opacity:0;
    transform:translateX(100%);
}
.v-leave-to{
    opacity:0;
    transform: translateX(-100%);
    position: absolute;
}
.v-enter-active,
.v-leave-active{
    transition:all .2s ease;
}
}
</style>