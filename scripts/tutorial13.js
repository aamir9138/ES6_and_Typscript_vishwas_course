"use strict";
/* lecture 13 Rest Operator */
// let displayColors = function(){
// for(let i in arguments){
//   console.log(arguments[i])
// }
// }
// displayColors('red1') // red1
// displayColors('red2','blue2') // red2, blue2
// displayColors('red3','blue3','green3')// red3, blue3, green3
// // if we have to pass a message also
// let displayColors = function(){
//   console.log(message)
//   for(let i in arguments){
//     console.log(arguments[i])
//   }
//   }
//   let message = 'list of colors'
//   displayColors(message,'red1') // list of colors, list of colors, red1
//   displayColors(message,'red2','blue2') // list of colors, list of colors, red2, blue2
//   displayColors(message, 'red3','blue3','green3')// list of colors, list of colors, red3, blue3, green3
// // we can modify the above code with ES6 to make it more readable and will make sense
// let displayColors = function(message, ...colors){
//   console.log(message) // list of colors
//   console.log(colors) // ['red1'], ['red2', 'blue2'], ['red3', 'blue3', 'green3']
//   console.log(arguments.length) // 2,3,4
//   for(let i in colors){
//     console.log(colors[i])
//   }
//   }
//   let message = 'list of colors'
//   displayColors(message,'red1') // list of colors, red1
//   displayColors(message,'red2','blue2') // list of colors,  red2, blue2
//   displayColors(message, 'red3','blue3','green3')// list of colors,  red3, blue3, green3
//# sourceMappingURL=tutorial13.js.map