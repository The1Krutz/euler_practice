import assert from 'assert';
console.log('\nproblem_015');

/**
 *
 * @param {number} n
 */
function factorial(n) {
  let result = 1;
  while(n > 1) {
    result *= n;
    n--;
  }
  return result;
}

assert(factorial(2) === 2, 'factorial needs help');
assert(factorial(3) === 6, 'factorial needs help');
assert(factorial(10) === 3628800, 'factorial needs help');

/**
 *
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
function nck(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

assert(nck(4, 2) === 6, 'nck needs help');

/**
 *
 * @param {number} s
 */
function latticePath(s) {
  return +nck(s + s, s).toFixed(0);
}

assert(latticePath(1) === 2, 'given needs help');
assert(latticePath(2) === 6, 'given needs help');
assert(latticePath(3) === 20, 'given needs help');
assert(latticePath(4) === 70, 'given needs help');

let answer = latticePath(20);
console.log(answer);
assert(answer === 137846528820);
