<template>
    <div :class="{ifhidden:!showSearch}" class="search">
        <div class="search_box">
            <input type="search" placeholder="请输入商家名称" class="search_input" v-model="keyword">
            <span class="iconfont icon-xiazai17"></span>
            <span class="search_btn" @click="sendMsg">取消</span>
        </div>
        <div class="search_company" :style="showres?'':'display:none'">
                <router-link to="/shop/good" class="router-li" >
                    <div class="each_item" >
                        <div class="left_contentimg"><img src="http://kan.027cgb.com/620829/1.jpg"></div>
                        <div class="center_font">
                            <h1 class="center_title">
                                海博英语培训
                            </h1>
                            <div class="center_ratingAndSell">
                                <span class="center_rating">
                                    <Star class="star" :score="4" :size="24"></Star>
                                </span>
                                <span class="center_Sell">12人购买过</span>
                            </div>
                            <div class="center_price_item">
                                <span class="center_price">¥80</span>
                                <span>起</span>
                            </div>
                            <div class="center_bottom">
                                <span class="iconfont icon-jiaoyin"></span>
                                <span class="center_bottom_person1">420人去过</span>
                                <span class="iconfont icon-ai-eye"></span>
                                <span class="center_bottom_person2">2001人浏览过</span>
                            </div>
                        </div>
                    </div>
                </router-link>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Star from '../Star/Star.vue'
export default {
    props: ['showSearch'],
    data() {
        return {
            keyword: '',
            changeHead: true,
            showres:false
        }
    },
    methods: {
        a() {
            console.log('a');
        },
        sendMsg() {
            this.$emit('close')
        }
    },
    components: {
        Star
    },
    mounted(){
           
    },
    watch:{
        keyword(){
            this.$store.dispatch('searchShops',this.keyword);
            this.showres = true;
            if(!this.keyword){
               this.showres = false; 
            }
        }
    },
    computed:{
         ...mapState(['searchShops'])  
    }

};
</script>
<style lang="scss" scoped>
.search {
    display: block;
    background-color: #f5f5f5;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    &.ifhidden {
        display: none;
    }

    .search_box {
        background-color: #258cff;
        height: 45px;
        width: 100%;
        padding-top: 8px;

        .icon-xiazai17 {
            position: absolute;
            left: 20px;
            top: 13px;
        }

        .search_input {
            width: 80%;
            background-color: rgba(255, 255, 255, 0.8);
            font-size: 14px;
            color: #333;
            margin-left: 15px;
            padding: 4px 24px;
            height: 28px;
        }

        .search_btn {
            width: 16%;
            float: right;
            padding-left: 10px;
            color: #333;
            padding-top: 4px;
            font-size: 14px;
            color: white;
        }
    }

    .search_company {
        
        height: 100px;
        padding-bottom: 10px;
        border-bottom:1px solid #e1e1e1;
        margin-bottom:10px;
        &.ifshowres{
        display:none;}
        .router-li{

              .each_item {
                    display: flex;
                    padding: 8px 0px;
                    padding-right: 24px;
                    background-color: #fff;

                    border-bottom: 1px solid #ebebeb;

                    .left_contentimg {
                        width: 100px;
                        height: 66px;
                        margin-right: 8px;
                        margin-left:8px;

                        img {
                            width: 90%;
                        }
                    }

                    .center_font {
                        line-height: normal;

                        .center_title {
                            font-size: 14px;
                            padding-bottom: 4px;
                            color: #666666;
                        }

                        .center_ratingAndSell {
                            margin: 4px 0;

                            .center_rating {
                                .star {
                                    padding-top: 4px;
                                }

                            }

                            .center_Sell {
                                font-size: 12px;
                                margin-left: 8px;

                            }
                        }

                        .center_price_item {
                            margin: 4px 0;
                            font-size: 10px;
                            color: #666666;

                            .center_price {
                                margin-right: 4px;
                                color: #ff9d2a;
                                font-size: 14px;

                            }
                        }

                        .center_bottom {
                            margin: 4px 0;
                            font-size: 10px;
                            color: #c9c9c9;

                            .iconfont {
                                font-size: 10px;
                                color: #b2b2b2;
                                margin-right: 4px;
                            }

                            .center_bottom_person1 {
                                margin-right: 10px;
                            }
                        }
                    }


                }
            }
    }
}
</style>