## ES2015 or ES6

### Transpiler

- As the browsers like chrome and firefox still didn't implemented all the functionality is ES6. Transpiler are used to convert ES6 to browser compatible ES5.

### Types of Transpiler

1. Babel
2. Traceur
3. TypeScript

- We will be using TypeScript in this series as Transpiler

### install Typescript globally

```
npm install typescript -g
```

### configuring Typescript with the editor

press `ctrl+shift+b`.
So as I following this tutorial in 2022 while it was done in 2016. so things are a bit different.

1. create a folder `.vscode` in the main folder.
2. add a tasks.json file and write this

```
{
  "version": "2.0.0",
  "command": "tsc",
  "isShellCommand": true,
  "args": ["-w","-p","."],
  "showOutput":"silent",
  "isWatching": true,
  "problemMatcher":"$tsc-watch"
}
```

3. `tsc -v` is for to check the typescript compiler version
4. `tsc --init` to initial it with a `tsconfig.json` file
5. it will give us with alot of commented configuration. we will use the below ones

```
{
  "compilerOptions": {
    "target": "ES5",                          /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "module": "commonjs",                     /* Specify what module code is generated. */
    "sourceMap": true,                        /* Create source map files for emitted JavaScript files. */
    "outDir": "scripts/",                     /* Specify an output folder for all emitted files. */
    "esModuleInterop": true,                  /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true, /* Ensure that casing is correct in imports. */
    "strict": true,                           /* Enable all strict type-checking options. */
    "noImplicitAny": false,                   /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    "skipLibCheck": true                      /* Skip type checking all .d.ts files. */
  },
  "exclude": [
    "node_modules"
  ]
}
```

6. create `demo.ts` file. write some javascript code.
7. `ctrl+shift+b` and watch

### create index.html file

1. create index.html file
2. give the path to the script file created from typescript file in script tag.

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script type="text/javascript" src="scripts/demo.js"></script>
  <title>Document</title>
</head>
<body>

</body>
</html>
```

### install lite-server

1. `npm install lite-server -g`
2. in terminal `lite-server`
3. press F12 to see console.

## challenges in ES5

1. `var keyword` has problems of hoisting
2. see the below code from `tutorial5.ts` file.This is working fine. but is not the same as Java or C#. `greet` is declared twice but it still works.

```
function greetPerson (name){
  if(name === "chandler"){
    var greet = "Hi Chandler"
  }else {
    var greet = "Hi there"
  }
  console.log(greet)
}
greetPerson("chandler")
```

so behind the curtain in javascript it converts the same variable to one single on top of the function like this below

```
function greetPerson (name){
  var greet
  if(name === "chandler"){
    greet = "Hi Chandler"
  }else {
    greet = "Hi there"
  }
  console.log(greet)
}
greetPerson("chandler")
```

3. `var` keyword has both hoisting and functional scope. so if we declare `var greet`. it will hoist and go to the top behind the curtain

```
function greetPerson (name){
  if(name === "chandler"){
    greet = "Hi Chandler"
  }else {
    greet = "Hi there"
  }
  var greet
  console.log(greet)
}
greetPerson("chandler")
```

4. even if `var greet` is declared inside `if/else` statement it will hoist to the top of function and will be accessable throughout the function body
5. that is the reason in `ES6` we have other keywords like `let`

### let keyword

1. `let` keyword has block scope
2. is not hoisted
3. we cannot redeclare it in the same block scope while `var` can be redeclare in the function scope

```
function greetPerson (name){
  if(name === "chandler"){
    let greet = "Hi Chandler"
  }else {
    let greet = "Hi there"
  }
  console.log(greet) // here greet is not known because of let
}
greetPerson("chandle")
```

4. the proper way should be

```
function greetPerson (name){
  let greet
  if(name === "chandler"){
    greet = "Hi Chandler"
  }else {
    greet = "Hi there"
  }
  console.log(greet)
}
greetPerson("chandle")
```

5. an example on `var` and `let` keyword scope and hoisting

```
var a=1
var b=2

