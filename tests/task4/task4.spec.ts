// @ts-ignore
import {FirstArgument, IsTypeEqual, typeAssert} from '../type-assertions';
import {logPerson, Person, persons} from '../../src/task4/task4';

describe('task4', () => {
    it('should pass tests if no errors in file', () => {
        console.log('Для этой задачи существуют только тесты типов. Если в терминале нет ошибок - задача выполнена правильно.')
        expect(true).toBe(true);
    })
});

typeAssert<
    IsTypeEqual<
        Person,
        {name: string; age: number} & ({occupation: string} | {role: string})
        >
    >();

typeAssert<
    IsTypeEqual<
        typeof persons,
        ({name: string; age: number} & ({occupation: string} | {role: string}))[]
        >
    >();

typeAssert<
    IsTypeEqual<
        FirstArgument<typeof logPerson>,
        {name: string; age: number} & ({occupation: string} | {role: string})
        >
    >();

typeAssert<
    IsTypeEqual<
        ReturnType<typeof logPerson>,
        void
        >
    >();
