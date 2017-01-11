Page({
    data: {
        searchKey: null //搜索关键字
    },
    //搜索输入框输入取值
    searchInputEvent: function (e) {
        console.log(e);
        this.setData({searchKey: e.detail.value});
    },
    //搜索按钮点击事件
    searchClickEvent: function (e) {
        if (!this.data.searchKey) {
            return;
        }
        this.setData({pageIndex: 0, pageData: []});
        requestData.call(this);
    },
})

function requestData() {
    console.log("asdasd");
}