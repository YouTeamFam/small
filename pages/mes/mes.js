//index.js
import { request } from "../../utils/network_.js"

//获取应用实例
const app = getApp() // app.js创建的App对象

Page({
  data: {
    last_date:'',
    mes_title:'',
    mes_text:'',
    user_id:0
  },

  onLoad: function () {
    console.info(app.globalData.welcome)
    console.info('---mes load---')
  },
  onUnload: function () {
    console.info('---mes unload---')
  },
  // 显示和隐藏会被多次调用---页面切换时
  onShow: function () {
    console.info('---mes show---')
  },
  onHide: function () {
    console.info('---mes hide---')

  },
  onReady: function () {
    // 页面渲染完成后
    console.info('--mes onReady---')
    const obj = this
    // 请求所有商品的数据
    request({
      path: '/message/',
      method: 'POST',
      data: {
        token:"122212212"
      }
    }).then(res => {
      console.info(res)
      // 更新页面的数据， 对应修改是Page中data属性
      const { last_date, mes_text, mes_title, user_id } = res.data.data
      obj.setData({
        last_date: last_date,
        mes_text: mes_text,
        mes_title: mes_title,
        user_id: user_id
      })

    }).catch(e => {
      console.error(e)
    })

  },
  onPullDownRefresh: function () {
    console.info('--下拉刷新---')
    request({
      path: '/message/',
      method: 'POST',
      data: {
        token: "122212212"
      }
    }).then(res => {
      console.info(res)
      this.setData({
        items: [...res.data.data],
      })

      wx.stopPullDownRefresh() // 停止下拉刷新

    }).catch(e => {
      console.error(e)
    })

  },
  showDetail: function (e) {
    // 获取事件的数据，通过data-* 来设置的
    const { proid } = e.currentTarget.dataset
    request({
      path: '/delmes/',
      data: {
        user_id: proid
      }}),
    // 打开详情页面
    // 跳转页面的url中，以/开头，表示绝对路径
    wx.navigateTo({
      url: '/pages/mes/mes'
    })
  }
})
