(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("algo", [], factory);
	else if(typeof exports === 'object')
		exports["algo"] = factory();
	else
		root["algo"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/algorithms/index.js":
/*!*********************************!*\
  !*** ./src/algorithms/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  sorting: __webpack_require__(/*! ./sorting */ "./src/algorithms/sorting/index.js"),
  search: __webpack_require__(/*! ./search */ "./src/algorithms/search/index.js")
};

/***/ }),

/***/ "./src/algorithms/search/binary-search.js":
/*!************************************************!*\
  !*** ./src/algorithms/search/binary-search.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function binarySearch(array, val) {
  // get mid point of array
  var mid = Math.floor(array.length / 2);

  if (array.length > 1) {
    if (val > array[mid]) return binarySearch(array.splice(mid), val);
    if (val < array[mid]) return binarySearch(array.splice(0, mid), val);
  }

  if (val === array[mid]) return array[mid];
  return null;
}

;
module.exports = binarySearch;

/***/ }),

/***/ "./src/algorithms/search/index.js":
/*!****************************************!*\
  !*** ./src/algorithms/search/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  binarySearch: __webpack_require__(/*! ./binary-search */ "./src/algorithms/search/binary-search.js")
};

/***/ }),

/***/ "./src/algorithms/sorting/bubble.js":
/*!******************************************!*\
  !*** ./src/algorithms/sorting/bubble.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

module.exports = function (array) {
  for (var t = array.length - 1; t >= 0; --t) {
    var swapped = false;

    for (var i = 0; i < t - 1; ++i) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }

      if (!swapped) break; // If swap never happens, Break the loop.
    }
  }

  return array;
};

/***/ }),

/***/ "./src/algorithms/sorting/heap.js":
/*!****************************************!*\
  !*** ./src/algorithms/sorting/heap.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

module.exports = function (array) {
  // copy array
  var a = [].concat(_toConsumableArray(array)); // keep record of original length

  var l = a.length; // Swap logic

  var swap = function swap(l, r) {
    var temp = a[l];
    a[l] = a[r];
    a[r] = temp;
  }; // create heapify function


  var heapify = function heapify(a, i) {
    // create left and right index
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;
    if (left < l && a[left] > a[max]) max = left;
    if (right < l && a[right] > a[max]) max = right;

    if (max !== i) {
      swap(max, i);
      heapify(a, max);
    }
  };

  for (var i = Math.floor(l / 2); i >= 0; i -= 1) {
    heapify(a, i);
  }

  for (var _i = a.length - 1; _i > 0; _i--) {
    swap(0, _i);
    l--;
    heapify(a, 0);
  }

  return a;
};

/***/ }),

/***/ "./src/algorithms/sorting/index.js":
/*!*****************************************!*\
  !*** ./src/algorithms/sorting/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  bubbleSort: __webpack_require__(/*! ./bubble */ "./src/algorithms/sorting/bubble.js"),
  heapSort: __webpack_require__(/*! ./heap */ "./src/algorithms/sorting/heap.js"),
  insertionSort: __webpack_require__(/*! ./insertion */ "./src/algorithms/sorting/insertion.js"),
  mergeSort: __webpack_require__(/*! ./merge */ "./src/algorithms/sorting/merge.js"),
  quickSort: __webpack_require__(/*! ./quick */ "./src/algorithms/sorting/quick.js"),
  selectionSort: __webpack_require__(/*! ./selection */ "./src/algorithms/sorting/selection.js")
};

/***/ }),

/***/ "./src/algorithms/sorting/insertion.js":
/*!*********************************************!*\
  !*** ./src/algorithms/sorting/insertion.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

module.exports = function (array) {
  for (var i = 1; i < array.length; ++i) {
    var val = array[i];
    var h = i;

    while (h > 0 && array[h - 1] > val) {
      array[h] = array[h - 1];
      --h;
    }

    array[h] = val;
  }

  return array;
};

/***/ }),

/***/ "./src/algorithms/sorting/merge.js":
/*!*****************************************!*\
  !*** ./src/algorithms/sorting/merge.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
  var mid = Math.floor(array.length / 2); // Determine mid point of array

  var left = array.slice(0, mid); // split array in to 2 by the mid point

  var right = array.slice(mid); // function to sort and merge 2 arrays

  var sortAndMerge = function sortAndMerge(left, right) {
    var sorted = []; // final sorted array

    var l = 0; // current scanned indexes of left and right arrays

    var r = 0;

    while (l < left.length && r < right.length) {
      // scan values in arrays
      if (left[l] < right[r]) {
        // if left is smaller, push to array and increment left index
        sorted.push(left[l]);
        ++l;
      } else {
        // push right value to array and increment right index
        sorted.push(right[r]);
        ++r;
      }
    } // Append remaining values


    return sorted.concat(left.slice(l)).concat(right.slice(r));
  }; // return merged array in recursion


  return sortAndMerge(mergeSort(left), mergeSort(right));
}

;
module.exports = mergeSort;

/***/ }),

/***/ "./src/algorithms/sorting/quick.js":
/*!*****************************************!*\
  !*** ./src/algorithms/sorting/quick.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Quick Sort
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

module.exports = function (array) {
  var swap = function swap(a, b) {
    var t = a;
    a = b;
    b = t;
  };

  var partition = function partition(array, start, end) {
    var pivot = array[Math.floor(Math.random() * array.length)];
    var index = start;

    for (var i = start; i < end - 1; ++i) {
      if (array[i] <= pivot) {
        swap(array[i], array[index]);
        index = index + 1;
      }
    }

    swap(array[index], array[end]);
    return index;
  };

  var quickSort = function quickSort(array, start, end) {
    if (start < end) {
      var p = partition(array, start, end);
      quickSort(array, start, p);
      quickSort(array, p + 1, end);
    }
  };

  quickSort(array, 0, array.length - 1);
  return array;
};

/***/ }),

/***/ "./src/algorithms/sorting/selection.js":
/*!*********************************************!*\
  !*** ./src/algorithms/sorting/selection.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Selection Sort
 *
 * Time complexity is O(n^2)
 * @param  {[Number]} array Array of integers to sort
 * @return {[Number]} array Array of integers to sorted
 */

module.exports = function (array) {
  for (var i = 0; i < array.length - 1; ++i) {
    var min = i;

    for (var j = i + 1; j < array.length; ++j) {
      if (array[min] < array[j]) min = j;
    }

    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }

  return array;
};

/***/ }),

/***/ "./src/data-structures/binary-search-tree/index.js":
/*!*********************************************************!*\
  !*** ./src/data-structures/binary-search-tree/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Node(val) {
  this._data = val;
}

;
Node.prototype = {
  get data() {
    return this._data;
  },

  set data(val) {
    this._data = val;
  },

  get left() {
    return this._left;
  },

  set left(node) {
    if (node && node.constructor === Number) this._left = new Node(node);else this._left = node;
  },

  get right() {
    return this._right;
  },

  set right(node) {
    if (node && node.constructor === Number) this._right = new Node(node);else this._right = node;
  },

  insert: function insert(data) {
    if (!this.data) this.data = data;else if (data > this.data) {
      if (this.right) this.right.insert(data);else this.right = data;
    } else if (data < this.data) {
      if (this.left) this.left.insert(data);else this.left = data;
    }
  },
  search: function search(data) {
    if (!this.data) return null;
    if (data === this.data) return this;
    if (data > this.data && this.right) return this.right.search(data);
    if (data < this.data && this.left) return this.left.search(data);
    return null;
  }
};

function BinarySearchTree(data) {
  var _this = this;

  if (Array.isArray(data)) data.forEach(function (n) {
    return _this.insert(n);
  });else this._root = new Node(data);
}

;
BinarySearchTree.prototype = {
  get root() {
    return this._root;
  },

  set root(node) {
    this._root = node;
  },

  insert: function insert(data) {
    if (!this.root) this.root = new Node(data);else this.root.insert(data);
    return this;
  },
  has: function has(data) {
    if (!this.root) return false;
    return this.root.search(data) !== null;
  },
  search: function search(data) {
    if (!this.root) return null;
    return this.root.search(data);
  },
  findMin: function findMin(node) {
    if (!this.root) return;

    var getMin = function getMin(node) {
      if (node.left) return getMin(node.left);
      return node.data;
    };

    return !node ? getMin(this.root) : getMin(node);
  },
  findMax: function findMax(node) {
    if (!this.root) return;

    var getMax = function getMax(node) {
      if (node.right) return getMax(node.right);
      return node.data;
    };

    return !node ? getMax(this.root) : getMax(node);
  },
  delete: function _delete(val) {
    var deleteNode = function deleteNode(root, val) {
      // If No Node return undefined
      if (!root) return; // If val is less than current node data. Continue on to left child.

      if (val < root.data) return deleteNode(root.left, val, root); // If val is greater than current node data. Continue on to right child.

      if (val > root.data) return deleteNode(root.right, val, root); // Case 1: No children, deallocate child from parent

      if (root.left && root.right) {
        // Case 3: if 2 children
        // Find minimum value of the right node
        var temp = root.right;

        while (temp.left) {
          temp = temp.left;
        } // write node data to the minimum values


        root.data = temp.data; // Move on to the right and continue on

        root.right = deleteNode(root.right, temp.data);
        return root;
      }

      return root.left || root.right;
    };

    deleteNode(this.root, val);
    return this;
  },
  levelOrder: function levelOrder() {
    var vals = [];

    if (this.root) {
      var queue = [];
      queue.push(this.root);

      while (queue.length > 0) {
        var curr = queue.shift();
        vals.push(curr.data);
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      }
    }

    return vals;
  },
  preOrder: function preOrder() {
    var vals = [];

    var traverse = function traverse(node) {
      vals.push(node.data);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    if (this.root) traverse(this.root);
    return vals;
  },
  inOrder: function inOrder() {
    var vals = [];

    var traverse = function traverse(node) {
      if (node.left) traverse(node.left);
      vals.push(node.data);
      if (node.right) traverse(node.right);
    };

    if (this.root) traverse(this.root);
    return vals;
  },
  postOrder: function postOrder() {
    var vals = [];

    var traverse = function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      vals.push(node.data);
    };

    if (this.root) traverse(this.root);
    return vals;
  },
  maxDepth: function maxDepth() {
    if (!this.root) return 0;

    var maxDepth = function maxDepth(node) {
      if (!node) return 0;
      return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
    };

    return maxDepth(this.root);
  },
  isValid: function isValid() {
    var isBST = function isBST(node, min, max) {
      // If no Node then we have reached the end of the tree.
      // Return true
      if (!node) return true; // Validate if the data is less than or equal to the min or greater than or equal to max.
      // Then the tree is not a valid search tree.

      if (node.data <= min || node.data >= max) return false;
      return isBST(node.left, min, node.data) && isBST(node.right, node.data, max);
    };

    return isBST(this.root, -Infinity, Infinity);
  },
  pathSum: function pathSum(sum) {
    var hasPathSum = function hasPathSum(root, sum) {
      if (!root) return false;
      sum -= root.data;
      if (!root.left && !root.right) return sum === 0;
      return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
    };

    return hasPathSum(this.root, sum);
  },
  isSymmetric: function isSymmetric() {
    if (!this.root) return true;

    var validateSymmetry = function validateSymmetry(left, right) {
      if (!left || !right) return left === right;
      if (left.data !== right.data) return false;
      return validateSymmetry(left.left, right.right) && validateSymmetry(left.right, right.left);
    };

    return validateSymmetry(this.root.left, this.root.right);
  },
  getSuccessor: function getSuccessor(data) {
    // Search the node
    var curr = this.search(data);
    if (!curr) return null; // Case 1: Node has right subtree

    if (curr.right !== undefined) return this.findMin(curr.right); // Case 2: No right subtree

    var successor = null;
    var ancestor = this.root;

    while (ancestor !== curr) {
      if (curr.data < ancestor.data) {
        successor = ancestor;
        ancestor = ancestor.left;
      } else ancestor = ancestor.right;
    }

    return successor.data;
  }
};
module.exports = BinarySearchTree;

/***/ }),

