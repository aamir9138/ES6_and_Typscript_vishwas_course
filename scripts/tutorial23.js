"use strict";
// /* lecture 23 Class Inheritance */
// class Person{
//   constructor(){
//     console.log("Person class constructor")
//   }
// }
// class Employee extends Person{
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name) {
        console.log(name + " Person class constructor");
    }
    Person.prototype.getId = function () {
        return 10;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + "Employee class constructor");
        return _this;
    }
    Employee.prototype.getId = function () {
        return _super.prototype.getId.call(this); // accessing parent method.
    };
    return Employee;
}(Person));
var e = new Employee('Chandler');
console.log(e.getId()); // 10 child class method calling parent class method.
//# sourceMappingURL=tutorial23.js.map