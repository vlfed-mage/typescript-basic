const coupon: string = 'pizza25';

const normalizeCoupon = (code: string): string => {
    return code.toUpperCase();
};

console.log(normalizeCoupon(coupon));

const couponMessage: string = `
    I am the string!
`;

console.log(couponMessage);

const couponStringLiteral: string = `Final coupon is ${normalizeCoupon(coupon)}`;
// ${normalizeCoupon(coupon)} can be a number type, and it'll transform to string without problems

console.log(couponStringLiteral);
