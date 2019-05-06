<template>
    <section class="msite">
    	<!-- 头部导航条 -->
        <HeadTop class="home_title" :title="address.name">
            <span class="header_position" slot="search">
                <span class="position_moji"><i class="iconfont icon-dingwei"></i></span>
            </span>

        </HeadTop>
        <!-- 轮播图 -->
        <nav class="home_nav">
            <!-- swiper的容器div -->
            <div class="swiper-container">
                <!-- swiper的包裹层div -->
                <div class="swiper-wrapper">
                    <!-- swiper的轮播div -->
                    <div class="swiper-slide"><img class="img1" src="./imgs/swiper1.jpg" alt=""></div>
                    <div class="swiper-slide"><img class="img1" src="./imgs/swiper2.jpg" alt=""></div>
                </div>
                <!-- swiper轮播图圆点 -->
               <div class="swiper-pagination"></div>
               </div>
            </div>
        </nav>
        <!-- 九宫格icon -->
        <div class="icon_container">
        	<Icons></Icons>
        </div>
        <!-- 精选机构推荐 -->
        <div class="msite_shop_list">
           <div class="shop_header">
            <span class="circle1"></span>
             <span class="circle"></span>
            <span class="shop_header_title">精选机构</span>
            <span class="circle"></span>
            <span class="circle1"></span>
           </div>
                <Shoplist></Shoplist>
         </div>
    </section>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import HeadTop from '../../components/HeadTop/HeadTop.vue'
import Shoplist from '../../components/Shoplist/Shoplist.vue'
import Icons from '../../components/Icons/Icons.vue'
import {mapState} from 'vuex'

export default {
    components: {
        HeadTop,
        Shoplist,
        Icons
       
    },
    mounted(){
    	new Swiper('.swiper-container',{
    		loop:true,//循环轮播
    		autoplay:true,
    		pagination:{
    			el:'.swiper-pagination'
    		}
    	})
      
    },
    computed:{
      ...mapState(['address'])
    }
    /*,
    methods:{
      getPosition(){
      this.$axios.get('/position/40.10038,116.36867').then(res=>{
        console.log(res);
      })
      }
    },
    created(){
      this.getPosition();
    }*/
};
</script>
<style lang="scss" scoped>
html{
  background-color: #FFF;
}
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

  .icon-dingwei  {
    font-size: 22px;
    color: #fff;
  }
}
.home_nav {
  margin-top: 45px;
  height: 160px;
  background: #fff;
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
      .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        img{
          width: 100%;
        }
      }
    }
  }
}
.icon_container {
  background-color: #FFF;
}
.shop_header{
  text-align:center;
  font-size:14px;
  color:#258cff;
  margin-top:4px;
  margin-bottom:4px;


  .circle{
    display:inline-block;
    width:8px;
    height:8px;
    background-color:#258cff;
    border-radius:50%;
    margin-right:6px;
    margin-left:6px;
  }
  .circle1{
    display:inline-block;
    width:6px;
    height:6px;
    background-color:#258cff;
    border-radius:50%;
    margin-right:2px;
    margin-left:2px;
      vertical-align:middle;
  }
}

        
</style>