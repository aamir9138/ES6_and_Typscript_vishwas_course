"use strict";
/* lecture 16 Object literals Part 2 */
var _a;
var ln = "last name";
var person = (_a = {
        "first name": "Chandler"
    },
    _a[ln] = "Bing",
    _a);
console.log(person); // {
// first name : 'Chandler',
// last name : 'Bing'}
//# sourceMappingURL=tutorial16.js.map