// components/music/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url:{
      type:'String',
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMusicTap(){
    console.log(this.properties.url,1233)

      console.log('dasdasdasdasdas')
      const backgroundAudioManager = wx.getBackgroundAudioManager()
      backgroundAudioManager.title = '此时此刻';
      backgroundAudioManager.epname = '此时此刻';
      backgroundAudioManager.singer = '许巍';
      backgroundAudioManager.src = this.properties.url
      backgroundAudioManager.play();
      // backgroundAudioManager.onPlay(() => {
      //       console.log("音乐播放开始");
      //   })
      // backgroundAudioManager.onEnded(() => {
      //       console.log("音乐播放结束");
      //   })
    }
  }
})
