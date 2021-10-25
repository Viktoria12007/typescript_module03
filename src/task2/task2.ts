type Cat = {
    name: string,
    meow: () => string,
}

type Dog = {
    name: string,
    bark: () => string,
}

const cat: Cat = {
    name: 'Pushok',
    meow: () => 'meow!'
};

const dog: Dog = {
    name: 'Bobik',
    bark: () => 'bark!',
}

/*
Expected:

    whatDoesThePetSay(cat) -> 'cat.meow() -> "meow!"
    whatDoesThePetSay(dog) -> dog.bark() -> "bark!"
*/

export function whatDoesThePetSay(pet: Dog | Cat): string {
    // ---Start coding here---
    return 'Nothing :('
    // ---End coding here---
}

console.log(whatDoesThePetSay(cat));
console.log(whatDoesThePetSay(dog));
