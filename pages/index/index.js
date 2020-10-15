//index.js
//获取应用实例
const app = getApp()
let api = require('../../config/api')
Page({
  data: {
    height:app.globalData.height*2+90,
   swipers:['swiper1','swiper2','swiper3'],
   active:0,
   plist:[],
   serverPath:api.ApiRootUrl,
   page:1
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs.js'
    })
  },
  onLoad: function () {
    wx.request({
      url: api.GoodsList,
      success:(res)=>{
        // console.log(res)
        let plist = res.data.productlist;
        plist.forEach((item,i)=>{
          item.imgs = JSON.parse(item.imgs)
        })
        console.log(plist)
        this.setData({
          plist:plist
        })
      }
    })
  },
  onChange(event) {
    // this.setData({ active: event.detail });
    switch(event.detail){
      case 0:
        wx.navigateTo({
          url: '/pages/index/index',
        })
        break;
      case 1:
        wx.navigateTo({
          url: '/pages/category/category',
        })
        break;
      case 2:
        wx.navigateTo({
          url: '/pages/buycart/buycart',
        })
        break;
      case 3:
        wx.navigateTo({
          url: '/pages/mine/mine',
        })
        break;
    }
  },
  reachBottom(){
    console.log('到达底部')
    this.page++
    wx.request({
      url: api.GoodsList,
      success:(res) => {
        let plist = res.data.productlist;
        plist.forEach((item,i)=>{
          item.imgs = JSON.parse(item.imgs)
        })
        plist = this.data.plist.concat(plist)
        console.log(plist)
        this.setData({
          plist:plist
        })
      }
    })
  }
})
