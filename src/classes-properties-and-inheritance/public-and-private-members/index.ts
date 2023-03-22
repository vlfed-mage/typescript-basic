class MyNewPizza {
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

const pizzaNewClass = new MyNewPizza('Pepperoni');

pizzaNewClass.addToppings('pepperoni');

console.log(pizzaNewClass);
