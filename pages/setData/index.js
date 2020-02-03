// pages/setData/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: 1,
    _data: {
      // arr: [{ a: 1 }, 'end'],
      null: null,
      undefined: undefined,
      number: 0,
      string: 'string',
      boolean: 'boolean',
      array: [],
      object: {}
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: 'SetData 接口',
      contents: [
        { name: 'Array', tap: 'setArray' }
      ]
    })
  },
  setArray() {
    // 什么时候需要merge data
    // case 1:
    // this.setData({ '_data.array[0]': { a: 1 } })
    // this.setData({ '_data.array[0].b': { b: 2 } }) 
    // result -> array: [{ a: 1, b: { b: 2 } }]
    // case 2:
    // this.setData({ '_data.array[0]': { a: 1 } })
    // this.setData({ '_data.array[0]': { b: 2 } })
    // this.setData({_data: { array: [{ c: 1 }] } })
    // result -> array: [{ b: 2  }]

    console.dir(this.data._data.array)
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