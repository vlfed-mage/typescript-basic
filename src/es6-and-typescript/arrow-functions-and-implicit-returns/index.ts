const pizzas = [{ name: 'pepperoni', topping: 'pepperoni' }];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);

// const pizza = {
//     name: 'Blazing Inferno',
//     getName: () => this.name;
// };

const pizza2 = {
    name: 'Pepperoni',
    getName: () => pizza2.name,
};

const pizza3 = {
    name: 'Diablo',
    getName: function () {
        console.log(this.name);
    }, // Property 'name' does not exist on type 'typeof globalThis'.
};

// console.log(pizza.getName()) // error: Property 'name' does not exist on type 'typeof globalThis'.
console.log(pizza2.getName()); // Pepperoni
console.log(pizza3.getName()); // Diablo
