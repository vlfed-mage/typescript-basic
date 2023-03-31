// type query

const person2 = {
    name: 'Vlad',
    age: 36,
};

type Person2 = typeof person2; // type query
type PersonKeys2 = keyof Person2; // "name" | "age"
type PersonTypes2 = Person2[PersonKeys2]; // string | number

function getProperty(obj: object, key: string) {
    return obj[key];
}

const personName = getProperty(person2, 'name'); // any

const anotherPerson2: Person2 = {
    name: 'John',
    age: 30,
};

// -----------------------------------

function getAnotherProp<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const anotherPersonName1 = getAnotherProp(anotherPerson2, 'name'); // string
const anotherPersonName2 = getAnotherProp(anotherPerson2, 'age'); // number