/***/ "./src/data-structures/graph/index.js":
/*!********************************************!*\
  !*** ./src/data-structures/graph/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ../queues */ "./src/data-structures/queues/index.js"),
    QueueLinkedList = _require.QueueLinkedList;

function Graph() {
  this.numOfVertices = 0;
  this.list = new Map();
}

;
Graph.prototype = {
  addVertex: function addVertex(v) {
    ++this.numOfVertices;
    this.list.set(v, []);
    return this;
  },
  addEdge: function addEdge(v, w) {
    if (!this.list.get(v)) this.addVertex(v);
    this.list.get(v).push(w);
    if (!this.list.get(w)) this.addVertex(w);
    this.list.get(w).push(v);
    return this;
  },
  toObject: function toObject() {
    var g = {};
    this.list.forEach(function (value, key) {
      g[key] = value;
    });
    return g;
  },
  bfs: function bfs(v) {
    var visited = Array(this.numOfVertices).fill(false);
    var q = new QueueLinkedList();
    visited[v] = true;
    q.enqueue(v);

    while (!q.isEmpty()) {
      var elem = q.dequeue();
      var edges = this.list.get(elem);
      edges.forEach(function (n) {
        if (!visited[n]) {
          visited[n] = true;
          q.enqueue(n);
        }
      });
    }
  },
  dfs: function dfs(v) {}
};
module.exports = Graph;

/***/ }),

/***/ "./src/data-structures/index.js":
/*!**************************************!*\
  !*** ./src/data-structures/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  BinarySearchTree: __webpack_require__(/*! ./binary-search-tree */ "./src/data-structures/binary-search-tree/index.js"),
  Graph: __webpack_require__(/*! ./graph */ "./src/data-structures/graph/index.js"),
  linkedLists: __webpack_require__(/*! ./linked-lists */ "./src/data-structures/linked-lists/index.js"),
  queues: __webpack_require__(/*! ./queues */ "./src/data-structures/queues/index.js"),
  stacks: __webpack_require__(/*! ./stacks */ "./src/data-structures/stacks/index.js")
};

/***/ }),

/***/ "./src/data-structures/linked-lists/doubly-linked-list.js":
/*!****************************************************************!*\
  !*** ./src/data-structures/linked-lists/doubly-linked-list.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ./linked-list */ "./src/data-structures/linked-lists/linked-list.js"),
    LinkedList = _require.LinkedList,
    Node = _require.Node;

function DoubleNode(data) {
  Node.call(this, data);
}

; // create constructor with LinkedList inheritance

function DoublyLinkedList(data) {
  // LinkedList.call(this, data);
  if (data.length > 0) {
    this.head = new DoubleNode(data[0]);
    var curr = this.head;

    for (var i = 1; i < data.length; ++i) {
      var newNode = new DoubleNode(data[i]);
      newNode.prev = curr;
      curr.next = newNode;
      curr = curr.next;
    }
  }
}

; // Inherit all prototype from LinkedList

DoublyLinkedList.prototype = Object.create(LinkedList.prototype); // overwrite prototypes
// Reassign constructor prototype

DoublyLinkedList.prototype.constructor = DoublyLinkedList;

DoublyLinkedList.prototype.insert = function (data, index) {
  var newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return this.head;
  }

  if (index === 0) {
    var temp = this.head;
    this.head = newNode;
    this.head.next = temp;
    return this.head;
  }

  var curr = this.head;
  var currIndex = 1;

  while (curr.next) {
    if (index !== undefined && currIndex === index) {
      var _temp = curr.next;
      curr.next = newNode;
      newNode.prev = curr;
      newNode.next = _temp;
      _temp.prev = newNode;
      return this;
    }

    curr = curr.next;
    ++currIndex;
  }

  curr.next = newNode;
  newNode.prev = curr;
  return this;
};

DoublyLinkedList.prototype.shift = function () {
  if (!this.head) return;
  var first = this.head;
  this.head = first.next;
  this.head.prev = null;
  return first.data;
};

DoublyLinkedList.prototype.delete = function (index) {
  if (!this.head) return null;

  if (index === 0) {
    this.head = this.head.next;
    return this;
  }

  var curr = this.head;
  var currIndex = 0;
  var prev = null;

  while (curr.next) {
    if (index !== undefined && currIndex === index) {
      var next = curr.next;
      prev.next = next;
      next.prev = prev;
      return this;
    }

    prev = curr;
    curr = curr.next;
    ++currIndex;
  }

  return this;
};

DoublyLinkedList.prototype.reverse = function () {
  if (!this.head) return null;
  var curr = this.head;
  var prev = null;

  while (curr) {
    var next = curr.next;
    curr.next = prev;
    if (prev) prev.prev = curr;
    prev = curr;
    curr = next;
  }

  this.head = prev;
  return this;
};
/**
 * Reverse Link list recursively
 * @param  {[type]} node [description]
 * @return {[type]}      [description]
 */


DoublyLinkedList.prototype.reverseRecursion = function () {
  var reverse = function reverse(node) {
    if (!node || !node.next) return;
    reverse(node.next);
    var temp = node.next;
    temp.next = node;
    node.prev = temp;
    node.next = null;
  };

  reverse(this.head);
  return this;
};

module.exports = DoublyLinkedList;

/***/ }),

/***/ "./src/data-structures/linked-lists/index.js":
/*!***************************************************!*\
  !*** ./src/data-structures/linked-lists/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ./linked-list */ "./src/data-structures/linked-lists/linked-list.js"),
    LinkedList = _require.LinkedList;

module.exports = {
  DoublyLinkedList: __webpack_require__(/*! ./doubly-linked-list */ "./src/data-structures/linked-lists/doubly-linked-list.js"),
  LinkedList: LinkedList
};

/***/ }),

/***/ "./src/data-structures/linked-lists/linked-list.js":
/*!*********************************************************!*\
  !*** ./src/data-structures/linked-lists/linked-list.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Node for link list
 * @param       {[type]} data [description]
 * @constructor
 */

function Node(data) {
  this.data = data;
}
/**
 * Create Link list
 * @param       {[type]} data [description]
 * @constructor
 */


function LinkedList(data) {
  if (data.length > 0) {
    this.head = new Node(data[0]);
    var curr = this.head;

    for (var i = 1; i < data.length; ++i) {
      curr.next = new Node(data[i]);
      curr = curr.next;
    }
  }
}

;
/**
 * Print Link list in recursive fashion
 * @param  {[type]} node [description]
 * @return {[type]}      [description]
 */

LinkedList.printRecursion = function (node) {
  if (!node) return null;
  return LinkedList.printRecursion(node.next);
};

LinkedList.prototype = {
  /**
   * Print all values in a linklist
   * @return {[type]} [description]
   */
  print: function print() {
    var curr = this.head;

    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  },

  /**
   * Convert link list to array
   * @return {[type]} [description]
   */
  toArray: function toArray() {
    var array = [];
    var curr = this.head;

    while (curr) {
      array.push(curr.data);
      curr = curr.next;
    }

    return array;
  },

  /**
   * Insert value in linklist at index or end
   * @param  {[type]} data  [description]
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  insert: function insert(data, index) {
    var newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return this;
    }

    if (index === 0) {
      var temp = this.head;
      this.head = newNode;
      this.head.next = temp;
      return this;
    }

    var curr = this.head;
    var currIndex = 1;

    while (curr.next) {
      if (index !== undefined && currIndex === index) {
        var _temp = curr.next;
        curr.next = newNode;
        newNode.next = _temp;
        return this;
      }

      curr = curr.next;
      ++currIndex;
    }

    curr.next = newNode;
    return this;
  },

  /**
   * Remove first node in link list
   * @return {[type]} [description]
   */
  shift: function shift() {
    if (!this.head) return null;
    var first = this.head;
    this.head = this.head.next;
    return first.data;
  },

  /**
   * Remove last node in link lit
   * @return {[type]} [description]
   */
  pop: function pop() {
    if (!this.head) return null;
    var curr = this.head;
    var prev = null;

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = null;
    return curr.data;
  },

  /**
   * Delete node in link list at index
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  delete: function _delete(index) {
    if (!this.head) return null;

    if (index === 0) {
      this.head = this.head.next;
      return this;
    }

    var curr = this.head;
    var currIndex = 0;
    var prev = null;

    while (curr.next) {
      if (index !== undefined && currIndex === index) {
        prev.next = curr.next;
        return this;
      }

      prev = curr;
      curr = curr.next;
      ++currIndex;
    }

    return this;
  },

  /**
   * Reverse LinkList
   * @return {[type]} [description]
   */
  reverse: function reverse() {
    if (!this.head) return null;
    var curr = this.head;
    var prev = null;

    while (curr) {
      var next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
    return this;
  },

  /**
   * Reverse Link list recursively
   * @param  {[type]} node [description]
   * @return {[type]}      [description]
   */
  reverseRecursion: function reverseRecursion(node) {
    if (!node.next) {
      this.head = node;
      return;
    }

    this.reverseRecursion(node.next);
    var temp = node.next;
    temp.next = node;
    node.next = null;
  }
};
module.exports = {
  LinkedList: LinkedList,
  Node: Node
};

/***/ }),

/***/ "./src/data-structures/queues/array.js":
/*!*********************************************!*\
  !*** ./src/data-structures/queues/array.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function QueueArray() {
  this._queue = Array(10).fill(null);
  this._front = -1;
  this._rear = -1;
}

QueueArray.prototype = {
  enqueue: function enqueue(x) {
    if ((this._rear + 1) % this._queue.length === this._front) return;
    if (this.isEmpty()) this._rear = this._front = 0;else this._rear = (this._rear + 1) % this._queue.length;
    this._queue[this._rear] = x;
  },
  dequeue: function dequeue() {
    if (this.isEmpty()) return;
    var val;

    if (this._front === this._rear) {
      val = this._queue[this._front];
      this._front = this._rear = -1;
    } else {
      val = this._queue[this._front];
      ++this._front;
    }

    return val;
  },
  front: function front() {
    return this._queue[this._front];
  },
  isEmpty: function isEmpty() {
    return this._front === -1 && this._rear === -1;
  }
};
module.exports = QueueArray;

/***/ }),

/***/ "./src/data-structures/queues/index.js":
/*!*********************************************!*\
  !*** ./src/data-structures/queues/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  QueueArray: __webpack_require__(/*! ./array */ "./src/data-structures/queues/array.js"),
  QueueLinkedList: __webpack_require__(/*! ./linked-list */ "./src/data-structures/queues/linked-list.js")
};

/***/ }),

