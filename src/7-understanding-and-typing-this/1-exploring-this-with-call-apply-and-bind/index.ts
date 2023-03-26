// tsconfig.json "strict": false,

// Object literal
const myObj2 = {
    name: 'Object',
    myMethod() {
        console.log('Object:::', this);
    },
};

// ------------------------

// Function
function myFunc2(...text: string[]) {
    console.log('Function:::', this, text);
}

myFunc2('ABC', 'DEF'); // Function::: Window {window: Window, self: Window, document: document, name: '', location: Location, …} (2) ['ABC', 'DEF']

const myAnotherFunc = myFunc2.bind(myObj2); // return brand-new function

myAnotherFunc('GHI', 'JKL'); // Function::: {name: 'Object', myMethod: ƒ} (2) ['GHI', 'JKL']
myAnotherFunc('LMN', 'OPQ'); // Function::: {name: 'Object', myMethod: ƒ} (2) ['LMN', 'OPQ']
myAnotherFunc('ABC', 'DEF'); // Function::: {name: 'Object', myMethod: ƒ} (2) ['ABC', 'DEF']

myFunc2.call(myObj2, 'ABC', 'DEF'); // Function::: {name: 'Object', myMethod: ƒ} (2) ['ABC', 'DEF']
myFunc2.apply(myObj2, ['ABC', 'DEF']); // Function::: {name: 'Object', myMethod: ƒ} (2) ['ABC', 'DEF']
