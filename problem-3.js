function isLGSeven(num) {
	// This function will take a valid number and find its difference with 7. If this difference is less than 7, it will return that subtraction. But if the difference is greater than 7, it will return twice the number taken as input.
	if (typeof num !== 'number') {
		return 'Enter a valid number!';
	}

	const difference = num - 7;
	if (difference < 7) {
		return difference;
	} else {
		return num * 2;
	}
}
let kk = 23.34;
// let output = isLGSeven(isNaN(kk));
// // console.log(output);
console.log(!Number.isInteger(kk));
// console.log(isInteger(kk));
