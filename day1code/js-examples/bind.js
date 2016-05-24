'use strict'
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function(x, y) {
  console.log('Name is ' + this.name);
  console.log(x);
  console.log(y);
}
var p1 = new Person('bill', 50);

var sayName = p1.sayName;

var x = 1;
var y = 2;
p1.sayName(x, y);
sayName.call(p1, x, y);

var boundSayName = sayName.bind(p1);
boundSayName();
boundSayName();

/*
 * Part 1
 * Take your Dog or Cat constructor function
 * create one instance of it
 * pull out a methods. and use it with call, bind, and apply
 * explain to a partner, how each one works
 */




