// not to confuse js types with ts types

// js

new Number();
new Boolean();
new String();

//ts
// in ts it's easier

// let pizzaCont: number = 15;
// pizzaCont = '15'; // Type 'string' is not assignable to type 'number'.

const pizzaCost: number = 15;
const pizzaFillers: number = 2;

const calculatePrice = (cost: number, fillers: number): number => {
    // return (cost + 1.5 * fillers).toString(); //Type 'string' is not assignable to type 'number'.
    return cost + 1.5 * fillers;
};

const cost: number = calculatePrice(pizzaCost, pizzaFillers);

console.log(`Pizza costs: ${cost}`);
