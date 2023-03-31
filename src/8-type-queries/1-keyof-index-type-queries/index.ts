console.log(typeof ''); // 'string'
console.log(typeof []); // 'object'

// type query

const person1 = {
    name: 'Vlad',
    age: 36,
};

type Person1 = typeof person1; // type query
type PersonKeys = keyof Person1; // "name" | "age"

type PersonTypes = Person1[PersonKeys]; // string | number

const anotherPerson1: Person1 = {
    name: 'John',
    age: 30,
};
