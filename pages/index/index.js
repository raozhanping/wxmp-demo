//index.js
//获取应用实例
define('pages/index/demo.js', function() {
  console.log(11)
})
import util from './util.js'
const app = getApp()

Page({
  customData: 'Hello Page Custom Data',
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isShowLifecyleComponent: true,
    tData: {
      view: 'I am data from scope',
      tap: function () {
        console.log(2222)
      }
    }
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // toggle Lifecycle component
  toggleLifecycle: function(e) {
    console.log('event', e)
    console.log(this.data.isShowLifecyleComponent)
    this.setData({isShowLifecyleComponent: !this.data.isShowLifecyleComponent})
  },
  onLoad: function () {
    console.info('Page onLoad...')
    console.info('data', this.data)
    this.setData({'customData': this.customData})
    console.log(this)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        a: 11
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function() {
    console.log('Page onShow...')
  },
  onReady: function() {
    console.info('Page onReady...')
  },
  onHide: function() {
    console.info('Page onHide...')
  },
  onUnload: function() {
    console.info('Page onUnload...')
  },
  goToPageAndClosePage: function() {
    wx.redirectTo({
      url: '/pages/logs/logs',
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
