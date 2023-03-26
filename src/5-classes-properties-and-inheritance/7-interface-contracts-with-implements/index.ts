interface Sizes4Interface {
    // sizes: string[]; // can't do that because
    // `Property 'sizes' is protected in type 'Sizes4' but public in type 'Sizes4Interface'.`
    availableSizes: string[]; // it should be like availableSizes(): string[]; but not for getter and setter
}

abstract class Sizes4 implements Sizes4Interface {
    constructor(protected sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        // setter
        this.sizes = sizes;
    }

    get availableSizes() {
        // getter
        return this.sizes;
    }
}

interface MyPizza7Interface extends Sizes4Interface {
    readonly name: string;
    toppings: string[];
    updateSizes(sizes: string[]): void;
    addToppings(topping: string): void;
}

class MyPizza7 extends Sizes4 implements MyPizza7Interface {
    // inheritance
    public toppings: string[] = [];

    constructor(readonly name: string, sizes: string[]) {
        super(sizes);
    }

    public updateSizes(sizes: string[]) {
        this.sizes = sizes; // won't work with private, but with protected
    }

    public addToppings(topping: string) {
        this.toppings.push(topping);
    }
}

const pizzaClass7 = new MyPizza7('Pepperoni', ['small', 'medium', 'large']);

pizzaClass7.addToppings('pepperoni');
console.log(pizzaClass7.availableSizes);

pizzaClass7.updateSizes(['large']);

console.log(pizzaClass7.availableSizes);

// console.log(pizzaClass6.sizes) // Property 'sizes' is private and only accessible within class 'Sizes3'
