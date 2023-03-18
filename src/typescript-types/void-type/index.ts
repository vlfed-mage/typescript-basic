let selectedToppings: string = 'pepperoni';

const selectTopping = (topping: string): void => {
    // void because we don't return anything
    selectedToppings = topping; // mutating selectedToppings
};

selectTopping('bacon');

console.log(selectedToppings);
