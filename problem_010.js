import assert from 'assert';
console.log('\nproblem_010');

function sumOfPrimesBelowN(n) {
  let a = 3, primes = [2], runningTotal = 2;
  let max = n > 1000000 ? n / 1000 : n;

  while (a < n) {
    if (primes.every(prime=>a % prime !== 0)) {
      runningTotal += a;
      if (a < max)
        primes.push(a);
    }
    a += 2;
  }

  return runningTotal;
}

assert(sumOfPrimesBelowN(10) === 17);

let answer = sumOfPrimesBelowN(2000000);
console.log(answer);
assert(answer === 142913828922);
