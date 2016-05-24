function Person(name, age) {
  console.log('New person created')
  //
  // this = {}
  // this.__proto__ = Person.prototype
  //
  this.name = name;
  this.age = age;
  // return this;
}

Person.prototype.sayName = function() {
  console.log('My name is ' + this.name);
}



var p1 = new Person('hank', 50);
var p2 = new Person('bill', 40);
console.log(p1.__proto__);
console.log(p1.__proto__ == Person.prototype);
p1.sayName();
console.log(p1.sayName());
