import { config } from './config'
class Http {
    request(params) {
        wx.request({
            url: config.baseUrl + params.url,
            method: params.method || 'GET',
            header: {
                'content-type': 'application/json',
                'appkey': config.appkey
            },
            data: '' || params.data,
            success: (res) => {
                let code = res.statusCode.toString()
                if (code.startsWith('2') || code === '304') {
                    params.success && params.success(res.data)
                } else {
                    params.fail && params.fail(res.data)
                    let error_code = res.data.error_code
                    this._show_error()
                }
            },
            fail: (err) => {
                params.fail && params.fail(res.data)
                this._show_error()
            }
        })
    }
    _show_error() {
        wx.showToast({
            title: "出错了",
            icon: 'none',
            duration: 2000
        })
    }
    getLatestData(resback) {
        this.request({
            url: "classic/latest",
            success: (res) => {
                resback(res)
                wx.setStorageSync("index", res.index)
            }
        })
    }
    getPre(index, resback) {
        this.request({
            url: "classic/" + index + "/previous",
            success: (res) => {
                resback(res)
            }
        })
    }
    getNext(index, resback) {
        this.request({
            url: "classic/" + index + "/next",
            success: (res) => {
                resback(res)
            }
        })
    }
    getHotBooks(params) {
        return new Promise((resolve, reject)=> {
            wx.request({
                url:config.baseUrl + params.url,
                header: {
                    'content-type': 'application/json',
                    'appkey': config.appkey
                },
                data:params&&params.data,
                success: (res) => {
                    let result = res.data;
                    resolve(result);
                },
                fail: () => {
                    reject("?????????")
                }
            })
        })

    }
    // getBook(resback){
    //     this.request({
    //         url:"",
    //         success:(res)=>{
    //             resback(res)
    //         }
    //     })
    // }


}
export { Http }
