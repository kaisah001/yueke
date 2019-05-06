<template>
     <div class="notlogin">
         <HeadTop title="课程预约">
            <a class="header_position" slot="position" @click="$router.back()">
                <span class="position_moji"><i class="mui-icon mui-icon-arrowleft"></i></span>
            </a>
        </HeadTop>
        <router-link to="/order">
        <button type="button" class="mui-btn mui-btn-primary">立即查看</button>
        <p class="text">预约成功，快去查看订单吧~</p>
        </router-link>
    </div>
</template>
<script>
import HeadTop from '../../components/HeadTop/HeadTop.vue'
export default{
    components:{
        HeadTop
    }
};
</script>
<style lang="scss" scoped> 
    .notlogin {
    width:100%;
    height:550px;
    background:url(./img/ok.png) no-repeat center center;
    .mui-btn-primary{
        position:absolute;
        top:430px;
        left:40%;
    }
    .text{
        position:absolute;
        top:480px;
        margin-left:110px;
    }
}
</style>