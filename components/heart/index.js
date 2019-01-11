// components/heart/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    number:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
  fav(){
    this.setData({
      msg:!this.data.msg
    })
  }
  }
})
