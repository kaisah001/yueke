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
    RECEIVE_SEARCH_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopRatings,
  reqShopGoods,
  reqShopInfo,
  reqSearchShop,
  reqCourse,
  reqCategories

} from '../api'

import axios from 'axios'
 
export default{
  async getAddress({commit, state}) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
},
 // 异步获取商家列表
  async getShops({commit, state}) {
    // 发送异步ajax请求
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    // 提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  //同步记录用户信息
  recordUser({commit},userInfo){
      commit(RECEIVE_USER_INFO,{userInfo})
  },

  //异步获取用户信息
  async getUserInfo({commit}){
      const result = await reqUserInfo()
      if(result.code===0){
        const userInfo = result.data
        commit(RECEIVE_USER_INFO,{userInfo})
      }
  },
  //异步登出
  async logout({commit}){
    const result = await reqLogout()
      if(result.code===0){
        commit(RESET_USER_INFO)
      }
  },
    // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },

  // 异步获取商家评价列表
  async getShopRatings({commit}, callback) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      // 数据更新了, 通知一下组件
      callback && callback()
    }
  },

  // 异步获取商家商品列表
  async getShopGoods({commit},callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 数据更新了, 通知一下组件
     /* callback && callback()*/
     callback && callback()
    }
  },

  // 异步获取课程信息
  async getCourse({commit},callback) {
    const result = await reqCourse()
    if (result.code === 0) {
      const course = result.data
      commit(RECEIVE_COURSE, {course})
      // 数据更新了, 通知一下组件
     /* callback && callback()*/
     callback && callback()
    }
  },
    // 异步获取商家分类信息
  async getCategories({commit},callback) {
    const result = await reqCategories()
    if (result.code === 0) {
      const categories = result.data
      commit(RECEIVE_CATEGORIES, {categories})
      // 数据更新了, 通知一下组件
     /* callback && callback()*/
     callback && callback()
    }
  },
  //搜索
  async searchShops({commit,state},keyword) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShop(geohash,keyword)
    if (result.code === 0) {
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS, {searchShops})
    }
  },
  clearCart({commit}){
    commit(CLEAR_CART)
  }  

  
}