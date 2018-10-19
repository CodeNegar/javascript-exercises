// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   let step = "#";
//   let space = " ";
//   let line = "";
//   for (let i = 1; i <= n; i++) {
//     line = step.repeat(i) + space.repeat(n - i);
//     console.log(line);
//   }
// }

function steps(n) {
    
    let hash = "#";
    let space = " ";
    let line = "";
    for (let i = 1; i <= n; i++) {
        line = hash.repeat(i) + space.repeat(n - i);
        console.log(line);
    }
}

module.exports = steps;
