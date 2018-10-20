// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if (n <= 1) {
    return n;
  }

  let num1 = 0;
  let num2 = 1;

  for (let i = 2; i <= n; i++) {
    if (i % 2 == 0) {
      num1 = num1 + num2;
    } else {
      num2 = num1 + num2;
    }
  }

  return n % 2 == 0 ? num1 : num2;
}

// recursive method
// function fib(n) {
//     if(n <= 1){
//         return n;
//     }

//     return fib(n-1) + fib(n-2);
// }
console.log(fib(39));

 
module.exports = fib;
