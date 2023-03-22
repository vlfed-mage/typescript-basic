// function MyPizza(name: string) {
//     this.name = name;
//     this.toppings = [];
// }
//
// MyPizza.prototype.addToppings = function addToppings(topping: string) {
//     this.toppings.push(topping);
// };
//
// const pizzaClass = new MyPizza('Pepperoni');
//
// pizzaClass.addToppings('pepperoni');
//
// console.log(pizzaClass);

class MyPizza {
    name: string;
    toppings: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addToppings(topping: string) {
        this.toppings.push(topping);
    }
}

const pizzaClass = new MyPizza('Pepperoni');

pizzaClass.addToppings('pepperoni');

console.log(pizzaClass);
