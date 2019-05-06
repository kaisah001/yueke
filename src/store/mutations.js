import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    RECEIVE_COURSE,
    RECEIVE_CATEGORIES,
    ADD_TO_ORDER,
    REMOVE_FORM_CAR,
    RECEIVE_SEARCH_SHOPS,
    CLEAR_CART
} from './mutation-types'

export default{
    [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
    },
    [RECEIVE_CATEGORYS] (state,{categorys}){
        state.categorys = categorys
    },
    [RECEIVE_SHOPS] (state,{shops}){
        state.shops = shops
    },
    [RECEIVE_USER_INFO](state,{userInfo}){
        state.userInfo = userInfo
    },
    [RESET_USER_INFO](state){
        state.userInfo = {}
    },
    [RECEIVE_INFO](state,{info}){
        state.info = info
    },
    [RECEIVE_RATINGS](state,{ratings}){
        state.ratings = ratings
    },
    [RECEIVE_GOODS](state,{goods}){
        state.goods = goods
    },
    [RECEIVE_COURSE](state,{course}){
        state.course = course
    },
    [RECEIVE_CATEGORIES](state,{categories}){
        state.categories = categories
    },
    [ADD_TO_ORDER](state,order){
        var flag = false
     state.orderCar.some(item=>{
        if(item.id == order.id){
            item.count += parseInt(order.count)
            flag = true
            return true
        }
     })
        if(!flag){
            state.orderCar.push(order)
        }
        //存储在本地
        localStorage.setItem('orderCar',JSON.stringify(state.orderCar))
    },
    [REMOVE_FORM_CAR](state,id){
        state.orderCar.some((item,i)=>{
            if(item.id == id){
                state.orderCar.splice(i,1)
                return true
            }
        })
        //存储在本地
        localStorage.setItem('orderCar',JSON.stringify(state.orderCar))
    },
    [RECEIVE_SEARCH_SHOPS](state,{searchShops}){
        state.searchShops = searchShops
    },
    [CLEAR_CART] (state) {
    // 清除food中的count
    state.cartCompanys.forEach(food => { food.count = 0 })
    // 移除购物车中所有购物项
    state.cartFoods = []
  }
}