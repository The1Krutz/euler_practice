import assert from 'assert';
console.log('\nproblem_001');

function sumofmultiples(max) {
  let x = 0;
  for(let i = 0; i < max; i++) {
    if(i % 3 === 0) x += i;
    else if(i % 5 === 0) x += i;
  }

  return x;
}

assert(sumofmultiples(10) === 23);

let answer = sumofmultiples(1000);
console.log(answer);
assert(answer === 233168);
