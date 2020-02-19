'use strict';

function binarySearch(array, val) {
  // get mid point of array
  const mid = array.length / 2;

  if (val > array[mid]) return binarySearch(array.splice(mid - 1, array.length), val);
  if (val < array[mid]) return binarySearch(array.splice(0, mid - 1), val);
  if (val === array[mid]) return array[mid];
  return null;
};

module.exports = binarySearch;
