class SizesClass {
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

class OwnPizzaClass extends SizesClass {
    // inheritance
    public toppings: string[] = [];

    constructor(readonly name: string, public sizes: string[]) {
        super(sizes);
    }

    public addToppings(topping: string) {
        this.toppings.push(topping);
    }
}

const ownClassPizza = new OwnPizzaClass('Pepperoni', ['small', 'medium', 'large']);

ownClassPizza.addToppings('pepperoni');
console.log(ownClassPizza.availableSizes);

console.log(ownClassPizza);
