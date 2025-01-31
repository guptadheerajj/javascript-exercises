const palindromes = function (str) {
	const validChars = "abcdefghijklmnopqrstuvwxyz0123456789";
	const cleanString = str
		.toLowerCase()
		.split("")
		.filter((char) => validChars.includes(char))
		.join("");
	const reverseCleanString = cleanString.split("").reverse().join("");

	return cleanString === reverseCleanString;
};

// Do not edit below this line
module.exports = palindromes;
