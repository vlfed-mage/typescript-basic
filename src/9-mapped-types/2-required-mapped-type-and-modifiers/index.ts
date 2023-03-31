interface Person5 {
    name: string;
    age?: number;
}

// function printAge(obj: Person5) {
//     return `${obj.name} is ${obj.age}`;
// }
//
// const person5: Person5 = {
//     name: 'Vlad',
//     // in this case you can skip age, because in interface Person5 is optional
// };
//
// const age = printAge(person5); // no errors

// you can fix it by:

function printAge(obj: Required<Person5>) {
    return `${obj.name} is ${obj.age}`;
}

const person5: Person5 = {
    name: 'Vlad',
};

// const age = printAge(person5); // Property 'age' is optional in type 'Person5' but required in type 'Required<Person5>'.
