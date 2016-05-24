'use strict'
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = this.sayName.bind(this);
  }

  sayName() {
    console.log(`My name is ${this.name}`)
  }
}

var p1 = new Person('bill', 15);
var p2 = new Person('sally', 15);

p2.sayNameTwo = p1.sayName
p2.sayNameTwo(); // My name is bill
