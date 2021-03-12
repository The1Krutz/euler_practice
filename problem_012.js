import assert from 'assert';
import {getFactors} from './helpers.js';
console.log('\nproblem_012');

/**
 *
 * @param {number} n
 */
function firstTriangleOverNFactors(n) {
  let a = 0, triangle = 0;

  while(getFactors(triangle).length < n) {
    triangle += a;
    a++;
  }
  return triangle;
}

assert(firstTriangleOverNFactors(4) === 6);
assert(firstTriangleOverNFactors(5) === 28);

let answer = firstTriangleOverNFactors(500);
console.log(answer);
assert(answer === 76576500);
