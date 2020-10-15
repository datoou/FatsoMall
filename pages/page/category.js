//index.js
//获取应用实例
const app = getApp()
let api = require('../../config/api')
Page({
  data: {
    height:app.globalData.height*2+90,
   active:0
  },
  onLoad: function () {
  },
  onChange(event) {
    this.setData({ active: event.detail });
  }
})
