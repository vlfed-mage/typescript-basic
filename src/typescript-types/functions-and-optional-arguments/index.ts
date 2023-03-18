let orderSum: (price: number, quantity?: number) => number;

orderSum = (p, q) => {
    const qu = q || 1;
    return p * qu;
};

const totalPrice = orderSum(25, 8);

console.log(totalPrice);
