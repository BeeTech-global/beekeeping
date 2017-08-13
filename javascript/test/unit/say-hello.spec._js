import sayHello from '../../src/say-hello'

import {expect} from 'chai';
import Chance from 'chance';

describe('Say Hello', () => {
    let chance;

    beforeEach(() => {
        chance = new Chance();
    });

    it('should say hello when given a name', () => {
        const randomName = chance.first(),
            greeting = sayHello(randomName);

        expect(greeting).to.equal(`Hello, ${randomName}!`);
    });
});