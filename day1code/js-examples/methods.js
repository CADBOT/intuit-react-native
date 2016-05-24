'use strict'
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function() {
    console.log(`my name is ${this.name}`);
  }
}

var p1 = new Person('Jill', 20);
p1.sayName();

var personName = p1.name;
var personSayNameFunction = p1.sayName

//personSayNameFunction();
p1.sayNameTwo = personSayNameFunction;
p1.sayNameTwo();

/*
 * Create a Dog or Cat constructor function
 * Must have at least 2 properties, and 2 methods
 * Make the methods use the this keyword
 * break the methods by pulling them out of the object
 */
