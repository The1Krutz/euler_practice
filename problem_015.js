import assert from 'assert';
console.log('\nproblem_015');

/**
 *
 * @param {number} n
 */
function factorial(n) {
  let result = 1;
  while(n > 1) {
    result *= n;
    n--;
  }
  return result;
}

assert(factorial(2) === 2, 'factorial needs help');
assert(factorial(3) === 6, 'factorial needs help');
assert(factorial(10) === 3628800, 'factorial needs help');

/**
 *
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
function nck(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

assert(nck(4, 2) === 6, 'nck needs help');

/**
 *
 * @param {number} s
 */
function latticePath(s) {
  return +nck(s + s, s).toFixed(0);
}


assert(latticePath(1) === 2, 'given needs help');
assert(latticePath(2) === 6, 'given needs help');
assert(latticePath(3) === 20, 'given needs help');
assert(latticePath(4) === 70, 'given needs help');


let answer = latticePath(20);
console.log(answer);
assert(answer === 137846528820);



// uses strings to brute force create every possible combination of options and count them
// works fine for small numbers, but chokes and dies (runs out of heap space) on anything above 12x12

// /**
//  *
//  * @param {string} path
//  * @param {number} side
//  */
// function isValidPath(path, side) {
//   let r = 0, d = 0;
//   for(const y of path) {
//     if(y === 'D')d++;
//     if(y === 'R')r++;
//   }
//   return d <= side && r <= side;
// }

// assert(isValidPath('DRDR', 2), 'isValidPath needs help');
// assert(!isValidPath('DRRR', 2), 'isValidPath needs help');

// /**
//    *
//    * @param {number} side
//    */
// function generateGridPaths(side) {
//   let paths = ['D', 'R'];

//   console.log();

//   while(paths.every(z=>z.length < side * 2)) {
//     let tempadd = [];
//     for(let path of paths) {
//       tempadd.push(path + 'D', path + 'R');
//     }

//     paths = tempadd;//.filter(z=>isValidPath(z, side));
//   }

//   paths = paths.filter(z=>isValidPath(z, side));
//   console.log(paths[0].length, paths.length, paths);
//   return paths;
// }

// assert(generateGridPaths(1).length === 2);
// assert(generateGridPaths(2).length === 6);
// assert(generateGridPaths(3).length === 20);
// assert(generateGridPaths(4).length === 70);


// uses binary and bitwise stuff to try to be more efficient.
// it still can't solve the problem, but it gets further before it chokes and dies

// /**
//  *
//  * @param {string} path
//  * @param {number} side
//  */
// function isValidPath(path, side) {
//   let r = 0, strpath = path.toString(2);
//   for(const y of strpath) {
//     if(y === '1')r++;
//   }
//   return r === side;
// }

// assert(isValidPath(0b0101, 2), 'isValidPath needs help');
// assert(!isValidPath(0b0111, 2), 'isValidPath needs help');

// /**
//    *
//    * @param {number} side
//    */
// function generateGridPaths(side) {
//   // 0: down
//   // 1: right
//   let paths = [0b0, 0b1];
//   console.log();

//   for(let i = 0; i < side * 2 - 1; i++) {
//     let tempadd = [];
//     for(let path of paths) {
//       let d = path << 1;
//       let r = (path << 1) ^ 0b1;

//       tempadd.push(d, r);
//     }

//     paths = tempadd;

//     console.log(i, paths.length);
//   }

//   paths = paths.filter(z=>isValidPath(z, side));

//   return paths;
// }

// assert(generateGridPaths(1).length === 2);
// assert(generateGridPaths(2).length === 6);
// assert(generateGridPaths(3).length === 20);

