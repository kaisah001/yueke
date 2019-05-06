/*需管理的状态*/
//每次进入网站先拿本地
var orderCar = JSON.parse(localStorage.getItem('orderCar')||'[]')
export default{

    latitude:30.59,
    longitude:104.06,
    address:{},//地址相关
    categorys:[],//课程分类
    shops:[],//商家数组
    userInfo:{},//用户信息
    goods:[],
    ratings:[],
    info:{},
    course:{},
    categories:[],
    orderCar:orderCar,
    searchShops:[],
    cartCompanys:[]
    
}