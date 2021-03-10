import assert from 'assert';
console.log('\nproblem_007');

function nth_prime(n) {
  let a = 3, primes = [2];

  while(primes.length < n) {
    if(primes.every(prime=>a % prime !== 0)) {
      primes.push(a);
    }
    a += 2;
  }

  return primes.pop();
}

assert(nth_prime(1) === 2);
assert(nth_prime(6) === 13);
assert(nth_prime(5) === 11);
assert(nth_prime(11) === 31);
assert(nth_prime(22) === 79);
assert(nth_prime(25) === 97);

let answer = nth_prime(10001);
console.log(answer);
assert(answer === 104743);
