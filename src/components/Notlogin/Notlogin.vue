<template>
     <div class="notlogin">
        <router-link to="/login">
        <button type="button" class="mui-btn mui-btn-primary">请先登录</button>
        <p class="text">您还未登录，请先登录吧~</p>
        </router-link>
    </div>
</template>
<script>
export default{

};
</script>
<style lang="scss" scoped> 
    .notlogin {
    width:100%;
    height:550px;
    background:url(./img/plslongin.png) no-repeat center center;
    .mui-btn-primary{
        position:absolute;
        top:420px;
        left:40%;
    }
    .text{
        position:absolute;
        top:480px;
        margin-left:110px;
    }
}
</style>