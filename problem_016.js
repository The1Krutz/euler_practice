import assert from 'assert';
console.log('\nproblem_016');

/**
 *
 * @param {number} n
 * @returns {number}
 */
function digitSum(n) {
  let total = 0, original = n;

  while(n) {
    total += n % 10;
    n = Math.floor(n / 10);
  }

  console.log(original, total);
  return total;
}

assert(digitSum(5) === 5);
assert(digitSum(15) === 6);
assert(digitSum(Math.pow(2, 1)) === 2);
assert(digitSum(Math.pow(2, 2)) === 4);
assert(digitSum(Math.pow(2, 3)) === 8);
assert(digitSum(Math.pow(2, 4)) === 7);
assert(digitSum(Math.pow(2, 5)) === 5);
assert(digitSum(Math.pow(2, 6)) === 10);
assert(digitSum(Math.pow(2, 7)) === 11);
assert(digitSum(Math.pow(2, 8)) === 13);
assert(digitSum(Math.pow(2, 9)) === 8);
assert(digitSum(Math.pow(2, 10)) === 7);
assert(digitSum(Math.pow(2, 11)) === 14);
assert(digitSum(Math.pow(2, 12)) === 19);
assert(digitSum(Math.pow(2, 13)) === 20);
assert(digitSum(Math.pow(2, 14)) === 22);
assert(digitSum(Math.pow(2, 15)) === 26);

let answer = digitSum(Math.pow(2, 1000));
console.log(answer);
// assert(answer === -1);
