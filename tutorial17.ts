/* lecture 17 Destructuring Array */
// let employee = ["Chandler", "Bing", "male"]
// let [firstName, lastName, gender] = employee; // destructuring
// // each value from the employee Array is assigned to the corresponding value on the left
// console.log(firstName)  // Chandler
// console.log(lastName)   // Bing
// console.log(gender)     // male

// let employee = ["Chandler", "Bing"]
// let [firstName, lastName, gender] = employee; // destructuring
// // here the gender will output undefined as no value is present in "employee for it" on the right hand side
// console.log(firstName)  // Chandler
// console.log(lastName)   // Bing
// console.log(gender)     // undefined

// let employee = ["Chandler", "Bing", "male"]
// let [, , gender] = employee; // destructuring
// // we can take any value from employee array leave the space empty for others on the left hand side
// console.log(gender)     // male

// let employee = [32, "Chandler", "Bing", "male"]
// // here first value of 32 is assigned to age, and the rest is caught by the rest operator in an array.
// let [age, ...person] = employee; // destructuring
// console.log(person)  // ['Chandler', 'Bing', 'male']
// console.log(age)   // 32

// let employee = [32, "Chandler", "Bing", "male", "pakistan"]
// // The Rest Operator must be the last one in a destructuring operator otherwise it will give error.
// let [age, ...person, address] = employee; // destructuring
// console.log(person)  // error
// console.log(age)  

// // destructuring with default values
// let employee = ["Chandler", "Bing"]
// let [firstName, lastName, gender="female"] = employee; // destructuring
// console.log(firstName)  // Chandler
// console.log(lastName)   // Bing
// console.log(gender)     // female

// if we provide now male in the above array
let employee = ["Chandler", "Bing", "male"]
let [firstName, lastName, gender="female"] = employee; // destructuring
console.log(firstName)  // Chandler
console.log(lastName)   // Bing
console.log(gender)     // male