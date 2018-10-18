// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let counter = 0;
    for(let char of str){
        if(isVowel(char)){
            counter++;
        }
    }

    return counter;
}

function isVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.indexOf(char.toLowerCase()) >= 0;
}

module.exports = vowels;
