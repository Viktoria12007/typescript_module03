## Цель задания:

Применить полученные знания на примере сквозного задания Community.

## Что нужно сделать:

Мы создали небольшое хранилище для пользователей, а потом сделали часть из них администраторами. Теперь у нас есть целых два вида пользователей. Хотелось бы красиво выводить информацию о них. Для этого необходимо как-то различить данные между собой. Сделаем это!

```tsx
type User = {
    name: string;
    age: number;
    occupation: string;
}

type Admin = {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    let additionalInformation: string;
    if (person.role) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
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
