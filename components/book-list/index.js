// components/book-list/index.js
import { Http } from '../../ajax/ajax'
const axios = new Http()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  attached() {
    // 请求热门书籍数据
    axios.getHotBooks({ url: 'book/hot_list' }).then((res) => {
      this.setData({ hotBook: res })
    })

  },

  /**
   * 组件的初始数据
   */
  data: {
    hotBook: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    get() {
      console.log(this, 3123123)
    },
    getHotBook: (res) => {
      this.setData({
        hotBook: res

      })
      console.log(this, 12)
    },
    navigator(e) {
      wx.navigateTo({
        url: '/page/detail/detail?id='+e.currentTarget.dataset.index
      })

    }

  }
})
