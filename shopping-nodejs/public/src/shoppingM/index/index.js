/**
 * Created by haoming on 2019/1/1.
 */
require("./index.css");

$(document).ready(function () {
    console.log(formatData(5168737.4123))

   function formatData(num) {
        num += '';
        if (!num.includes('.')) num += '.';
        return num.replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
            return $1 + ',';
        }).replace(/\.$/, '');
    }

})