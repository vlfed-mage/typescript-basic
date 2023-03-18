const pizzaObj: { name: string; price: number; getName: () => string } = {
    name: 'Plain Old Pepperoni',
    price: 20,
    getName: () => {
        return pizzaObj.name;
    },
};

console.log(pizzaObj.getName());
