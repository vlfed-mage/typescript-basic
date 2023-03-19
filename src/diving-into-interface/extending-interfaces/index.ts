interface MyPizzaSizes {
    myPizzaSizes: string[];
}

interface ExtendingInterfaces extends MyPizzaSizes {
    pizzaName: string;
    getAvailableSizes: () => string[];
}

const createMyNewPizza = (pizzaName: string, myPizzaSizes: string[]): ExtendingInterfaces => {
    return {
        pizzaName,
        myPizzaSizes,
        getAvailableSizes: () => {
            return myPizzaSizes;
        },
    };
};

const myNewPizza: ExtendingInterfaces = createMyNewPizza('Inferno', ['medium', 'large']);

console.log(myNewPizza);
