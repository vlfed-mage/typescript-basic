let sumOrder: (price: number, quantity: number) => number;

sumOrder = (p, q) => {
    return p * q;
};

const price = sumOrder(25, 2);

console.log(price);
