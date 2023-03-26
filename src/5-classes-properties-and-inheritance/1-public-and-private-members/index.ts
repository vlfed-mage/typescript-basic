class MyPizza1 {
    public toppings: string[] = [];

    constructor(private name: string) {} // in typescript, you can do like this

    // private addToppings(topping: string) {
    //     // Property 'addToppings' is private and only accessible within class 'MyNewPizza'.
    //     this.toppings.push(topping);
    // }

    public addToppings(topping: string) {
        this.toppings.push(topping);
    }
}

const pizzaClass1 = new MyPizza1('Pepperoni');

pizzaClass1.addToppings('pepperoni');

console.log(pizzaClass1);
