import axios, { AxiosInstance } from 'axios'
import { HttpError } from './HttpError'

// @ts-ignore
const isDev = import.meta.env.MODE === 'development'
const baseUrl = isDev ? '/api' : '/'
export const request: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

request.interceptors.request.use(
  (req) => {
    req.headers.authorization = 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
    return req
  },
  (err) => {
    // err.message
    throw err
  }
)

request.interceptors.response.use(
  (res) => {
    const { code } = res.data
    if (code === 401) {
      // window.location.replace("/");
    }
    if (code != '200') {
      // Message.error(res.data.message)
      throw new HttpError(
        res.data?.message || '网络错误！',
        Number(res.data.status)
      )
    }
    return res.data
  },
  (err) => {
    const { response } = err
    const { code } = response.data
    if (code === 401) {
      // window.location.replace("/");
    }
    // err.message
    throw err
  }
)

export const http = {
  post<T>(url: string, data?: any, config?: any) {
    return request.post(url, data, config) as Promise<T> //使用范型,代码提示更简便
  },
  get<T>(url: string, config?: any) {
    return request.get(url, config) as Promise<T> //使用范型,代码提示更简便
  },
}
