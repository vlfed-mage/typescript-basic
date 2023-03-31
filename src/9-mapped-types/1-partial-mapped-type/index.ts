interface Person4 {
    name: string;
    age: number;
}

const person4: Person4 = {
    name: 'Vlad',
    age: 26,
};

function updatePerson(person: Person4, prop: Partial<Person4>) {
    return { ...person, ...prop };
}

console.log(updatePerson(person4, { name: 'ABC' }));
