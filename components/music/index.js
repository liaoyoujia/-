// components/music/index.js
const backgroundAudioManager = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url:{
      type:String,
      value:""
    },
    title:{
      type:String,
      value:''

    },
    bigImage:{
      type:String,
      value:'' 
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    onmusic:false,
  },
  attached() {
    this.observeMusic()
    let value = wx.getStorageSync("musicStatus")
    console.log(value,123213213123123)
    if(value==this.properties.title){
      this.setData({
        onmusic:true
      })
    }
    },

  /**
   * 组件的方法列表
   */
  methods: {
    onMusicTap(){

      backgroundAudioManager.title = this.properties.title;
      backgroundAudioManager.src = this.properties.url
      backgroundAudioManager.play(); 
    },
    unMusicTap(){
      backgroundAudioManager.stop()
      this.setData({
        onmusic:false
      })
      wx.removeStorageSync('musicStatus')
    },
  
     observeMusic(){
    backgroundAudioManager.onPlay(() => {
      console.log(2222222222222)
          this.setData({
            onmusic:true
          })
          wx.setStorageSync("musicStatus", this.properties.title)
    
      }),
    backgroundAudioManager.onPause(()=>{
      this.setData({
        onmusic:false
      })
    wx.removeStorageSync('musicStatus')
    
    })   
    backgroundAudioManager.onStop(()=>{
      this.setData({
        onmusic:false
      })
    wx.removeStorageSync('musicStatus')
    })
  }
},
 
})

