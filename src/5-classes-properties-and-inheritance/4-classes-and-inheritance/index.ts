class Sizes1 {
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

class MyPizza4 extends Sizes1 {
    // inheritance
    public toppings: string[] = [];

    constructor(readonly name: string, public sizes: string[]) {
        super(sizes);
    }

    public addToppings(topping: string) {
        this.toppings.push(topping);
    }
}

const pizzaClass4 = new MyPizza4('Pepperoni', ['small', 'medium', 'large']);

pizzaClass4.addToppings('pepperoni');
console.log(pizzaClass4.availableSizes);

console.log(pizzaClass4);
