interface Person6 {
    name: string;
    age: number;
    address: {};
}

// const person6: Person6 = {
//     // Property 'address' is missing in type '{ name: string; age: number; }' but required in type 'Person6'
//     name: 'Vlad',
//     age: 29,
// };

// with Pick you can say: hive me a few properties from this particular object

const person6: Pick<Person6, 'name' | 'age'> = {
    name: 'Vlad',
    age: 29,
};
