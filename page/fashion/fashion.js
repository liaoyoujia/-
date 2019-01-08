// page/fashion/fashion.js
import { Http } from '../../ajax/ajax'
const http = new Http()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: {},
    index: 0,
    leftFlag:false,
    rightFlag:true,
    type:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getData(res) {
    let type=res.type
    console.log(res, 3312312)
    this.setData({
      currentData: res ,
      type                   
    })
  },
  allotPre(res) {
    console.log(res, 3312312)

    let value = res.index;
    let type=res.type
    // if(type==100){
    //   this.data.type=type
    // }

    if(value==1){
      this.setData({currentData: res, leftFlag: true ,rightFlag:false,type})
      return false
    }
    
    (value < this.data.index) ? this.setData({ currentData: res, leftFlag: true,type }) : this.setData({ currentData: res, leftFlag: false ,type})
  },
  allotNext(res){
    let type=res.type
    let value = res.index;
    if(value==this.data.index){
      this.setData({currentData: res, leftFlag: false ,rightFlag:true,type})
      return false
    }
    
    (value < this.data.index) ? this.setData({ currentData: res, leftFlag: true,type }) : this.setData({ currentData: res, leftFlag: false ,type})
  },



  getNextData() {
    console.log(2)
    http.getNext(this.data.currentData.index,this.allotNext)
  },
  getPreData() {
    console.log(1)
    http.getPre(this.data.currentData.index, this.allotPre)

  },

  onLoad: function (options) {
    // 请求最新的一页
    http.getLatestData(this.getData)
    // 获取index
    this.data.index = wx.getStorageSync('index')
    // console.log(this.data.index,321311111)



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
    console.log(this.data.currentData, 666)
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
    console.log('312312')
  }
})