class MyOwnPizza {
    public toppings: string[] = [];

    // constructor(public name: string) {}
    constructor(readonly name: string) {} // readonly

    public addToppings(topping: string) {
        this.toppings.push(topping);
    }
}

const pizzaOwnClass = new MyOwnPizza('Pepperoni');

pizzaOwnClass.addToppings('pepperoni');
// pizzaOwnClass.name = 'changed name'; // allow to do this only for public members

console.log(pizzaOwnClass);
