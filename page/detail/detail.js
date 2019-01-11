// page/detail/detail.js
import { Http } from '../../ajax/ajax'
const axios = new Http()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailBook: {},
    contentWorad: [],
    shortComment: [],
    showComment: false,
    number:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    axios.getHotBooks({ url: 'book/' + options.id + '/detail' }).then((res) => {
      console.log(res.summary, 21312)
      if (res.summary.indexOf('\n')) {
        let str = res.summary.replace(/\\n/g, "|-&");
        // console.log(str,13122312)
        let arrWroad = str.split('|-&');
        this.setData({
          detailBook: res,
          contentWorad: arrWroad
        })
      } else {
        console.log(23123123123123)
        let arrWroad = [res.summary]
        this.setData({
          detailBook: res,
          contentWorad: arrWroad
        })
      }

    })
    axios.getHotBooks({ url: 'book/' + options.id + '/short_comment' }).then((res) => {
      console.log(res.comments, 31212)
      this.setData({
        shortComment: res.comments
      })
    })
    axios.getHotBooks({ url: 'book/' + options.id + '/favor' }).then((res) => {
      this.setData({
        number:res.fav_nums
      })
    })



  },
  tapShow() {
    console.log(1)
    this.setData({
      showComment: true
    })
  },
  callBack() {

    this.setData({
      showComment: false
    })
  },
  sendComment(e) {
    let value = e.detail.value;
    axios.getHotBooks({
      url: 'book/add/short_comment', method: "POST", data: {
        book_id: this.data.detailBook.id,
        content: value
      }
    }).then((res) => {
      if(res.error_code==0){
        wx.showToast({
          title:'评论成功',
          icon:"none",
        })
      }else{
        wx.showToast({
          title:'评论失败,注意字数',
          icon:"none",
        })
      }


    })},

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