import http from 'http'
import https from 'https'
import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
// import router from '@/router'
import store from '@/store/store'
import { saBs } from '@/utils/base'
// import { debug } from 'util';
import { getLocalStorage, delLocalStorage, clearCache } from 'sa-common'
import jsrsasign from 'jsrsasign'
const key = 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMVjKFqTmyUzFYyuUE78Rq7k/sS/F0HBetA91UEo7bDsyJndv3yJEjejLYQuqitzRQUihTIfe2KvNxzTX3Wbpm3rX84txRZSfPE4Z9o20b0yY85/XkRTsrd8wPgtMquVZpDOeztBmZ0XP+OREYG9ncc2g+249RPuxvWAKNQlp55/AgMBAAECgYEAkWr93c0E7aD27U+2hppBELRQJW6Kmb0K18PWCk0237NyDjlZy0vIigjDjbA7Wgtv+9p0unqLEib3uVrX5vMm5mSXk2cWX/474I8UkSvKSje9uCtX57nDJ1WMAmTeeD/A5bTeznvNuAodsm1SxSl+6g+IPDlvSG2Qw3rkISg4L6ECQQDp+XQXTSDUz35lfyunEkqML3BqvlU13WLoOIqxQqx25O8I49su7mHO5fYAd7zQvBU5EAoOMguplBX9vOuBF6iZAkEA1/f+Bxqigi9hLwie8zLNVm2hrYHrA7BblgKqHYBDVft6nHRJ8vCFdgaTJYhaszGG/KqZOeQ+89in/KDYcrb21wJBAN+IJ1UrprYqFkO5n2bansYXfHs+pAH2JExf2IFJhaOBTK1do0XPETqtkL0ZqBZz2oLNxA2T2niEtg3Ys9Z9V+ECQErsbeRpCRfA+CYpB3u3lCT3w6898xpEhIF2Sy4Q4UtjAxZkAYOWjbZ0cXgD5fNkqz/cr2u2E2DlOOIbqvuhHeECQH6CBr20hqyvF4CxbrHS48kXakpIHatGzkVCKeFolwwTGvMF72aPHPvDtOpOXNuQu+49VepY7ZV7V+j73TyaRdE='

let config = {
  // 自定义的请求头 .
  headers: {
    post: {
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      // 'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      // 'Content-Type': 'text/plain;charset=UTF-8',
      'Content-Type': 'application/json',
      'Cache-Control': 'max-age=1000'
      // 'GL_CLIENT_ID': 'test',
      // 'GL_CLIENT_VER': '6.2.0',
      // 'GL_DEVICE_ID': 'test',
      // 'GL_REQ_SIGN': 'wOFaUM5n2bqi0TDZeNJQS%2BX6XF65k1Tv3t6sTAnIZJfKQkgQfqlQhyRqX4FT8fFt8Sr8naWVCLKUT5UHAwXsdKPCP6PFTt03blUqTE5%2B0sr1lfQZWKMq9YENo4DtFP7h%2BfhN%2F0daBkygT800h2CUKCgZ3zjtpBaaJlXhB2WEOx8%3D',
      // 'GL_TIMESTAMP': '1536668162'
    }
    // 'X-Requested-With': 'XMLHttpRequest'
  },
  // 超时设置
  timeout: 30000,
  crossDomain: true,
  // 跨域是否带Token
  withCredentials: true,
  // 响应的数据格式 json / blob /document /arraybuffer / text / stream
  responseType: 'json',
  // 用于node.js
  httpAgent: new http.Agent({
    keepAlive: true
  }),
  httpsAgent: new https.Agent({
    keepAlive: true
  })
}

function handleResponse(response) {
  store.dispatch('SET_RESPONSE_STATUS', { response: null })
  if (response.status >= 400) {
    if (response.status === 401) {
      store.dispatch('SET_RESPONSE_STATUS', { response: { type: '401', message: '身份验证错误' } })
    } else if (response.status === 403) {
      store.dispatch('SET_RESPONSE_STATUS', { response: { type: '403', message: '服务器拒绝请求' } })
    } else {
      store.dispatch('SET_RESPONSE_STATUS', { response: { type: '500', message: '服务器发生错误' } })
    }
  } else {
    let res = response.data
    if (res.status !== 1 && res.result !== '000000') {
      if (res.result === '000001' || res.code === '000001') {
        if (Vue.client.WEIXIN) {
          store.dispatch('SET_TO_WEIXINAUTH', true)
        } else {
          Vue.$vux.confirm.show({
            title: '温馨提示',
            content: res.description || res.message,
            onShow() {},
            onHide() {},
            onCancel() {
              delLocalStorage('userinfo')
              delLocalStorage('username')

              clearCache('LoggedOn')
              clearCache('Token')
              clearCache('information')
              if (Vue.client.GLSH_APP) {
                Vue.cordova('loginout', [])
              }
            },
            onConfirm() {
              store.dispatch('SET_LOGIN_STATUS', { login: true })
            }
          })
          // delLocalStorage('userinfo')
        }
      } else if (res.description || res.message) {
        store.dispatch('SET_RESPONSE_STATUS', { response: { type: '000', message: res.description || res.message } })
      }
    }
  }
}