if(a === 1){
  var a = 10
  let b = 20
  console.log(a)  //10
  console.log(b)  //20
}
console.log(a)    //10
console.log(b)    //2
```

6. if we declare the let greet after console.log statement as below we get an error. `Block-scoped variable 'greet' used before its declaration.`

```
function greetPerson (name){
  if(name === "chandler"){
    greet = "Hi Chandler"
  }else {
    greet = "Hi there"
  }
  console.log(greet)
  let greet
}
greetPerson("chandle")
```

7. redeclaration

```
var c=1
var c=2 // redeclaration possible with var

let d=3
let d=4 // redeclaration not possible with let. cannot redeclare block scope variable d.
```

### let keyword in for loop instead of var

1. in simple for loop

```
/* it will display 0 1 2 3 4 5. which is fine*/
for(var i=0; i<6;i++){
  console.log(i)
}
```

2. for loop with setTimeout

```
/* if we want to display after 1 sec. then we get value 6 six times*/
for(var i=0; i<6;i++){
 setTimeout(function(){
   console.log(i)
 },1000)
}
```

3. for loop with let keyword

```
/*for that reason we use let keyword in for loop or we can use IIFE it will display 0 1 2 3 4 5. which is fine*/
for(let i=0; i<6;i++){
  setTimeout(function(){
    console.log(i)
  },1000)
 }
```

### setTimeout

setTimeout take 2 parameters. one is a function and second is the amount of time in millisecond

```
 setTimeout(function(){ },1000)
```

### const keyword

1. `const` unlike `let` must be initialized. otherwise we get error.

```
let num1;
const num2 = 8; //we have to initialize not possible like `let` above
```

2. `const` is not hoisted same like `let`
3. `const` has block scope same like `let`
4. also we cannot change `const` after initialized.

### const with objects

1. we cannot assign another object to `const` initialized object.

```
const obj1 ={
  name: "Aamir"
}
console.log(obj1.name)
const obj1 = {} // not possible to assign another object
```

2. however we can access the properties of const object and can change it.

```
const obj1 ={
  name: "Aamir"
}
console.log(obj1.name) // Aamir
obj1.name = "idress"
console.log(obj1.name) // idress
```

### let vs const

1. use let when reassignment is expected.
2. use const when reassignment is not expected.

```
const PI = 3.14

const MAX_SIZE = 100; // Array size

// swapping program

let a = 4
let b = 5

console.log(a) // 4
console.log(b) // 5

a = a + b
b = a - b
a = a - b

console.log(a) // 5
console.log(b) // 4
```

### Arrow functions

```
var getRegValue = function(){
  return 10
}
console.log(getRegValue())

// Arrow function
// const getArrowValue = () => {
//   return 10
// }
// console.log(getArrowValue())

// short hand
// const getArrowValue = () => 10
// console.log(getArrowValue())

// for single parameter short hand version
// const getArrowValue = m => 10*m;
// console.log(getArrowValue(5))

// for 2 parameters short hand version
const getArrowValue = (m, bonus) => 10*m + bonus;
console.log(getArrowValue(5, 50))

// if more than one line in function body add curly braces and return statement
```

### lexical this keyword in nested functions

1. with the arrow function the this keyword use can be greatly simplified as below code
2. Arrow function is not going to create its on `this`

```
var employee = {
  id: 1,
  greet: function(){
    console.log(this.id)
  }
}
console.log(typeof employee)
employee.greet() // 1

// if we are using a normal function inside another function. we have to assign this to another variable and then use it in the nested function
var employee = {
  id: 2,
  greet: function(){
    var self = this;
    setTimeout(function(){
      console.log(self.id)
    },1000)
  }
}
console.log(typeof employee)
employee.greet() //2

// with the help of arrow function no need for the extra step. we can use this directly
var employee = {
  id: 3,
  greet: function(){
    setTimeout(() => {
      console.log(this.id)
    },1000)
  }
}
console.log(typeof employee)
employee.greet() // 3
```

## lecture 12 Default function parameters

1. in ES5 if we would have to call a function with a value which is not passed to it. it will give us an `undefined` output for the value. for example in below code.

```
/* lecture 12 Default function Parameters */

