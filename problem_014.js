import assert from 'assert';
import { TimedCall } from './helpers.js';
console.log('\nproblem_014');

let collatz_cache = {};

/**
 *
 * @param {number} n
 */
function collatz(n) {
  assert(n > 0, `don't do that`);
  let counter = 1, x = n;

  while (n !== 1) {
    if(n % 2 === 0) {
      // even
      n = n / 2;
    } else {
      //odd
      n = 3 * n + 1;
    }
    if(collatz_cache[n]) {
      counter += collatz_cache[n];
      break;
    }
    counter++;
  }

  collatz_cache[x] = counter;
  return counter;
}

assert(collatz(10) === 7);
assert(collatz(13) === 10);

/**
 *
 * @param {number} x
 */
function findLongestCollatzUnderX(x) {
  let longest_length = 1, longest_start = 1;

  for(let i = 1; i < x; i++) {
    let temp = collatz(i);
    if(temp > longest_length) {
      longest_length = temp;
      longest_start = i;
    }
  }

  return longest_start;
}

let answer = TimedCall(()=>findLongestCollatzUnderX(1000000));
console.log(answer);
assert(answer === 837799);
