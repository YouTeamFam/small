// pages/broker_registerpage/broker_registerpage.js
// const base_url = "http://127.0.0.1:5000/"
const base_url = "120.27.10.187:6002/"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '男', value: '男', checked: 'true' },
      { name: '女', value: '女' },
    ]
  },
  bindPhoneInput: function (e) {
    console.log(e.detail.value)
    let val = e.detail.value;
    this.setData({
      phone: val,
    })
  },
  Usercode: function () {
    let phone = this.data.phone
    console.log(phone)
    wx.request({
      url: base_url + 'api/code/?phone=' + phone,
      header: {
        'Content-Type': 'application/json'
      },
    })
  },

  formSubmit: function (e) {
    wx.request({
      url: base_url + 'jjrapi/jjrregist/',
      data: {
        'username': e.detail.value.username,
        'pwd': e.detail.value.password,
        'phone': e.detail.value.phone,
        'code': e.detail.value.code,
        'sex': e.detail.value.sex,
        'name':e.detail.value.name
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
    wx.navigateTo({
      url: '/pages/loginpage/loginpage',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})