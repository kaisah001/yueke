<template>
    <div class="shopgoods">
        <div class="shop-good">
        <!-- 标题 -->
        <section class="shopgoods_box" v-for="(good,index) in goods" :key="index">
            <div class="shopgoods_title"><span class="shopgoods_title2"><i class="iconfont icon-thin-_book_writi"></i></span>{{good.name}}</div>
        
            <div class="shopgoods_item" v-for="(item,index) in good.course" :key="index">
                <router-link class="left_item" :to="'/course/'+item.id">
                    <div class="left_contentimg"><img :src="item.image"></div>
                    <div class="center_font">
                        <p class="center_title">
                            {{item.name}}
                            <span class="teacher_tag" v-if="good.name=='名师推荐'">{{item.tag}}</span>
                        </p>
                        <p class="center_price">
                            <span class="center_price_now" v-if="good.name=='优惠课程'">{{item.price}}</span>
                            <span class="center_teach_year" v-if="good.name=='名师推荐'">{{item.year}}人学习过</span>
                            <span class="center_price_old">{{item.oldPrice}}</span>
                        </p>
                        <p class="center_course">
                            <span class="coursetype" v-if="good.name=='优惠课程'">{{item.description}} |</span>
                            <span class="coursetype2"> {{item.type}} |</span>
                            <span class="courseperson"> {{item.info}}</span>
                        </p>
                    </div>
                </router-link>
                <div class="rightarrow">
                    <span class="iconfont icon-gengduo"></span>
                </div>
            </div>

        </section>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    mounted(){
        this.$store.dispatch('getShopGoods'); 
    },
    computed:{
        ...mapState(['goods'])
    },
    components:{
        
    },
    methods:{
        a(){
            console.log('ok')
        }
    }


};
</script>
<style lang="scss" scoped>
.shopgoods{
margin-top:10px;
overflow: hidden;
.shop-good{ 
.shopgoods_box{
   background-color:white;
.shopgoods_title{
    color:#289dfa;
    border-bottom:1px solid #ebebeb;
    padding:14px 0px;
    margin:0 20px;
    .shopgoods_title2{
        font-size:16px;
        .icon-thin-_book_writi{
            padding-right:8px;
        }
    }
}
.shopgoods_item {
    display: flex;
    justify-content: space-between;
    padding-bottom:10px;
    border-bottom:1px solid #ebebeb;
    .left_item {
         display:flex;
         justify-content: space-between;
         padding:10px 20px;
        .left_contentimg{
         width:100px;
         height:80px;
         margin-right:10px;
         img{

            height:80px;
            overflow:hidden;
            border-radius:2px;
         }
        }
        .center_font{
            display:flex;
            flex-wrap: wrap;
            flex-direction:column;
            justify-content:space-around;
            p{
                margin:0px;
            }
            .center_title{
                color:#323232;
                .teacher_tag{
                    background-color:#f6a72e;
                    color:#fff;
                    font-size:12px;
                    border-radius:2px;
                    padding:1px;
                    margin-left:6px;
                }
            }
            .center_price_now{
                color:#fe6044;
                font-size:16px;
            }
            .center_price_old{
                color:#b3b3b3;
                text-decoration:line-through;
                padding-left:6px;
            }
            .center_teach_year{
                color:#b3b3b3;
            }
            .center_course{
                font-size:13px;
                color:#b3b3b3;
            }
        }

    }
    .rightarrow{
        display:flex;
        flex-direction:column;
        justify-content:center;
        padding-right:15px;
      .iconfont{
        color:#b3b3b3;
       
      }
    }
}
}
}
}
</style>