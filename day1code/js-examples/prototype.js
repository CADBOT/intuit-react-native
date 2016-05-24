function person(name, age) {
  var obj = {name: name, age: age};
  return obj;
}

function Person(name, age) {
  // behind the scenes
  //this = {};
  // end behind the scens
  this.name = name;
  this.age = age;
  // behind the scenes
  //return this;
  //
}

var p1 = person('bob', 20);

var p2 = new Person('bob', 20);

console.log(p1);
console.log(p2);

var p3 = new person('bob', 20);
console.log(p3);
