// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];
  let length = array.length;
  
  for (let i = 0; i <= length; i = i + size) {
    let subarray = [];
    for (let j = 0; j < size && i + j < length; j++) {
      let item = array[i + j];
      subarray.push(item);
    }

    if (subarray.length) {
      chunked.push(subarray);
    }
  }

  return chunked;
}

module.exports = chunk;
