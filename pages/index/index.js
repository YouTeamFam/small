//index.js
//获取应用实例
const app = getApp() // app.js创建的APP对象
import { request } from "../../utils/network_.js"
Page({
  data: {
    items: [],
    page: 3, //当前页码
    imgUrls: [

      {

        // link: '/pages/index/index',

        url: '/images/1.jpg'

      }, {

        // link: '/pages/logs/logs',

        url: '/images/2.jpg'

      }, {

        // link: '/pages/index/index',

        url: '/images/3.jpg'

      }, {

        // link: '/pages/index/index',

        url: '/images/4.jpg'

      }, {

        // link: '/pages/index/index',

        url: '/images/5.jpg'

      },

    ],

    indicatorDots: true,  //小点

    autoplay: true,  //是否自动轮播

    interval: 3000,  //间隔时间

    duration: 3000,  //滑动时间
  },
  
  onLoad: function () {
    // console.info(app.globalDate.welcome)
    console.info("-----index load------")
  },
  onUnload: function(){
    console.info("-----index unload------")
  },
  onShow: function () {
    console.info("----------index show-----------")
    // 加载本地数据  如果本地数据不存在时  再从网络api接口中请求
  },
  onHide: function () {
    // 保存页面数据
    console.info("----------index hide-----------")
  },
  onReady: function () {
    // 页面渲染完成后
    console.info('--index onReady---')

    // 请求所有商品的数据
    request({
      path: '/erhouse/',
      method: 'GET',
      data: {
        pageCode: 3,
        limitNum: 8
      }
    }).then(res => {
      console.info(res)
      // 更新页面的数据， 对应修改是Page中data属性
      this.setData({
        items: [...res.data.data]

      })

    }).catch(e => {
      console.error(e)
    })

  },
  onPullDownRefresh: function () {
    console.info('--下拉刷新---')
    request({
      path: '/erhouse/',
      data: {
        pageCode: 3,
        limitNum: 8
      }
    }).then(res => {
      console.info(res)
      this.setData({
        items: [...res.data.data],
        page: 0
      })

      wx.stopPullDownRefresh() // 停止下拉刷新

    }).catch(e => {
      console.error(e)
    })

  },
  // onReachBottom: function () {
  //   console.info('--上拉加载更多---')
  //   // 获取当前页码
  //   const currentPage = this.data.page
  //   const currentData = this.data.items

  //   request({
  //     path: '/erhouse/',
  //     data: {
  //       pageCode: currentPage + 1,
  //       limitNum: 20
  //     }
  //   }).then(res => {
  //     console.info(res)
  //     const { code, message, data } = res.data
  //     if (code == "10000") {
  //       wx.showToast({
  //         title: message
  //       })
  //     } else {
  //       this.setData({
  //         items: [...currentData, ...res.data.data],  // 累加数据
  //         page: currentPage + 1
  //       })
  //     }
  //   }).catch(e => {
  //     console.error(e)
  //   })
  // },showHouse
  showDetail: function (e) {
    // 获取事件的数据，通过data-* 来设置的
    const { proid } = e.currentTarget.dataset

    // 打开详情页面
    // 跳转页面的url中，以/开头，表示绝对路径
    wx.navigateTo({
      url: '/pages/house_detail/house_detail?proid=' + proid
    })
  },
  showHouse: function () {
    wx.navigateTo({
      url: '/pages/new_house/new_house'
    })
  }
})