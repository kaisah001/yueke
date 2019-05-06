<template>
  <div id="app">
    <div>
         <router-view></router-view>
         <FooterGuide v-show="$route.meta.FooterShow"></FooterGuide>

    </div>
   
  </div>
</template>
<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
  import {mapActions} from 'vuex'

   export default{
    components:{
      FooterGuide
    },
    mounted(){
      this.getAddress()
      this.getShops()
      this.getUserInfo()
  /*    this.$store.dispatch('getCategories')*/
    },
    methods:{
      ...mapActions(['getAddress','getShops','getUserInfo'])
    }
   };

</script>

<style lang="stylus" rel="stylesheet/stylus">
html  
  #app
    widhth 100%
    height 100%
    padding-bottom 60px
/*    background-color #f5f5f5*/
    

</style>