/***/ "./src/data-structures/queues/linked-list.js":
/*!***************************************************!*\
  !*** ./src/data-structures/queues/linked-list.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Node(val) {
  this.data = val;
}

function QueueLinkList() {}

QueueLinkList.prototype = {
  enqueue: function enqueue(val) {
    if (this.isEmpty()) this._rear = this._front = new Node(val);else this._rear = this._rear.next = new Node(val);
  },
  dequeue: function dequeue() {
    var node = this._front;
    if (node === this._rear) this._rear = this._front = undefined;else if (node.next) this._front = node.next;
    return node.data;
  },
  front: function front() {
    return this._front.data;
  },
  isEmpty: function isEmpty() {
    return this._front === undefined && this._rear === undefined;
  }
};
module.exports = QueueLinkList;

/***/ }),

/***/ "./src/data-structures/stacks/array.js":
/*!*********************************************!*\
  !*** ./src/data-structures/stacks/array.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function StackArray() {
  this._stack = [];
  this._top = -1;
}

StackArray.prototype = {
  push: function push(data) {
    ++this._top;
    if (this._stack.length >= this._top + 1) this._stack[this._top] = data;else this._stack.push(data);
    return this._stack;
  },
  pop: function pop() {
    if (this.isEmpty()) return;
    var top = this._stack[this._top];
    this._stack[this._top] = undefined;
    --this._top;
    return top;
  },
  top: function top() {
    return this._stack[this._top];
  },
  isEmpty: function isEmpty() {
    return this._top === -1;
  }
};
module.exports = StackArray;

/***/ }),

/***/ "./src/data-structures/stacks/index.js":
/*!*********************************************!*\
  !*** ./src/data-structures/stacks/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  StackArray: __webpack_require__(/*! ./array */ "./src/data-structures/stacks/array.js"),
  StackLinkedList: __webpack_require__(/*! ./linked-list */ "./src/data-structures/stacks/linked-list.js")
};

/***/ }),

/***/ "./src/data-structures/stacks/linked-list.js":
/*!***************************************************!*\
  !*** ./src/data-structures/stacks/linked-list.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Node for link list
 * @param       {[type]} data [description]
 * @constructor
 */

function Node(data) {
  this.data = data;
}
/**
 * Create Link list
 * @param       {[type]} data [description]
 * @constructor
 */


function StackLinkedList() {}
/**
 * Print Link list in recursive fashion
 * @param  {[type]} node [description]
 * @return {[type]}      [description]
 */


StackLinkedList.printRecursion = function (node) {
  if (!node) return null;
  return StackLinkedList.printRecursion(node.next);
};

StackLinkedList.prototype = {
  /**
   * Print all values in a linklist
   * @return {[type]} [description]
   */
  print: function print() {
    var curr = this.head;

    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  },

  /**
   * Convert link list to array
   * @return {[type]} [description]
   */
  toArray: function toArray() {
    var array = [];
    var curr = this.head;

    while (curr) {
      array.push(curr.data);
      curr = curr.next;
    }

    return array;
  },

  /**
   * Insert value in linklist at index or end
   * @param  {[type]} data  [description]
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  push: function push(data) {
    var newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  },

  /**
   * Remove first node in link list
   * @return {[type]} [description]
   */
  pop: function pop() {
    if (!this.head) return null;
    var first = this.head;
    this.head = first.next;
    return first.data;
  },
  top: function top() {
    return this.head.data;
  },
  isEmpty: function isEmpty() {
    return !this.head;
  },

  /**
   * LinkList reversal using stacks is an O(N + M) time and space complexity
   * @param  {[type]} linkList [description]
   * @return {[type]}          [description]
   */
  reverse: function reverse() {
    // Create a stack to store the linklist values
    var stack = new StackLinkedList(); // push all link list values in stack by shifting the first value.

    while (this.head) {
      stack.push(this.shift());
    } // re-insert all of the link list values by popping the stack


    while (!stack.isEmpty()) {
      this.insert(stack.pop());
    } // return the new stack


    return this;
  }
};
module.exports = StackLinkedList;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "dataStructures", {
  enumerable: true,
  get: function get() {
    return _dataStructures.default;
  }
});
Object.defineProperty(exports, "algorithms", {
  enumerable: true,
  get: function get() {
    return _algorithms.default;
  }
});

var _dataStructures = _interopRequireDefault(__webpack_require__(/*! ./data-structures */ "./src/data-structures/index.js"));

