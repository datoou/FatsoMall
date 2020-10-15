//index.js
//获取应用实例
const app = getApp()
let api = require('../../config/api');

Page({
  data: {
    height:app.globalData.height*2+90,
    active:0,
    swipers:[],
    goods:{},
    serverPath:api.ApiRootUrl,
    sku:{}
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
  },
  onLoad(options){
    //console.log(options)

    let id = options.id?options.id:298;
    wx.request({
      url: api.Goods,
      data:{
        id
      },
      success:(res)=>{
        console.log(res)
        this.goods = res.data.goods;
        this.sku = JSON.parse(this.goods.sku) 
        this.swipers = JSON.parse(this.goods.imgs)
        this.goods.content = this.goods.content.replace(/\<img/g,'<img style="width:100%;height:auto;display:block" ')
        this.setData({swipers:this.swipers,goods:this.goods,sku:this.sku })
      }
    })
  },
  goBack(){
    wx.navigateBack()
  },
  addCart(){
    let isExit = false;
    app.globalData.cartGoods.forEach((item)=>{
      if(item.id==this.goods.id){
        item.num = item.num +1;
        isExit = true;
      }
    })
    if(!isExit){
      this.goods.num = 1
      app.globalData.cartGoods.push(this.goods)
    }
    
    
    wx.reLaunch({
      url: '/pages/buycart/buycart',
    })
  }
})
