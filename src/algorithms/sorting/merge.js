'use strict';
/**
 * Merge Sort
 *
 * Time complexity O(n log n)
 * Space complexity O(n)
 *
 * @param  {[Number]} array Array of integers to sort
 * @return {[Number]} array Array of integers to sorted
 */
function mergeSort(array) {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2); // Determine mid point of array
  const left = array.slice(0, mid); // split array in to 2 by the mid point
  const right = array.slice(mid);
  // function to sort and merge 2 arrays
  const sortAndMerge = (left, right) => {
    let sorted = []; // final sorted array
    let l = 0; // current scanned indexes of left and right arrays
    let r = 0;

    while (l < left.length && r < right.length) { // scan values in arrays
      if (left[l] < right[r]) { // if left is smaller, push to array and increment left index
        sorted.push(left[l]);
        ++l;
      } else { // push right value to array and increment right index
        sorted.push(right[r]);
        ++r;
      }
    }
    // Append remaining values
    return sorted.concat(left.slice(l)).concat(right.slice(r));
  };

  // return merged array in recursion
  return sortAndMerge(mergeSort(left), mergeSort(right));
};

module.exports = mergeSort;
