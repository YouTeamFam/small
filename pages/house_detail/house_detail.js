// pages/prodetail/prodetail.js
import { request } from "../../utils/network_.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    region: '',
    pub_date: "",
    img_url: "",
    nearby: '',
    hu_type: '',
    comm_name: "",
    sum_price: "",
    face: '',
    area:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { proid } = options
    const obj = this
    request({
      path: '/house/detail',
      data: {
        source_id: proid
      }
    }).then(res => {
      console.log(res)
      const { title, region, pub_date, img_url, nearby, hu_type, comm_name, sum_price, face, area } = res.data.data
      obj.setData({
        title: title,
        region: region,
        pub_date: pub_date,
        img_url: img_url,
        nearby: nearby,
        hu_type: hu_type,
        comm_name: comm_name,
        sum_price: sum_price,
        face: face,
        area: area
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