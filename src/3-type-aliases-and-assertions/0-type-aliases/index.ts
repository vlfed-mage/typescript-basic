type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;

let pizzaSizes: Size = 'large';

const selectPizzas: Callback = s => {
    pizzaSizes = s;
};

console.log(pizzaSizes);
selectPizzas('medium');
console.log(pizzaSizes);
