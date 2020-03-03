// pages/prodetail/prodetail.js
import { request } from "../../utils/network_.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    content: '',
    date: "",
    tie_pic: "",
    phone:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { proid } = options
    const obj = this
    request({
      path: '/fatie/detail',
      data: {
        post_id: proid
      }
    }).then(res => {
      console.log(res)
      const { title, content, date, tie_pic } = res.data.data
      obj.setData({
        post_id: proid,
        title: title,
        content: content,
        date: date,
        tie_pic: tie_pic,
        phone: res.data.data.user.phone
      })
    })

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
  showImg: function (e) {
    const { url } = e.currentTarget.dataset
    wx.previewImage({
      urls: [url]
    })
  }
})