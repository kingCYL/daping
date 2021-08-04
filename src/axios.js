import axios from 'axios'
import Vue from 'vue'

//console.log('NODE_ENV---', process.env.NODE_ENV)
//console.log('VUE_APP_BASE_API---', process.env.VUE_APP_API_URL)

export class Http {
  constructor() {
    this.timeout = 32000 // 超时时间
    // this.baseURL = process.env.VUE_APP_BASE_API
  }

  // 合并参数
  mergeOptions(options) {
    return {
      timeout: this.timeout,
      ...options,
    }
  }

  // 封装公共的拦截器 ， 每个实例有单独自己拦截器
  setInterceptor(instance, url, headers) {
    // 拦截请求
    instance.interceptors.request.use((config) => {
      // 当页面快速切换时 删除不必要的请求
      // let Cancel = axios.CancelToken;
      // config.cancelToken = new Cancel(function(c) {
      //   // 到路由钩子中,切换路由时，统一触发取消
      //   store.commit(AJAX_TOKEN, c);
      // });

      // config.headers = {
      //   'X-Requested-With': 'XMLHttpRequest',
      //   'Content-Type': 'application/json;charset=utf-8',
      //   'Access-Control-Allow-Origin': '*',
      //   ...headers,
      // }
      return config
    })

    // 拦截返回
    instance.interceptors.response.use(
      (res) => {
         if (res.status === 200) {
          return Promise.resolve(res.data)
        } else {
          // 401 403 .... switch-case 去判断每个状态码代表的含义
          return Promise.reject(res)
        }
      },
      (err) => {
        Vue &&
          Vue.$message &&
          Vue.$message({
            showClose: true,
            message: `接口请求失败，请稍后重试！错误：${err}`,
            type: 'error',
          })
        return Promise.reject(err)
      }
    )
  }

  request(options) {
    // 用户的参数 + 默认参数 = 总共的参数
    const opts = this.mergeOptions(options)
    const axiosInstance = axios.create()
    // 添加拦截器
    this.setInterceptor(axiosInstance, opts.url, opts.headers)
    // console.log('【请求参数】', opts)
    // 当调用axios.request 时 内部会创建一个 axios实例 并且给这个实例传入配置属性
    return axiosInstance(opts)
  }

  // 这些方法只是对request方法 一个简写而已
  get(url, config = {}) {
    return this.request({
      url,
      method: 'get',
      ...config,
    })
  }

  // 如有需要，传入不一样的headers进行覆盖
  post(url, data = {}, headers = {}) {
    return this.request({
      url,
      method: 'post',
      data: JSON.stringify(data),
      headers,
    })
  }

  put(url, data = {}) {
    return this.request({
      url,
      method: 'put',
      data: JSON.stringify(data),
    })
  }

  delete(url, data = {}, params = {}) {
    return this.request({
      url,
      method: 'delete',
      data: JSON.stringify(data),
      params,
    })
  }
}
export default new Http()
