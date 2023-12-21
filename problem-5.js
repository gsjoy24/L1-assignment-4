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
let check = gemsToDiamond(100, 5,4);
console.log(check);
