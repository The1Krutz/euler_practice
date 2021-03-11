import assert from 'assert';
console.log('\nproblem_004');

/**
 *
 * @param {number} number
 */
function isPalindrome(number) {
  let word = '' + number;

  for(let a = 0, b = word.length - 1; a <= b; a++, b--)
    if(word[a] !== word[b])
      return false;
  return true;
}

assert(isPalindrome(9009), 'isPalindrome needs help');
assert(isPalindrome(906609), 'isPalindrome needs help');
assert(isPalindrome(90809), 'isPalindrome needs help');
assert(!isPalindrome(95009), 'isPalindrome needs help');
assert(!isPalindrome(9506609), 'isPalindrome needs help');
assert(!isPalindrome(950809), 'isPalindrome needs help');

function biggestPalindrome(max) {
  let ans = 0;

  for(let a = 0; a < max; a++)
    for(let b = 0; b < max; b++)
      if(isPalindrome(a * b) && a * b > ans)
        ans = a * b;

  return ans;
}

let answer = biggestPalindrome(1000);
console.log(answer);
assert(answer === 906609);
