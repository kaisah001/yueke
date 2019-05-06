<template>
    <section class="company" >
        <!-- 头部 -->
        <div class="company_show" :class="{ifshowHead:showSearch}">
        <HeadTop title="机构" class="Headtop" >
            <span class="header_search" slot="position">
                <i class="iconfont icon-xiazai17" @click="searchCpn"></i>
            </span>
        </HeadTop>
        <div class="company_item">
            <!-- 机构左侧分类 -->
            <div class="left_roller">
                <div class="menu-wrapper">
                    <ul>
                        <!--current-->
                        <li class="menu-item" v-for="(category,index) in categories" :key="index" :class="{current: index===currentIndex}" @click="clickMenuItem(index)">
                            <span class="text bottom-border-1px">
                                {{category.cata}}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 右侧机构列表 -->
            <div class="shopgoods_item">
                <ul ref="companyUl">
                    <li class="good-list-hook" v-for="(category, index) in categories" :key="index">
                        <h1 class="catatitle">{{category.cata}}</h1>
                        <ul>
                            <li>
                                <router-link class="each_item" v-for="(company,index) in category.company" :to="'/shop/'+company.id">
                                    <div class="left_contentimg"><img :src="company.img"></div>
                                    <div class="center_font">
                                        <h1 class="center_title">
                                            {{company.name}}
                                        </h1>
                                        <div class="center_ratingAndSell">
                                            <span class="center_rating">
                                                <Star class="star" :score="company.rating" :size="24"></Star>
                                            </span>
                                            <span class="center_Sell">{{company.count}}人购买过</span>
                                        </div>
                                        <div class="center_price_item">
                                            <span class="center_price">¥{{company.price}}</span>
                                            <span>起</span>
                                        </div>
                                        <div class="center_bottom">
                                            <span class="iconfont icon-jiaoyin"></span>
                                            <span class="center_bottom_person1">{{company.have_gone}}人去过</span>
                                            <span class="iconfont icon-ai-eye"></span>
                                            <span class="center_bottom_person2">{{company.have_watched}}人浏览过</span>
                                        </div>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        <!-- 搜索 -->
        <div class="search_component">
           <Search :showSearch='showSearch' @close="closeSearch" @func="getChange" ></Search>
        </div>
    </section>
</template>
<script>
import HeadTop from '../../components/HeadTop/HeadTop.vue'
import Search from '../../components/Search/Search.vue'
import BScroll from 'better-scroll'
import Star from '../../components/Star/Star.vue'
import { mapState } from 'vuex'
export default {
    data() {
        return {
            scrollY: 0,
            tops: [],
            companyScroll: '',
            rollerbar: '',
            showSearch:false
        }
    },
    components: {
        HeadTop,
        Star,
        Search
    },
    mounted() {
        this.$store.dispatch('getCategories', () => {
            this.$nextTick(() => {
                /*                if(!this.companyScroll){
                                    this.rollerbar = new BScroll('.menu-wrapper', {
                                click: true
                            })
                                    this.companyScroll = new BScroll('.shopgoods_item', {
                                click: true,
                                probeType: 2
                            })
                                }else{
                                    this.rollerbar.refresh();
                                    this.companyScroll.refresh();
                                } */
                this._initScroll()
                this._initTops()
            })
        })
    },
    computed: {
        ...mapState(['categories']),
        //计算得到当前分类的下标
        currentIndex() {
            const { scrollY, tops } = this
            const index = tops.findIndex((top, index) => {
                return scrollY >= top && scrollY < tops[index + 1]
            })
            return index
        }
    },
    methods: {
        //初始化滚动条
        _initScroll() {
            //列表显示之后创建
            this.rollerbar = new BScroll('.menu-wrapper', {
                click: true
            })
            this.companyScroll = new BScroll('.shopgoods_item', {
                click: true,
                probeType: 2
            })

            //给右侧列表绑定scroll监听
            this.companyScroll.on('scroll', ({ x, y }) => {
                console.log(x, y)
                this.scrollY = Math.abs(y)
            })
            //给右侧列表绑定scroll结束的监听
            this.companyScroll.on('scrollEnd', ({ x, y }) => {
                console.log('scrollEnd', x, y)
                this.scrollY = Math.abs(y)
            })
        },
        //初始化Tops
        _initTops() {
            //1.初始化tops
            const tops = []
            let top = 0
            tops.push(top)
            //2.收集
            //找到所有分类的li
            const lis = this.$refs.companyUl.getElementsByClassName('good-list-hook')
            Array.prototype.slice.call(lis).forEach(li => {
                top += li.clientHeight
                tops.push(top)
            })

            //3.更新状态
            this.tops = tops
            console.log(tops)
        },
        clickMenuItem(index) {
            console.log(index)
            //使右侧列表滑动到对应的位置
            const scrollY = this.tops[index]
            //立即更新scrollY（让点击的分类项成为当前分类）
            this.scrollY = scrollY
            //平滑滑动右侧列表
            this.companyScroll.scrollTo(0, -scrollY, 300)
        },
        searchCpn(){
            console.log(this.showSearch)
            this.showSearch = !this.showSearch
            console.log(this.showSearch)
        },
        getChange(ifchange){
            this.changeHead = ifchange
        },
        closeSearch(){
            this.showSearch = false
            console.log('showSearch现在是：'+this.showSearch)
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../common/stylus/mixins.scss";

body {
    line-height: normal !important;
    .company_show{
    &.ifshowHead{
            display:none;
        }
    .Headtop{
        
    .header_search {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        width: 20%;
        height: 50%;

        .iconfont {
            font-size: 22px;
            color: #FFF;
        }

    }
    }
    .company_item {
        /* margin-top: 45px; */
        position: absolute;
        top: 45px;
        display: flex;

        .left_roller {
            height: 600px;
            background: #f3f5f7;

            .menu-wrapper {
                width: 84px;
                height: 100px;
                float: left;

                ul {
                    padding-inline-start: 0px;
                    margin-block-start: 0px;

                    .menu-item {
                        display: table;
                        height: 60px;
                        display: block;
                        padding: 0 22px;
                        line-height: 60px;

                        &.current {
                            background: #fff;
                            color: #289dfa;
                        }

                        .text {
                            display: table-cell;
                            vertical-align: middle;
                            @include bottom-border-1px(rgba(7, 17, 27, 0.1));
                            font-size: 12px;
                        }
                    }
                }
            }
        }



        .shopgoods_item {

            height: 80px;
            padding-bottom: 10px;

            ul {
                background-color: #fff;
                margin: 0;
                padding: 0;

                list-style-type: none;

                .catatitle {
                    border-left: 2px solid #d9dde1;
                    font-size: 13px;
                    color: rgb(147, 153, 159);
                    background: #f3f5f7;
                    margin: 0;
                    height: 20px;
                    line-height: 20px;
                    padding-left: 8px;


                }

                .each_item {
                    margin-left: 8px;
                    display: flex;
                    padding: 8px 0px;
                    padding-right: 24px;

                    border-bottom: 1px solid #ebebeb;

                    .left_contentimg {
                        width: 100px;
                        height: 66px;
                        margin-right: 8px;

                        img {
                            width: 100%;
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

    .search_component {        

    }
    }
}
</style>