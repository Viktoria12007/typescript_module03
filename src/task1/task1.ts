interface House {
    street: string,
    apartmentCount: number,
    buildInfo: {
        year: number,
        material: string,
    }
}

function getHouse(): House {
    const house: House = {
        street: 'Pushkina',
        apartmentCount: 76,
        buildInfo: {
            year: 1996,
            material: 'rocks',
        }
    };

    return house;
}

// Это происходит потому, что as позволяет приводить один тип к другому без проверки на соответствие типам.
// Если мы используем as для приведения типа пустого объекта {} к типу House, то TypeScript считает, что все поля в этом объекте указаны, даже если мы забудем указать обязательные поля.
// В результате можно получить объект в невалидном состоянии, что приведёт к ошибкам во время выполнения программы.
// Для избежания таких проблем не используйте оператор as и указывайте правильные типы для переменных.
// Если правильный тип неизвестен, то можно возвращать готовый объект с помощью оператора return.

function handleHouse(): void {
    const house: House = getHouse();

    console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
    console.log(`build in ${house.buildInfo .year}, build from ${house.buildInfo.material} `);
}

handleHouse();
