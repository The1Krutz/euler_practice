import assert from 'assert';
import {arrayEquals, isPrime} from './helpers.js';
console.log('\nproblem_003');

/**
 *
 * @param {number} number
 */
function getFactors(number) {
  let factors = [], stop = number;

  for(let i = 1;i < stop;i++) {
    const a = number / i;
    if(a === Math.floor(a)) {
      factors.push(i);
      factors.push(a);
      stop = a;
    }
  }

  return factors.sort();
}

assert(arrayEquals(getFactors(12), [1, 2, 3, 4, 6, 12]), 'getting factors is not working!');
assert(arrayEquals(getFactors(30), [1, 2, 3, 5, 6, 10, 15, 30]), 'getting factors is not working!');

/**
 *
 * @param {number} number
 */
function getPrimeFactors(number) {
  return getFactors(number).filter(z=>isPrime(z));
}

assert(arrayEquals(getPrimeFactors(12), [2, 3]), 'getting prime factors is not working!');
assert(arrayEquals(getPrimeFactors(30), [2, 3, 5]), 'getting prime factors is not working!');
assert(arrayEquals(getPrimeFactors(13195), [5, 7, 13, 29]), 'getting prime factors is not working!');

let answer = Math.max(...getPrimeFactors(600851475143));
console.log(answer);
assert(answer === 6857);
