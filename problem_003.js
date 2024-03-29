import assert from 'assert';
import {arrayEquals, getFactors, isPrime} from './helpers.js';
console.log('\nproblem_003');

/**
 *
 * @param {number} number
 */
function getPrimeFactors(number) {
  return getFactors(number).filter(z=>isPrime(z));
}

assert(arrayEquals(getPrimeFactors(12), [2, 3]), 'getPrimeFactors needs help');
assert(arrayEquals(getPrimeFactors(30), [2, 3, 5]), 'getPrimeFactors needs help');
assert(arrayEquals(getPrimeFactors(13195), [5, 7, 13, 29]), 'getPrimeFactors needs help');

let answer = Math.max(...getPrimeFactors(600851475143));
console.log(answer);
assert(answer === 6857);
