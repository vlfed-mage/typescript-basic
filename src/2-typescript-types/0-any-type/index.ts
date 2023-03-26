let couponValue; // any

couponValue = 25; // still any
// if we don't supply a type, it'll be of type any ny default

couponValue = '25';

couponValue = true;

// ---------------

// you can also do this:

let couponName: any; // it will be the same

couponName = 25;

couponName = 'coupon25';

couponName = true;

// try to avoid using of any type
