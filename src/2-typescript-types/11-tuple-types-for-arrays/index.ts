let tupleArray: [string, number, boolean];
// tuple - це спеціальний тип масиву, який дозволяє визначати
// фіксовані типи елементів для кожної позиції масиву

tupleArray = ['pepperoni', 20, true];

// but

// tupleArray[0] = 123;
// Type 'number' is not assignable to type 'string'.
// because tupleArray[0] is a string

// and

tupleArray.push('new value'); // no error. very strange behavior

console.log(tupleArray);
//[ 'pepperoni', 20, true, 'new value' ]
// but it's still:
// let tupleArray: [string, number, boolean]
