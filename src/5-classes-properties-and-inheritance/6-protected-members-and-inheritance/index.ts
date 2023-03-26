abstract class Sizes3 {
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

// new Sizes2(['small']); // Cannot create an instance of an abstract class.

class MyPizza6 extends Sizes3 {
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

const pizzaClass6 = new MyPizza6('Pepperoni', ['small', 'medium', 'large']);

pizzaClass6.addToppings('pepperoni');
console.log(pizzaClass6.availableSizes);

pizzaClass6.updateSizes(['large']);

console.log(pizzaClass6.availableSizes);

// console.log(pizzaClass6.sizes) // Property 'sizes' is private and only accessible within class 'Sizes3'
