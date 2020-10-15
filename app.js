//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      complete: (res) => {
        console.log(res)//375px-->750rpx
        this.globalData.height = res.statusBarHeight;
      },
    })
    wx.getUserInfo({
      complete: (res) => {
        // console.log(res.userInfo)
        this.globalData.userInfo = res.userInfo;
      },
    })
  },
  globalData: {
    userInfo: null,
    height:0,
    cartGoods:[]
  }
})