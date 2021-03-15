import assert from 'assert';
console.log('\nproblem_016');

/**
 *
 * @param {string[]} list
 * @returns {string}
 */
function string_multi_add(list) {
  let returning = [];
  let pointers = [];
  let carry = 0;

  for (let i = 0; i < list.length; i++) {
    pointers[i] = list[i].length - 1;
  }

  while (!(pointers.every(z=>z === -1)) || carry !== 0) {
    let tempSum = carry;

    for (let l = 0; l < list.length; l++) {
      if (pointers[l] !== -1) {
        tempSum += +list[l][pointers[l]];
      }
    }

    carry = 0;
    while (tempSum >= 10) {
      tempSum -= 10;
      carry += 1;
    }

    returning.unshift(tempSum.toString());

    for (let i = 0; i < pointers.length; i++) {
      if (pointers[i] > -1) {
        pointers[i]--;
      }
    }
  }

  return returning.join('');
}

assert(string_multi_add(['1', '2']) === '3');
assert(string_multi_add(['65535', '65535']) === '131070');
assert(string_multi_add(['65535', '5535']) === '71070');
assert(string_multi_add(['1', '2', '3', '4']) === '10');
assert(string_multi_add(['100', '2134', '39021836', '478379262']) === '517403332');
assert(string_multi_add(['1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890', '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890']) === '1234567890246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780246913578024691357802469135780'); // larger than a double can handle, and with different length strings

/**
 *
 * @param {string} left
 * @param {string} right
 * @returns {string}
 */
function string_multiply(left, right) {
  let addlist = [];

  let rightzeros = '';
  for (let i = right.length - 1; i >= 0; i--) {
    let leftzeros = '';
    for (let j = left.length - 1; j >= 0; j--) {
      addlist.push(`${(+`${right[i]}${rightzeros}` * +left[j])}${leftzeros}`);
      leftzeros += '0';
    }
    rightzeros += '0';
  }

  return string_multi_add(addlist);
}

assert(string_multiply('2', '3') === '6'); // small proof
assert(string_multiply('65535', '3') === '196605'); // larger than a ushort can handle
assert(string_multiply('65535', '65535') === '4294836225'); // larger than a ushort can handle

/**
 * both of the arguments are numbers, I'm not making something that can do a bazillion digits to the bazillionth power, that's not actually that useful
 * especially when the problem I'm solving only uses 2^1000
 * However we will return a string, since the answer can be unreasonably huge even for normal numbered arguments
 * @param {number} base
 * @param {number} exp
 * @returns {string}
 */
function string_exponent(base, exp) {
  let total = base.toString();

  while (exp > 1) {
    total = string_multiply(total, base.toString());
    exp -= 1;
  }

  return total;
}

assert(string_exponent(2, 2) === '4');
assert(string_exponent(2, 3) === '8');
assert(string_exponent(2, 10) === '1024');
assert(string_exponent(5, 9) === '1953125');
assert(string_exponent(9, 5) === '59049');

/**
 *
 * @param {string} n
 * @returns {number}
 */
function digitSum(n) {
  let total = 0;

  for (let i of n)
    total += +i;

  return total;
}

assert(digitSum('5') === 5);
assert(digitSum('15') === 6);
assert(digitSum(string_exponent(2, 1)) === 2);
assert(digitSum(string_exponent(2, 2)) === 4);
assert(digitSum(string_exponent(2, 3)) === 8);
assert(digitSum(string_exponent(2, 10)) === 7);
assert(digitSum(string_exponent(9, 5)) === 27);

let answer = digitSum(string_exponent(2, 1000));
console.log(answer);
assert(answer === 1366);
