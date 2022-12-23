/* lecture 15 Object Literals Part 1 */

// // normally we do like this
// let firstName = "Chandler"
// let lastName = "Bing"

// let person = {
//   firstName: firstName,
//   lastName: lastName
// }

// console.log(person.firstName)
// console.log(person.lastName)

// // ES6 shorthand for Object Literals
// let firstName = "Chandler"
// let lastName = "Bingsss"

// let person = {
//   firstName,
//   lastName
// }

// console.log(person.firstName)
// console.log(person.lastName)

// // Return an Object literal from a function normal way
// function createPerson(firstName, lastName){
//   let fullName = firstName + " " + lastName;
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: fullName
//   }
// }

// let person = createPerson("Aamir", "Muhammad")
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.fullName)


// // Return an Object literal from a function ES6 shorthand
// function createPerson(firstName, lastName){
//   let fullName = firstName + " " + lastName;
//   return {
//     firstName,
//     lastName,
//     fullName
//   }
// }

// let person = createPerson("idrees", "Muhammad")
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.fullName)

// // return one property as a function in Object Literal normal way
// function createPerson(firstName, lastName, age){
//   let fullName = firstName + " " + lastName;
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: fullName,
//     isSenior: function(){
//       return age > 60
//     }
//   }
// }

// let person = createPerson("idrees", "Muhammad", 34)
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.fullName)
// console.log(person.isSenior()) // false not senior citzen

// return one property as a function in Object Literal ES6 shorthand
function createPerson(firstName, lastName, age){
  let fullName = firstName + " " + lastName;
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: fullName,
    isSenior(){
      return age > 60
    }
  }
}

let person = createPerson("Aamir", "Muhammad", 64)
console.log(person.firstName)
console.log(person.lastName)
console.log(person.fullName)
console.log(person.isSenior()) // true is a senior citzen