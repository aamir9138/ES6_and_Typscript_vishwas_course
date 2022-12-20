"use strict";
var getRegValue = function () {
    return 10;
};
console.log(getRegValue());
// Arrow function
// const getArrowValue = () => {
//   return 10
// } 
// console.log(getArrowValue())
// short hand
// const getArrowValue = () => 10
// console.log(getArrowValue())
// for single parameter short hand version
// const getArrowValue = m => 10*m;
// console.log(getArrowValue(5))
// for 2 parameters short hand version
var getArrowValue = function (m, bonus) { return 10 * m + bonus; };
console.log(getArrowValue(5, 50));
// if more than one line in function body add curly braces and return statement
//# sourceMappingURL=tutorial10.js.map