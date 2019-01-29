// components/heart/index.js
import {
  Http
} from '../../ajax/ajax'
const axios = new Http()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    number: {
      type: Number,
      value: 0
    },
    favTrue: {
      type: Boolean,
      value: false
    },
    itemtype: {
      type: Number,
      value: 300
    },
    artId: {
      type: Number,
      value: 1
    },
    clickTrue: {
      type: Boolean,
      value: true
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    msg: true,
    timer: null
  },
  attached() {
    
    this.data.timer && clearTimeout(this.data.timer)

    this.data.timer = setTimeout(() => {
      this.likeTrue()
    }, 1000)
  },
  
  moved() {
    console.log(23112312);

  },

  detached() {
    clearTimeout(this.data.timer)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    watch: {
      favTrue: function (newValue) {
        console.log(newValue,"fashengbianhua"); // name改变时，调用该方法输出新值。
      }
    },

    likeTrue() {
      console.log(12312312 + "dasdasdasdas");

      if (this.properties.favTrue) {

        this.setData({
          msg: !this.data.msg
        })
      } else {
        console.log(1231233333333333 + '紫薯');

      }
    },
    getBack() {
      console.log('取消点赞');

    },
    onBack() {
      console.log('点赞成功');

    },
    fav() {
      // if(this.properties.favTrue){
      if (this.properties.clickTrue) {
        this.setData({
          msg: !this.data.msg
        })
        // if (this.properties.favTrue) {
        //   axios.getHotBooks({
        //     method: 'POST',
        //     url: 'like',
        //     data: {
        //       art_id: artId,
        //       type: itemtype
        //     }
        //   }).then(this.getBack)
        // } else {
        //   axios.getHotBooks({
        //     method: 'POST',
        //     url: 'like/cancel',
        //     data: {
        //       art_id: artId,
        //       type: itemtype
        //     }
        //   }).then(this.onBack)
        // }
        // console.log(123123123);

      } else {
        return false
      }
      // }else{

      // }

    }

  },
  // getFav(res) {}
})