// Setters and Getters (Accessors)
class Sizes {
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

class OwnPizza {
    public toppings: string[] = [];

    constructor(readonly name: string) {}

    public addToppings(topping: string) {
        this.toppings.push(topping);
    }
}

const sizesClass = new Sizes(['small', 'medium', 'large']);

// invoke getter
console.log(sizesClass.availableSizes);
// invoke setter
sizesClass.availableSizes = ['medium', 'large'];
console.log(sizesClass.availableSizes);

// --------------

const ownPizzaClass = new OwnPizza('Pepperoni');

ownPizzaClass.addToppings('pepperoni');

console.log(ownPizzaClass);
