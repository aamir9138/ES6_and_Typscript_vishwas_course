/* lecture 21 Class */

// // Class
// let p1 = new Person() // here it gives us error ("Person is not a constructor")
// // it means classes are not hoisted like normal functions
// class Person{}
// let p = new Person()
// console.log(typeof(Person)) // function. means class is infact a function

// // function
// employee1()  // so if we call function before its declaration it is fine.
// // functions are hoisted
// function employee1(){}
// employee1()  

class Person{
  greet(){}
}
let p = new Person()
console.log(p.greet === Person.prototype.greet) // true