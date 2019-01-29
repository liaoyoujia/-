// page/like/like.js
import { Http } from '../../ajax/ajax'
const http = new Http()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    favArr:[],
    jump:false,
    favTrue:true,
    clickTrue:false

  },
  getFav(res){
  console.log(res,'达到我把，哈哈');
  
    this.setData({
      favArr:res      
    })
  },
  jumpItem(){
    let msg=!this.data.jump
    this.setData({jump:msg})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    http.getHotBooks({url:'classic/favor'}).then(this.getFav)
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