<template>
    <section class="profile">
        <!-- 头部导航 -->
        <HeadTop title="我的">
            <span class="header_message" slot="search">
                <i class="iconfont icon-xiaoxi"></i>
            </span>
        </HeadTop>
        <!-- 登录/用户信息部分 -->
        <router-link :to="userInfo._id?'/userInfo':'/login'" class="profile-link">
            <div class="info_left">
                <div class="profile_image">
                    <img class="avatar" :src="userInfo._id?'http://kan.027cgb.com/620829/miao.png':'http://kan.027cgb.com/621101/human.png'"></i>
                </div>
                <div class="user-info">
                    <p class="user-info-top" v-if="!userInfo.phone">{{userInfo.name||'登录/注册'}}</p>
                    <p>
                        <span class="user-icon">
                            <i class="mui-icon"></i>
                        </span>
                        <span class="mui-icon mui-icon-extra mui-icon-extra-phone">{{userInfo.phone||'暂无绑定手机号'}}</span>
                    </p>
                </div>
            </div>
            <div class="info_right">
                <span class="arrow">
                    <i class="iconfont icon-gengduo"></i>
                </span>
            </div>
        </router-link>
        <!-- 功能导航部分  -->
        <section class="profile_info_data">
            <ul class="info_data_list">
                <a class="info_data_link">
                    <p class="info_data_top">
                        <span class="mui-icon iconfont icon-youhuiquan">
                            <span class="mui-badge" v-if="orderCar.length&&userInfo._id">{{orderCar[0].count}}</span>
                        </span>
                    </p>
                    <p class="info_data_bottom">待付款</p>
                </a>
                <a class="info_data_link">
                    <p class="info_data_top">
                        <span class="mui-icon iconfont icon-xinxidakai">
                            <span class="mui-badge" v-if="userInfo._id">1</span>
                        </span>
                    </p>
                    <p class="info_data_bottom">已付款</p>
                </a>
                <a class="info_data_link">
                    <p class="info_data_top"><span class="mui-icon iconfont icon-pingjia"></span></p>
                    <p class="info_data_bottom">待评价</p>
                </a>
                <a class="info_data_link">
                    <p class="info_data_top"><span class="mui-icon iconfont icon-evaluate-1-copy">
                        <span class="mui-badge" v-if="userInfo._id">2</span>
                    </span></p>
                    <p class="info_data_bottom">已评价</p>
                </a>
            </ul>
            <div class="seemore">
                <router-link to="/order">
                    <span>查看全部订单</span><span class="iconfont icon-gengduo"></span>
                </router-link>
            </div>
        </section>
        <!-- 选项卡 -->
        <section class="profile_user border-1px">
            <!-- 我的老师 -->
            <div class="profile_container">
                <a class="my_teacher">
                    <div class="my_order_div">
                        <span>
                            <i class="iconfont icon-ren"></i>
                        </span>
                        <span>我的老师</span>
                    </div>
                    <span class="my_order_teacher">
                        <i class="iconfont icon-gengduo"></i>
                    </span>
                </a>
                <!--足迹 -->
                <a class="my_order">
                    <div class="my_order_div">
                        <span>
                            <i class="iconfont icon-jiaoyin"></i>
                        </span>
                        <span>我的足迹</span>
                    </div>
                    <span class="my_order_icon">
                        <i class="iconfont icon-gengduo"></i>
                    </span>
                </a>
                <!-- 客服 -->
                <a class="my_order">
                    <div class="my_order_div">
                        <span>
                            <i class="iconfont icon-kefu"></i>
                        </span>
                        <span>联系客服</span>
                    </div>
                    <span class="my_order_icon">
                        <i class="iconfont icon-gengduo"></i>
                    </span>
                </a>
                <!-- 合作渠道 -->
                <a class="my_order">
                    <div class="my_order_div">
                        <span>
                            <i class="iconfont icon-hezuoqudao"></i>
                        </span>
                        <span>我要合作</span>
                    </div>
                    <span class="my_order_icon">
                        <i class="iconfont icon-gengduo"></i>
                    </span>
                </a>
            </div>
        </section>
        <button type="button" class="mui-btn mui-btn-danger" v-if="userInfo._id" @click="logout">退出登录</button>
    </section>
</template>
<script>
import HeadTop from '../../components/HeadTop/HeadTop.vue'
import { mapState } from 'vuex'
export default {
    components: {
        HeadTop
    },
    computed: {
        ...mapState(['userInfo', 'orderCar'])
    },
    mounted() {
        //mui初始化

    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
            this.$router.replace('/home')
        }
    }
};
</script>
<style lang="scss" scoped>
.profile {
    overflow: hidden;

    .header_message {
        font-size: 14px;
        color: #fff;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);

        .iconfont {
            font-size: 22px;
            color: #fff;
        }
    }

    .profile-link {
        background-color: #258cff;
        display: block;
        margin-top: 45px;
        display: flex;
        justify-content: space-between;
        padding: 12px 12px;

        .info_left {
            display: flex;
            margin-left: 16px;

            .profile_image {
                width: 60px;
                height: 60px;
                margin-right: 20px;

                .avatar {
                    width: 100%;
                }
            }

            .user-info {
                display: flex;
                flex-direction: column;
                justify-content: space-around;

                p {
                    margin: 0;
                    color: #FFF;
                    font-size: 14px;
                }

                .mui-icon-extra {
                    font-size: 14px;
                    color: #FFF;
                }
            }
        }

        .info_right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #FFF;
        }
    }

    .profile_info_data {
        background-color: #fff;

        .info_data_list {
            display: flex;
            justify-content: space-around;
            padding-inline-start: 0;
            padding-bottom: 8px;
            padding-top: 12px;
            margin: 0;

            .info_data_link {
                p {
                    margin-bottom: 6px;
                    display: flex;
                    justify-content: center;
                    font-size: 13px;
                }

                .icon-youhuiquan {
                    position: relative;
                }
                .icon-xinxidakai{
                    position: relative;
                }
                .icon-evaluate-1-copy{
                    position: relative;
                }
            }

        }

        .seemore {
            background-color: #fff;
            margin-bottom: 8px;
            color: #646464;
            text-align: center;
            border-top: 1px solid #e5e5e5;
            padding-top: 14px;
            padding-bottom: 14px;

            a {
                text-decoration: none;
                color: #646464;
                font-size: 13px;

                .iconfont {
                    font-size: 12px;
                    padding-left: 6px;
                }
            }
        }
    }

    .profile_user {
        margin-top: 10px;
        background-color: #fff;

        .profile_container {
            a {
                font-size: 14px;
                display: flex;
                justify-content: space-between;
                text-decoration: none;
                color: #4d4d4d;
                border-bottom: 1px solid #ebebeb;
                padding: 16px;

                .iconfont {
                    padding-right: 10px;
                    color: #289dfa;
                }

                .icon-gengduo {
                    text-align: center;
                    color: #b3b3b3;
                }
            }
        }
    }

    .mui-btn-danger {
        width: 100%;
        margin-top: 20px;
    }
}
</style>