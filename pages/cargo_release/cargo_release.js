Page({
    data: {
        showTopTips: false,

        radioItems: [
            {name: '货主', value: '0', checked: true},
            {name: '司机', value: '1'}
        ],
        checkboxItems: [
            {name: '货主', value: '0', checked: true},
            {name: '司机', value: '1'}
        ],

        date: "2016-09-01",
        time: "12:01",

        countryCodes: ["+86", "+80", "+84", "+87"],
        countryCodeIndex: 0,

        countries: ["中国", "美国", "英国"],
        countryIndex: 0,

        accounts: ["微信号", "QQ", "Email"],
        accountIndex: 0,

        isAgree: false,

        cargoTypes:["普货","重货", "泡货", "设备", "配件", "百货", "建材", "食品", "饮料", "化工", "农药", "水果", "蔬菜", "木材", "煤炭", "石材", "瓷砖", "其他", "花树", "柚子"],
        cargoTypesIndex:0,

        cargoUnits:["吨","方","件","车","个","台","箱"],
        cargoUnitsIndex:0,

        cargoLingdan:["不是","是"],
        cargoLingdanIndex:0,

        carLength:["不限","4.2米","4.5米","6.2米","6.8米","7.2米","8.2米","8.6米","9.6米","11.7米","12.5米","13米","13.5米","14米","17米","17.5米","18米"],
        carLengthIndex:0,

        carTypes:["不限","平板","高栏","厢式","高低版","保温","冷藏","危险品"],
        carTypesIndex:0,

        province:["福建","广东","湖南","安徽"],
        provinceIndex:0,
        city:["福州","厦门","漳州","广州","长沙","合肥","安庆"],
        cityIndex:0,
        county:["平和","思明","庐阳","蜀山"],
        countyIndex:0,

        province1:["福建","广东","湖南","安徽"],
        provinceIndex1:0,
        city1:["福州","厦门","漳州","广州","长沙","合肥","安庆"],
        cityIndex1:0,
        county1:["平和","思明","庐阳","蜀山"],
        countyIndex1:0
    },
    showTopTips: function(){
        var that = this;
        this.setData({
            showTopTips: true
        });
        setTimeout(function(){
            that.setData({
                showTopTips: false
            });
        }, 3000);
    },
    radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);

        var radioItems = this.data.radioItems;
        for (var i = 0, len = radioItems.length; i < len; ++i) {
            radioItems[i].checked = radioItems[i].value == e.detail.value;
        }

        this.setData({
            radioItems: radioItems
        });
    },
    checkboxChange: function (e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value);

        var checkboxItems = this.data.checkboxItems, values = e.detail.value;
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            checkboxItems[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if(checkboxItems[i].value == values[j]){
                    checkboxItems[i].checked = true;
                    break;
                }
            }
        }

        this.setData({
            checkboxItems: checkboxItems
        });
    },
    bindDateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
    },
    bindTimeChange: function (e) {
        this.setData({
            time: e.detail.value
        })
    },
    bindCountryCodeChange: function(e){
        console.log('picker country code 发生选择改变，携带值为', e.detail.value);

        this.setData({
            countryCodeIndex: e.detail.value
        })
    },
    bindCountryChange: function(e) {
        console.log('picker country 发生选择改变，携带值为', e.detail.value);

        this.setData({
            countryIndex: e.detail.value
        })
    },
    bindCargoTypesChange: function(e) {
        console.log('cargo types 发生选择改变，携带值为', e.detail.value);

        this.setData({
            cargoTypesIndex: e.detail.value
        })
    },
    bindcargoUnitsChange: function(e) {
        console.log('cargo units 发生选择改变，携带值为', e.detail.value);

        this.setData({
            cargoUnitsIndex: e.detail.value
        })
    },
    bindcargoLingdanChange: function(e) {
        console.log('cargo lingdan 发生选择改变，携带值为', e.detail.value);

        this.setData({
            cargoLingdanIndex: e.detail.value
        })
    },
    bindCarLengthChange: function(e) {
        console.log('Car Length 发生选择改变，携带值为', e.detail.value);

        this.setData({
            carLengthIndex: e.detail.value
        })
    },
    bindCarTypesChange: function(e) {
        console.log('Car Types 发生选择改变，携带值为', e.detail.value);

        this.setData({
            carTypesIndex: e.detail.value
        })
    },
    bindProvinceChange: function(e) {
        console.log('Province 发生选择改变，携带值为', e.detail.value);

        this.setData({
            provinceIndex: e.detail.value
        })
    },
    bindCityChange: function(e) {
        console.log('City 发生选择改变，携带值为', e.detail.value);

        this.setData({
            cityIndex: e.detail.value
        })
    },
    bindCountyChange: function(e) {
        console.log('County 发生选择改变，携带值为', e.detail.value);

        this.setData({
            countyIndex: e.detail.value
        })
    },
    bindProvinceChange1: function(e) {
        console.log('Province 发生选择改变，携带值为', e.detail.value);

        this.setData({
            provinceIndex1: e.detail.value
        })
    },
    bindCityChange1: function(e) {
        console.log('City 发生选择改变，携带值为', e.detail.value);

        this.setData({
            cityIndex1: e.detail.value
        })
    },
    bindCountyChange1: function(e) {
        console.log('County 发生选择改变，携带值为', e.detail.value);

        this.setData({
            countyIndex1: e.detail.value
        })
    },
    bindAccountChange: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);

        this.setData({
            accountIndex: e.detail.value
        })
    },
    bindAgreeChange: function (e) {
        this.setData({
            isAgree: !!e.detail.value.length
        });
    },
    openConfirm: function () {
        wx.showModal({
            title: '选择出发地',
            content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
            confirmText: "主操作",
            cancelText: "辅助操作",
            success: function (res) {
                console.log(res);
                if (res.confirm) {
                    console.log('用户点击主操作')
                }else{
                    console.log('用户点击辅助操作')
                }
            }
        });
    }
});