type Obj = {
    name: string;
    fillers: string[];
};

const obj: Obj = {
    name: 'Pepperoni',
    fillers: ['pepperoni'],
};

const finalOrder = ({ name: pizzaName, fillers: pizzaFillers }: Obj): void => {
    console.log(pizzaName, pizzaFillers);
};

const myFinalOrder = ({ name: pizzaName, fillers: pizzaFillers }: Obj): object => {
    return { pizzaName, pizzaFillers };
};

finalOrder(obj);
const result = myFinalOrder(obj);

console.log(result);

// --------------------------

const pizzaToppings: string[] = ['bacon', 'chilli', 'pepperoni'];

const [first, second, third] = pizzaToppings;
console.log(first, second, third);

const logTopping = ([first, second, third]: string[]): void => {
    console.log(first, second, third);
};

logTopping(pizzaToppings);
