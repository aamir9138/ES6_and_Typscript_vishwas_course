// /* lecture 23 Class Inheritance */
// class Person{
//   constructor(){
//     console.log("Person class constructor")
//   }
// }
// class Employee extends Person{

// }
// const e = new Employee()

// // for parameterized constructor
// class Person{
//   constructor(name){
//     console.log(name + " Person class constructor")
//   }
// }
// class Employee extends Person{

// }
// const e = new Employee('Chandler')

// // scenario 2: a constructor in child class also
// class Person{
//   constructor(name){
//     console.log(name + " Person class constructor")
//   }
// }
// class Employee extends Person{
//   constructor(name){
//     super(name)
//     console.log(name + "Employee class constructor")
//   }
// }
// const e = new Employee('Chandler')

// // output
// // Chandler Person class constructor
// // ChandlerEmployee class constructor


// // scenario: calling parent class method from child
// class Person{
//   constructor(name){
//     console.log(name + " Person class constructor")
//   }
//   getId(){
//     return 10
//   }
// }
// class Employee extends Person{
//   constructor(name){
//     super(name)
//     console.log(name + "Employee class constructor")
//   }
// }
// const e = new Employee('Chandler')
// console.log(e.getId())  // 10

// // scenario: if parent and child has same methods. child method will be called
// class Person{
//   constructor(name){
//     console.log(name + " Person class constructor")
//   }
//   getId(){
//     return 10
//   }
// }
// class Employee extends Person{
//   constructor(name){
//     super(name)
//     console.log(name + "Employee class constructor")
//   }
//   getId(){
//     return 50
//   }
// }
// const e = new Employee('Chandler')
// console.log(e.getId())  // 50 from child class

// scenario: accessing parent method in child class
class Person{
  constructor(name){
    console.log(name + " Person class constructor")
  }
  getId(){
    return 10
  }
}
class Employee extends Person{
  constructor(name){
    super(name)
    console.log(name + "Employee class constructor")
  }
  getId(){
    return super.getId() // accessing parent method.
  }
}
const e = new Employee('Chandler')
console.log(e.getId())  // 10 child class method calling parent class method.