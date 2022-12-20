"use strict";
/* it will display 0 1 2 3 4 5. which is fine*/
for (var i = 0; i < 6; i++) {
    console.log(i);
}
/* if we want to display after 1 sec. then we get value 6 six times*/
for (var i = 0; i < 6; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 1000);
};
/*for that reason we use let keyword in for loop or we can use IIFE it will display 0 1 2 3 4 5. which is fine*/
for (var i_1 = 0; i_1 < 6; i_1++) {
    _loop_1(i_1);
}
//# sourceMappingURL=tutorial7.js.map