const mergeSort = function (array) {
  var sorted = [];
  // split our array into two halves
  var firstHalf = array.slice(0, Math.floor(array.length / 2));
  var secondHalf = array.slice(Math.floor(array.length / 2));
  // The recursive calls will continue to run until we get to an array size of 1
  if (firstHalf.length > 1) {
    firstHalf = mergeSort(firstHalf);
  }
  if (secondHalf.length > 1) {
    secondHalf = mergeSort(secondHalf);
  }
  var firstHalfIndex = 0;
  var secondHalfIndex = 0;
  // going position by position through both arrays at the same time, comparing values
  while (firstHalfIndex < firstHalf.length && secondHalfIndex < secondHalf.length) {
      if (firstHalf[firstHalfIndex] <= secondHalf[secondHalfIndex]) {
          sorted.push(firstHalf[firstHalfIndex]);
          firstHalfIndex++;
      } else {
          sorted.push(secondHalf[secondHalfIndex]);
          secondHalfIndex++;
      }
  }
  // once we escape the while loop, one of our two halves will have been
  // put in the sorted array in its entirety, while the other still needs its
  // remaining entries pushed into the array
  if (firstHalfIndex < secondHalfIndex) {
    for (var i = firstHalfIndex; i < firstHalf.length; i++) {
      sorted.push(firstHalf[i]);
    }
  } else {
    for (var i = secondHalfIndex; i < secondHalf.length; i++) {
      sorted.push(secondHalf[i]);
    }
  }
  return sorted;
};
