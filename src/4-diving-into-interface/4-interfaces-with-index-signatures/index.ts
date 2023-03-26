interface MyNewPizzaSizes {
    myPizzaSizes: string[];
}

interface InterfacesWithIndexSignatures extends MyNewPizzaSizes {
    pizzaName: string;
    toppings?: number;
    getAvailableSizes: () => string[];
    [key: number]: string;
    // [key: string]: any;
}

let myOwnPizza: InterfacesWithIndexSignatures;

const createMyOwnPizza = (pizzaName: string, myPizzaSizes: string[]): InterfacesWithIndexSignatures => {
    return {
        pizzaName,
        myPizzaSizes,
        getAvailableSizes: () => {
            return myPizzaSizes;
        },
    };
};

myOwnPizza = createMyOwnPizza('Inferno', ['medium', 'large']);

myOwnPizza.toppings = 1;
myOwnPizza[1] = 'some value';
// myOwnPizza['id'] = 'some value';

console.log(myOwnPizza);

// {
//     '1': 'some value',
//     pizzaName: 'Inferno',
//     myPizzaSizes: [ 'medium', 'large' ],
//     getAvailableSizes: [Function: getAvailableSizes],
//     toppings: 1
// }

// {
//     pizzaName: 'Inferno',
//     myPizzaSizes: [ 'medium', 'large' ],
//     getAvailableSizes: [Function: getAvailableSizes],
//     toppings: 1,
//     id: 'some value'
// }
