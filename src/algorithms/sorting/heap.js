module.exports = function(array) {
  // copy array
  const a = [...array];
  // keep record of original length
  let l = a.length;
  // Swap logic
  const swap = (l, r) => {
    const temp = a[l];

    a[l] = a[r];
    a[r] = temp;
  };
  // create heapify function
  const heapify = (a, i) => {
    // create left and right index
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;

    if (left < l && a[left] > a[max]) max = left;
    if (right < l && a[right] > a[max]) max = right;
    if (max !== i) {
      swap(max, i);
      heapify(a, max);
    }
  };

  for (let i = Math.floor(l / 2); i >= 0; i -= 1) heapify(a, i);
  for (let i = a.length - 1; i > 0; i--) {
    swap(0, i);
    l--;
    heapify(a, 0);
  }
  return a;
};
