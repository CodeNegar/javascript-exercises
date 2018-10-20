// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let length = 2 * n - 1;
  let space = " ";
  let hash = "#";
  let line = "";
  let hashCount = 0;
  let spaceCount = 0;

  for (let i = 1; i <= n; i++) {
    hashCount = 2 * i - 1;
    spaceCount = parseInt((length - hashCount) / 2);
    line =
      space.repeat(spaceCount) +
      hash.repeat(hashCount) +
      space.repeat(spaceCount);
    console.log(line);
  }
}

module.exports = pyramid;