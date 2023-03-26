type Pizza = {
    name: string;
    price: number;
    getName: () => void;
};

const pizza: Pizza = {
    name: 'Pepperoni',
    price: 15,
    getName() {
        console.log(this.name);
    },
};

const toppings: string[] = ['pepperoni'];

const order = {
    pizza,
    toppings,
};

const createOrder = (pizza: Pizza, toppings: string[]) => {
    return { pizza, toppings };
};

console.log(order); // { pizza: { name: 'Pepperoni', price: 15, getName: [Function: getName] }, toppings: [ 'pepperoni' ] }

console.log(createOrder(pizza, toppings)); // { pizza: { name: 'Pepperoni', price: 15, getName: [Function: getName] }, toppings: [ 'pepperoni' ] }
