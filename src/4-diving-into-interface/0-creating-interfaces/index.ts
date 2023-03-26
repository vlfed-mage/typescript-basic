interface PizzaInterface {
    name: string;
    size: string[];
}

// interface PizzasInterface {
//     data: PizzaInterface[];
// }

let newPizza: PizzaInterface;

const createPizza = (name: string, size: string[]): PizzaInterface => {
    return {
        name,
        size,
    };
};

newPizza = createPizza('Pepperoni', ['small', 'medium']);

console.log(newPizza);
