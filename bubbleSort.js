const bubbleSort = function(arr, num) {
  if (!num) {
    num = 0;
  }
  let swaps = 0;
  for (let i = 0; i < arr.length - num; i += 1){
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
      swaps += 1;
    }
  }
  if (swaps === 0) {
    return arr;
  } else {
    num += 1;
    return bubbleSort(arr, num);
  }
};

