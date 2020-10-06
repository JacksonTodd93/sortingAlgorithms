const insertionSort = function (array) {
  for (var i = 1; i < array.length; i++) {
    var num = i;
    var current = array[i];
    while (current < array[num - 1]) {
      array[num] = array[num - 1];
      array[num - 1] = current;
      if (num > 1) {
        num--;
      }
    }
  }
  return array;
};
