"use strict";
var employee = {
    id: 1,
    greet: function () {
        console.log(this.id);
    }
};
console.log(typeof employee);
employee.greet();
// if we are using a normal function inside another function. we have to assign this to another variable and then use it in the nested function
var employee = {
    id: 2,
    greet: function () {
        var self = this;
        setTimeout(function () {
            console.log(self.id);
        }, 1000);
    }
};
console.log(typeof employee);
employee.greet();
// with the help of arrow function no need for the extra step. we can use this directly
var employee = {
    id: 3,
    greet: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.id);
        }, 1000);
    }
};
console.log(typeof employee);
employee.greet();
//# sourceMappingURL=tutorial11.js.map