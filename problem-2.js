function evenOdd(name) {
	// This function will take a valid string as a name and check how many characters it contains. If the number of characters is even, then it will return 'even'. Otherwise, it will return 'odd'.

	if (typeof name !== 'string') {
		return 'Enter a valid name!';
	}

	const totalCharacters = name.length;
	if (totalCharacters % 2 === 0) {
		return 'Even';
	} else {
		return 'Odd';
	}
}

let output = evenOdd('wewge');
console.log(output);
