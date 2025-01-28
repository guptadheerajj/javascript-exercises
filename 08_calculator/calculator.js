const add = function (...num) {
	return num.reduce((sum, current) => (sum += current), 0);
};

const subtract = function (...num) {
	return num.reduce((difference, current) => difference - current);
};

const sum = function (num) {
	return num.reduce((sum, current) => (sum += current), 0);
};

const multiply = function (num) {
	return num.reduce((product, current) => product * current, 1);
};

const power = function (a, b) {
	return a ** b;
};

const factorial = function (num) {
  let fact = 1;
  for(let i = num; i > 0; i--) {
    fact *= i;
  }
  return fact
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
