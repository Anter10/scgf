// pages/parts/part.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    routers: {
      jy:{
            title:"语文教育",
            classes:[
              {
                name: '小学诗词',
                url: '/pages/Course/course',
                icon: '/image/java_ico.png',
                code: '10'
              },
              {
                name: '初中诗词',
                url: '/pages/Course/course',
                icon: '/image/python_ico.png',
                code: '11'
              },
              {
                name: '高中诗词',
                url: '/pages/Course/course',
                icon: '/image/java_ico.png',
                code: '10'
              },
              {
                name: '小学文言文',
                icon: '/image/python_ico.png',
                code: '11'
              },
              {
                name: '中学文言文',
                url: '/pages/Course/course',
                icon: '/image/java_ico.png',
                code: '10'
              },
              {
                name: '高中文言文',
                icon: '/image/python_ico.png',
                code: '11'
              }
            ]
         },
      jykz: {
        title: "文学扩展",
        classes: [
          {
            name: '中国散文',
            url: '/pages/Course/course',
            icon: '/image/java_ico.png',
            code: '10'
          },
          {
            name: '国外散文',
            url: '/pages/Course/course',
            icon: '/image/python_ico.png',
            code: '11'
          },
           {
            name: '中国名著',
            url: '/pages/Course/course',
            icon: '/image/python_ico.png',
            code: '11'
          },
          {
            name: '国外名著',
            url: '/pages/Course/course',
            icon: '/image/python_ico.png',
            code: '11'
          },
          {
            name: '成语故事',
            url: '/pages/Course/course',
            icon: '/image/python_ico.png',
            code: '11'
          }    
        ]
      }
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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