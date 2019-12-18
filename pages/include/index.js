// pages/include/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTemplateDialog: false,
    showImportDialog: false,
    showIncludeDialog: false,
    buttons: [{ text: '确认' }],
  },
  openTemplateDialog() {
    this.setData({ showTemplateDialog: true })
  },
  openImportDialog() {
    this.setData({ showImportDialog: true })
  },
  openIncludeDialog() {
    this.setData({ showIncludeDialog: true })
  },
  tapConfirmDialog() {
    this.setData({
      showTemplateDialog: false,
      showImportDialog: false,
      showIncludeDialog: false,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: 'Include 语法',
      contents: [
        { name: 'Include Template', tap: 'openTemplateDialog' },
        { name: 'Include Import', tap: 'openImportDialog' },
        { name: 'Include Include', tap: 'openIncludeDialog' },
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