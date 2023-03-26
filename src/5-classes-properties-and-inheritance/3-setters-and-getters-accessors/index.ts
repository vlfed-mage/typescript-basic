class Sizes0 {
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

class MyPizza3 {
    public toppings: string[] = [];

    constructor(readonly name: string) {}

    public addToppings(topping: string) {
        this.toppings.push(topping);
    }
}

const sizesClass0 = new Sizes0(['small', 'medium', 'large']);

// invoke getter
console.log(sizesClass0.availableSizes);
// invoke setter
sizesClass0.availableSizes = ['medium', 'large'];
console.log(sizesClass0.availableSizes);

// --------------

const pizzaClass3 = new MyPizza3('Pepperoni');

pizzaClass3.addToppings('pepperoni');

console.log(pizzaClass3);
