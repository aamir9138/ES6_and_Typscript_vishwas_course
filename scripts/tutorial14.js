"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* lecture 14 Spread Operator */
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message); // list of colors
    console.log(colors); // ['Orange','yellow','Indigo']
    console.log(arguments.length); // 4
    for (var i_1 in colors) {
        console.log(colors[i_1]);
    }
    // Orange
    // yellow
    // Indigo
};
var message = 'list of colors';
var colorArray = ["Orange", 'yellow', 'Indigo'];
displayColors.apply(void 0, __spreadArray([message], colorArray, false)); // Spread Operator
// displayColors(message,'red1') // list of colors, red1
// displayColors(message,'red2','blue2') // list of colors,  red2, blue2
// displayColors(message, 'red3','blue3','green3')// list of colors,  red3, blue3, green3
//# sourceMappingURL=tutorial14.js.map