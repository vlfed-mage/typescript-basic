abstract class Sizes2 {
    constructor(public sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        // setter
        this.sizes = sizes;
    }

    get availableSizes() {
        // getter
        return this.sizes;
    }
}

// new Sizes2(['small']); // Cannot create an instance of an abstract class.

class MyPizza5 extends Sizes2 {
    // inheritance
    public toppings: string[] = [];

    constructor(readonly name: string, public sizes: string[]) {
        super(sizes);
    }

    public addToppings(topping: string) {
        this.toppings.push(topping);
    }
}

const pizzaClass5 = new MyPizza5('Pepperoni', ['small', 'medium', 'large']);

pizzaClass5.addToppings('pepperoni');
console.log(pizzaClass5.availableSizes);

console.log(pizzaClass5);
