<template>
    <div class="info-container">
        <div class="shop-info">
            <div class="shop-info-wrapper">
                <div class="shop-bottom">
                    <a class="shop-bottom-item" >
                        <div class="shop_left">
                            <span>
                                <i class="iconfont icon-dingwei"></i>
                            </span>
                            <span class="shop_left_font">{{info.address}}</span>
                        </div>
                        <span class="shop_right">
                            <span class="shop_right_font"></span>
                            <i class="iconfont icon-gengduo"></i>
                        </span>
                    </a>
                    <a class="shop-bottom-item">
                        <div class="shop_left">
                            <span>
                                <i class="iconfont icon-xinxidakai"></i>
                            </span>
                            <span class="shop_left_font">{{info.phone}}</span>
                        </div>
                        <span class="shop_right">
                            <span class="shop_right_font">免费咨询</span>
                            <i class="iconfont icon-gengduo"></i>
                        </span>
                    </a>
                    <a class="shop-bottom-item" @click="showGift" v-if="info.gifts">
                        <div class="shop_left">
                            <span>
                                <span class="yuyueli" style="color:#ffb11b;font-size:12px">预约礼</span>
                            </span>
                            <span class="shop_left_font last_gift"><span>{{info.gifts[0].content}}</span></span>
                        </div>
                        <span class="shop_right">
                            <span class="shop_right_font">{{info.gifts.length}}个礼包</span>
                            <i class="iconfont icon-sanjiaoxing"></i>
                        </span>
                    </a>
                </div>
                <div class="split"></div>
                <section class="section">
                    <h3 class="section-title" >活动与服务</h3>
                    <div class="service-box">
                        <div class="service-section" v-for="(support, index) in info.supports" :key="index">
                            <span class="content-tag">
                                <span class="service-item"><span class="iconfont icon-evaluate-1-copy"></span>{{support.name}}</span>
                            </span>
                        </div>
                    </div>
                </section>
                <div class="split"></div>
                <section class="section">
                    <h3 class="section-title">商家实景</h3>
                    <div class="pic-wrapper">                        
                                <vue-preview :slides="list" @close="handleClose"></vue-preview> 
                    </div>
                </section>
            </div>
        </div>
        <transition name="fade">
            <div class="activity-sheet" v-if="giftShow">
                <div class="activity-sheet-content">
                    <h2 class="activity-sheet-title">优惠活动</h2>
                    <ul class="list">
                        <li class="activity-item" v-for="(gift, index) in info.gifts" :key="index" :class="supportClasses[gift.type]">
                            <span class="content-tag">
                                <span class="mini-tag">{{gift.name}}</span>
                            </span>
                            <span class="activity-content">{{gift.content}}</span>
                        </li>
                    </ul>
                    <div class="activity-sheet-close" @click="closeGiftShow">
                        <span class="iconfont icon-guanbi"></span>
                    </div>
                </div>
                <div class="activity-sheet-cover"></div>
            </div>
        </transition>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
    data() {
        return {
            supportClasses: ['activity-green', 'activity-red', 'activity-orange'],
            giftShow: false,
            id: this.$route.params.id,
            list:[
            {
                src:'http://kan.027cgb.com/621101/19-1.jpg',
                msrc:'http://kan.027cgb.com/621101/s1.jpg',
                w:216,
                h:162
            },{
                src:'http://kan.027cgb.com/621101/19-2.jpg',
                msrc:'http://kan.027cgb.com/621101/s5.jpg',
                w:216,
                h:162
            },{
                src:'http://kan.027cgb.com/621101/19-3.jpg',
                msrc:'http://kan.027cgb.com/621101/s3.jpg',
                w:216,
                h:162
            }

            ]
        }
    },
    methods: {
        showGift() {
            this.giftShow = !this.giftShow
            console.log('ok')
        },
        closeGiftShow() {
            this.giftShow = !this.giftShow
        },
        a(){
            console.log('ok')
        },
        handleClose () {
        console.log('close event')
      }
    },
    computed: {
        ...mapState(['info'])
    },
    mounted() {
       /* const scroll = new BScroll('.shop-info')*/
        //计算ul宽度
        /*        const ul = this.$refs.picsUl
                const liWidth = 120
                const space = 4
                const count = this.info.pics.length
                ul.style.width = (liWidth + space)*count-space + 'px'*/
/*        const picScroll = new BScroll('.pic-wrapper', {
            scrollX: true
        })*/

        console.log(scroll)       
    }


};
</script>
<style lang="scss">
.shop-info {
    margin-top: 10px;
    width: 100%;
    background: #fff;
    overflow: hidden;
    .shop-info-wrapper {
        .shop-bottom {
            padding-top: 8px;
            font-size: 14px;


            .shop-bottom-item {
                padding: 12px 16px;
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #ebebeb;
                color: #3996fe;

                .shop_left_font {
                    padding-left: 14px;
                    color: #333333;

                }

                .yuyueli {
                    border: 1px solid #ffb11b;
                    border-radius: 5px;
                }
            }
        }

        .split {
            width: 100%;
            height: 10px;
            border-top: 1px solid rgba(7, 17, 27, 0.1);
            border-bottom: 1px solid rgba(7, 17, 27, 0.1);
            background: #f3f5f7;
        }

        .section {
            .section-title {
                padding-top: 8px;
                font-size: 14px;
                margin-left: 15px;
            }

            .pic-wrapper {
                margin-left: 15px;
                /* display:flex; */
                .my-gallery{
                    width:600px;
                    
                }
                figure{
                    margin:0;
                    margin-top:8px;
                }
                        img {
                            padding-right: 4px;
                            border-radius: 4px;
                            float:left;
                            text-align:left;

                        }
                    
                
            }
        }
      .service-box {
            display: flex;
            flex-wrap: wrap;
            font-size: 13px;
            margin-left: 15px;
            padding-top: 10px;
            margin-bottom: 15px;

            .service-section {
                width: 32%;
                padding-top: 10px;

                .service-item {
                    .icon-evaluate-1-copy {
                        margin-right: 6px;
                        color: #258cff;
                    }
                }
            }
        }

    }
}
        .activity-sheet {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 99;

            &.fade-enter-active,
            &.fade-leave-active {
                transition: opacity 0.5s;
            }

            &.fade-enter,
            &.fade-leave-to {
                opacity: 0;
            }

            .activity-sheet-content {
                position: absolute;
                background-color: #f5f5f5;
                box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, 0.4);
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 999;
                padding: 20px 30px;
                box-sizing: border-box;
                transition: transform 0.2s;
                will-change: transform;
                color: #333;

                .activity-sheet-title {
                    text-align: center;
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 20px;
                }

                .list {
                    font-size: 16px;
                    height: 160px;
                    overflow-y: auto;

                    .activity-item {
                        margin-bottom: 12px;
                        display: flex;
                        font-size: 13px;
                        align-items: center;

                        &.activity-green {
                            .content-tag {
                                background-color: rgb(112, 188, 70);
                            }
                        }

                        &.activity-red {
                            .content-tag {
                                background-color: rgb(240, 115, 115);
                            }
                        }

                        &.activity-orange {
                            .content-tag {
                                background-color: rgb(241, 136, 79);
                            }
                        }

                        .content-tag {
                            display: inline-block;
                            border-radius: 2px;
                            width: 36px;
                            height: 18px;
                            margin-right: 10px;
                            color: #fff;
                            font-style: normal;
                            position: relative;

                            .mini-tag {
                                position: absolute;
                                left: 0;
                                top: 0;
                                right: -100%;
                                bottom: -100%;
                                font-size: 24px;
                                transform: scale(0.5);
                                transform-origin: 0 0;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            }
                        }
                    }
                }

                .activity-sheet-close {
                    position: absolute;
                    right: 6px;
                    top: 10px;
                    width: 25px;
                    height: 25px;

                    >span {
                        font-size: 20px;
                    }
                }
            }

            .activity-sheet-cover {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background-color: rgba(0, 0, 0, 0.5);
            }
        }
</style>