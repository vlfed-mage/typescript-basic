abstract class SizesAbstractClass {
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

// new SizesAbstractClass(['small']); // Cannot create an instance of an abstract class.

class MyOwnPizzaClass extends SizesAbstractClass {
    // inheritance
    public toppings: string[] = [];

    constructor(readonly name: string, public sizes: string[]) {
        super(sizes);
    }

    public addToppings(topping: string) {
        this.toppings.push(topping);
    }
}

const myOwnClassPizza = new MyOwnPizzaClass('Pepperoni', ['small', 'medium', 'large']);

myOwnClassPizza.addToppings('pepperoni');
console.log(myOwnClassPizza.availableSizes);

console.log(myOwnClassPizza);
