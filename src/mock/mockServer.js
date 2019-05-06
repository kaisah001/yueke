/*使用mockjs提供mock数据接口*/
import Mock from 'mockjs'
import data from './data.json'
//返回goods的接口
Mock.mock('/goods',{code:0,data:data.goods})
//返回rating接口
Mock.mock('/rating',{code:0,data:data.ratings})
//返回info接口
Mock.mock('/info',{code:0,data:data.info})
//返回course接口
Mock.mock('/course',{code:0,data:data.course})
//返回categories接口
Mock.mock('/categories',{code:0,data:data.categories})



 