export default (num) => {
	const n = Number(num);
	let answer = '';
	if (n % 3 === 0) {
		answer += 'fizz';
	}
	if (n % 5 === 0) {
		answer += 'buzz';
	}
	return answer || n;
}