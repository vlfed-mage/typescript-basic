// let saleCoupon: string = 'pizza25';
//
// const removeCoupon = (): void => {
//     saleCoupon = null; //Type 'null' is not assignable to type 'string'.
// };

// but

// let saleCoupon: string | null = 'pizza25'; // we allow to reset this to null
//
// const removeCoupon = (): void => {
//     saleCoupon = null;
// };

// or

let saleCoupon: string | undefined = 'pizza25'; // we allow to reset this to undefined

const removeCoupon = (): void => {
    saleCoupon = undefined;
};

console.log(saleCoupon);

removeCoupon();

console.log(saleCoupon);
