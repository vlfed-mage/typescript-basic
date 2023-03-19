interface InterfacesWithFunctionTypes {
    pizzaName: string;
    myPizzaSizes: string[];
    getAvailableSizes: () => string[];
}

const createNewPizza = (pizzaName: string, myPizzaSizes: string[]): InterfacesWithFunctionTypes => {
    return {
        pizzaName,
        myPizzaSizes,
        getAvailableSizes: () => {
            return myPizzaSizes;
        },
    };
};

const { pizzaName, myPizzaSizes, getAvailableSizes } = createNewPizza('Inferno', ['medium', 'large']);

console.log(pizzaName, myPizzaSizes, getAvailableSizes());
