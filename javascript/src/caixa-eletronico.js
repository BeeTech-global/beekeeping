const bills = [100, 50, 20, 10]

const caixaEletronico = {
	draw: (amount) => {
		if (amount % bills[bills.length - 1] !== 0) {
			throw new Error("Aceita troco em bala?")
		}
		let change = amount;
		return bills.reduce((result, note) => {
			const notes = Math.floor(change / note);
			change = change % note;
			return (notes >= 1) ?
				Object.assign(result, {
				[note]: notes
			}) : result
		},{});
	}
}

export default caixaEletronico;
