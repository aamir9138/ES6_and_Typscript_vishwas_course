"use strict";
/* lecture 12 Default function Parameters */
// with ES5 it was not possible to pass a default value
// Error value is not defined
// let getValue = function(){
//   console.log(value)
// }
// getValue();
// // with ES6 it is possible for pass a default value in funtion definition
// // so even if we didn't pass a value while calling the function it will take the default
// let getValue = function(value = 5){
//   console.log(value)
// }
// getValue(); // 5
// getValue(10) // 10
// // adding a second default value bonus
// let getValue = function(value = 5, bonus=10){
//   console.log(value + bonus)
// }
// getValue(); // 15
// getValue(10) // 20
// getValue(20,30) // 50
// getValue(undefined, 30) // 35. undefined will take the default value
// // lets tweek our parameters
// let getValue = function(value = 5, bonus=value*0.1){
//   console.log(value + bonus)
// }
// getValue(); // 5.5
// getValue(10) // 11
// getValue(20,30) // 50
// getValue(undefined, 30) // 35. undefined will take the default value
// // we can assign variable to the number in parameter
// let percentBonus = 0.1
// let getValue = function(value = 5, bonus=value*percentBonus){
//   console.log(value + bonus)
// }
// getValue(); // 5.5
// getValue(10) // 11
// getValue(20,30) // 50
// getValue(undefined, 30) // 35. undefined will take the default value
// // we can assign values to a function instead of a variable
// let percentBonus = () => 0.1
// let getValue = function(value = 5, bonus=value*percentBonus()){
//   console.log(value + bonus)
// }
// getValue(); // 5.5
// getValue(10) // 11
// getValue(20,30) // 50
// getValue(undefined, 30) // 35. undefined will take the default value
// what about `arguments.length`. it will take into consideration the arguments passed and not the default values
var percentBonus = function () { return 0.1; };
var getValue = function (value, bonus) {
    if (value === void 0) { value = 5; }
    if (bonus === void 0) { bonus = value * percentBonus(); }
    console.log(value + bonus);
    console.log(arguments.length); // output 0,1,2,2
};
getValue(); // 5.5
getValue(10); // 11
getValue(20, 30); // 50
getValue(undefined, 30); // 35. undefined will take the default value
// // parameter "value" cannot reference identifier "bonus" declare after it Error
// let percentBonus = () => 0.1
// let getValue = function(value = bonus, bonus=value*percentBonus()){
//   console.log(value + bonus)
//   console.log(arguments.length) // output 0,1,2,2
// }
// getValue(); // 5.5
// getValue(10) // 11
// getValue(20,30) // 50
// getValue(undefined, 30) // 35. undefined will take the default value
//# sourceMappingURL=tutorial12.js.map