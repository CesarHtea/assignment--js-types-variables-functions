/**
 * simpleSum()
 * ------------------------------------------------------
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 *
 **/

function simpleSum(x,y) {
	return x + y 
}
const printEx02 = simpleSum(2,2)
console.log(printEx02)



console.assert( simpleSum(8, 11) === 19 );
console.assert( simpleSum(4, 101) === 105 );
console.assert( simpleSum(2, 2) !== 5 );
