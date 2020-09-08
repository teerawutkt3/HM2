import HttpRequest from '@/http-request'
class AxiosService extends HttpRequest {
  doGet (path) {
    return new Promise((resolve, reject) => {
      this.get(path, {}).then((res) => {
        resolve(res.data)
      }).catch((err) => {
        this.handleErr(err, reject)
      }).finally(() => {

      })
    })
  }

  doPost (path, data) {
    return new Promise((resolve, reject) => {
      this.post(path, data).then((res) => {
        resolve(res.data)
      }).catch((err) => {
        this.handleErr(err, reject)
      }).finally(() => {

      })
    })
  }

  doPut (path, data) {
    return new Promise((resolve, reject) => {
      this.put(path, data).then((res) => {
        resolve(res.data)
      }).catch((err) => {
        this.handleErr(err, reject)
      }).finally(() => {

      })
    })
  }

  doDelete (path) {
    return new Promise((resolve, reject) => {
      this.delete(path).then((res) => {
        resolve(res.data)
      }).catch((err) => {
        this.handleErr(err, reject)
      }).finally(() => {

      })
    })
  }

  doPostFormData (path, data) {
    return new Promise((resolve, reject) => {
      this.post(path, data).then((res) => {
        resolve(res.data)
      }).catch((err) => {
        this.handleErr(err, reject)
      }).finally(() => {

      })
    })
  }

  doPutFormData (path, data) {
    return new Promise((resolve, reject) => {
      this.put(path, data).then((res) => {
        resolve(res.data)
      }).catch((err) => {
        this.handleErr(err, reject)
      }).finally(() => {

      })
    })
  }

  handleErrProcess (err) {
    if (err) { }
  }

  handleErr (err, reject) {
    if (err.response === undefined) {

    } else if (err.response.status === 401) {
      window.location.href = 'login'
      reject('401')
    } else if (err.response.status === 405) {
      reject('405')
    } else {
      reject(err)
    }
  }

  processErr (msg) {
    // swal('Process error', msg, 'error')
  }
}

export default AxiosService
