// const base_url = 'http://127.0.0.1:5000'
const base_url = "120.27.10.187:6002"

export function request(options) {
  // Python : requests.request(method, url, params, data, json)
  // options : {path, method, data}
  // 解构对象中属性
  const { path, data, method } = options

  // 返回异步处理的Promise对象
  // ES6(ECMScript 6) fetch({}).then().catch()
  return new Promise((resolve, reject) => {
    // 小程序的网络请求的SDK
    wx.showLoading({
      title: '正在拼命地加载数据',
      mask: true
    })
    wx.request({
      url: base_url + path,
      method: method || 'GET',
      data: data || '',
      success: (res) => {
        resolve(res)
      },
      fail: (e) => {
        reject(e)
        wx.showToast({
          title: '加载数据失败',
          icon: 'none',
          duration: 1000,
          mask: true
        })
      },
      complete: () => {
        wx.hideLoading()
        wx.hideToast()
      }
    })
  })

}