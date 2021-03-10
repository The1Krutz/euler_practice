import assert from 'assert';

export const low_primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ];

/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 */
export function arrayEquals(arr1, arr2) {
  arr1 = arr1.sort();
  arr2 = arr2.sort();

  if(arr1.length !== arr2.length) return false;

  for(let i = 0;i < arr1.length;i++) {
    if(arr1[i] !== arr2[i]) return false;
  }

  return true;
}

assert(arrayEquals([1, 5], [1, 5]), 'array comparison is breaking');
assert(arrayEquals([1, 3, 5], [1, 5, 3]), 'array comparison is breaking');

/**
 *
 * @param {number} number
 */
export function isPrime(number) {
  if(number === 1) return false; // edge case
  // fast check for even numbers lets us be more efficient later
  if(number === 2) return true;
  if(number % 2 === 0) return false;

  for(let i = 3;i < number;i += 2)
    if(number % i === 0)
      return false;
  return true;
}

for(const prime of low_primes) {
  assert(isPrime(prime), 'isPrime needs help');
}
assert(!isPrime(1), 'isPrime needs help');
assert(!isPrime(8), 'isPrime needs help');