<template>
    <div class="shop_container">
        <div class="shop_list">
            <div class="shop-item" v-for="(shop,index) in shops" :key="index" v-if="shops.length>0">
                <router-link :to="'/shop/'+shop.id">
                <img class="img3" :src="shop.image_path" alt="" >
                <h1 class="title">{{shop.name}}
                </h1>
                <div class="info">
                    <p class="subtitle">
                        <span class="red">预约礼</span>
                        <span class="gift">免费赠送2次听课</span>
                    </p>
                    <p class="commertion">
                        <span><i class="iconfont icon-jiaoyin"></i>{{shop.float_delivery_fee}}人去过</span>
                        <span><i class="iconfont icon-ai-eye"></i>{{shop.float_minimum_order_amount}}人浏览</span>
                    </p>
                </div>
               </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'

    export default{
    computed:{
      ...mapState(['shops'])
    },
    data(){
        return {
            
        }
    },
    components:{

    }
    };

</script>
<style lang="scss" scoped>
.shop_container{
    background-color:#fff;
.shop_list {
    display: flex;
    flex-wrap: wrap;
    padding: 14px;
    justify-content: space-between;

    .shop-item {
        width: 49%;
        margin: 2px 0px;
        .img3 {
        width: 100%;
    }
    }

    

    .title {
        font-size: 14px;
        color:#404040;
    }

    .info {
        .subtitle {
            margin-bottom: 4px;

            .red {
                color: red;
                font-size: 12px;
                border: 1px solid red;
                border-radius: 5px;
                padding: 0.5px;
            }

            .gift {
                color: #666666;
                margin-left: 6px;
            }
        }

        .commertion {
            display: flex;
            justify-content: space-between;

            span {
                font-size: 12px;

                .iconfont {
                    font-size: 12px;
                    margin-right: 4px;
                }
            }
        }

    }
}
}
</style>