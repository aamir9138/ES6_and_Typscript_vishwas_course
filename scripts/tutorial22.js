"use strict";
/* lecture 22 Class Body and Methods */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        console.log(this.name + " from constructor method called automatically upon instantiation of Person class");
    }
    Person.staticPerson = function () {
        console.log("static method can be called directly by using Person class without an object");
    };
    Person.prototype.greet = function () {
        console.log("prototype method, which we can call using the class instance (object)");
    };
    return Person;
}());
var p = new Person("Chandler");
Person.staticPerson();
p.greet();
//# sourceMappingURL=tutorial22.js.map