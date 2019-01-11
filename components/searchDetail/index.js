// components/searchDetail/index.js
import { Http } from '../../ajax/ajax'
const axios = new Http()
Component({
  /**
   * 组件的属性列表
   * 
   */
  data: {
    hots: [],
    history: [],
    inputValue: "",
    books: [],
    loading: true,
    msg: false

  },
  properties: {

  },
  attached() {
    // 获取热搜关键字
    axios.getHotBooks({ url: 'book/hot_keyword' }).then((res) => {
      console.log(res, 97979)
      this.setData({ hots: res.hot })
    })



  },
  /**
   * 组件的初始数据
   */


  /**
   * 组件的方法列表
   */
  methods: {
    adc(e) {

      wx.navigateTo({
        url: '/page/detail/detail?id=' + e.currentTarget.dataset.index
      })

    },
    searchBook(e) {
      // 获取搜索书籍
      if (!this.data.loading) {
        this.setData({
          loading: true
        })
      }
      this.setData({
        msg: true
      })

      if (e.detail.value !== '') {
        axios.getHotBooks({
          url: 'book/search', data: {
            q: e.detail.value,
            summary: 0
          }
        }).then((res) => {
          res.books.length ? this.data.history.push(e.detail) : '';
          let arr = this.data.history

          this.setData({
            history: arr,
            inputValue: '',
            books: res.books,
            loading: false
          })
        })
      }

    },
    cancel() {
      this.triggerEvent('cancel')
    },
    hotSearch(e) {
      let value = e.currentTarget.dataset.item
      let ad = {
        detail: {
          value
        }
      }
      this.searchBook(ad)
    },
    reset() {
      this.setData({

        inputValue: ''
      })
    },

  }
})