// 判断是路由跳转还是 axios 请求
if (process.server) {
  config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 8888}`
}

const service = axios.create(config)

service.defaults.retry = 3 // 请求超时次数上限
service.defaults.retryDelay = 1000 // 重新请求延时

// POST 传参序列化
service.interceptors.request.use(
  (config) => {
    let time = new Date().getTime()
    config.url = config.url.indexOf('?') === -1 ? config.url + '?t=' + time : config.url + '&t=' + time
    store.commit('SET_LOADING_STATUS', { loading: true })
    config.headers['GL_CLIENT_ID'] = store.state.device.ClientId
    config.headers['GL_DEVICE_ID'] = store.state.device.DeviceId
    config.headers['GL_CLIENT_VER'] = store.state.device.deviceVersion
    config.headers['GL_CLIENT_APP_VER'] = store.state.device.deviceAppVersion || '6.3.1'
    config.headers['GL_TOKEN'] = getLocalStorage('userinfo') ? getLocalStorage('userinfo').token : ''
    return config
  },
  (error) => {
    store.commit('SET_LOADING_STATUS', { loading: false })
    return Promise.reject(error)
  }
)
// 返回结果处理
service.interceptors.response.use(
  (response) => {
    store.commit('SET_LOADING_STATUS', { loading: false })
    handleResponse(response)
    return response
  },
  (error) => {
    store.commit('SET_LOADING_STATUS', { loading: false })
    handleResponse(error.response)
    return Promise.reject(error)
  }
)
var rsa = new jsrsasign.RSAKey()
var k = `-----BEGIN PRIVATE KEY-----
${key}
-----END PRIVATE KEY-----`
function getSign(text, time) {
  let token = getLocalStorage('userinfo') ? getLocalStorage('userinfo').token : ''
  let newText = text || ''
  let str = token + store.state.device.DeviceId.toString() + store.state.device.ClientId.toString() + store.state.device.deviceVersion.toString() + time.toString() + newText
  rsa = jsrsasign.KEYUTIL.getKey(k)
  var sig = new jsrsasign.KJUR.crypto.Signature({ alg: 'MD5withRSA' })
  sig.init(rsa)
  sig.updateString(str)
  var sign = jsrsasign.hextob64(sig.sign())
  sign = encodeURIComponent(sign)
  return sign
}
window.getSign = getSign
let token = getLocalStorage('userinfo') ? getLocalStorage('userinfo').token : null
export default {
  async get(url, { params = {}, headers = {}, text = '', isLogin = false } = {}) {
    // if(isLogin && !token){
    //   return
    // }
    let time = parseInt(new Date().getTime() / 1000)
    headers['GL_TIMESTAMP'] = time
    headers['GL_REQ_SIGN'] = getSign(text, time)

    return service({
      method: 'get',
      url: url,
      params: params,
      headers: headers
    })
  },
  async post(url, data, { headers = {}, text = '', isLogin = false } = {}) {
    // if(isLogin && !token){
    //   return
    // }
    let time = parseInt(new Date().getTime() / 1000)
    headers['GL_TIMESTAMP'] = time
    headers['GL_REQ_SIGN'] = getSign(text, time)

    return service({
      method: 'post',
      url: url,
      data: data,
      headers: headers
    })
  },
  async put(url, data, { headers = {}, text = '', isLogin = false } = {}) {
    // if(isLogin && !token){
    //   return
    // }
    let time = parseInt(new Date().getTime() / 1000)
    headers['GL_TIMESTAMP'] = time
    headers['GL_REQ_SIGN'] = getSign(text, time)

    return service({
      method: 'put',
      url: url,
      data: data,
      headers: headers
    })
  },
  async delete(url, { params = {}, headers = {}, text = '', isLogin = false } = {}) {
    // if(isLogin && !token){
    //   return
    // }
    let time = parseInt(new Date().getTime() / 1000)
    headers['GL_TIMESTAMP'] = time
    headers['GL_REQ_SIGN'] = getSign(text, time)

    return service({
      method: 'delete',
      url: url,
      params: params,
      headers: headers
    })
  }
}
