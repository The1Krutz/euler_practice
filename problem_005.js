import assert from 'assert';
import {arrayEquals, low_primes} from './helpers.js';
console.log('\nproblem_005');

/**
 *
 * @param {number} number
 */
function getPrimeFactorization(number) {
  assert(number > 1, `don't use this on 1 please`);
  let factorization = [], max = number;

  while (max > 1) {
    for (const prime of low_primes) {
      if (max % prime === 0) {
        factorization.push(prime);
        max /= prime;
        break;
      }
    }
  }
  factorization.sort();
  return factorization;
}

assert(arrayEquals(getPrimeFactorization(10), [2, 5]));
assert(arrayEquals(getPrimeFactorization(12), [2, 2, 3]));
assert(arrayEquals(getPrimeFactorization(100), [2, 2, 5, 5]));
assert(arrayEquals(getPrimeFactorization(27), [3, 3, 3]));
assert(arrayEquals(getPrimeFactorization(17), [17]));

/**
 *
 * @param {number[]} factors
 */
function LCM(factors) {
  let factorizations = factors.map(z=>getPrimeFactorization(z));
  let lcmf = [];

  for (let prime of low_primes) {
    let primeCount = Math.max(...factorizations.map(z=>z.filter(y=>y === prime).length));
    while (primeCount-- > 0) {
      lcmf.push(prime);
    }
  }

  return lcmf.reduce((p, c)=>p * c);
}

assert(LCM([2, 3]) === 6, 'LCM failing');
assert(LCM([3, 5]) === 15, 'LCM failing');
assert(LCM([2, 4]) === 4, 'LCM failing');
assert(LCM([2, 3, 4]) === 12, 'LCM failing');
assert(LCM([2, 3, 5, 10]) === 30, 'LCM failing');

let answer = LCM([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
console.log(answer);
assert(answer === 232792560);
