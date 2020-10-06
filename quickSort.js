const quickSort = function (arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[0];
  let lessThan = [];
  let greaterThan = [];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < pivot) {
      lessThan.push(arr[i]);
    } else {
      greaterThan.push(arr[i]);
    }
  }
  return quickSort(lessThan).concat(pivot, quickSort(greaterThan));
};
