function mindGame(num) {
	// This function will take a positive number and multiply it by 3, then add 10. Then divide the result by 2 and subtract 5. After calculation, it will return the final result.

	if (num < 0) {
		return 'sorry! provide a positive number.';
	} else {
		const result = (num * 3 + 10) / 2 - 5;
		return result;
	}
}

function evenOdd(name) {
	// This function will take a valid string as a name and check how many characters it contains. If the number of characters is even, then it will return 'even'. Otherwise, it will return 'odd'.

	if (typeof name !== 'string') {
		return 'Enter a valid name!';
	}

	const totalCharacters = name.length;
	if (totalCharacters % 2 === 0) {
		return 'even';
	} else {
		return 'odd';
	}
}

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

function gemsToDiamond(firstFriendsGems, secondFriendsGems, thirdFriendsGems) {
	//This function will take three different numbers of gems. It will multiply the first number by 21, the second by 32 and the third by 43. Then it will add all the multiples. If the sum is less than 2000, it will return the sum. But if the sum is more than 2000, it will subtract 2000 from the sum and return the final result.
	if (
		typeof firstFriendsGems !== 'number' ||
		typeof secondFriendsGems !== 'number' ||
		typeof thirdFriendsGems !== 'number'
	) {
		return 'please provide valid numbers';
	}

	const firstFriendsDiamonds = firstFriendsGems * 21;
	const secondFriendsDiamonds = secondFriendsGems * 32;
	const thirdFriendsDiamonds = thirdFriendsGems * 43;

	const totalDiamonds = firstFriendsDiamonds + secondFriendsDiamonds + thirdFriendsDiamonds;

	if (totalDiamonds > 2000) {
		return totalDiamonds - 2000;
	} else {
		return totalDiamonds;
	}
}