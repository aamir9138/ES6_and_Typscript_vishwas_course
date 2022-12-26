"use strict";
/* lecture 18 Destructuring Objects */
// let employee = {
//   firstName: "Chandler",
//   lastName: "Bing",
//   gender: "male"
// }
// // the property names and the variables name must be same while destructuring objects 
// let {firstName, lastName, gender} = employee; // destructuring object
// console.log(firstName)  // Chandler
// console.log(lastName)   // Bing
// console.log(gender)     // male
// use of aliases
var employee = {
    firstName: "Chandler",
    lastName: "Bing",
    gender: "male"
};
// the property names and the variables name must be same while destructuring objects 
var fn = employee.firstName, ln = employee.lastName, g = employee.gender; // destructuring object
console.log(fn); // Chandler
console.log(ln); // Bing
console.log(g); // male
//# sourceMappingURL=tutorial18.js.map