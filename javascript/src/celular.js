function celular(input) {

	const newInput = input.split('');
	const dic = {
		'A': '2',
		'B': '22',
		'C': '222',
		'D': '3'
	}
	let last;

	return newInput.reduce((output, character) => {
		if (last && last.charAt(0) === dic[character].charAt(0)) {
			output += '_';
		}

		last = dic[character];
		return output + last;
	}, '');
}


export default celular;