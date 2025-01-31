const fibonacci = function (nth) {
	if (typeof nth != Number) {
		nth = parseInt(nth);
	}
	if (nth === 0) return 0;
	if (nth < 0) return "OOPS";

	let first = 0;
	let second = 1;
	for (let i = 2; i <= nth; i++) {
		[first, second] = [second, first + second];
	}
	return second;
};

// Do not edit below this line
module.exports = fibonacci;
