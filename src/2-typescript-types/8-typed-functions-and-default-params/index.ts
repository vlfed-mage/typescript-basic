let orderPriceSum: (price: number, quantity?: number) => number;

orderPriceSum = (p, q = 1) => p * q;

const totalPriceSum = orderPriceSum(25);

console.log(totalPriceSum);
