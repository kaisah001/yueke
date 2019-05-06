<template>
    <div class="notpaid">
        <div class="paidbox" v-if="orderCar.length" v-for="(order,index) in orderCar" :key="index">
            <div class="paid_title">
                <div class="pd_left">
                    <input class="ckbox" :checked="order.checked" @click="Buy" type="checkbox">
                    <span class="iconfont icon-dianpu"></span>
                    <span class="pd_title">{{order.title}}</span>
                    <span class="pd_tag">机构</span>
                </div>
                <div class="paid_right">
                    <span class="iconfont icon-gengduo"></span>
                </div>
            </div>
            <div class="paid_content">
                <div class="pd_content_left">
                    <div class="pd_img"><img :src="order.img"></div>
                    <div class="pd_content_title">
                        <div class="pd_title_l1">{{order.title}}</div>
                        <div class="pd_title_l2">
                            <span class="pd_yuyueli">预约礼</span>
                            <span class="pd_yuyueli_font">免费赠送</span>
                        </div>
                        <div class="pd_title_l3">¥{{order.price}} x {{order.count}}</div>
                    </div>
                </div>
                <div class="pd_content_right">
                    <span class="time"><a href="#" @click.prevent="remove(order.id)">删除</a></span>
                </div>
            </div>
            <div class="paid_btn">
                    <button type="button" class="mui-btn mui-btn-primary off" @click="ifBuy=!ifBuy" :class="ifBuy?'on':'off'">立即付款</button>
            </div>
        </div>
        <div class="pricebox">
            <div class="pri_left">
                <div class="pri_title1">
                    <span class="pri_t1">总计:</span>
                </div>
                <div class="pri_title2">
                    <span class="pri_t2">已勾选课程<span class="p_red"> {{$store.getters.getAllCount}} </span>节,</span>
                    <span class="pri_t2">总价:<span class="p_red"> ¥{{$store.getters.getAllPrice}}</span></span>
                </div>

            </div>
            <div class="pri_right">
                <button type="button" class="mui-btn-danger">去结算</button>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
import {remove_form_car} from '../../../store/mutation-types.js'
export default {
    data() {
        return {
            ifBuy:true
        }

    },
    methods:{
        ...mapMutations([remove_form_car]),
        Buy(){
            this.ifBuy=!this.ifBuy
            if(this.ifBuy){
            console.log('buy')
            }
        },
        remove(id){
            this.$store.commit('remove_form_car',id);


        }
    },
    computed:{
    ...mapState(['orderCar'])
}

};
</script>
<style lang="scss" scoped>
.notpaid {
    margin-top: 97px;

    .paidbox {
        border-top: 1px solid #e1e1e1;
        border-bottom: 1px solid #e1e1e1;
        padding-left: 15px;
        margin-top: 12px;
        background-color: #fff;

        .paid_title {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ebebeb;
            padding-right: 15px;

            .pd_left {
                padding-top: 10px;
                padding-bottom: 10px;
                .ckbox{
                    margin-right:10px;
                    width:16px;
                    height:16px;

                }

                .icon-dianpu {
                    color: #272636;
                    margin-right: 10px;
                    font-size: 14px;
                }

                .pd_title {
                    color: #585858;
                    font-size: 14px;
                    margin-right: 10px;
                }

                .pd_tag {
                    color: #fff;
                    background-color: #f6a72e;
                    border-radius: 2px;
                    padding: 2px;
                    font-size: 12px;
                }
            }

            .paid_right {
                .icon-gengduo {
                    font-size: 14px;
                    line-height: 42px;
                    color: #8b8b8b;
                }

            }
        }

        .paid_content {
            padding-right: 15px;
            display: flex;
            justify-content: space-between;
            margin-top: 12px;

            .pd_content_left {
                display: flex;

                .pd_img {
                    width: 90px;
                    height: 75px;
                    background-color: red;
                    margin-right: 10px;

                    img {
                        width: 90px;
                        height: 75px;
                        border-radius:2px;
                    }
                }

                .pd_content_title {
                    .pd_title_l1 {
                        font-size: 14px;
                        color: #333333;
                        margin-top: 4px;
                    }

                    .pd_title_l2 {
                        margin-top: 4px;

                        .pd_yuyueli {
                            font-size: 10px;
                            color: #ff0000;
                            border-radius: 2px;
                            border: 1px solid #ff0000;
                            padding: 1px;
                            margin-right: 12px;
                        }

                        .pd_yuyueli_font {
                            font-size: 10px;
                            color: #666666;

                        }

                    }

                    .pd_title_l3 {
                        margin-top: 4px;
                        font-size: 14px;
                        color: #fe6044;

                    }

                }

            }

            .pd_content_right {
                .time {
                    font-size: 10px;
                    color: #666666;
                }

            }
        }

        .paid_btn {
            padding: 10px 15px;
            text-align:right;
            .mui-btn-primary {
                padding: 4px 8px;
                font-size: 12px;
            }

        }
    }
    .pricebox{
        border-top: 1px solid #e1e1e1;
        border-bottom: 1px solid #e1e1e1;
        padding-left: 15px;
        margin-top: 12px;
        background-color: #fff;
        padding-top:20px;
        padding-bottom:20px;
        display:flex;
        justify-content:space-between;
        .pri_left{
            .pri_title1{
                margin-bottom:10px;
                .pri_t1{
                color: #272636;
                font-size: 14px;
                }
            }
            .pri_title2{
                .pri_t2{
                color: #272636;
                font-size: 14px;
                    .p_red{
                    font-size:16px;
                    color:#fe6044;
                    }
                }
            }
        }
        .pri_right{
            line-height:53.2px;
            .mui-btn-danger{
                margin-top:12px;
                margin-right:15px;

            
            }
        }
    }
}
</style>