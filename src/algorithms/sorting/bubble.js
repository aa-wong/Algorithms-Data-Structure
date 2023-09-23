'use strict';
/**
 * Bubble Sort
 *
 * Time complexity
 * Best Case: is O(n)
 * Average Case: is O(n^2)
 * Worst Case: is O(n^2)
 *
 * @param  {[Number]} array Array of integers to sort
 * @return {[Number]} array Array of integers to sorted
 */
module.exports = function(array) {
  for (let t = array.length - 1; t >= 0; --t) {
    let swapped = false;

    for (let i = 0; i < t - 1; ++i) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];

        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
      if (!swapped) break; // If swap never happens, Break the loop.
    }
  }
  return array;
};
