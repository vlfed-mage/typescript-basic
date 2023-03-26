const multiply = (a: number, b = 25) => {
    // it's equivalent to
    // if (!b) {
    //     b = 25;
    // }
    return a * b;
};

console.log(multiply(5));
console.log(multiply(5, 35));
