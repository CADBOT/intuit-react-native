var numbers = [1, 5, 10, 20];

var newNumbers = numbers.map(function(number) {
  return number + 1;
});

// version 1
var newNumbers = numbers.map((number) => {
  return number + 1;
})

// version 2 only applies to 1 arg functions
var newNumbers = numbers.map(number => {
  return number + 1;
})

// version 2 does not apply to 0 arg functions
var newNumbers = numbers.map(() => {
  return
})

// version 3 does not apply to 0 arg functions
