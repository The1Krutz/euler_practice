import assert from 'assert';
console.log('\nproblem_017');

/**
 *
 * @param {number} n
 * @returns {string}
 */
function singleDigitNumber(n) {
  return {
    0:'',
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
  }[n];
}

assert(singleDigitNumber(1) === 'one');
assert(singleDigitNumber(3) === 'three');
assert(singleDigitNumber(7) === 'seven');

/**
 *
 * @param {number} n
 * @returns {string}
 */
function twoDigitNumber(n) {
  if (n < 10)
    return singleDigitNumber(n);
  if (n >= 20)
    return {
      2:'twenty',
      3:'thirty',
      4:'forty',
      5:'fifty',
      6:'sixty',
      7:'seventy',
      8:'eighty',
      9:'ninety',
    }[Math.floor(n / 10)]
      + singleDigitNumber(n % 10);
  return {
    10:'ten',
    11:'eleven',
    12:'twelve',
    13:'thirteen',
    14:'fourteen',
    15:'fifteen',
    16:'sixteen',
    17:'seventeen',
    18:'eighteen',
    19:'nineteen',
  }[n];
}

assert(twoDigitNumber(10) === 'ten');
assert(twoDigitNumber(17) === 'seventeen');
assert(twoDigitNumber(71) === 'seventyone');
assert(twoDigitNumber(99) === 'ninetynine');

/**
 *
 * @param {number} n
 * @returns {string}
 */
function threeDigitNumber(n) {
  let hundreds = singleDigitNumber(Math.floor(n / 100)) + 'hundred';
  let tens = n % 100;

  if (tens !== 0)
    hundreds += `and${twoDigitNumber(tens)}`;
  return hundreds;
}

assert(threeDigitNumber(300) === 'threehundred');
assert(threeDigitNumber(309) === 'threehundredandnine');
assert(threeDigitNumber(937) === 'ninehundredandthirtyseven');
assert(threeDigitNumber(413) === 'fourhundredandthirteen');

/**
 *
 * @param {number} n
 * @returns {string}
 */
function fourDigitNumber(n) {
  let thousands = singleDigitNumber(Math.floor(n / 1000)) + 'thousand';
  let hundreds = n % 1000;

  if (hundreds === 0)
    return thousands;
  if (hundreds < 100)
    return `${thousands}and${twoDigitNumber(hundreds)}`;
  return `${thousands}${threeDigitNumber(hundreds)}`;
}

assert(fourDigitNumber(1000) === 'onethousand');
assert(fourDigitNumber(1001) === 'onethousandandone');
assert(fourDigitNumber(7904) === 'seventhousandninehundredandfour');
assert(fourDigitNumber(8315) === 'eightthousandthreehundredandfifteen');
assert(fourDigitNumber(8351) === 'eightthousandthreehundredandfiftyone');

/**
 *
 * @param {number} max
 * @returns {number}
 */
function getAnswer(max) {
  let list = [];

  for (let i = 1; i <= max; i++)
    if (i < 10)
      list.push(singleDigitNumber(i));
    else if (i < 100)
      list.push(twoDigitNumber(i));
    else if (i < 1000)
      list.push(threeDigitNumber(i));
    else
      list.push(fourDigitNumber(i));
  return list.map(z=>z.length)
    .reduce((p, c)=>p + c, 0);
}

assert(getAnswer(5) === 19);

let answer = getAnswer(1000);
console.log(answer);
assert(answer === 21124);
