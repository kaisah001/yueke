<template>
    <div>
        <HeadTop title="机构主页">
            <a class="header_position" slot="position" @click="$router.back()">
                <span class="position_moji"><i class="mui-icon mui-icon-arrowleft"></i></span>
            </a>
        </HeadTop>
    <div class="shop-header">
        <nav class="shop-nav" :style="{background:`url(${info.bgImg}) 50% center`}">
            
        </nav>
        <div class="shop-content">
            <img class="content-image" :src="info.avatar">
            <div class="header-content">
                <h2 class="content-title">
                    <span class="content-name">{{info.name}}</span>
                </h2>
                <div class="shop-message">
                    <span class="shop-message-detail">
                        <Star class="shopstar" :score="info.score" :size="24"></Star>
                    </span>
                    <span class="shop-message-detail">{{info.ratingCount}}条 |</span>
                    <span class="shop-message-detail thirdimg"><i class="iconfont icon-renzhengyonghu">认证</i></span>
                    <span class="shop-message-detail">{{info.sellCount}}人预定</span>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import Star from '../Star/Star.vue'
import { mapState } from 'vuex'
import HeadTop from '../../components/HeadTop/HeadTop.vue'
export default {
    data() {
        return {
            supportClasses: ['activity-green', 'activity-red', 'activity-orange'],
            giftShow: false,
            id:this.$route.params.id
        }
    },
    methods:{
      showGift(){
        this.giftShow=!this.giftShow
    },
      closeGiftShow(){
        this.giftShow=!this.giftShow
      }
    },
    components: {
        Star,
        HeadTop
    },
    computed: {
        ...mapState(['info'])
    }
};
</script>
<style lang="scss">
@import "../../common/stylus/mixins.scss";
.header_position  {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20%;
  height: 50%;
  .position_moji {
    font-size: 14px;
    color: #FFF;
  }

  .mui-icon-arrowleft  {
    font-size: 22px;
    color: #fff;
  }
}

.shop-header {
    height: 100%;
    position: relative;
    background: #fff;
    color: #fff;
    overflow: hidden;

    .shop-nav {
        background-size: cover;
        background-repeat: no-repeat;
        height: 150px;

        padding: 5px 10px;
        position: relative;

        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: rgba(119, 103, 137, 0.43);
        }

        .back {
            position: absolute;
            top: 10px;
            left: 0;

            .mui-icon-arrowleft {
                display: block;
                padding: 5px;
                font-size: 20px;
                color: #fff;
            }
        }
    }

    .shop-content {
        display: flex;

        img {
            box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, 0.2);
            width: 70px;
            height: 70px;
            border-radius: 2px;
            z-index: 998;
            margin-left: 20px;
            margin-top: -16px;

        }

        .header-content {
            color: #333333;
            margin-left: 20px;

            .content-title {
                font-size: 16px;
            }

            .shop-message {
                font-size: 13px;

                .shop-message-detail {
                    color: #b3b3b3;
                    margin-right: 10px;
                    .icon-renzhengyonghu{
                     color:#ffcb20;
                     font-size:13px;
                    }

                    .shopstar {
                        padding-top: 4px;
                    }

                }
            }
        }
    }

}
</style>