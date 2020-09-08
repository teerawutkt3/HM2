import axios from 'axios'
import Utils from './common/utils/Utils'
import TokenUtils from './common/utils/TokenUtils'
const BASE_URL = process.env.VUE_APP_URL
const CONTENT_TYPE_JSON = 'application/json'
const CONTENT_TYPE_FORM_DATE = 'multipart/form-data'

// const isDebug = true
const isDebug = false

class HttpRequest {
  constructor (url = BASE_URL) {
    this.axiosInstance = axios.create({
      baseURL: url,
      headers: this.getHeader(),
      timeout: 120000
    })

    this.axiosInstance.interceptors.request.use(function (config) {
      // Do something before request is sent
      return config
    }, function (error) {
      // Do something with request error
      return Promise.reject(error)
    })

    // Add a response interceptor
    this.axiosInstance.interceptors.response.use(function (response) {
      // Do something with response data
      return response
    }, function (error) {
      // Do something with response error
      return Promise.reject(error)
    })
  }

  getBaseUrl () {
    return BASE_URL
  }

  getIsDebug () {
    return isDebug
  }

  getHeader () {
    let token = this.getToken()
    if (Utils.isBlank(token)) { token = '' }
    return {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': CONTENT_TYPE_JSON,
      Authorization: 'Bearer ' + token
    }
  }

  getHeaderFormData () {
    let token = this.getToken()
    if (Utils.isBlank(token)) { token = '' }
    return {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': CONTENT_TYPE_FORM_DATE,
      Authorization: 'Bearer ' + token
    }
  }

  getToken () {
    if (process.browser) {
      return localStorage.getItem(TokenUtils.TOKEN_KEY)
    }
    return null
  }

  get (pathName, data) {
    return this.axiosInstance.get(BASE_URL + pathName, {
      params: data,
      headers: this.getHeader()
    })
  }

  post (pathName, data) {
    return this.axiosInstance.post(BASE_URL + pathName, data, {
      headers: this.getHeader()
    })
  }

  put (pathName, data) {
    return this.axiosInstance.put(BASE_URL + pathName, data, {
      headers: this.getHeader()
    })
  }

  delete (pathName, param, data) {
    return this.axiosInstance.delete(BASE_URL + pathName, {
      params: param,
      data,
      headers: this.getHeader()
    })
  }

  upload (pathName, data) {
    return this.axiosInstance.post(BASE_URL + pathName, data, {
      headers: this.getHeaderFormData()
    })
  }

  postFormData (pathName, data) {
    return this.axiosInstance.post(BASE_URL + pathName, data, {
      headers: this.getHeaderFormData()
    })
  }

  request (type, url, data) {
    let promise = null
    switch (type) {
      case 'GET':
        promise = axios.get(url, { params: data })
        break
      case 'POST':
        promise = axios.post(url, data)
        break
      case 'PUT':
        promise = axios.put(url, data)
        break
      case 'DELETE':
        promise = axios.delete(url, data)
        break
      default:
        promise = axios.get(url, { params: data })
        break
    }
    return promise
  }
}

export default HttpRequest
