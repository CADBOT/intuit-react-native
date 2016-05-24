function adder(num1) {
  return function(num2) {
    return num1 + num2;
  }
}

var add4 = adder(4);

add4(10);

adder(10)(5)
