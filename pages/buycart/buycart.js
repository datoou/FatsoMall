//index.js
//获取应用实例
const app = getApp()
let api = require('../../config/api');

Page({
  data: {
    height:app.globalData.height*2+90,
    active:2,
    goods:[],
    serverPath:api.ApiRootUrl,
  },
  
  onLoad: function () {
    app.globalData.cartGoods.forEach((item,i)=>{
      if(typeof item.imgs=='string'){
        item.imgs = JSON.parse(item.imgs)
      }
      
      
    })
    this.setData({
      goods:app.globalData.cartGoods
    })
    console.log(app.globalData.cartGoods)
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    console.log(event.detail)
    //this.setData({ active: event.detail });
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
  }
})
