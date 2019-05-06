export default{
    getAllCount(state){
            var c =0;
            state.orderCar.forEach(item=>{
                c += item.count
            })
            return c
        },
    getAllPrice(state){
            var p = 0;
            state.orderCar.forEach(item=>{
                p +=item.price*item.count
            })
            return p
    },
    positiveSize(state){
        return state.ratings.reduce((preTotal,rating)=>preTotal+(rating.rateType===0?1:0),0)
    }
  }
