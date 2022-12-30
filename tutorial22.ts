/* lecture 22 Class Body and Methods */

class Person{
  name
  constructor(name){
    this.name = name
    console.log(this.name + " from constructor method called automatically upon instantiation of Person class")
  }

  static staticPerson(){
    console.log("static method can be called directly by using Person class without an object")
  }

  greet(){
    console.log("prototype method, which we can call using the class instance (object)")
  }
}
let p = new Person("Chandler")
Person.staticPerson()
p.greet()