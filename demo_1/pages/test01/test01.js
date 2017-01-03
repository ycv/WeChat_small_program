//test.js
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
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        userInfo: {},
        array: [{
                src: "../../img/09-53-32-11-1.jpg",
                text: '111'
            }, {
                src: "../../img/09-53-32-11-1.jpg",
                text: '2211'
            }, {
                src: "../../img/09-53-32-11-1.jpg",
                text: 'aasd22'
            }
            , {
                src: "../../img/09-53-32-11-1.jpg",
                text: 'dd22'
            }
            , {
                src: "../../img/09-53-32-11-1.jpg",
                text: 'dd22'
            }
            , {
                src: "../../img/09-53-32-11-1.jpg",
                text: 'ffss'
            }
        ]



    },
    onLoad: function () {
        fetch('http://www.51xuediannao.com/json.php?typeid=34&page=1&pagesize=10')
                //fetch('/pages/test01/test01.json')
                .then(function (response) {

                    if (response.status == 200) {
                        console.log('data');
                        console.log(response);
//                        that.data.page++;
                        return response.json();
                    }
                }).then(function (data) {
            console.log(data);
            //更新数据
            //// that.setData({
            //  listArr: that.data.page == 1 ? data : that.data.listArr.concat(data)

            //})
            //console.log(that.data.listArr);
        })

        console.log('onLoad test')

      






    }






})
