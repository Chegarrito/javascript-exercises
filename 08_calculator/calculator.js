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

const power = function(num, power) {
  return Math.pow(num,power);
};

const factorial = function(num) {
  // SET initial value to 2
  let ans = 2;
  if(num === 0){
    return 1;
  }
  else if(num === 1 || num === 2){
    return num;
  }
  else {
    // REPEAT until we get to the num
  // SET counter to 3
    for(let i = 3; i <= num; i++){
      ans = ans * i;
    } 
    return ans; 
  }
  }

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
