import axios from "axios";
import router from "./router/router"


//请求拦截
axios.interceptors.request.use(config=>{
   
    return config;


},error=>{
	return Promise.reject(error)
});
//响应拦截
axios.interceptors.response.use(response=>{
   
    return response;

},error=>{

	return Promise.reject(error);
});

export default axios