var _algorithms = _interopRequireDefault(__webpack_require__(/*! ./algorithms */ "./src/algorithms/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGdvL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9hbGdvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FsZ28vLi9zcmMvYWxnb3JpdGhtcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2FsZ29yaXRobXMvc2VhcmNoL2JpbmFyeS1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9hbGdvcml0aG1zL3NlYXJjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2FsZ29yaXRobXMvc29ydGluZy9idWJibGUuanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9hbGdvcml0aG1zL3NvcnRpbmcvaGVhcC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2FsZ29yaXRobXMvc29ydGluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2FsZ29yaXRobXMvc29ydGluZy9pbnNlcnRpb24uanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9hbGdvcml0aG1zL3NvcnRpbmcvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9hbGdvcml0aG1zL3NvcnRpbmcvcXVpY2suanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9hbGdvcml0aG1zL3NvcnRpbmcvc2VsZWN0aW9uLmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL2JpbmFyeS1zZWFyY2gtdHJlZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9ncmFwaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9saW5rZWQtbGlzdHMvZG91Ymx5LWxpbmtlZC1saXN0LmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL2xpbmtlZC1saXN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9saW5rZWQtbGlzdHMvbGlua2VkLWxpc3QuanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvcXVldWVzL2FycmF5LmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL3F1ZXVlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9xdWV1ZXMvbGlua2VkLWxpc3QuanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvc3RhY2tzL2FycmF5LmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL3N0YWNrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9zdGFja3MvbGlua2VkLWxpc3QuanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic29ydGluZyIsInJlcXVpcmUiLCJzZWFyY2giLCJiaW5hcnlTZWFyY2giLCJhcnJheSIsInZhbCIsIm1pZCIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsInNwbGljZSIsInQiLCJzd2FwcGVkIiwiaSIsInRlbXAiLCJhIiwibCIsInN3YXAiLCJyIiwiaGVhcGlmeSIsImxlZnQiLCJyaWdodCIsIm1heCIsImJ1YmJsZVNvcnQiLCJoZWFwU29ydCIsImluc2VydGlvblNvcnQiLCJtZXJnZVNvcnQiLCJxdWlja1NvcnQiLCJzZWxlY3Rpb25Tb3J0IiwiaCIsInNsaWNlIiwic29ydEFuZE1lcmdlIiwic29ydGVkIiwicHVzaCIsImNvbmNhdCIsImIiLCJwYXJ0aXRpb24iLCJzdGFydCIsImVuZCIsInBpdm90IiwicmFuZG9tIiwiaW5kZXgiLCJwIiwibWluIiwiaiIsIk5vZGUiLCJfZGF0YSIsInByb3RvdHlwZSIsImRhdGEiLCJfbGVmdCIsIm5vZGUiLCJjb25zdHJ1Y3RvciIsIk51bWJlciIsIl9yaWdodCIsImluc2VydCIsIkJpbmFyeVNlYXJjaFRyZWUiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwibiIsIl9yb290Iiwicm9vdCIsImhhcyIsImZpbmRNaW4iLCJnZXRNaW4iLCJmaW5kTWF4IiwiZ2V0TWF4IiwiZGVsZXRlIiwiZGVsZXRlTm9kZSIsImxldmVsT3JkZXIiLCJ2YWxzIiwicXVldWUiLCJjdXJyIiwic2hpZnQiLCJwcmVPcmRlciIsInRyYXZlcnNlIiwiaW5PcmRlciIsInBvc3RPcmRlciIsIm1heERlcHRoIiwiaXNWYWxpZCIsImlzQlNUIiwiSW5maW5pdHkiLCJwYXRoU3VtIiwic3VtIiwiaGFzUGF0aFN1bSIsImlzU3ltbWV0cmljIiwidmFsaWRhdGVTeW1tZXRyeSIsImdldFN1Y2Nlc3NvciIsInVuZGVmaW5lZCIsInN1Y2Nlc3NvciIsImFuY2VzdG9yIiwiUXVldWVMaW5rZWRMaXN0IiwiR3JhcGgiLCJudW1PZlZlcnRpY2VzIiwibGlzdCIsIk1hcCIsImFkZFZlcnRleCIsInYiLCJzZXQiLCJhZGRFZGdlIiwidyIsImdldCIsInRvT2JqZWN0IiwiZyIsInZhbHVlIiwia2V5IiwiYmZzIiwidmlzaXRlZCIsImZpbGwiLCJxIiwiZW5xdWV1ZSIsImlzRW1wdHkiLCJlbGVtIiwiZGVxdWV1ZSIsImVkZ2VzIiwiZGZzIiwibGlua2VkTGlzdHMiLCJxdWV1ZXMiLCJzdGFja3MiLCJMaW5rZWRMaXN0IiwiRG91YmxlTm9kZSIsImNhbGwiLCJEb3VibHlMaW5rZWRMaXN0IiwiaGVhZCIsIm5ld05vZGUiLCJwcmV2IiwibmV4dCIsIk9iamVjdCIsImNyZWF0ZSIsImN1cnJJbmRleCIsImZpcnN0IiwicmV2ZXJzZSIsInJldmVyc2VSZWN1cnNpb24iLCJwcmludFJlY3Vyc2lvbiIsInByaW50IiwiY29uc29sZSIsImxvZyIsInRvQXJyYXkiLCJwb3AiLCJRdWV1ZUFycmF5IiwiX3F1ZXVlIiwiX2Zyb250IiwiX3JlYXIiLCJ4IiwiZnJvbnQiLCJRdWV1ZUxpbmtMaXN0IiwiU3RhY2tBcnJheSIsIl9zdGFjayIsIl90b3AiLCJ0b3AiLCJTdGFja0xpbmtlZExpc3QiLCJzdGFjayJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7O0FBRWJBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxTQUFPLEVBQUVDLG1CQUFPLENBQUMsb0RBQUQsQ0FERDtBQUVmQyxRQUFNLEVBQUVELG1CQUFPLENBQUMsa0RBQUQ7QUFGQSxDQUFqQixDOzs7Ozs7Ozs7Ozs7QUNGYTs7QUFFYixTQUFTRSxZQUFULENBQXNCQyxLQUF0QixFQUE2QkMsR0FBN0IsRUFBa0M7QUFDaEM7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxD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LEdBQVlPLEtBQUssQ0FBQ0osSUFBbEI7QUFDQSxXQUFPSSxLQUFLLENBQUNsRixJQUFiO0FBQ0QsR0FyRHlCO0FBdUQxQnFHLEtBQUcsRUFBRSxlQUFXO0FBQ2QsV0FBTyxLQUFLMUIsSUFBTCxDQUFVM0UsSUFBakI7QUFDRCxHQXpEeUI7QUEyRDFCK0QsU0FBTyxFQUFFLG1CQUFXO0FBQ2xCLFdBQU8sQ0FBQyxLQUFLWSxJQUFiO0FBQ0QsR0E3RHlCOztBQStEMUI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNFUSxTQUFPLEVBQUUsbUJBQVc7QUFDbEI7QUFDQSxRQUFNb0IsS0FBSyxHQUFHLElBQUlELGVBQUosRUFBZCxDQUZrQixDQUlsQjs7QUFDQSxXQUFPLEtBQUszQixJQUFaO0FBQWtCNEIsV0FBSyxDQUFDdEgsSUFBTixDQUFXLEtBQUt3QyxLQUFMLEVBQVg7QUFBbEIsS0FMa0IsQ0FNbEI7OztBQUNBLFdBQU8sQ0FBQzhFLEtBQUssQ0FBQ3hDLE9BQU4sRUFBUjtBQUF5QixXQUFLekQsTUFBTCxDQUFZaUcsS0FBSyxDQUFDYixHQUFOLEVBQVo7QUFBekIsS0FQa0IsQ0FRbEI7OztBQUNBLFdBQU8sSUFBUDtBQUNEO0FBOUV5QixDQUE1QjtBQWlGQTVJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnVKLGVBQWpCLEM7Ozs7Ozs7Ozs7OztBQzFHYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWI7O0FBQ0EiLCJmaWxlIjoiYWxnby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiYWxnb1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhbGdvXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImFsZ29cIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzb3J0aW5nOiByZXF1aXJlKCcuL3NvcnRpbmcnKSxcbiAgc2VhcmNoOiByZXF1aXJlKCcuL3NlYXJjaCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBiaW5hcnlTZWFyY2goYXJyYXksIHZhbCkge1xuICAvLyBnZXQgbWlkIHBvaW50IG9mIGFycmF5XG4gIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoYXJyYXkubGVuZ3RoIC8gMik7XG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDEpIHtcbiAgICBpZiAodmFsID4gYXJyYXlbbWlkXSkgcmV0dXJuIGJpbmFyeVNlYXJjaChhcnJheS5zcGxpY2UobWlkKSwgdmFsKTtcbiAgICBpZiAodmFsIDwgYXJyYXlbbWlkXSkgcmV0dXJuIGJpbmFyeVNlYXJjaChhcnJheS5zcGxpY2UoMCwgbWlkKSwgdmFsKTtcbiAgfVxuICBpZiAodmFsID09PSBhcnJheVttaWRdKSByZXR1cm4gYXJyYXlbbWlkXTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJpbmFyeVNlYXJjaDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGJpbmFyeVNlYXJjaDogcmVxdWlyZSgnLi9iaW5hcnktc2VhcmNoJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEJ1YmJsZSBTb3J0XG4gKlxuICogVGltZSBjb21wbGV4aXR5XG4gKiBCZXN0IENhc2U6IGlzIE8obilcbiAqIEF2ZXJhZ2UgQ2FzZTogaXMgTyhuXjIpXG4gKiBXb3JzdCBDYXNlOiBpcyBPKG5eMilcbiAqXG4gKiBAcGFyYW0gIHtbTnVtYmVyXX0gYXJyYXkgQXJyYXkgb2YgaW50ZWdlcnMgdG8gc29ydFxuICogQHJldHVybiB7W051bWJlcl19IGFycmF5IEFycmF5IG9mIGludGVnZXJzIHRvIHNvcnRlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIGZvciAobGV0IHQgPSBhcnJheS5sZW5ndGggLSAxOyB0ID49IDA7IC0tdCkge1xuICAgIGxldCBzd2FwcGVkID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHQgLSAxOyArK2kpIHtcbiAgICAgIGlmIChhcnJheVtpXSA+IGFycmF5W2kgKyAxXSkge1xuICAgICAgICBjb25zdCB0ZW1wID0gYXJyYXlbaV07XG5cbiAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtpICsgMV07XG4gICAgICAgIGFycmF5W2kgKyAxXSA9IHRlbXA7XG4gICAgICAgIHN3YXBwZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKCFzd2FwcGVkKSBicmVhazsgLy8gSWYgc3dhcCBuZXZlciBoYXBwZW5zLCBCcmVhayB0aGUgbG9vcC5cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgLy8gY29weSBhcnJheVxuICBjb25zdCBhID0gWy4uLmFycmF5XTtcbiAgLy8ga2VlcCByZWNvcmQgb2Ygb3JpZ2luYWwgbGVuZ3RoXG4gIGxldCBsID0gYS5sZW5ndGg7XG4gIC8vIFN3YXAgbG9naWNcbiAgY29uc3Qgc3dhcCA9IChsLCByKSA9PiB7XG4gICAgY29uc3QgdGVtcCA9IGFbbF07XG5cbiAgICBhW2xdID0gYVtyXTtcbiAgICBhW3JdID0gdGVtcDtcbiAgfTtcbiAgLy8gY3JlYXRlIGhlYXBpZnkgZnVuY3Rpb25cbiAgY29uc3QgaGVhcGlmeSA9IChhLCBpKSA9PiB7XG4gICAgLy8gY3JlYXRlIGxlZnQgYW5kIHJpZ2h0IGluZGV4XG4gICAgY29uc3QgbGVmdCA9IDIgKiBpICsgMTtcbiAgICBjb25zdCByaWdodCA9IDIgKiBpICsgMjtcbiAgICBsZXQgbWF4ID0gaTtcblxuICAgIGlmIChsZWZ0IDwgbCAmJiBhW2xlZnRdID4gYVttYXhdKSBtYXggPSBsZWZ0O1xuICAgIGlmIChyaWdodCA8IGwgJiYgYVtyaWdodF0gPiBhW21heF0pIG1heCA9IHJpZ2h0O1xuICAgIGlmIChtYXggIT09IGkpIHtcbiAgICAgIHN3YXAobWF4LCBpKTtcbiAgICAgIGhlYXBpZnkoYSwgbWF4KTtcbiAgICB9XG4gIH07XG5cbiAgZm9yIChsZXQgaSA9IE1hdGguZmxvb3IobCAvIDIpOyBpID49IDA7IGkgLT0gMSkgaGVhcGlmeShhLCBpKTtcbiAgZm9yIChsZXQgaSA9IGEubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgIHN3YXAoMCwgaSk7XG4gICAgbC0tO1xuICAgIGhlYXBpZnkoYSwgMCk7XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYnViYmxlU29ydDogcmVxdWlyZSgnLi9idWJibGUnKSxcbiAgaGVhcFNvcnQ6IHJlcXVpcmUoJy4vaGVhcCcpLFxuICBpbnNlcnRpb25Tb3J0OiByZXF1aXJlKCcuL2luc2VydGlvbicpLFxuICBtZXJnZVNvcnQ6IHJlcXVpcmUoJy4vbWVyZ2UnKSxcbiAgcXVpY2tTb3J0OiByZXF1aXJlKCcuL3F1aWNrJyksXG4gIHNlbGVjdGlvblNvcnQ6IHJlcXVpcmUoJy4vc2VsZWN0aW9uJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEluc2VydGlvbiBTb3J0XG4gKlxuICogVGltZSBjb21wbGV4aXR5XG4gKiBCZXN0IENhc2U6IGlzIE8obilcbiAqIEF2ZXJhZ2UgQ2FzZTogaXMgTyhuXjIpXG4gKiBXb3JzdCBDYXNlOiBpcyBPKG5eMilcbiAqXG4gKiBAcGFyYW0gIHtbTnVtYmVyXX0gYXJyYXkgQXJyYXkgb2YgaW50ZWdlcnMgdG8gc29ydFxuICogQHJldHVybiB7W051bWJlcl19IGFycmF5IEFycmF5IG9mIGludGVnZXJzIHRvIHNvcnRlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyYXkubGVuZ3RoOyArK2kpIHtcbiAgICBsZXQgdmFsID0gYXJyYXlbaV07XG4gICAgbGV0IGggPSBpO1xuXG4gICAgd2hpbGUgKGggPiAwICYmIGFycmF5W2ggLSAxXSA+IHZhbCkge1xuICAgICAgYXJyYXlbaF0gPSBhcnJheVtoIC0gMV07XG4gICAgICAtLWg7XG4gICAgfVxuICAgIGFycmF5W2hdID0gdmFsO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIE1lcmdlIFNvcnRcbiAqXG4gKiBUaW1lIGNvbXBsZXhpdHkgTyhuIGxvZyBuKVxuICogU3BhY2UgY29tcGxleGl0eSBPKG4pXG4gKlxuICogQHBhcmFtICB7W051bWJlcl19IGFycmF5IEFycmF5IG9mIGludGVnZXJzIHRvIHNvcnRcbiAqIEByZXR1cm4ge1tOdW1iZXJdfSBhcnJheSBBcnJheSBvZiBpbnRlZ2VycyB0byBzb3J0ZWRcbiAqL1xuZnVuY3Rpb24gbWVyZ2VTb3J0KGFycmF5KSB7XG4gIGlmIChhcnJheS5sZW5ndGggPD0gMSkgcmV0dXJuIGFycmF5O1xuICBjb25zdCBtaWQgPSBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aCAvIDIpOyAvLyBEZXRlcm1pbmUgbWlkIHBvaW50IG9mIGFycmF5XG4gIGNvbnN0IGxlZnQgPSBhcnJheS5zbGljZSgwLCBtaWQpOyAvLyBzcGxpdCBhcnJheSBpbiB0byAyIGJ5IHRoZSBtaWQgcG9pbnRcbiAgY29uc3QgcmlnaHQgPSBhcnJheS5zbGljZShtaWQpO1xuICAvLyBmdW5jdGlvbiB0byBzb3J0IGFuZCBtZXJnZSAyIGFycmF5c1xuICBjb25zdCBzb3J0QW5kTWVyZ2UgPSAobGVmdCwgcmlnaHQpID0+IHtcbiAgICBsZXQgc29ydGVkID0gW107IC8vIGZpbmFsIHNvcnRlZCBhcnJheVxuICAgIGxldCBsID0gMDsgLy8gY3VycmVudCBzY2FubmVkIGluZGV4ZXMgb2YgbGVmdCBhbmQgcmlnaHQgYXJyYXlzXG4gICAgbGV0IHIgPSAwO1xuXG4gICAgd2hpbGUgKGwgPCBsZWZ0Lmxlbmd0aCAmJiByIDwgcmlnaHQubGVuZ3RoKSB7IC8vIHNjYW4gdmFsdWVzIGluIGFycmF5c1xuICAgICAgaWYgKGxlZnRbbF0gPCByaWdodFtyXSkgeyAvLyBpZiBsZWZ0IGlzIHNtYWxsZXIsIHB1c2ggdG8gYXJyYXkgYW5kIGluY3JlbWVudCBsZWZ0IGluZGV4XG4gICAgICAgIHNvcnRlZC5wdXNoKGxlZnRbbF0pO1xuICAgICAgICArK2w7XG4gICAgICB9IGVsc2UgeyAvLyBwdXNoIHJpZ2h0IHZhbHVlIHRvIGFycmF5IGFuZCBpbmNyZW1lbnQgcmlnaHQgaW5kZXhcbiAgICAgICAgc29ydGVkLnB1c2gocmlnaHRbcl0pO1xuICAgICAgICArK3I7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFwcGVuZCByZW1haW5pbmcgdmFsdWVzXG4gICAgcmV0dXJuIHNvcnRlZC5jb25jYXQobGVmdC5zbGljZShsKSkuY29uY2F0KHJpZ2h0LnNsaWNlKHIpKTtcbiAgfTtcblxuICAvLyByZXR1cm4gbWVyZ2VkIGFycmF5IGluIHJlY3Vyc2lvblxuICByZXR1cm4gc29ydEFuZE1lcmdlKG1lcmdlU29ydChsZWZ0KSwgbWVyZ2VTb3J0KHJpZ2h0KSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlU29ydDtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogUXVpY2sgU29ydFxuICpcbiAqIFRpbWUgY29tcGxleGl0eVxuICogQmVzdCBDYXNlOiBPKG4gbG9nIG4pXG4gKiBXb3JzdCBDYXNlOiBPKG5eMilcbiAqXG4gKiBTcGFjZSBjb21wbGV4aXR5IE8obilcbiAqXG4gKiBAcGFyYW0gIHtbTnVtYmVyXX0gYXJyYXkgQXJyYXkgb2YgaW50ZWdlcnMgdG8gc29ydFxuICogQHJldHVybiB7W051bWJlcl19IGFycmF5IEFycmF5IG9mIGludGVnZXJzIHRvIHNvcnRlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIGNvbnN0IHN3YXAgPSAoYSwgYikgPT4ge1xuICAgIGNvbnN0IHQgPSBhO1xuXG4gICAgYSA9IGI7XG4gICAgYiA9IHQ7XG4gIH07XG5cbiAgY29uc3QgcGFydGl0aW9uID0gKGFycmF5LCBzdGFydCwgZW5kKSA9PiB7XG4gICAgY29uc3QgcGl2b3QgPSBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcbiAgICBsZXQgaW5kZXggPSBzdGFydDtcblxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZCAtIDE7ICsraSkge1xuICAgICAgaWYgKGFycmF5W2ldIDw9IHBpdm90KSB7XG4gICAgICAgIHN3YXAoYXJyYXlbaV0sIGFycmF5W2luZGV4XSk7XG4gICAgICAgIGluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgfVxuICAgIH1cbiAgICBzd2FwKGFycmF5W2luZGV4XSwgYXJyYXlbZW5kXSk7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9O1xuXG4gIGNvbnN0IHF1aWNrU29ydCA9IChhcnJheSwgc3RhcnQsIGVuZCkgPT4ge1xuICAgIGlmIChzdGFydCA8IGVuZCkge1xuICAgICAgY29uc3QgcCA9IHBhcnRpdGlvbihhcnJheSwgc3RhcnQsIGVuZCk7XG5cbiAgICAgIHF1aWNrU29ydChhcnJheSwgc3RhcnQsIHApO1xuICAgICAgcXVpY2tTb3J0KGFycmF5LCBwICsgMSwgZW5kKTtcbiAgICB9XG4gIH07XG5cbiAgcXVpY2tTb3J0KGFycmF5LCAwLCBhcnJheS5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIGFycmF5O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogU2VsZWN0aW9uIFNvcnRcbiAqXG4gKiBUaW1lIGNvbXBsZXhpdHkgaXMgTyhuXjIpXG4gKiBAcGFyYW0gIHtbTnVtYmVyXX0gYXJyYXkgQXJyYXkgb2YgaW50ZWdlcnMgdG8gc29ydFxuICogQHJldHVybiB7W051bWJlcl19IGFycmF5IEFycmF5IG9mIGludGVnZXJzIHRvIHNvcnRlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoIC0gMTsgKytpKSB7XG4gICAgbGV0IG1pbiA9IGk7XG5cbiAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBhcnJheS5sZW5ndGg7ICsraikge1xuICAgICAgaWYgKGFycmF5W21pbl0gPCBhcnJheVtqXSkgbWluID0gajtcbiAgICB9XG4gICAgbGV0IHRlbXAgPSBhcnJheVtpXTtcblxuICAgIGFycmF5W2ldID0gYXJyYXlbbWluXTtcbiAgICBhcnJheVttaW5dID0gdGVtcDtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBOb2RlKHZhbCkge1xuICB0aGlzLl9kYXRhID0gdmFsO1xufTtcblxuTm9kZS5wcm90b3R5cGUgPSB7XG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9LFxuXG4gIHNldCBkYXRhKHZhbCkge1xuICAgIHRoaXMuX2RhdGEgPSB2YWw7XG4gIH0sXG5cbiAgZ2V0IGxlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlZnQ7XG4gIH0sXG5cbiAgc2V0IGxlZnQobm9kZSkge1xuICAgIGlmIChub2RlICYmIG5vZGUuY29uc3RydWN0b3IgPT09IE51bWJlcikgdGhpcy5fbGVmdCA9IG5ldyBOb2RlKG5vZGUpO1xuICAgIGVsc2UgdGhpcy5fbGVmdCA9IG5vZGU7XG4gIH0sXG5cbiAgZ2V0IHJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9yaWdodDtcbiAgfSxcblxuICBzZXQgcmlnaHQobm9kZSkge1xuICAgIGlmIChub2RlICYmIG5vZGUuY29uc3RydWN0b3IgPT09IE51bWJlcikgdGhpcy5fcmlnaHQgPSBuZXcgTm9kZShub2RlKTtcbiAgICBlbHNlIHRoaXMuX3JpZ2h0ID0gbm9kZTtcbiAgfSxcblxuICBpbnNlcnQ6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSkgdGhpcy5kYXRhID0gZGF0YTtcbiAgICBlbHNlIGlmIChkYXRhID4gdGhpcy5kYXRhKSB7XG4gICAgICBpZiAodGhpcy5yaWdodCkgdGhpcy5yaWdodC5pbnNlcnQoZGF0YSk7XG4gICAgICBlbHNlIHRoaXMucmlnaHQgPSBkYXRhO1xuICAgIH0gZWxzZSBpZiAoZGF0YSA8IHRoaXMuZGF0YSkge1xuICAgICAgaWYgKHRoaXMubGVmdCkgdGhpcy5sZWZ0Lmluc2VydChkYXRhKTtcbiAgICAgIGVsc2UgdGhpcy5sZWZ0ID0gZGF0YTtcbiAgICB9XG4gIH0sXG5cbiAgc2VhcmNoOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEpIHJldHVybiBudWxsO1xuICAgIGlmIChkYXRhID09PSB0aGlzLmRhdGEpIHJldHVybiB0aGlzO1xuICAgIGlmIChkYXRhID4gdGhpcy5kYXRhICYmIHRoaXMucmlnaHQpIHJldHVybiB0aGlzLnJpZ2h0LnNlYXJjaChkYXRhKTtcbiAgICBpZiAoZGF0YSA8IHRoaXMuZGF0YSAmJiB0aGlzLmxlZnQpIHJldHVybiB0aGlzLmxlZnQuc2VhcmNoKGRhdGEpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5mdW5jdGlvbiBCaW5hcnlTZWFyY2hUcmVlKGRhdGEpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIGRhdGEuZm9yRWFjaChuID0+IHRoaXMuaW5zZXJ0KG4pKTtcbiAgZWxzZSB0aGlzLl9yb290ID0gbmV3IE5vZGUoZGF0YSk7XG59O1xuXG5CaW5hcnlTZWFyY2hUcmVlLnByb3RvdHlwZSA9IHtcbiAgZ2V0IHJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XG4gIH0sXG5cbiAgc2V0IHJvb3Qobm9kZSkge1xuICAgIHRoaXMuX3Jvb3QgPSBub2RlO1xuICB9LFxuXG4gIGluc2VydDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICghdGhpcy5yb290KSB0aGlzLnJvb3QgPSBuZXcgTm9kZShkYXRhKTtcbiAgICBlbHNlIHRoaXMucm9vdC5pbnNlcnQoZGF0YSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgaGFzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5yb290LnNlYXJjaChkYXRhKSAhPT0gbnVsbDtcbiAgfSxcblxuICBzZWFyY2g6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMucm9vdCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5zZWFyY2goZGF0YSk7XG4gIH0sXG5cbiAgZmluZE1pbjogZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICghdGhpcy5yb290KSByZXR1cm47XG4gICAgY29uc3QgZ2V0TWluID0gKG5vZGUpID0+IHtcbiAgICAgIGlmIChub2RlLmxlZnQpIHJldHVybiBnZXRNaW4obm9kZS5sZWZ0KTtcbiAgICAgIHJldHVybiBub2RlLmRhdGE7XG4gICAgfTtcblxuICAgIHJldHVybiAhbm9kZSA/IGdldE1pbih0aGlzLnJvb3QpIDogZ2V0TWluKG5vZGUpO1xuICB9LFxuXG4gIGZpbmRNYXg6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBpZiAoIXRoaXMucm9vdCkgcmV0dXJuO1xuICAgIGNvbnN0IGdldE1heCA9IChub2RlKSA9PiB7XG4gICAgICBpZiAobm9kZS5yaWdodCkgcmV0dXJuIGdldE1heChub2RlLnJpZ2h0KTtcbiAgICAgIHJldHVybiBub2RlLmRhdGE7XG4gICAgfTtcblxuICAgIHJldHVybiAhbm9kZSA/IGdldE1heCh0aGlzLnJvb3QpIDogZ2V0TWF4KG5vZGUpO1xuICB9LFxuXG4gIGRlbGV0ZTogZnVuY3Rpb24odmFsKSB7XG4gICAgY29uc3QgZGVsZXRlTm9kZSA9IChyb290LCB2YWwpID0+IHtcbiAgICAgIC8vIElmIE5vIE5vZGUgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgaWYgKCFyb290KSByZXR1cm47XG4gICAgICAvLyBJZiB2YWwgaXMgbGVzcyB0aGFuIGN1cnJlbnQgbm9kZSBkYXRhLiBDb250aW51ZSBvbiB0byBsZWZ0IGNoaWxkLlxuICAgICAgaWYgKHZhbCA8IHJvb3QuZGF0YSkgcmV0dXJuIGRlbGV0ZU5vZGUocm9vdC5sZWZ0LCB2YWwsIHJvb3QpO1xuICAgICAgLy8gSWYgdmFsIGlzIGdyZWF0ZXIgdGhhbiBjdXJyZW50IG5vZGUgZGF0YS4gQ29udGludWUgb24gdG8gcmlnaHQgY2hpbGQuXG4gICAgICBpZiAodmFsID4gcm9vdC5kYXRhKSByZXR1cm4gZGVsZXRlTm9kZShyb290LnJpZ2h0LCB2YWwsIHJvb3QpO1xuICAgICAgLy8gQ2FzZSAxOiBObyBjaGlsZHJlbiwgZGVhbGxvY2F0ZSBjaGlsZCBmcm9tIHBhcmVudFxuICAgICAgaWYgKHJvb3QubGVmdCAmJiByb290LnJpZ2h0KSB7XG4gICAgICAgIC8vIENhc2UgMzogaWYgMiBjaGlsZHJlblxuICAgICAgICAvLyBGaW5kIG1pbmltdW0gdmFsdWUgb2YgdGhlIHJpZ2h0IG5vZGVcbiAgICAgICAgbGV0IHRlbXAgPSByb290LnJpZ2h0O1xuXG4gICAgICAgIHdoaWxlICh0ZW1wLmxlZnQpIHRlbXAgPSB0ZW1wLmxlZnQ7XG4gICAgICAgIC8vIHdyaXRlIG5vZGUgZGF0YSB0byB0aGUgbWluaW11bSB2YWx1ZXNcbiAgICAgICAgcm9vdC5kYXRhID0gdGVtcC5kYXRhO1xuICAgICAgICAvLyBNb3ZlIG9uIHRvIHRoZSByaWdodCBhbmQgY29udGludWUgb25cbiAgICAgICAgcm9vdC5yaWdodCA9IGRlbGV0ZU5vZGUocm9vdC5yaWdodCwgdGVtcC5kYXRhKTtcbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICB9XG4gICAgICByZXR1cm4gcm9vdC5sZWZ0IHx8IHJvb3QucmlnaHQ7XG4gICAgfTtcblxuICAgIGRlbGV0ZU5vZGUodGhpcy5yb290LCB2YWwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIGxldmVsT3JkZXI6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHZhbHMgPSBbXTtcblxuICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgIGNvbnN0IHF1ZXVlID0gW107XG5cbiAgICAgIHF1ZXVlLnB1c2godGhpcy5yb290KTtcbiAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBjdXJyID0gcXVldWUuc2hpZnQoKTtcblxuICAgICAgICB2YWxzLnB1c2goY3Vyci5kYXRhKTtcbiAgICAgICAgaWYgKGN1cnIubGVmdCkgcXVldWUucHVzaChjdXJyLmxlZnQpO1xuICAgICAgICBpZiAoY3Vyci5yaWdodCkgcXVldWUucHVzaChjdXJyLnJpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHM7XG4gIH0sXG5cbiAgcHJlT3JkZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCB2YWxzID0gW107XG5cbiAgICBjb25zdCB0cmF2ZXJzZSA9IChub2RlKSA9PiB7XG4gICAgICB2YWxzLnB1c2gobm9kZS5kYXRhKTtcbiAgICAgIGlmIChub2RlLmxlZnQpIHRyYXZlcnNlKG5vZGUubGVmdCk7XG4gICAgICBpZiAobm9kZS5yaWdodCkgdHJhdmVyc2Uobm9kZS5yaWdodCk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnJvb3QpIHRyYXZlcnNlKHRoaXMucm9vdCk7XG4gICAgcmV0dXJuIHZhbHM7XG4gIH0sXG5cbiAgaW5PcmRlcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IHZhbHMgPSBbXTtcblxuICAgIGNvbnN0IHRyYXZlcnNlID0gKG5vZGUpID0+IHtcbiAgICAgIGlmIChub2RlLmxlZnQpIHRyYXZlcnNlKG5vZGUubGVmdCk7XG4gICAgICB2YWxzLnB1c2gobm9kZS5kYXRhKTtcbiAgICAgIGlmIChub2RlLnJpZ2h0KSB0cmF2ZXJzZShub2RlLnJpZ2h0KTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucm9vdCkgdHJhdmVyc2UodGhpcy5yb290KTtcbiAgICByZXR1cm4gdmFscztcbiAgfSxcblxuICBwb3N0T3JkZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCB2YWxzID0gW107XG5cbiAgICBjb25zdCB0cmF2ZXJzZSA9IChub2RlKSA9PiB7XG4gICAgICBpZiAobm9kZS5sZWZ0KSB0cmF2ZXJzZShub2RlLmxlZnQpO1xuICAgICAgaWYgKG5vZGUucmlnaHQpIHRyYXZlcnNlKG5vZGUucmlnaHQpO1xuICAgICAgdmFscy5wdXNoKG5vZGUuZGF0YSk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnJvb3QpIHRyYXZlcnNlKHRoaXMucm9vdCk7XG4gICAgcmV0dXJuIHZhbHM7XG4gIH0sXG5cbiAgbWF4RGVwdGg6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5yb290KSByZXR1cm4gMDtcbiAgICBjb25zdCBtYXhEZXB0aCA9IChub2RlKSA9PiB7XG4gICAgICBpZiAoIW5vZGUpIHJldHVybiAwO1xuICAgICAgcmV0dXJuIE1hdGgubWF4KG1heERlcHRoKG5vZGUubGVmdCksIG1heERlcHRoKG5vZGUucmlnaHQpKSArIDE7XG4gICAgfTtcblxuICAgIHJldHVybiBtYXhEZXB0aCh0aGlzLnJvb3QpO1xuICB9LFxuXG4gIGlzVmFsaWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGlzQlNUID0gKG5vZGUsIG1pbiwgbWF4KSA9PiB7XG4gICAgICAvLyBJZiBubyBOb2RlIHRoZW4gd2UgaGF2ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIHRyZWUuXG4gICAgICAvLyBSZXR1cm4gdHJ1ZVxuICAgICAgaWYgKCFub2RlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIC8vIFZhbGlkYXRlIGlmIHRoZSBkYXRhIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgbWluIG9yIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBtYXguXG4gICAgICAvLyBUaGVuIHRoZSB0cmVlIGlzIG5vdCBhIHZhbGlkIHNlYXJjaCB0cmVlLlxuICAgICAgaWYgKG5vZGUuZGF0YSA8PSBtaW4gfHwgbm9kZS5kYXRhID49IG1heCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGlzQlNUKG5vZGUubGVmdCwgbWluLCBub2RlLmRhdGEpICYmIGlzQlNUKG5vZGUucmlnaHQsIG5vZGUuZGF0YSwgbWF4KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGlzQlNUKHRoaXMucm9vdCwgLUluZmluaXR5LCBJbmZpbml0eSk7XG4gIH0sXG5cbiAgcGF0aFN1bTogZnVuY3Rpb24oc3VtKSB7XG4gICAgY29uc3QgaGFzUGF0aFN1bSA9IChyb290LCBzdW0pID0+IHtcbiAgICAgIGlmICghcm9vdCkgcmV0dXJuIGZhbHNlO1xuICAgICAgc3VtIC09IHJvb3QuZGF0YTtcbiAgICAgIGlmICghcm9vdC5sZWZ0ICYmICFyb290LnJpZ2h0KSByZXR1cm4gc3VtID09PSAwO1xuICAgICAgcmV0dXJuIGhhc1BhdGhTdW0ocm9vdC5sZWZ0LCBzdW0pIHx8IGhhc1BhdGhTdW0ocm9vdC5yaWdodCwgc3VtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGhhc1BhdGhTdW0odGhpcy5yb290LCBzdW0pO1xuICB9LFxuXG4gIGlzU3ltbWV0cmljOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMucm9vdCkgcmV0dXJuIHRydWU7XG4gICAgY29uc3QgdmFsaWRhdGVTeW1tZXRyeSA9IChsZWZ0LCByaWdodCkgPT4ge1xuICAgICAgaWYgKCFsZWZ0IHx8ICFyaWdodCkgcmV0dXJuIGxlZnQgPT09IHJpZ2h0O1xuICAgICAgaWYgKGxlZnQuZGF0YSAhPT0gcmlnaHQuZGF0YSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHZhbGlkYXRlU3ltbWV0cnkobGVmdC5sZWZ0LCByaWdodC5yaWdodCkgJiYgdmFsaWRhdGVTeW1tZXRyeShsZWZ0LnJpZ2h0LCByaWdodC5sZWZ0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHZhbGlkYXRlU3ltbWV0cnkodGhpcy5yb290LmxlZnQsIHRoaXMucm9vdC5yaWdodCk7XG4gIH0sXG5cbiAgZ2V0U3VjY2Vzc29yOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgLy8gU2VhcmNoIHRoZSBub2RlXG4gICAgbGV0IGN1cnIgPSB0aGlzLnNlYXJjaChkYXRhKTtcblxuICAgIGlmICghY3VycikgcmV0dXJuIG51bGw7XG4gICAgLy8gQ2FzZSAxOiBOb2RlIGhhcyByaWdodCBzdWJ0cmVlXG4gICAgaWYgKGN1cnIucmlnaHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXMuZmluZE1pbihjdXJyLnJpZ2h0KTtcbiAgICAvLyBDYXNlIDI6IE5vIHJpZ2h0IHN1YnRyZWVcbiAgICBsZXQgc3VjY2Vzc29yID0gbnVsbDtcbiAgICBsZXQgYW5jZXN0b3IgPSB0aGlzLnJvb3Q7XG5cbiAgICB3aGlsZSAoYW5jZXN0b3IgIT09IGN1cnIpIHtcbiAgICAgIGlmIChjdXJyLmRhdGEgPCBhbmNlc3Rvci5kYXRhKSB7XG4gICAgICAgIHN1Y2Nlc3NvciA9IGFuY2VzdG9yO1xuICAgICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLmxlZnQ7XG4gICAgICB9IGVsc2UgYW5jZXN0b3IgPSBhbmNlc3Rvci5yaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIHN1Y2Nlc3Nvci5kYXRhO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJpbmFyeVNlYXJjaFRyZWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHsgUXVldWVMaW5rZWRMaXN0IH0gPSByZXF1aXJlKCcuLi9xdWV1ZXMnKTtcblxuZnVuY3Rpb24gR3JhcGgoKSB7XG4gIHRoaXMubnVtT2ZWZXJ0aWNlcyA9IDA7XG4gIHRoaXMubGlzdCA9IG5ldyBNYXAoKTtcbn07XG5cbkdyYXBoLnByb3RvdHlwZSA9IHtcbiAgYWRkVmVydGV4OiBmdW5jdGlvbih2KSB7XG4gICAgKyt0aGlzLm51bU9mVmVydGljZXM7XG4gICAgdGhpcy5saXN0LnNldCh2LCBbXSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgYWRkRWRnZTogZnVuY3Rpb24odiwgdykge1xuICAgIGlmICghdGhpcy5saXN0LmdldCh2KSkgdGhpcy5hZGRWZXJ0ZXgodik7XG4gICAgdGhpcy5saXN0LmdldCh2KS5wdXNoKHcpO1xuICAgIGlmICghdGhpcy5saXN0LmdldCh3KSkgdGhpcy5hZGRWZXJ0ZXgodyk7XG4gICAgdGhpcy5saXN0LmdldCh3KS5wdXNoKHYpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIHRvT2JqZWN0OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBnID0ge307XG5cbiAgICB0aGlzLmxpc3QuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgZ1trZXldID0gdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGc7XG4gIH0sXG5cbiAgYmZzOiBmdW5jdGlvbih2KSB7XG4gICAgY29uc3QgdmlzaXRlZCA9IEFycmF5KHRoaXMubnVtT2ZWZXJ0aWNlcykuZmlsbChmYWxzZSk7XG4gICAgY29uc3QgcSA9IG5ldyBRdWV1ZUxpbmtlZExpc3QoKTtcblxuICAgIHZpc2l0ZWRbdl0gPSB0cnVlO1xuICAgIHEuZW5xdWV1ZSh2KTtcblxuICAgIHdoaWxlICghcS5pc0VtcHR5KCkpIHtcbiAgICAgIGNvbnN0IGVsZW0gPSBxLmRlcXVldWUoKTtcbiAgICAgIGNvbnN0IGVkZ2VzID0gdGhpcy5saXN0LmdldChlbGVtKTtcblxuICAgICAgZWRnZXMuZm9yRWFjaChuID0+IHtcbiAgICAgICAgaWYgKCF2aXNpdGVkW25dKSB7XG4gICAgICAgICAgdmlzaXRlZFtuXSA9IHRydWU7XG4gICAgICAgICAgcS5lbnF1ZXVlKG4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgZGZzOiBmdW5jdGlvbih2KSB7XG5cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHcmFwaDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEJpbmFyeVNlYXJjaFRyZWU6IHJlcXVpcmUoJy4vYmluYXJ5LXNlYXJjaC10cmVlJyksXG4gIEdyYXBoOiByZXF1aXJlKCcuL2dyYXBoJyksXG4gIGxpbmtlZExpc3RzOiByZXF1aXJlKCcuL2xpbmtlZC1saXN0cycpLFxuICBxdWV1ZXM6IHJlcXVpcmUoJy4vcXVldWVzJyksXG4gIHN0YWNrczogcmVxdWlyZSgnLi9zdGFja3MnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qge1xuICBMaW5rZWRMaXN0LFxuICBOb2RlXG59ID0gcmVxdWlyZSgnLi9saW5rZWQtbGlzdCcpO1xuXG5mdW5jdGlvbiBEb3VibGVOb2RlKGRhdGEpIHtcbiAgTm9kZS5jYWxsKHRoaXMsIGRhdGEpO1xufTtcblxuLy8gY3JlYXRlIGNvbnN0cnVjdG9yIHdpdGggTGlua2VkTGlzdCBpbmhlcml0YW5jZVxuZnVuY3Rpb24gRG91Ymx5TGlua2VkTGlzdChkYXRhKSB7XG4gIC8vIExpbmtlZExpc3QuY2FsbCh0aGlzLCBkYXRhKTtcbiAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgIHRoaXMuaGVhZCA9IG5ldyBEb3VibGVOb2RlKGRhdGFbMF0pO1xuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBkYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgICBsZXQgbmV3Tm9kZSA9IG5ldyBEb3VibGVOb2RlKGRhdGFbaV0pO1xuXG4gICAgICBuZXdOb2RlLnByZXYgPSBjdXJyO1xuICAgICAgY3Vyci5uZXh0ID0gbmV3Tm9kZTtcbiAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgfVxuICB9XG59O1xuLy8gSW5oZXJpdCBhbGwgcHJvdG90eXBlIGZyb20gTGlua2VkTGlzdFxuRG91Ymx5TGlua2VkTGlzdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExpbmtlZExpc3QucHJvdG90eXBlKTtcbi8vIG92ZXJ3cml0ZSBwcm90b3R5cGVzXG4vLyBSZWFzc2lnbiBjb25zdHJ1Y3RvciBwcm90b3R5cGVcbkRvdWJseUxpbmtlZExpc3QucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRG91Ymx5TGlua2VkTGlzdDtcbkRvdWJseUxpbmtlZExpc3QucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uKGRhdGEsIGluZGV4KSB7XG4gIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShkYXRhKTtcblxuICBpZiAoIXRoaXMuaGVhZCkge1xuICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgcmV0dXJuIHRoaXMuaGVhZDtcbiAgfVxuXG4gIGlmIChpbmRleCA9PT0gMCkge1xuICAgIGNvbnN0IHRlbXAgPSB0aGlzLmhlYWQ7XG5cbiAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgIHRoaXMuaGVhZC5uZXh0ID0gdGVtcDtcbiAgICByZXR1cm4gdGhpcy5oZWFkO1xuICB9XG5cbiAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG4gIGxldCBjdXJySW5kZXggPSAxO1xuXG4gIHdoaWxlIChjdXJyLm5leHQpIHtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBjdXJySW5kZXggPT09IGluZGV4KSB7XG4gICAgICBsZXQgdGVtcCA9IGN1cnIubmV4dDtcblxuICAgICAgY3Vyci5uZXh0ID0gbmV3Tm9kZTtcbiAgICAgIG5ld05vZGUucHJldiA9IGN1cnI7XG4gICAgICBuZXdOb2RlLm5leHQgPSB0ZW1wO1xuICAgICAgdGVtcC5wcmV2ID0gbmV3Tm9kZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgICsrY3VyckluZGV4O1xuICB9XG4gIGN1cnIubmV4dCA9IG5ld05vZGU7XG4gIG5ld05vZGUucHJldiA9IGN1cnI7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRG91Ymx5TGlua2VkTGlzdC5wcm90b3R5cGUuc2hpZnQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLmhlYWQpIHJldHVybjtcbiAgY29uc3QgZmlyc3QgPSB0aGlzLmhlYWQ7XG5cbiAgdGhpcy5oZWFkID0gZmlyc3QubmV4dDtcbiAgdGhpcy5oZWFkLnByZXYgPSBudWxsO1xuICByZXR1cm4gZmlyc3QuZGF0YTtcbn07XG5cbkRvdWJseUxpbmtlZExpc3QucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIGlmICghdGhpcy5oZWFkKSByZXR1cm4gbnVsbDtcblxuICBpZiAoaW5kZXggPT09IDApIHtcbiAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuICBsZXQgY3VyckluZGV4ID0gMDtcbiAgbGV0IHByZXYgPSBudWxsO1xuXG4gIHdoaWxlIChjdXJyLm5leHQpIHtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBjdXJySW5kZXggPT09IGluZGV4KSB7XG4gICAgICBjb25zdCBuZXh0ID0gY3Vyci5uZXh0O1xuXG4gICAgICBwcmV2Lm5leHQgPSBuZXh0O1xuICAgICAgbmV4dC5wcmV2ID0gcHJldjtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwcmV2ID0gY3VycjtcbiAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgICsrY3VyckluZGV4O1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuRG91Ymx5TGlua2VkTGlzdC5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIG51bGw7XG4gIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuICBsZXQgcHJldiA9IG51bGw7XG5cbiAgd2hpbGUgKGN1cnIpIHtcbiAgICBsZXQgbmV4dCA9IGN1cnIubmV4dDtcblxuICAgIGN1cnIubmV4dCA9IHByZXY7XG4gICAgaWYgKHByZXYpIHByZXYucHJldiA9IGN1cnI7XG4gICAgcHJldiA9IGN1cnI7XG4gICAgY3VyciA9IG5leHQ7XG4gIH1cbiAgdGhpcy5oZWFkID0gcHJldjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldmVyc2UgTGluayBsaXN0IHJlY3Vyc2l2ZWx5XG4gKiBAcGFyYW0gIHtbdHlwZV19IG5vZGUgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuRG91Ymx5TGlua2VkTGlzdC5wcm90b3R5cGUucmV2ZXJzZVJlY3Vyc2lvbiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXZlcnNlID0gKG5vZGUpID0+IHtcbiAgICBpZiAoIW5vZGUgfHwgIW5vZGUubmV4dCkgcmV0dXJuO1xuICAgIHJldmVyc2Uobm9kZS5uZXh0KTtcbiAgICBjb25zdCB0ZW1wID0gbm9kZS5uZXh0O1xuXG4gICAgdGVtcC5uZXh0ID0gbm9kZTtcbiAgICBub2RlLnByZXYgPSB0ZW1wO1xuICAgIG5vZGUubmV4dCA9IG51bGw7XG4gIH07XG5cbiAgcmV2ZXJzZSh0aGlzLmhlYWQpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRG91Ymx5TGlua2VkTGlzdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBMaW5rZWRMaXN0IH0gPSByZXF1aXJlKCcuL2xpbmtlZC1saXN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBEb3VibHlMaW5rZWRMaXN0OiByZXF1aXJlKCcuL2RvdWJseS1saW5rZWQtbGlzdCcpLFxuICBMaW5rZWRMaXN0OiBMaW5rZWRMaXN0XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBOb2RlIGZvciBsaW5rIGxpc3RcbiAqIEBwYXJhbSAgICAgICB7W3R5cGVdfSBkYXRhIFtkZXNjcmlwdGlvbl1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBOb2RlKGRhdGEpIHtcbiAgdGhpcy5kYXRhID0gZGF0YTtcbn1cbi8qKlxuICogQ3JlYXRlIExpbmsgbGlzdFxuICogQHBhcmFtICAgICAgIHtbdHlwZV19IGRhdGEgW2Rlc2NyaXB0aW9uXVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIExpbmtlZExpc3QoZGF0YSkge1xuICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgdGhpcy5oZWFkID0gbmV3IE5vZGUoZGF0YVswXSk7XG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgIGN1cnIubmV4dCA9IG5ldyBOb2RlKGRhdGFbaV0pO1xuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICB9XG4gIH1cbn07XG4vKipcbiAqIFByaW50IExpbmsgbGlzdCBpbiByZWN1cnNpdmUgZmFzaGlvblxuICogQHBhcmFtICB7W3R5cGVdfSBub2RlIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbkxpbmtlZExpc3QucHJpbnRSZWN1cnNpb24gPSBmdW5jdGlvbihub2RlKSB7XG4gIGlmICghbm9kZSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBMaW5rZWRMaXN0LnByaW50UmVjdXJzaW9uKG5vZGUubmV4dCk7XG59O1xuXG5MaW5rZWRMaXN0LnByb3RvdHlwZSA9IHtcbiAgLyoqXG4gICAqIFByaW50IGFsbCB2YWx1ZXMgaW4gYSBsaW5rbGlzdFxuICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHByaW50OiBmdW5jdGlvbigpIHtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcblxuICAgIHdoaWxlIChjdXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhjdXJyLmRhdGEpO1xuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnZlcnQgbGluayBsaXN0IHRvIGFycmF5XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcblxuICAgIHdoaWxlIChjdXJyKSB7XG4gICAgICBhcnJheS5wdXNoKGN1cnIuZGF0YSk7XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluc2VydCB2YWx1ZSBpbiBsaW5rbGlzdCBhdCBpbmRleCBvciBlbmRcbiAgICogQHBhcmFtICB7W3R5cGVdfSBkYXRhICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gaW5kZXggW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGluc2VydDogZnVuY3Rpb24oZGF0YSwgaW5kZXgpIHtcbiAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoZGF0YSk7XG5cbiAgICBpZiAoIXRoaXMuaGVhZCkge1xuICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgY29uc3QgdGVtcCA9IHRoaXMuaGVhZDtcblxuICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICAgIHRoaXMuaGVhZC5uZXh0ID0gdGVtcDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuICAgIGxldCBjdXJySW5kZXggPSAxO1xuXG4gICAgd2hpbGUgKGN1cnIubmV4dCkge1xuICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgY3VyckluZGV4ID09PSBpbmRleCkge1xuICAgICAgICBsZXQgdGVtcCA9IGN1cnIubmV4dDtcblxuICAgICAgICBjdXJyLm5leHQgPSBuZXdOb2RlO1xuICAgICAgICBuZXdOb2RlLm5leHQgPSB0ZW1wO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgICArK2N1cnJJbmRleDtcbiAgICB9XG4gICAgY3Vyci5uZXh0ID0gbmV3Tm9kZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlIGZpcnN0IG5vZGUgaW4gbGluayBsaXN0XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgc2hpZnQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5oZWFkKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBmaXJzdCA9IHRoaXMuaGVhZDtcblxuICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgIHJldHVybiBmaXJzdC5kYXRhO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgbGFzdCBub2RlIGluIGxpbmsgbGl0XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgcG9wOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IHByZXYgPSBudWxsO1xuXG4gICAgd2hpbGUgKGN1cnIubmV4dCkge1xuICAgICAgcHJldiA9IGN1cnI7XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgIH1cbiAgICBwcmV2Lm5leHQgPSBudWxsO1xuICAgIHJldHVybiBjdXJyLmRhdGE7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlbGV0ZSBub2RlIGluIGxpbmsgbGlzdCBhdCBpbmRleFxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGluZGV4IFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBkZWxldGU6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLmhlYWQpIHJldHVybiBudWxsO1xuXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuICAgIGxldCBjdXJySW5kZXggPSAwO1xuICAgIGxldCBwcmV2ID0gbnVsbDtcblxuICAgIHdoaWxlIChjdXJyLm5leHQpIHtcbiAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGN1cnJJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgcHJldi5uZXh0ID0gY3Vyci5uZXh0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHByZXYgPSBjdXJyO1xuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICAgICsrY3VyckluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIFJldmVyc2UgTGlua0xpc3RcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICByZXZlcnNlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IHByZXYgPSBudWxsO1xuXG4gICAgd2hpbGUgKGN1cnIpIHtcbiAgICAgIGxldCBuZXh0ID0gY3Vyci5uZXh0O1xuXG4gICAgICBjdXJyLm5leHQgPSBwcmV2O1xuICAgICAgcHJldiA9IGN1cnI7XG4gICAgICBjdXJyID0gbmV4dDtcbiAgICB9XG4gICAgdGhpcy5oZWFkID0gcHJldjtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmV2ZXJzZSBMaW5rIGxpc3QgcmVjdXJzaXZlbHlcbiAgICogQHBhcmFtICB7W3R5cGVdfSBub2RlIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHJldmVyc2VSZWN1cnNpb246IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUubmV4dCkge1xuICAgICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZXZlcnNlUmVjdXJzaW9uKG5vZGUubmV4dCk7XG4gICAgbGV0IHRlbXAgPSBub2RlLm5leHQ7XG5cbiAgICB0ZW1wLm5leHQgPSBub2RlO1xuICAgIG5vZGUubmV4dCA9IG51bGw7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBMaW5rZWRMaXN0OiBMaW5rZWRMaXN0LFxuICBOb2RlOiBOb2RlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBRdWV1ZUFycmF5KCkge1xuICB0aGlzLl9xdWV1ZSA9IEFycmF5KDEwKS5maWxsKG51bGwpO1xuICB0aGlzLl9mcm9udCA9IC0xO1xuICB0aGlzLl9yZWFyID0gLTE7XG59XG5cblF1ZXVlQXJyYXkucHJvdG90eXBlID0ge1xuICBlbnF1ZXVlOiBmdW5jdGlvbih4KSB7XG4gICAgaWYgKCh0aGlzLl9yZWFyICsgMSkgJSB0aGlzLl9xdWV1ZS5sZW5ndGggPT09IHRoaXMuX2Zyb250KSByZXR1cm47XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB0aGlzLl9yZWFyID0gdGhpcy5fZnJvbnQgPSAwO1xuICAgIGVsc2UgdGhpcy5fcmVhciA9ICh0aGlzLl9yZWFyICsgMSkgJSB0aGlzLl9xdWV1ZS5sZW5ndGg7XG4gICAgdGhpcy5fcXVldWVbdGhpcy5fcmVhcl0gPSB4O1xuICB9LFxuXG4gIGRlcXVldWU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuO1xuICAgIGxldCB2YWw7XG5cbiAgICBpZiAodGhpcy5fZnJvbnQgPT09IHRoaXMuX3JlYXIpIHtcbiAgICAgIHZhbCA9IHRoaXMuX3F1ZXVlW3RoaXMuX2Zyb250XTtcbiAgICAgIHRoaXMuX2Zyb250ID0gdGhpcy5fcmVhciA9IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgPSB0aGlzLl9xdWV1ZVt0aGlzLl9mcm9udF07XG4gICAgICArK3RoaXMuX2Zyb250O1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9LFxuXG4gIGZyb250OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVldWVbdGhpcy5fZnJvbnRdO1xuICB9LFxuXG4gIGlzRW1wdHk6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9mcm9udCA9PT0gLSAxICYmIHRoaXMuX3JlYXIgPT09IC0xO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlQXJyYXk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBRdWV1ZUFycmF5OiByZXF1aXJlKCcuL2FycmF5JyksXG4gIFF1ZXVlTGlua2VkTGlzdDogcmVxdWlyZSgnLi9saW5rZWQtbGlzdCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBOb2RlKHZhbCkge1xuICB0aGlzLmRhdGEgPSB2YWw7XG59XG5cbmZ1bmN0aW9uIFF1ZXVlTGlua0xpc3QoKSB7fVxuXG5RdWV1ZUxpbmtMaXN0LnByb3RvdHlwZSA9IHtcbiAgZW5xdWV1ZTogZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB0aGlzLl9yZWFyID0gdGhpcy5fZnJvbnQgPSBuZXcgTm9kZSh2YWwpO1xuICAgIGVsc2UgdGhpcy5fcmVhciA9IHRoaXMuX3JlYXIubmV4dCA9IG5ldyBOb2RlKHZhbCk7XG4gIH0sXG5cbiAgZGVxdWV1ZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuX2Zyb250O1xuXG4gICAgaWYgKG5vZGUgPT09IHRoaXMuX3JlYXIpIHRoaXMuX3JlYXIgPSB0aGlzLl9mcm9udCA9IHVuZGVmaW5lZDtcbiAgICBlbHNlIGlmIChub2RlLm5leHQpIHRoaXMuX2Zyb250ID0gbm9kZS5uZXh0O1xuICAgIHJldHVybiBub2RlLmRhdGE7XG4gIH0sXG5cbiAgZnJvbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9mcm9udC5kYXRhO1xuICB9LFxuXG4gIGlzRW1wdHk6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9mcm9udCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX3JlYXIgPT09IHVuZGVmaW5lZDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZUxpbmtMaXN0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBTdGFja0FycmF5KCkge1xuICB0aGlzLl9zdGFjayA9IFtdO1xuICB0aGlzLl90b3AgPSAtMTtcbn1cblxuU3RhY2tBcnJheS5wcm90b3R5cGUgPSB7XG4gIHB1c2g6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICArK3RoaXMuX3RvcDtcbiAgICBpZiAodGhpcy5fc3RhY2subGVuZ3RoID49IHRoaXMuX3RvcCArIDEpIHRoaXMuX3N0YWNrW3RoaXMuX3RvcF0gPSBkYXRhO1xuICAgIGVsc2UgdGhpcy5fc3RhY2sucHVzaChkYXRhKTtcbiAgICByZXR1cm4gdGhpcy5fc3RhY2s7XG4gIH0sXG5cbiAgcG9wOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybjtcbiAgICBjb25zdCB0b3AgPSB0aGlzLl9zdGFja1t0aGlzLl90b3BdO1xuXG4gICAgdGhpcy5fc3RhY2tbdGhpcy5fdG9wXSA9IHVuZGVmaW5lZDtcbiAgICAtLXRoaXMuX3RvcDtcbiAgICByZXR1cm4gdG9wO1xuICB9LFxuXG4gIHRvcDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWNrW3RoaXMuX3RvcF07XG4gIH0sXG5cbiAgaXNFbXB0eTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvcCA9PT0gLTE7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2tBcnJheTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFN0YWNrQXJyYXk6IHJlcXVpcmUoJy4vYXJyYXknKSxcbiAgU3RhY2tMaW5rZWRMaXN0OiByZXF1aXJlKCcuL2xpbmtlZC1saXN0Jylcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIE5vZGUgZm9yIGxpbmsgbGlzdFxuICogQHBhcmFtICAgICAgIHtbdHlwZV19IGRhdGEgW2Rlc2NyaXB0aW9uXVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE5vZGUoZGF0YSkge1xuICB0aGlzLmRhdGEgPSBkYXRhO1xufVxuLyoqXG4gKiBDcmVhdGUgTGluayBsaXN0XG4gKiBAcGFyYW0gICAgICAge1t0eXBlXX0gZGF0YSBbZGVzY3JpcHRpb25dXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU3RhY2tMaW5rZWRMaXN0KCkge31cbi8qKlxuICogUHJpbnQgTGluayBsaXN0IGluIHJlY3Vyc2l2ZSBmYXNoaW9uXG4gKiBAcGFyYW0gIHtbdHlwZV19IG5vZGUgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuU3RhY2tMaW5rZWRMaXN0LnByaW50UmVjdXJzaW9uID0gZnVuY3Rpb24obm9kZSkge1xuICBpZiAoIW5vZGUpIHJldHVybiBudWxsO1xuICByZXR1cm4gU3RhY2tMaW5rZWRMaXN0LnByaW50UmVjdXJzaW9uKG5vZGUubmV4dCk7XG59O1xuXG5TdGFja0xpbmtlZExpc3QucHJvdG90eXBlID0ge1xuICAvKipcbiAgICogUHJpbnQgYWxsIHZhbHVlcyBpbiBhIGxpbmtsaXN0XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgcHJpbnQ6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuXG4gICAgd2hpbGUgKGN1cnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGN1cnIuZGF0YSk7XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ29udmVydCBsaW5rIGxpc3QgdG8gYXJyYXlcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICB0b0FycmF5OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuXG4gICAgd2hpbGUgKGN1cnIpIHtcbiAgICAgIGFycmF5LnB1c2goY3Vyci5kYXRhKTtcbiAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfSxcblxuICAvKipcbiAgICogSW5zZXJ0IHZhbHVlIGluIGxpbmtsaXN0IGF0IGluZGV4IG9yIGVuZFxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGRhdGEgIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBpbmRleCBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgcHVzaDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShkYXRhKTtcblxuICAgIG5ld05vZGUubmV4dCA9IHRoaXMuaGVhZDtcbiAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZmlyc3Qgbm9kZSBpbiBsaW5rIGxpc3RcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBwb3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5oZWFkKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBmaXJzdCA9IHRoaXMuaGVhZDtcblxuICAgIHRoaXMuaGVhZCA9IGZpcnN0Lm5leHQ7XG4gICAgcmV0dXJuIGZpcnN0LmRhdGE7XG4gIH0sXG5cbiAgdG9wOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFkLmRhdGE7XG4gIH0sXG5cbiAgaXNFbXB0eTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICF0aGlzLmhlYWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIExpbmtMaXN0IHJldmVyc2FsIHVzaW5nIHN0YWNrcyBpcyBhbiBPKE4gKyBNKSB0aW1lIGFuZCBzcGFjZSBjb21wbGV4aXR5XG4gICAqIEBwYXJhbSAge1t0eXBlXX0gbGlua0xpc3QgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHJldmVyc2U6IGZ1bmN0aW9uKCkge1xuICAgIC8vIENyZWF0ZSBhIHN0YWNrIHRvIHN0b3JlIHRoZSBsaW5rbGlzdCB2YWx1ZXNcbiAgICBjb25zdCBzdGFjayA9IG5ldyBTdGFja0xpbmtlZExpc3QoKTtcblxuICAgIC8vIHB1c2ggYWxsIGxpbmsgbGlzdCB2YWx1ZXMgaW4gc3RhY2sgYnkgc2hpZnRpbmcgdGhlIGZpcnN0IHZhbHVlLlxuICAgIHdoaWxlICh0aGlzLmhlYWQpIHN0YWNrLnB1c2godGhpcy5zaGlmdCgpKTtcbiAgICAvLyByZS1pbnNlcnQgYWxsIG9mIHRoZSBsaW5rIGxpc3QgdmFsdWVzIGJ5IHBvcHBpbmcgdGhlIHN0YWNrXG4gICAgd2hpbGUgKCFzdGFjay5pc0VtcHR5KCkpIHRoaXMuaW5zZXJ0KHN0YWNrLnBvcCgpKTtcbiAgICAvLyByZXR1cm4gdGhlIG5ldyBzdGFja1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrTGlua2VkTGlzdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGRhdGFTdHJ1Y3R1cmVzIGZyb20gJy4vZGF0YS1zdHJ1Y3R1cmVzJztcbmltcG9ydCBhbGdvcml0aG1zIGZyb20gJy4vYWxnb3JpdGhtcyc7XG5cbmV4cG9ydCB7XG4gIGRhdGFTdHJ1Y3R1cmVzLFxuICBhbGdvcml0aG1zXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==