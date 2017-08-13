import { expect } from 'chai';
import celular from '../../src/celular'

// ABC    ->  2 
// DEF    ->  3 
// GHI    ->  4 
// JKL    ->  5 
// MNO    ->  6 
// PQRS    ->  7 
// TUV    ->  8 
// WXYZ   ->  9   
// Espaço -> 0

describe('Celular', function () {
	it('A deve printar um 2', () => {
		expect(celular('A')).to.equal('2')
	})

	it('B deve printar um 22', () => {
		expect(celular('B')).to.equal('22')
	})

	it('C deve printar um 222', () => {
		expect(celular('C')).to.equal('222')
	})

	it('DA deve printar um 222', () => {
		expect(celular('DA')).to.equal('32')
	})

	it('AC deve printar um 2_222', () => {
		expect(celular('AC')).to.equal('2_222')
	})

	it('ABC deve printar um 2_22_222', () => {
		expect(celular('ABC')).to.equal('2_22_222')
	})
})