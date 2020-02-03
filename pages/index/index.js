//index.js
Page({
  data: {
    routes: [
      { route: '/pages/template/index', title: 'template 语法' },
      { route: '/pages/include/index', title: 'include 语法' },
      { route: '/pages/setData/index', title: 'setData 接口' },
    ]
  },

  onLoad: function () {
    console.log('Page onLoad...')
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
  }
})
