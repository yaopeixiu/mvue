import axios from 'axios'

// const host = process.env.NODE_ENV === "development"? "模拟地址" : "真实地址"
// axios.defaults.withCredentials = true //开启后服务器才能拿到cookie
// axios.defaults.crossDomain = true;//配置axios跨域
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'//配置默认请求头

// 创建axios实例
// const service = axios.create({
//   baseURL: process.env.BASE_API, // api的base_url
//   timeout: 5000 // 请求超时时间
// })

axios.defaults.baseURL = process.env.BASE_API

export const requestLogin = params => {
  return axios.post('/admin/auth/login', params).then(
    res => res.data
  )
}
