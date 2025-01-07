// best approach - solution
const removeFromArray = function (array, ...args) {
	const newArray = [];

	array.forEach((element) => {
		if (!args.includes(element)) {
			newArray.push(element);
		}
	});

	return newArray;
};

// 3rd method
// const removeFromArray = function (array, ...toRemove) {
// 	const newArray = [];

// 	for (const value of array) {
// 		let isPresent = false;
// 		for (const removeValue of toRemove) {
// 			if (value === removeValue) {
// 				isPresent = true;
// 				break;
// 			}
// 		}
// 		if (!isPresent) {
// 			newArray.push(value);
// 		}
// 	}
// 	return newArray;
// };

// 2nd method
// const removeFromArray = function (array) {
// 	const newArray = [];
// 	const removeElements = Array.from(arguments);
// 	removeElements.shift();

// 	for (const value of array) {
// 		let isToBeRemoved = false;
// 		for (const removeValue of removeElements) {
// 			console.log(removeValue);
// 			if (value === removeValue) {
// 				isToBeRemoved = true;
// 				break;
// 			}
// 		}
// 		if (isToBeRemoved) {
// 			continue;
// 		}
// 		newArray.push(value);
// 	}

// 	return newArray;
// };

// 1st method
// const names = ["dheeraj", "anuj", "akash"];
// console.log(removeFromArray(names, "anuj", "dheeraj"));

// const removeFromArray = function (array) {
// 	const newArray = [];
// 	console.log(arguments);
// 	for (const value of array) {
// 		let toBeRemoved;
// 		for (let i = 1; i < arguments.length; i++) {
// 			if (value === arguments[i]) {
// 				toBeRemoved = arguments[i];
// 				continue;
// 			}
// 		}
// 		if (toBeRemoved) {
// 			continue;
// 		}
// 		newArray.push(value);
// 	}
// 	return newArray;
// };

// const names = ["dheeraj", "anuj", "akash"];
// console.log(names);
// console.log(removeFromArray(names, "anuj", "dheeraj"));
// // Do not edit below this line
module.exports = removeFromArray;
