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

// пользовательский тайпгард
function isDog(pet: Dog | Cat): pet is Dog {
    return 'bark' in pet ? true : false;
}

export function whatDoesThePetSay(pet: Dog | Cat): string {
    // пользовательский тайпгард
    if (isDog(pet)) {
        return pet.bark();
    } return pet.meow();
    // обычный тайпгард
    // return 'bark' in pet ? pet.bark() : pet.meow();
    // тайпгард через оператор in
    // if ('bark' in pet) {
    //     return pet.bark();
    // }
    // return pet.meow();
}

console.log(whatDoesThePetSay(cat));
console.log(whatDoesThePetSay(dog));
