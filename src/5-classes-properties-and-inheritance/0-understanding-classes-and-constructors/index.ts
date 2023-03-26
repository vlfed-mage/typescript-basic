// function MyPizza0(name: string) {
//     this.name = name;
//     this.toppings = [];
// }
//
// MyPizza.prototype.addToppings = function addToppings(topping: string) {
//     this.toppings.push(topping);
// };
//
// const pizzaClass0 = new MyPizza0('Pepperoni');
//
// pizzaClass0.addToppings('pepperoni');
//
// console.log(pizzaClass0);

class MyPizza0 {
    name: string;
    toppings: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addToppings(topping: string) {
        this.toppings.push(topping);
    }
}

const pizzaClass0 = new MyPizza0('Pepperoni');

pizzaClass0.addToppings('pepperoni');

console.log(pizzaClass0);
