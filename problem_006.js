import assert from 'assert';
console.log('\nproblem_006');

/**
 *
 * @param {number} max
 */
function sumofsquares(max) {
  let sum = 0;
  for (let i = 1; i <= max; i++) {
    sum += i * i;
  }
  return sum;
}

assert(sumofsquares(4) === 30, 'sumofsquares needs help');
assert(sumofsquares(5) === 55, 'sumofsquares needs help');
assert(sumofsquares(10) === 385, 'sumofsquares needs help');

/**
 *
 * @param {number} max
 */
function squareofsums(max) {
  let sum = 0;
  for (let i = 1; i <= max; i++) {
    sum += i;
  }
  return sum * sum;
}

assert(squareofsums(4) === 100, 'squareofsums needs help');
assert(squareofsums(5) === 225, 'squareofsums needs help');
assert(squareofsums(10) === 3025, 'squareofsums needs help');

/**
 *
 * @param {number} max
 */
function difference(max) {
  return squareofsums(max) - sumofsquares(max);
}

assert(difference(4) === 70, 'difference needs help');
assert(difference(5) === 170, 'difference needs help');
assert(difference(10) === 2640, 'difference needs help');

let answer = difference(100);
console.log(answer);
assert(answer === 25164150);
