const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(arr) {
  let array = arr;
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
	
};

const multiply = function(arr) {
  let multiplyArr = arr;
  let multiply = multiplyArr[0];
  for (let i = 1; i < multiplyArr.length; i++){
    multiply *= multiplyArr[i];
  }
  return multiply;
};

const power = function() {
	
};

const factorial = function() {
	
};
// npm test calculator.spec.js
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
