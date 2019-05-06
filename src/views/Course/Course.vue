<template>
    <div class="course_bg">
        <HeadTop title="课程详情">
            <a class="header_position" slot="position" @click="$router.back()">
                <span class="position_moji"><i class="mui-icon mui-icon-arrowleft"></i></span>
            </a>
        </HeadTop>
        <div class="course-box" :class="{login:!iflogin}">
        <!-- 头部banner -->
            <div class="banner">
                <div class="banner_img"><img :src="course.img"></div>
                <div class="banner_title">
                    <div class="b_title">{{course.title}}</div>
                    <div class="b_price">
                        <span class="b_price_now">¥{{course.pricenow}}</span>
                        <span class="b_price_old">¥{{course.priceold}}</span>
                    </div>
                </div>
                <div class="banner_gift">
                    <div class="left_gift_content">
                        <div class="b_yuyueli"><span class="b_yuyueli_font">预约礼</span></div>
                        <div class="gift_info">
                            <div v-for="(gift,index) in course.gift" :key="index">{{gift}}</div>
                        </div>
                    </div>
                    <div class="right_get_gift">
                        <span class="get_font">领取</span>
                        <span class="iconfont icon-gengduo"></span>
                    </div>
                </div>
            </div>
            <!-- 课程特色 -->
            <div class="center_course_character">
                <div class="course_title"><span class="c_title">课程特色</span></div>
                <div class="c_info">
                    <div class="info_box" v-for="(char,index) in course.character" :key="index">
                        <span class="c_circle"></span><span class="info1">{{char}}</span>
                    </div>
                </div>
            </div>
            <!-- 课程介绍 -->
            <div class="course_infomation">
                <div class="course_title"><span class="c_title">课程介绍</span></div>
                <div class="who">
                    <div class="who_title"><span class="w_circle"></span><span class="w_title">试用对象</span></div>
                    <div class="w_info_box">
                        <div v-for="(who,index) in course.who" :key="index">
                        <div class="info2"><span class="info3">{{who}}</span></div>
                       </div>
                    </div>
                </div>
                <div class="plan">
                    <div class="who_title"><span class="w_circle"></span><span class="w_title">学习目标</span></div>
                    <div class="w_info_box" v-for="(plan,index) in course.plan" :key="index">
                        {{plan}}
                    </div>
                </div>
                <div class="course_content">
                    <div class="who_title"><span class="w_circle"></span><span class="w_title">课程内容</span></div>
                    <div class="w_info_box">
                       {{course.content}}
                    </div>
                </div>
            </div>
            <!-- 课程预约 -->
            <button @click="nowBuy" type="button" class="mui-btn mui-btn-primary">课程预约</button>
        </div>
        <div class="login-box" :class="{login:iflogin}">
        <Notlogin></Notlogin>
    </div>
    </div>
