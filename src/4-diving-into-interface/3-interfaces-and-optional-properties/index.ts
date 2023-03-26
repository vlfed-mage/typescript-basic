interface MyOwnPizzaSizes {
    myPizzaSizes: string[];
}

interface InterfacesAndOptionalProperties extends MyOwnPizzaSizes {
    pizzaName: string;
    toppings?: number;
    getAvailableSizes: () => string[];
}

let myOwnNewPizza: InterfacesAndOptionalProperties;

const createMyOwnNewPizza = (pizzaName: string, myPizzaSizes: string[]): InterfacesAndOptionalProperties => {
    return {
        pizzaName,
        myPizzaSizes,
        getAvailableSizes: () => {
            return myPizzaSizes;
        },
    };
};

myOwnNewPizza = createMyOwnNewPizza('Inferno', ['medium', 'large']);

myOwnNewPizza.toppings = 1;

console.log(myOwnNewPizza);
// {
//     pizzaName: 'Inferno',
//     myPizzaSizes: [ 'medium', 'large' ],
//     getAvailableSizes: [Function: getAvailableSizes],
//     toppings: 1
// }
