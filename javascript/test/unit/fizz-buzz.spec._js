import { expect } from 'chai';
import fizzBuzz from '../../src/fizz-buzz'

//n%3 print fizz
//n%5 print buzz
//dois orint fizzbuzz

describe('FizzBuzz', function () {
	it('Should print 1 given 1', function () {
		const fizz = fizzBuzz(1);
		expect(fizz).to.be.eql(1);
	});

	it('Should print 2 given 2', function () {
		const fizz = fizzBuzz(2);
		expect(fizz).to.be.eql(2);
	});

	it('Should print fizz given 3', function () {
		const fizz = fizzBuzz(3);
		expect(fizz).to.be.eql('fizz');
	});

	it('Should print 4 given 4', function () {
		const fizz = fizzBuzz(4);
		expect(fizz).to.be.eql(4);
	});

	it('Should print buzz given 5', function () {
		const fizz = fizzBuzz(5);
		expect(fizz).to.be.eql('buzz');
	});

	it('Should print fizz given 6', function () {
		const fizz = fizzBuzz(6);
		expect(fizz).to.be.eql('fizz');
	});

	it('Should print 7 given 7', function () {
		const fizz = fizzBuzz(7);
		expect(fizz).to.be.eql(7);
	});

	it('Should print 1 given "1"', function () {
		const fizz = fizzBuzz('1');
		expect(fizz).to.be.eql(1);
	});

	it('Should print fizzbuzz given 15', function () {
		const fizz = fizzBuzz(15);
		expect(fizz).to.be.eql('fizzbuzz');
	});

	it('Should print fizzbuzz given 30', function () {
		const fizz = fizzBuzz(30);
		expect(fizz).to.be.eql('fizzbuzz');
	});
})