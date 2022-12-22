/* lecture 14 Spread Operator */
let displayColors = function(message, ...colors){ // Rest Operator
  console.log(message) // list of colors
  console.log(colors) // ['Orange','yellow','Indigo']
  console.log(arguments.length) // 4

  for(let i in colors){
    console.log(colors[i])
  }
 // Orange
 // yellow
 // Indigo
  }
  
  let message = 'list of colors'
  let colorArray = ["Orange", 'yellow', 'Indigo']
  displayColors(message, ...colorArray) // Spread Operator
  // displayColors(message,'red1') // list of colors, red1
  // displayColors(message,'red2','blue2') // list of colors,  red2, blue2
  // displayColors(message, 'red3','blue3','green3')// list of colors,  red3, blue3, green3