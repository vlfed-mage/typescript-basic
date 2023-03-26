// tsconfig.json "strict": false,

class FooClass1 {
    fooMethod() {
        const foo = 123; // this variable is available in lexical scope
        console.log('1', this);
        setTimeout(function () {
            // inside here we have brand-new scope
            console.log(foo);
            console.log(this);
        }, 0);
    }
}

const myInstance1 = new FooClass1();

myInstance1.fooMethod();
// 1 FooClass
// 123
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

class FooClass2 {
    fooMethod() {
        console.log('1', this);
        const self = this;
        setTimeout(function () {
            // inside here we have brand-new scope
            console.log(self);
        }, 0);
    }
}

const myInstance2 = new FooClass2();

myInstance2.fooMethod();
// 1 FooClass
// FooClass

class FooClass3 {
    fooMethod() {
        console.log('1', this);
        setTimeout(() => {
            // arrow function doesn't inherit 'this' value, it just simply doesn't bind 'this' value
            console.log(self);
        }, 0);
    }
}

const myInstance3 = new FooClass3();

myInstance3.fooMethod();
// 1 FooClass
// FooClass
