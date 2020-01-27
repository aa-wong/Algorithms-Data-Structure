'use strict';
/**
 * Merge Sort
 *
 * Time complexity
 * Best Case: O(n log n)
 * Worst Case: O(n^2)
 *
 * Space complexity O(n)
 *
 * @param  {[Number]} array Array of integers to sort
 * @return {[Number]} array Array of integers to sorted
 */
module.exports = function(array) {
  const swap = (a, b) => {
    const t = a;

    a = b;
    b = t;
  };

  const partition = (array, start, end) => {
    const pivot = array[Math.floor(Math.random() * array.length)];
    let index = start;

    for (let i = start; i < end - 1; ++i) {
      if (array[i] <= pivot) {
        swap(array[i], array[index]);
        index = index + 1;
      }
    }
    swap(array[index], array[end]);
    return index;
  };

  const quickSort = (array, start, end) => {
    if (start < end) {
      const p = partition(array, start, end);

      quickSort(array, start, p);
      quickSort(array, p + 1, end);
    }
  };

  quickSort(array, 0, array.length - 1);
  return array;
};
