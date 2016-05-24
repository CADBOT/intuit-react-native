function outer() {
  let x = 10;
  function inner() {
    let y = 20;
    console.log(x);
    console.log(y);
  }
  return inner;
}

var inner = outer();
inner();

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function() {
    console.log(`my name is ${name}`)
  }
}

var p1 = new Person('Charlie', 15);
console.log(p1);
var sayName = p1.sayName
sayName();
p1.name = 'Charles'
sayName();
console.log(p1);
