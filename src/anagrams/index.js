// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // clean the strings
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

  if (stringA.length != stringB.length) {
    return false;
  }

  let hashA = getHashMap(stringA);
  let hashB = getHashMap(stringB);

  for (let char in hashA) {
    if (!(char in hashB) || hashA[char] != hashB[char]) {
      return false;
    }
  }

  return true;
}

function getHashMap(str) {
  let hash = {};
  for (let char of str) {
    if (char in hash) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }
  }

  return hash;
}

module.exports = anagrams;
