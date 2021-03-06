// pages/template/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showNestDialog: false,
    showOneButtonDialog: false,
    showWrapperDialog: false,
    showImportDialog: false,
    showIncludeDialog: false,
    buttons: [{text: '取消'}, {text: '确认'}],
    oneButtons: {text: '确认'},
    iconList: ['comment', 'camera', 'eyes-on'],
  },
  openNestDialog() {
    this.setData({ showNestDialog: true })
  },
  openWrapperDialog() {
    this.setData({ showWrapperDialog: true })
  },
  openImportDialog() {
    this.setData({ showImportDialog: true })
  },
  openIncludeDialog() {
    this.setData({ showIncludeDialog: true })
  },
  tapConfirmDialog(e) {
    this.setData({
      showNestDialog: false,
      showWrapperDialog: false,
      showImportDialog: false,
      showIncludeDialog: false,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: 'template 语法',
      contents: [
        { name: 'Nest Template', tap: 'openNestDialog' },
        { name: 'Wrapper Template', tap: 'openWrapperDialog' },
        { name: 'Import Template', tap: 'openImportDialog' },
        { name: 'Incldue Template', tap: 'openIncludeDialog' },
      ]
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

  }
})