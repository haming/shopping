/**
 * Created by haoming on 2019/1/1.
 */
require("../../common/common");
require("./index.css");


var vm = new Vue({
    el: '#vue_det',
    data: {
        site: "菜鸟教程",
        url: "www.runoob.com",
        alexa: "10000"
    },
    methods: {
        details: function () {
            return this.site + " - 学的不仅是技术，更是梦想！";
        }
    }
})

$(document).ready(function () {
    console.log("vue-test")
})

