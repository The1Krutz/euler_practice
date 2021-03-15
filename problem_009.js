import assert from 'assert';
console.log('\nproblem_009');

function getAnswer() {
  for (let a = 1; a < 1000; a++) {
    for (let b = 1; b < 1000; b++) {
      let c = 1000 - a - b;
      if (a < b
        && b < c
        && a + b + c === 1000
        && (a * a + b * b === c * c)
      ) {
        return [a, b, c];
      }
    }
  }
}

let temp = getAnswer();
let answer = temp.reduce((p, c)=>p * c);
console.log(temp, answer);
assert(answer === 31875000);
