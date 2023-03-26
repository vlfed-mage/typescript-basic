// let pizzaSize: string = 'medium';
//
// const selectSize = (size: string): void => {
//     pizzaSize = size;
// };
//
// selectSize('medium'); // but what if we'll spell something wrong?
//
// console.log(`Pizza size is ${pizzaSize}`);

// decision is in union literal types

// let pizzaSize: 'small' | 'medium' | 'large' = 'large';
//
// const selectPizza = (pizza: 'small' | 'medium' | 'large'): void => {
//     pizzaSize = pizza;
// };

// or

let pizzaSize: 1 | 2 | 3 = 3;

const selectPizza = (pizza: 1 | 2 | 3): void => {
    pizzaSize = pizza;
};

console.log(pizzaSize);
selectPizza(1);
console.log(pizzaSize);
