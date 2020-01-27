'use strict';
/**
 * Insertion Sort
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
  for (let i = 1; i < array.length; ++i) {
    let val = array[i];
    let h = i;

    while (h > 0 && array[h - 1] > val) {
      array[h] = array[h - 1];
      --h;
    }
    array[h] = val;
  }
  return array;
};
