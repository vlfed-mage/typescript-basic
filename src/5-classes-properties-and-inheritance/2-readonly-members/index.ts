class MyPizza2 {
    public toppings: string[] = [];

    // constructor(public name: string) {}
    constructor(readonly name: string) {} // readonly

    public addToppings(topping: string) {
        this.toppings.push(topping);
    }
}

const pizzaClass2 = new MyPizza2('Pepperoni');

pizzaClass2.addToppings('pepperoni');
// pizzaOwnClass.name = 'changed name'; // allow to do this only for public members

console.log(pizzaClass2);
