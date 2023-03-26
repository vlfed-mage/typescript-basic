// tsconfig.json "strict": false,

// Function
function myFunc() {
    console.log('Function:::', this);
}

myFunc(); // Window

// ------------------------

// Object literal
const myObj = {
    name: 'Object',
    myMethod() {
        console.log('Object:::', this);
    },
    myArrowMethod: () => {
        console.log('Arrow Func In Object:::', this);
    },
};

myObj.myMethod(); // myObj
myObj.myArrowMethod(); // typeof globalThis

// -------------------------

// Classes
class MyClass {
    name = 'Class';
    myMethod() {
        console.log('Class:::', this);
    }
}

const myClass = new MyClass();
myClass.myMethod(); // MyClass
