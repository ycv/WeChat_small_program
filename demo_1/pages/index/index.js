//index.js 逻辑类  
//获取应用实例
var app = getApp();
Page({
    data: {
        imgUrls: [
            {
                link: '/pages/index/index',
                url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
            }, {
                link: '/pages/logs/logs',
                url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
            }, {
                link: '/pages/test/test',
                url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
            }
        ],
        motto: 'aass',
        QQ1: '  22222',
        userInfo: {
            avatarUrl: "http://www.dq123.com/skin/default/dqnews_meet/p_5.jpg",
            desctext: "xxaaa"
        },
        name: "利 驰"
    },
    //事件处理函数
    onimageClick: function () {
        wx.navigateTo({
            // url: '../ui/test',
            url: '../test01/test01',
        });
    },
    //事件处理函数
    onimageClick222: function () {
        wx.navigateTo({
            url: '../ui/test',
        });
    },
    onLoad: function () {
        console.log("aasd");
        //页面显示时执行这里面的方法 生命周期以后会讲
    }
});
