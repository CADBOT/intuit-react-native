var names = ['timmy', 'beth', 'bob']

names.forEach(function(name) {
  console.log(name);
});

var newNames = names.map(function(name) {
  return name + '!'
});

var withoutBob = names.filter(function(name) {
  if (name == 'bob') {
    return false;
  }
});

var withoutBobExclaim = names.filter(function(name) {
  if (name === 'bob') {
    return false
  }
  return true
}).map(function(name) {
  return name + '!';
});

var numbers = [1, 15, 20];

// use map to add 100 to each number
// array of numbers. all even numbers
