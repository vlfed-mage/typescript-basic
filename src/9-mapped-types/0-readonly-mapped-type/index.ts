interface Person3 {
    name: string;
    age: number;
}

const person3: Person3 = {
    name: 'Vlad',
    age: 36,
};

function freeze<T>(obj: T): Readonly<T> {
    return Object.freeze(obj);
}

const newPerson = freeze(person3);

// newPerson.name = 'ABC'; // Cannot assign to 'name' because it is a read-only property.
