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

  },
  properties: {

  },
  attached() {
    axios.getHotBooks({ url: 'book/hot_keyword' }).then((res) => { 
      this.setData({hots: res }) 
    })
     
  },
  /**
   * 组件的初始数据
   */
 

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
