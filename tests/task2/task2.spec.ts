import * as task2 from '../../src/task2/task2';

const cat = {
    name: 'Pushok',
    meow: () => 'test1!'
};

const dog = {
    name: 'Bobik',
    bark: () => 'test2!',
}

describe('task2', () => {
    describe('task2#whatDoesThePetSay()', () => {
        it('should work with a cat', () => {
            const res = task2.whatDoesThePetSay(cat);
            expect(res).toEqual('test1!');
        });

        it('should work with a dog', () => {
            const res = task2.whatDoesThePetSay(dog);
            expect(res).toEqual('test2!');
        });
    });
});
