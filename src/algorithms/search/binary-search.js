'use strict';

function binarySearch(array, val) {
  // get mid point of array
  const mid = Math.floor(array.length / 2);

  if (array.length > 1) {
    if (val > array[mid]) return binarySearch(array.splice(mid), val);
    if (val < array[mid]) return binarySearch(array.splice(0, mid), val);
  }
  if (val === array[mid]) return array[mid];
  return null;
};

module.exports = binarySearch;