// with ES5 it was not possible to pass a default value
// Error value is not defined
// let getValue = function(){
//   console.log(value)
// }
// getValue();
```

2. is ES6 we can give a default value in function definition

```
// with ES6 it is possible for pass a default value in funtion definition
// so even if we didn't pass a value while calling the function it will take the default
let getValue = function(value = 5){
  console.log(value)
}
getValue();  // 5
```

3. call for a second time by passing a value

```
let getValue = function(value = 5){
  console.log(value)
}
getValue(); // 5
getValue(10) // 10
```

4. add a second default value of `bonus`

```
// adding a second default value bonus
let getValue = function(value = 5, bonus=10){
  console.log(value + bonus)
}
getValue(); // 15
getValue(10) // 20
getValue(20,30) // 50
getValue(undefined, 30) // 35. undefined will take the default value
```

5. lets tweek our parameters

```
// lets tweek our parameters
let getValue = function(value = 5, bonus=value*0.1){
  console.log(value + bonus)
}
getValue(); // 5.5
getValue(10) // 11
getValue(20,30) // 50
getValue(undefined, 30) // 35. undefined will take the default value
```

6. we can also assign the number in parameters to a variable

```
// we can assign variable to the number in parameter
let percentBonus = 0.1
let getValue = function(value = 5, bonus=value*percentBonus){
  console.log(value + bonus)
}
getValue(); // 5.5
getValue(10) // 11
getValue(20,30) // 50
getValue(undefined, 30) // 35. undefined will take the default value
```

7. we can also assign values to a function instead of a variable

```
// we can assign values to a function instead of a variable
let percentBonus = () => 0.1
let getValue = function(value = 5, bonus=value*percentBonus()){
  console.log(value + bonus)
}
getValue(); // 5.5
getValue(10) // 11
getValue(20,30) // 50
getValue(undefined, 30) // 35. undefined will take the default value
```

8. what about `arguments.length`. it will take into consideration the arguments passed and not the default values

```
// what about `arguments.length`. it will take into consideration the arguments passed and not the default values
let percentBonus = () => 0.1
let getValue = function(value = 5, bonus=value*percentBonus()){
  console.log(value + bonus)
  console.log(arguments.length) // output 0,1,2
}
getValue(); // 5.5
getValue(10) // 11
getValue(20,30) // 50
getValue(undefined, 30) // 35. undefined will take the default value
```

9. we cannot assign the right side default value to the left side value. it doesn't support look ahead. so in below example gives us an error (parameter "value" cannot reference identifier "bonus" declare after it Error)

```
// parameter "value" cannot reference identifier "bonus" declare after it Error
let percentBonus = () => 0.1
let getValue = function(value = bonus, bonus=value*percentBonus()){
  console.log(value + bonus)
  console.log(arguments.length) // output 0,1,2,2
}
getValue(); // 5.5
getValue(10) // 11
getValue(20,30) // 50
getValue(undefined, 30) // 35. undefined will take the default value
```

## lecture 13 Rest Operator

- let's have a function that display colors
- so in ES5 we can have something like below

```
let displayColors = function(){
for(let i in arguments){
  console.log(arguments[i])
}
}

displayColors('red1') // red1
displayColors('red2','blue2') // red2, blue2
displayColors('red3','blue3','green3')// red3, blue3, green3

// output will be
// red1
// red2
// blue2
// red3
// blue3
// green3
```

- so in the above code one can say that function is not expecting any argument, but we are passing different no of arguments in the function call.
- also one can say what is `argument` inside the function from where did it come
- also if we have to pass a message with each function call. so the code becomes

```
// if we have to pass a message also

let displayColors = function(){
  console.log(message)
  for(let i in arguments){
    console.log(arguments[i])
  }
  }

  let message = 'list of colors'
  displayColors(message,'red1') // list of colors, list of colors, red1
  displayColors(message,'red2','blue2') // list of colors, list of colors, red2, blue2
  displayColors(message, 'red3','blue3','green3')// list of colors, list of colors, red3, blue3, green3

  // output will be
  // list of colors
  // list of colors
  // red1
  // list of colors
  // list of colors
  // red2
  // blue2
  // list of colors
  // list of colors
  // red3
  // blue3
  // green3
