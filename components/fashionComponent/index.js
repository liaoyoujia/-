// components/fashionComponent/index.js
const monthArry = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '冬月', '腊月']
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    fav: {
      type: Number,
      value: 0,
    },
    index: {
      type: Number,
      value: 0,
    },
    content: {
      type: String,
      value: '',
    },
    title: {
      type: String,
      value: ''
    },
    flagLeft:{
      type:Boolean,
      value:false
    },
    flagRight:{
      type:Boolean,
      value:true
    }


  },

  /**
   * 组件的初始数据
   */
  data: {
    date: {

    },
    // flagLeft: false,
    // flagRight: true,
  },
  attached() {
    this.getDate()
    console.log(this.data.date, 13212)
  },



  /**
   * 组件的方法列表
   */
  methods: {
    getDate() {
      let date = new Date();
      let month = monthArry[date.getMonth()]
      let dateData = {
        month,
        year: date.getFullYear()
      }
      this.setData({
        date: dateData
      })

    },
    tapNext() {
      if(!this.data.flagLeft){
        return false
      }

      this.triggerEvent('Next')

    },
    tapPrevious() {
      if(!this.data.flagRight){
        return false
      }
      this.triggerEvent('Previous')

    }

  }
})
