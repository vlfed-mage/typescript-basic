type PizzaType = { name: string; toppings: number };

const myPizza: PizzaType = {
    name: 'Blazing Inferno',
    toppings: 5,
};

const serialized = JSON.stringify(myPizza);

const getNameFromJSON = (obj: string) => {
    // typescript will know it'll be a string if return a name, and number if return a toppings
    // return (<PizzaType>JSON.parse(obj)).name;
    // or
    return (JSON.parse(obj) as PizzaType).name;
};

const res = getNameFromJSON(serialized);

console.log(res);
