// components/Lifecycle.js
/**
 * App: onLaunch
 * Component: created
 * Component: attached
 * Page: onLoad
 * Page: onShow
 * Component: ready
 * Page: onReady
 * 
 * 触发页面跳转
 * 
 * 1. 页面不关闭（卸载）
 * Page: onHide
 * 
 * 2. 页面关闭
 * Page: onUnload
 * 
 * wx:if 隐藏组件
 * Component: detached
 * 
 * wx:if 显示组件
 * Component: created
 * Component: attached
 * Component: ready
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    'data-type': {
      type: 'string'
    },
    'dataIndex': {
      type: 'string'
    },
    'data-index': {
      type: 'string'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  created: function() {
    console.info('Component Lifecycle created...')
    console.log(this.properties)
  },
  attached: function() {
    console.log('Component Lifecycle attached...')
  },
  /**
   * created 和 attached 先于 Page onLoad
   */
  /**
   * Page onShow
   */
  ready: function() {
    console.info('Component Lifecycle ready...')
  },
  /**
   * Page onoReady
   */
  moved: function() {
    console.info('Component Lifecycle moved...')
  },
  detached: function() {
    console.info('Component Lifecycle detached...')
  }
})
