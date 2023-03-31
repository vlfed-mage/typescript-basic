console.log(typeof ''); // 'string'
console.log(typeof []); // 'object'

// type query

const person = {
    name: 'Vlad',
    age: 36,
};

type Person = typeof person; // type query

const anotherPerson: Person = {
    name: 'John',
    age: 30,
};
