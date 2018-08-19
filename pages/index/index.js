//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items: [],
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  onLoad: function () {
        this.pageIndex = 1;
        this.refreshView();
  },
  bindfocus: function (event){
    wx.navigateTo({
      url: '../search/search?id=1'
    })
  },
  refreshView:function(){
    var self = this;
    let url = 'http://192.168.1.11:8080/gycgw/sc/shici.do?securecode=122121212&linkroleid=1212&num=20&page=' + (self.pageIndex + "");
    console.log("请求数据 = " + url);
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },

      success: function (res) {
        if (res.data.suc) {
           console.log("收到的数据 = " + JSON.stringify(res));
           if (self.pageIndex == 1){
             var tdata = self.data.items;
             if (res.data.data.length == 20) {
                self.pageIndex = self.pageIndex + 1;
             }
            self.setData({ items: res.data.data });
          }else{
             if (res.data.data.length == 20){
                 self.pageIndex = self.pageIndex + 1;
             }
             var tdata = self.data.items;
             for (var itemIndex = 0; itemIndex < res.data.data.length; itemIndex++) {
               self.data.items.push(res.data.data[itemIndex]);
             }
             self.setData({ items: tdata });
          }
         
          
        }
      }
    })
  },

  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
     this.refreshView();
  },
  clickview: function(e){
    console.log("ddd"+JSON.stringify(e))
    wx.navigateTo({
      url: '../scinfo/scinfo?id=1'
    })
  },
})
