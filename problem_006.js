import assert from 'assert';
console.log('\nproblem_006');

/**
 *
 * @param {number} max
 */
function sumofsquares(max) {
  let sum = 0;
  for(let i = 1;i <= max;i++) {
    sum += i * i;
  }
  return sum;
}

assert(sumofsquares(4) === 30, 'sumofsquares failing');
assert(sumofsquares(5) === 55, 'sumofsquares failing');
assert(sumofsquares(10) === 385, 'sumofsquares failing');

/**
 *
 * @param {number} max
 */
function squareofsums(max) {
  let sum = 0;
  for(let i = 1;i <= max;i++) {
    sum += i;
  }
  return sum * sum;
}

assert(squareofsums(4) === 100, 'squareofsums failing');
assert(squareofsums(5) === 225, 'squareofsums failing');
assert(squareofsums(10) === 3025, 'squareofsums failing');

/**
 *
 * @param {number} max
 */
function difference(max) {
  return squareofsums(max) - sumofsquares(max);
}

assert(difference(4) === 70, 'difference failing');
assert(difference(5) === 170, 'difference failing');
assert(difference(10) === 2640, 'difference failing');

let answer = difference(100);
console.log(answer);
assert(answer === 25164150);
