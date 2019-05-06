<template>
     <div class="havepaid">
        <div class="paidbox">
            <div class="paid_title">
                <div class="pd_left">
                    <span class="iconfont icon-dianpu"></span>
                    <span class="pd_title">祝博士学习吧</span>
                    <span class="pd_tag">机构</span>
                </div>
                <div class="paid_right">
                    <span class="iconfont icon-gengduo"></span>
                </div>
            </div>
            <div class="paid_content">
                <div class="pd_content_left">
                    <div class="pd_img"><img src="http://kan.027cgb.com/620829/11.jpg"></div>
                    <div class="pd_content_title">
                        <div class="pd_title_l1">CET6考前辅导</div>
                        <div class="pd_title_l2">
                            <span class="pd_yuyueli">预约礼</span>
                            <span class="pd_yuyueli_font">免费赠送：无</span>
                        </div>
                        <div class="pd_title_l3">¥20</div>
                    </div>
                </div>
                <div class="pd_content_right">
                    <span class="time">使用时间:10天内</span>
                </div>
            </div>
            <div class="paid_btn">
                <button type="button" class="mui-btn mui-btn-primary">立即查看</button>
            </div>
        </div>
        
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
...mapState(['orderCar'])
}
};
</script>
<style lang="scss" scoped> 
    .havepaid {
    margin-top:97px;
    .paidbox {
        border-top:1px solid #e1e1e1;
        border-bottom:1px solid #e1e1e1;
        padding-left:15px;
        margin-top: 12px;
        background-color: #fff;

        .paid_title {
            display:flex;
            justify-content:space-between;
            border-bottom:1px solid #ebebeb;
            padding-right:15px;
            .pd_left {
                padding-top:10px;
                padding-bottom:10px;
                .icon-dianpu{
                    color:#272636;
                    margin-right:10px;
                    font-size:14px;
                }
                .pd_title{
                    color:#585858;
                    font-size:14px;
                    margin-right:10px;
                }
                .pd_tag{
                    color:#fff;
                    background-color:#f6a72e;
                    border-radius:2px;
                    padding:2px;
                    font-size:12px;
                }
            }
            .paid_right{
                .icon-gengduo{
                    font-size:14px;
                    line-height:42px;
                    color:#8b8b8b;
                }

            }
        }
        .paid_content{
            padding-right:15px;
            display:flex;
            justify-content:space-between;
            margin-top:12px;
            .pd_content_left{
                display:flex;
                .pd_img{
                    width:90px;
                    height:75px;
                    background-color:red;
                    margin-right:10px;
                    img{
                        width:100%;
                        border-radius:2px;
                    }
                }
                .pd_content_title{
                    .pd_title_l1{
                        font-size:14px;
                        color:#333333;
                        margin-top:4px;
                    }
                    .pd_title_l2{
                        margin-top:4px;
                        .pd_yuyueli{
                            font-size:10px;
                            color:#ff0000;
                            border-radius:2px;
                            border:1px solid #ff0000;
                            padding:1px;
                            margin-right:12px;
                        }
                        .pd_yuyueli_font{
                            font-size:10px;
                            color:#666666;

                        }

                    }
                    .pd_title_l3{
                        margin-top:4px;
                        font-size:14px;
                        color:#fe6044;

                    }

                }

            }
            .pd_content_right{
                .time{
                    font-size:10px;
                    color:#666666;
                }

            }
        }
        .paid_btn{
            padding:10px 15px;
            text-align:right;
            .mui-btn-primary{
                padding:4px 8px;
                font-size:12px;
        }

        }
    }
}
</style>