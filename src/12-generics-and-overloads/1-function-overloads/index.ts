function reverse(stringOrArray: string | any[]): string | any[] {
    if (typeof stringOrArray === 'string') {
        return stringOrArray.split('').reverse().join('');
    }
    return stringOrArray.reverse();
}

const string = reverse('pepperoni');
console.log(string);

const array = reverse(['bacon', 'pepperoni', 'chili']);
console.log(array);

// with overloads

function reverseOverloaded(stringOrArrayOverloaded: string): string;
function reverseOverloaded(stringOrArrayOverloaded: any[]): any[];

function reverseOverloaded(stringOrArrayOverloaded: string | any[]): string | any[] {
    if (typeof stringOrArrayOverloaded === 'string') {
        return stringOrArrayOverloaded.split('').reverse().join('');
    }
    return stringOrArrayOverloaded.reverse();
}

const stringOverloaded = reverseOverloaded('pepperoni');
console.log(stringOverloaded);

const arrayOverloaded = reverseOverloaded(['bacon', 'pepperoni', 'chili']);
console.log(arrayOverloaded);

// with overloads and generics

function reverseOverloadedWithGenerics(stringOrArrayOverloadedWithGenerics: string): string;
function reverseOverloadedWithGenerics<T>(stringOrArrayOverloadedWithGenerics: T[]): T[];

function reverseOverloadedWithGenerics<T>(stringOrArrayOverloadedWithGenerics: string | T[]): string | T[] {
    if (typeof stringOrArrayOverloadedWithGenerics === 'string') {
        return stringOrArrayOverloadedWithGenerics.split('').reverse().join('');
    }
    return stringOrArrayOverloadedWithGenerics.reverse();
}

const stringOverloadedWithGenerics = reverseOverloadedWithGenerics('pepperoni');
console.log(stringOverloadedWithGenerics);

const arrayOverloadedWithGenerics = reverseOverloadedWithGenerics(['bacon', 'pepperoni', 'chili']);
console.log(arrayOverloadedWithGenerics);
