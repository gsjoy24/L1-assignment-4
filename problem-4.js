function findingBadData(data) {
	// This function will take an array and find how many bad data (negative numbers) it contains. then returns the number of bad data.

	if (Array.isArray(data) === false) {
		return 'please! provide an array.';
	}

	const badData = [];
	for (let i = 0; i < data.length; i++) {
		if (data[i] < 0) {
			badData.push(data[i]);
		}
	}
	return badData.length;
}
let nums = [12, 23, -24, 35, 46, -23];
console.log(findingBadData(nums));
