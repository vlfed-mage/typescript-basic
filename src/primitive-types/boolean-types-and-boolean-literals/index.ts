const pizzasQuantity: number = 2;

const offerDiscount = (orders: number): boolean => {
    return orders >= 3;
};

if (offerDiscount(pizzasQuantity)) {
    // we don't deal with types in conditional sense
    console.log(`You're entitled to a discount`);
} else {
    console.log(`Order more then 3 pizzas fur discount!`);
}
