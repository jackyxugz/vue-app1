import axios from 'axios'

axios.defaults.baseURL = `http://1.117.165.21:7002`;
// 添加请求拦截器
axios.interceptors.request.use(config=>{
    return config
})
// 添加响应拦截器
axios.interceptors.response.use(response=>{
    return response
},err=>{
    // 对响应错误做点什么
   return Promise.reject(err);
})

export default axios
