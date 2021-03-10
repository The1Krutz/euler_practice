import assert from 'assert';
console.log('\nproblem_002');

function fibsum (max) {
  let a = 1, b = 2, c = 0, sum = 2;

  while(c < max) {
    c = a + b;
    a = b;
    b = c;
    if(c % 2 === 0)sum += c;
  }

  return sum;
}

assert(fibsum(50) === 44);

let answer = fibsum(4000000);
console.log(answer);
assert(answer === 4613732);
