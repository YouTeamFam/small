// pages/loginpage/loginpage.js
// const base_url = "http://127.0.0.1:5000/"
const base_url = "120.27.10.187:6002/"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '用户', value: '用户', checked: 'true' },
      { name: '经纪人', value: '经纪人' },
      { name: '房东', value: '房东'},
    ]
  },
  bindusernameInput:function(e){
    console.log(e.detail.value)
    let val = e.detail.value;
    this.setData({
      username: val,
    })
  },
  formSubmit: function (e) {
    wx.request({
      url: base_url + 'api/login/',
      data: {
        'username': e.detail.value.username,
        'pwd': e.detail.value.password,
        'type': e.detail.value.type,
      },
      method: 'POST',
      header: {
        // application/x-www-form-urlencoded
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
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

  },
  goto_pt_zhuce:function(){
    wx.navigateTo({
      url: '/pages/pt_registerpage/pt_registerpage',
    })
  },
  goto_jingjiren: function () {
    wx.navigateTo({
      url: '/pages/broker_registerpage/broker_registerpage',
    })
  },
  goto_fangdong: function () {
    wx.navigateTo({
      url: '/pages/landlord_registerpage/landlord_registerpage',
    })
  }
})