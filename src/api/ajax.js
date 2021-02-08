
//?能发送异步请求的 ajax (请求的函数模块)
//?封装 axios 库
//?函数的返回值是 promise 对象 

import axios from 'axios'


export default function ajax(url, params={}, type="GET") {
    if (type === "GET") {
        return axios.get(url,{
            params
        })
    } else  {
        return axios.post(url,params)
    }

}