Применить полученные знания на примере сквозного задания Community.

## Что нужно сделать:

Мы написали классную фильтрующую функцию, которая поможет нам гибко фильтровать пользователей. Мы передаем "критерий" и возвращаем только пользователей, которые подходят всем критериям. Пока что фильтруются только пользователи, а администраторы нет. Но TS'у опять что-то не нравится, поправим?

```tsx
type User = {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

type Admin = {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball'
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator'
    }
];

export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
export const isUser = (person: Person): person is User => person.type === 'user';

export function logPerson(person: Person) {
    let additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

export function filterUsers(persons: Person[], criteria: unknown): User[] {
    return persons.filter(isUser).filter((user) => {
        const criteriaKeys = Object.keys(criteria) as (keyof User)[];
        return criteriaKeys.every((fieldName) => {
            return user[fieldName] === criteria[fieldName];
        });
    });
}

console.log('Users of age 23:');

filterUsers(
    persons,
    {
        age: 23
    }
).forEach(logPerson);

// https://www.typescriptlang.org/docs/handbook/utility-types.html
```

## Советы и рекомендации

Для выполнения заданий рекомендуем скачать репозиторий и работать в нем. Это будет полезно для отработки навыков в реальном проекте. Ссылку на репозиторий можно найти в описании домашнего задания.

## **Формат сдачи:**

Код, отправленный в чат с проверяющим наставником.

## **Критерии оценки:**

- **"Зачет":**
    - Код выполняет техническое задание
    - В ходе решения корректно использована типизация
- **"Незачет":**
    - Не выполнен один из пунктов выше
