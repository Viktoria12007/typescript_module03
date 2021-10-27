Применить полученные знания на примере сквозного задания Community.

## Что нужно сделать:

У нас есть целых два вида пользователей и мы завели два разных типа для них. Более того, мы уже можем различать их в коде между собой. Но после того, как логику по определению типа вынесли в отдельные функции, дополнительно снабдив типы доп. полем, все сломалось. Сможете починить?

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
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

export function isAdmin(person: Person) {
    return person.type === 'admin';
}

export function isUser(person: Person) {
    return person.type === 'user';
}

export function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);
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
