import { expect } from 'chai';
import caixaEletronico from '../../src/caixa-eletronico'


describe('Caixa Eletronico', function () {
	it('should get 20 and 10 when drawing 30', () => {
		const withdraw = {
			'20': 1,
			'10': 1
		}
		expect(caixaEletronico.draw(30)).eql(withdraw)
	})

	it('should get 100 and 20 and 10 when drawing 130', () => {
		const withdraw = {
			'100': 1,
			'20': 1,
			'10': 1
		}
		expect(caixaEletronico.draw(130)).eql(withdraw)
	})

	it('should throw exception when amout isn\'t available to withdraw', () => {
		expect(() => caixaEletronico.draw(35)).throws(/Aceita troco em bala?/)
	})

	it('should throw exception when amout isn\'t available to withdraw', () => {
		expect(() => caixaEletronico.draw(155)).throws(/Aceita troco em bala?/)
	})


	it('should get 100 and 50 and 20 and 10 when drawing 180', () => {
		const withdraw = {
			'100': 1,
			'50': 1,
			'20': 1,
			'10': 1
		}
		expect(caixaEletronico.draw(180)).eql(withdraw)
	})

	it('should get 100 and 50 and 20 and 10 when drawing 280', () => {
		const withdraw = {
			'100': 2,
			'50': 1,
			'20': 1,
			'10': 1
		}
		expect(caixaEletronico.draw(280)).eql(withdraw)
	})

		it('should get 100 when drawing 200', () => {
		const withdraw = {
			'100': 2
		}
		expect(caixaEletronico.draw(200)).eql(withdraw)
	})

})

/* {
	'50': 1,
	'20': 2
} */