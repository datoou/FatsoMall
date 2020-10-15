//index.js
//获取应用实例
const app = getApp()
let api = require('../../config/api');

Page({
  data: {
    height:app.globalData.height*2+90,
    active:1,
    items:[{text:'手机'},{text:'平板'},{text:'笔记本'}],
    pList:[],
    list:[],
    serverPath:api.ApiRootUrl,
    activeId:0
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
        this.data.pList = plist;
        this.setData({
          list:this.data.pList.slice(0,2)
        })
      }
    })
  },
  onClickNav(event){
    console.log(event.detail)
    let index = event.detail.index
    this.setData({
      list:this.data.pList.slice(index*2,index*2+2)
    })
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