```

- so the output of the above shows that the `message` is also an argument

### importance of Rest Parameters is ES6

1. The Rest parameters represents an indefinite number of arguments as an array
2. we can modify the above code with Rest parameters which will make much more sense

```
// we can modify the above code with ES6 to make it more readable and will make sense
let displayColors = function(message, ...colors){
  console.log(message) // list of colors
  console.log(colors) // ['red1'], ['red2', 'blue2'], ['red3', 'blue3', 'green3']
  console.log(arguments.length) // 2,3,4

  for(let i in colors){
    console.log(colors[i])
  }
  }

  let message = 'list of colors'
  displayColors(message,'red1') // list of colors, red1
  displayColors(message,'red2','blue2') // list of colors,  red2, blue2
  displayColors(message, 'red3','blue3','green3')// list of colors,  red3, blue3, green3

  //output is below
  // list of colors
  // ['red1']
  // 2
  // red1
  // list of colors
  // (2) ['red2', 'blue2']
  // 3
  // red2
  // blue2
  // list of colors
  // (3) ['red3', 'blue3', 'green3']
  // 4
  // red3
  // blue3
  // green3
```

## lecture 14 Spread Operator

- Spread Operator is opposite to Rest Operator. Rest Operator was gathering all the arguments in an Array. while Spread Operator is removing all the items from array.
- Rest == combine
- Spread == split
- `Rest Operator` is used in the `function declaration` where as the `Spread Operator` is used in the function call
- let say we have an Array of colors and we want to pass it to a function

```
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
```

## lecture 15 Object Literals Part 1

- let us see the code what we would normally do

```
// normally we do like this
let firstName = "Chandler"
let lastName = "Bing"

let person = {
  firstName: firstName,
  lastName: lastName
}

console.log(person.firstName)
console.log(person.lastName)
```

- this thing below is called an Object Literal

```
{
  firstName: firstName,
  lastName: lastName
}
```

- ES6 provides shorthand for these Object Literals.

1. if we have the `propertyName` i.e `firstName and lastName` same as the `variable name` i.e `firstName and lastName` as above. we can just write it one time.

```
firstName,
lastName
```

2. we can also return an object with the same shorthand notation. first we will see the normal way which we were using till now.

```
// // Return an Object literal from a function normal way
function createPerson(firstName, lastName){
  let fullName = firstName + " " + lastName;
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: fullName
  }
}

let person = createPerson("Aamir", "Muhammad")
console.log(person.firstName)
console.log(person.lastName)
console.log(person.fullName)
```

3. now the ES6 shorthand of returning an Object Literal from a function

```
// Return an Object literal from a function ES6 shorthand
function createPerson(firstName, lastName){
  let fullName = firstName + " " + lastName;
  return {
    firstName,
    lastName,
    fullName
  }
}

let person = createPerson("idrees", "Muhammad")
console.log(person.firstName)
console.log(person.lastName)
console.log(person.fullName)
```

4. now let say we have a function as one of the property in Object Literal

```
// return one property as a function in Object Literal normal way
function createPerson(firstName, lastName, age){
  let fullName = firstName + " " + lastName;
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: fullName,
    isSenior: function(){
      return age > 60
    }
  }
}

let person = createPerson("idrees", "Muhammad", 34)
console.log(person.firstName)
console.log(person.lastName)
console.log(person.fullName)
console.log(person.isSenior()) // false not senior citzen
```

5. returning a function proptery in Object Literal using ES6 shorthand. in this we can remove the function keyword and the colon as below.

```
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
```

## lecture 16 Object Literal Part 2

1. continuing on Object Literals. with ES6 we can have Object Literals with `properties` name having spaces between the words. like so

```
let person = {
  "first name": "Chandler"
}
```

2. if we have a property defined like this than when we want to access it. we can't use the `dot` structure instead we have to use `[]` with the property name inside with double quotes. like so

```
console.log(person["first name"]) // Chandler
```

3. also the property name can be a variable. but then we have to use the `[]` brackets. like below

```
/* lecture 16 Object literals Part 2 */

let ln = "last name"
let person = {
  "first name": "Chandler",
  [ln]: "Bing"
}
console.log(person) // {
  // first name : 'Chandler',
  // last name : 'Bing'}
```
