import axios from 'axios'

let baseUrl = 'http://localhost:3001'

if (process.env.NODE_ENV === 'production') {
    baseUrl = "http://localhost:3001"
}

// axios config
axios.defaults.baseURL = baseUrl
axios.defaults.timeout = 5000
axios.defaults.withCredentials = true

// 请求拦截器
axios.interceptors.request.use(config => {
    // if (localStorage && localStorage.getItem('token')) {
    //     const token = localStorage.getItem('token')
    //     token && (config.headers.Authorization = token)
    // }
    return config
}, error => {
    console.log(error)
    return Promise.error(error)
})
// 响应拦截器
axios.interceptors.response.use(response => {
    return response.data
    // if (response.status === 200) {}
    //  else {
    //     return Promise.reject(response)
    // }
})

// 2、封装请求方式
// @param url 接口地址
// @param data 携带参数
// @param file 上传文件对象
// @param auth 是否携带token
// get请求
export function get(url, data) {
    return axios.get(url, data)
}

// post请求
export function post(url, data) {
    return axios.post(url, data)
}

// put请求
export function put(url, data) {
    return axios.put(url, data)
}

// delete 请求
export function del(url, data) {
    return axios.delete(url, data)
}

// upload 请求
export function uploader(url, file) {
    let params = new FormData()
    params.append('file', file)
    return axios.post(url, params)
}