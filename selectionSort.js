const selectionSort = function(arr) {
  for (var i = 0; i < arr.length; i += 1) {
    let minIndex = arr.indexOf(Math.min(...arr.slice(i)));
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};