</template>
<script>
import HeadTop from '../../components/HeadTop/HeadTop.vue'
import {mapState,mapMutations} from 'vuex'
import {add_to_order} from '../../store/mutation-types.js'
import Notlogin from '../../components/Notlogin/Notlogin.vue'
export default {
    data() {
        return {
            id:this.$route.params.id,
            iflogin:true
        }
    },
    components: {
        HeadTop,
        Notlogin
    },
    computed:{
        ...mapState(['course','userInfo'])
    },
    mounted(){
      this.$store.dispatch('getCourse');
    },
    methods:{
       nowBuy(){
        if(this.userInfo._id){
         var order = {
            id:this.id,
            title:this.course.title,
            count:1,
            price:this.course.pricenow,
            checked:true,
            img:this.course.img
         };
         this.$store.commit('add_to_order',order);
         console.log('no')
         this.$router.push('/appoint')
         }else{
            this.iflogin = false
            console.log('ok')

         }
       }
    }
};
</script>
<style lang="scss" scoped>
html {
    background-color: #f5f5f5;
    .course-box{
        &.login{
            display:none;
        }
    .banner {
        background-color: #fff;
        margin-top: 45px;
        border-bottom: 1px solid #e1e1e1;

        .banner_img {
            width: 375px;
            height: 180px;
            background-color: #666666;
            img {
                width: 100%;
            }
        }

        .banner_title {
            margin-left: 15px;

            .b_title {
                color: #4d4d4d;
                font-size: 16px;
                font-weight: bold;
                margin-top: 15px;
                margin-bottom: 10px;
            }

            .b_price {
                padding-bottom: 14px;

                border-bottom: 1px solid #ebebeb;

                .b_price_now {
                    font-size: 16px;
                    color: #fe6044;
                    margin-right: 10px;
                }

                .b_price_old {
                    font-size: 12px;
                    color: #b3b3b3;
                    text-decoration: line-through;
                }
            }
        }

        .banner_gift {
            margin-top: 12px;
            margin-left: 15px;
            display: flex;
            justify-content: space-between;
            padding-bottom: 12px;


            .left_gift_content {
                display: flex;

                .b_yuyueli {
                    line-height: 41px;

                    .b_yuyueli_font {
                        color: #ffa800;
                        font-size: 12px;
                        border: 1px solid #ffa800;
                        padding: 1px;
                        border-radius: 2px;
                    }
                }

                .gift_info {
                    margin-left: 10px;
                    font-size: 13px;
                    color: #4d4d4d;
                }
            }

            .right_get_gift {
                font-size: 14px;
                color: #6bbcfc;
                line-height: 41.6px;
                padding-right: 15px;

                .get_font {
                    margin-right: 8px;

                }
            }
        }
    }

    .center_course_character {
        background-color: #fff;
        margin-top: 8px;
        padding-left: 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e1e1e1;
        border-top: 1px solid #e1e1e1;

        .course_title {
            padding-top: 12px;
            padding-bottom: 4px;

            .c_title {
                color: #289dfa;
                font-size: 13px;
                border: 1px solid #289dfa;
                padding: 2px;
                border-radius: 4px;

            }
        }

        .c_info {
            font-size: 14px;
            color: #4d4d4d;

            .info_box {
                padding-bottom: 4px;
                padding-top: 12px;

                .c_circle {
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    background-color: #d9d9d9;
                    border-radius: 50%;
                    margin-right: 6px;

                }

                .info1 {
                    border-bottom: 1px solid #93cefc;
                }
            }
        }

    }

    .course_infomation {
        background-color: #fff;
        margin-top: 8px;
        padding-left: 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e1e1e1;
        border-top: 1px solid #e1e1e1;

        .course_title {
            padding-top: 12px;
            padding-bottom: 4px;

            .c_title {
                color: #289dfa;
                font-size: 13px;
                border: 1px solid #289dfa;
                padding: 2px;
                border-radius: 4px;
            }
        }

        .who {
            padding-bottom: 10px;
            border-bottom: 1px solid #e1e1e1;

            .who_title {
                font-size: 14px;
                font-weight: bold;
                color: #333333;

                .w_circle {
                    display: inline-block;
                    background-color: #289dfa;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    margin-right: 6px;
                }
            }

            .w_info_box {
                .info2 {
                    margin-left: 12px;
                    padding-top: 12px;
                    padding-bottom: 4px;
                    font-size: 14px;
                    color: #808080;

                    .info3 {
                        border-bottom: 1px solid #93cefc;
                    }
                }
            }
        }

        .plan {
            padding-bottom: 10px;
            border-bottom: 1px solid #e1e1e1;

            .who_title {
                font-size: 14px;
                font-weight: bold;
                color: #333333;

                .w_circle {
                    display: inline-block;
                    background-color: #289dfa;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    margin-right: 6px;
                }
            }

            .w_info_box {
                margin-left: 12px;
                padding-top: 12px;
                padding-bottom: 4px;
                font-size: 14px;
                color: #808080;
            }

        }

        .course_content {
            padding-bottom: 10px;
            border-bottom: 1px solid #e1e1e1;

            .who_title {
                font-size: 14px;
                font-weight: bold;
                color: #333333;

                .w_circle {
                    display: inline-block;
                    background-color: #289dfa;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    margin-right: 6px;
                }
            }

            .w_info_box {
                margin-left: 12px;
                padding-top: 12px;
                padding-bottom: 4px;
                font-size: 14px;
                color: #808080;
                padding-right:15px;
            }


        }
    }
    .mui-btn-primary{
        width:100%;
        height:38px;
    }

    }
    .login-box{
       &.login{
            display:none;
        } 
    }

}
</style>