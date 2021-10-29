// @ts-ignore
import {IsTypeEqual, FirstArgument, typeAssert} from '../type-assertions';
import {logPerson, isUser, isAdmin, Person, persons} from '../../src/task5/task5';

describe('task5', () => {
    it('should pass tests if no errors in file', () => {
        console.log('Для этой задачи существуют только тесты типов. Если в терминале нет ошибок - задача выполнена правильно.')
        expect(true).toBe(true);
    })
});

typeAssert<
    IsTypeEqual<
        Person,
        {name: string; age: number} & ({type: 'user'; occupation: string} | {type: 'admin'; role: string})
        >
    >();

typeAssert<
    IsTypeEqual<
        typeof persons,
        ({name: string; age: number} & ({type: 'user'; occupation: string} | {type: 'admin'; role: string}))[]
        >
    >();

typeAssert<
    IsTypeEqual<
        FirstArgument<typeof logPerson>,
        {name: string; age: number} & ({type: 'user'; occupation: string} | {type: 'admin'; role: string})
        >
    >();

typeAssert<
    IsTypeEqual<
        ReturnType<typeof logPerson>,
        void
        >
    >();

typeAssert<
    IsTypeEqual<
        FirstArgument<typeof isUser>,
        {name: string; age: number} & ({type: 'user'; occupation: string} | {type: 'admin'; role: string})
        >
    >();
typeAssert<
    IsTypeEqual<
        ReturnType<typeof isUser>,
        boolean
        >
    >();

typeAssert<
    IsTypeEqual<
        FirstArgument<typeof isAdmin>,
        {name: string; age: number} & ({type: 'user'; occupation: string} | {type: 'admin'; role: string})
        >
    >();
typeAssert<
    IsTypeEqual<
        ReturnType<typeof isAdmin>,
        boolean
        >
    >();
