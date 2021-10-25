## Цель задания:

Потренироваться в использовании перечислений. Увидеть своими глазами то, насколько они удобнее других подходов.

## Что нужно сделать:

Переписать данный код с помощью перечисления. Подумать и ответить на вопрос: как изменился код с использованием перечислений? Повлияло ли это на удобство работы? Прикрепить ответ на вопрос к сообщению наставнику.

```tsx
const Directions = ['Up', 'Down', 'Left', 'Right'];

type Player = {
    x: number,
    y: number,
    move: (direcion: string, amount: number) => void,
}

const player: Player = {
    x: 0,
    y: 0,
    move: function (direction: string, amount: number) {
        switch (direction) {
            case Directions[0]:
                this.y += amount;
                break;
            case Directions[1]:
                this.y -= amount;
                break;
            case Directions[2]:
                this.x -= amount;
                break;
            case Directions[3]:
                this.x += amount;
                break;
            default:
                break;
        }
    }
}

player.move(Directions[0], 1);
player.move(Directions[1], 2);
player.move(Directions[2], 2);
player.move(Directions[3], 3);

console.log(player.x === 1); // true
console.log(player.y === -1); // true
```

## Советы и рекомендации

Для выполнения заданий рекомендуем скачать репозиторий и работать в нем. Это будет полезно для отработки навыков в реальном проекте. Ссылку на репозиторий можно найти в описании домашнего задания.

## **Формат сдачи:**

Код и небольшое рассуждение, отправленные в чат с проверяющим наставником.

## **Критерии оценки:**

- **"Зачет":**
    - Реализация с использованием перечисления работает корректно
    - Приведены корректные рассуждения
- **"Незачет":**
    - Не выполнен один из пунктов выше
