var util = require('../../utils/util.js')
Page({
    data: {
        logs: []
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                console.log("aas");
                return util.formatTime(new Date(log))
            })
        })
    }
})
