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
  var mid = array.length / 2;
  if (val > array[mid]) return binarySearch(array.splice(mid - 1, array.length), val);
  if (val < array[mid]) return binarySearch(array.splice(0, mid - 1), val);
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

/***/ "./src/algorithms/sorting/index.js":
/*!*****************************************!*\
  !*** ./src/algorithms/sorting/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  selectionSort: __webpack_require__(/*! ./selection */ "./src/algorithms/sorting/selection.js"),
  bubbleSort: __webpack_require__(/*! ./bubble */ "./src/algorithms/sorting/bubble.js"),
  insertionSort: __webpack_require__(/*! ./insertion */ "./src/algorithms/sorting/insertion.js"),
  mergeSort: __webpack_require__(/*! ./merge */ "./src/algorithms/sorting/merge.js"),
  quickSort: __webpack_require__(/*! ./quick */ "./src/algorithms/sorting/quick.js")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGdvL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9hbGdvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FsZ28vLi9zcmMvYWxnb3JpdGhtcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2FsZ29yaXRobXMvc2VhcmNoL2JpbmFyeS1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9hbGdvcml0aG1zL3NlYXJjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2FsZ29yaXRobXMvc29ydGluZy9idWJibGUuanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9hbGdvcml0aG1zL3NvcnRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9hbGdvcml0aG1zL3NvcnRpbmcvaW5zZXJ0aW9uLmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvYWxnb3JpdGhtcy9zb3J0aW5nL21lcmdlLmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvYWxnb3JpdGhtcy9zb3J0aW5nL3F1aWNrLmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvYWxnb3JpdGhtcy9zb3J0aW5nL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9iaW5hcnktc2VhcmNoLXRyZWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvZ3JhcGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvbGlua2VkLWxpc3RzL2RvdWJseS1saW5rZWQtbGlzdC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9saW5rZWQtbGlzdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvbGlua2VkLWxpc3RzL2xpbmtlZC1saXN0LmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL3F1ZXVlcy9hcnJheS5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9xdWV1ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvcXVldWVzL2xpbmtlZC1saXN0LmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL3N0YWNrcy9hcnJheS5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9zdGFja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvc3RhY2tzL2xpbmtlZC1saXN0LmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNvcnRpbmciLCJyZXF1aXJlIiwic2VhcmNoIiwiYmluYXJ5U2VhcmNoIiwiYXJyYXkiLCJ2YWwiLCJtaWQiLCJsZW5ndGgiLCJzcGxpY2UiLCJ0Iiwic3dhcHBlZCIsImkiLCJ0ZW1wIiwic2VsZWN0aW9uU29ydCIsImJ1YmJsZVNvcnQiLCJpbnNlcnRpb25Tb3J0IiwibWVyZ2VTb3J0IiwicXVpY2tTb3J0IiwiaCIsIk1hdGgiLCJmbG9vciIsImxlZnQiLCJzbGljZSIsInJpZ2h0Iiwic29ydEFuZE1lcmdlIiwic29ydGVkIiwibCIsInIiLCJwdXNoIiwiY29uY2F0Iiwic3dhcCIsImEiLCJiIiwicGFydGl0aW9uIiwic3RhcnQiLCJlbmQiLCJwaXZvdCIsInJhbmRvbSIsImluZGV4IiwicCIsIm1pbiIsImoiLCJOb2RlIiwiX2RhdGEiLCJwcm90b3R5cGUiLCJkYXRhIiwiX2xlZnQiLCJub2RlIiwiY29uc3RydWN0b3IiLCJOdW1iZXIiLCJfcmlnaHQiLCJpbnNlcnQiLCJCaW5hcnlTZWFyY2hUcmVlIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsIm4iLCJfcm9vdCIsInJvb3QiLCJoYXMiLCJmaW5kTWluIiwiZ2V0TWluIiwiZmluZE1heCIsImdldE1heCIsImRlbGV0ZSIsImRlbGV0ZU5vZGUiLCJsZXZlbE9yZGVyIiwidmFscyIsInF1ZXVlIiwiY3VyciIsInNoaWZ0IiwicHJlT3JkZXIiLCJ0cmF2ZXJzZSIsImluT3JkZXIiLCJwb3N0T3JkZXIiLCJtYXhEZXB0aCIsIm1heCIsImlzVmFsaWQiLCJpc0JTVCIsIkluZmluaXR5IiwicGF0aFN1bSIsInN1bSIsImhhc1BhdGhTdW0iLCJpc1N5bW1ldHJpYyIsInZhbGlkYXRlU3ltbWV0cnkiLCJnZXRTdWNjZXNzb3IiLCJ1bmRlZmluZWQiLCJzdWNjZXNzb3IiLCJhbmNlc3RvciIsIlF1ZXVlTGlua2VkTGlzdCIsIkdyYXBoIiwibnVtT2ZWZXJ0aWNlcyIsImxpc3QiLCJNYXAiLCJhZGRWZXJ0ZXgiLCJ2Iiwic2V0IiwiYWRkRWRnZSIsInciLCJnZXQiLCJ0b09iamVjdCIsImciLCJ2YWx1ZSIsImtleSIsImJmcyIsInZpc2l0ZWQiLCJmaWxsIiwicSIsImVucXVldWUiLCJpc0VtcHR5IiwiZWxlbSIsImRlcXVldWUiLCJlZGdlcyIsImRmcyIsImxpbmtlZExpc3RzIiwicXVldWVzIiwic3RhY2tzIiwiTGlua2VkTGlzdCIsIkRvdWJsZU5vZGUiLCJjYWxsIiwiRG91Ymx5TGlua2VkTGlzdCIsImhlYWQiLCJuZXdOb2RlIiwicHJldiIsIm5leHQiLCJPYmplY3QiLCJjcmVhdGUiLCJjdXJySW5kZXgiLCJmaXJzdCIsInJldmVyc2UiLCJyZXZlcnNlUmVjdXJzaW9uIiwicHJpbnRSZWN1cnNpb24iLCJwcmludCIsImNvbnNvbGUiLCJsb2ciLCJ0b0FycmF5IiwicG9wIiwiUXVldWVBcnJheSIsIl9xdWV1ZSIsIl9mcm9udCIsIl9yZWFyIiwieCIsImZyb250IiwiUXVldWVMaW5rTGlzdCIsIlN0YWNrQXJyYXkiLCJfc3RhY2siLCJfdG9w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QUFVNUUsSUFBakI7QUFDRCxHQXpEeUI7QUEyRDFCZ0UsU0FBTyxFQUFFLG1CQUFXO0FBQ2xCLFdBQU8sQ0FBQyxLQUFLWSxJQUFiO0FBQ0QsR0E3RHlCOztBQStEMUI7Ozs7O0FBS0FRLFNBQU8sRUFBRSxtQkFBVztBQUNsQjtBQUNBLFFBQU1vQixLQUFLLEdBQUcsSUFBSUQsZUFBSixFQUFkLENBRmtCLENBSWxCOztBQUNBLFdBQU8sS0FBSzNCLElBQVo7QUFBa0I0QixXQUFLLENBQUN6SCxJQUFOLENBQVcsS0FBSzBDLEtBQUwsRUFBWDtBQUFsQixLQUxrQixDQU1sQjs7O0FBQ0EsV0FBTyxDQUFDK0UsS0FBSyxDQUFDeEMsT0FBTixFQUFSO0FBQXlCLFdBQUsxRCxNQUFMLENBQVlrRyxLQUFLLENBQUNiLEdBQU4sRUFBWjtBQUF6QixLQVBrQixDQVFsQjs7O0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUE5RXlCLENBQTVCO0FBaUZBMUksTUFBTSxDQUFDQyxPQUFQLEdBQWlCcUosZUFBakIsQzs7Ozs7Ozs7Ozs7O0FDMUdhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYjs7QUFDQSIsImZpbGUiOiJhbGdvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJhbGdvXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImFsZ29cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYWxnb1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNvcnRpbmc6IHJlcXVpcmUoJy4vc29ydGluZycpLFxuICBzZWFyY2g6IHJlcXVpcmUoJy4vc2VhcmNoJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGJpbmFyeVNlYXJjaChhcnJheSwgdmFsKSB7XG4gIC8vIGdldCBtaWQgcG9pbnQgb2YgYXJyYXlcbiAgY29uc3QgbWlkID0gYXJyYXkubGVuZ3RoIC8gMjtcblxuICBpZiAodmFsID4gYXJyYXlbbWlkXSkgcmV0dXJuIGJpbmFyeVNlYXJjaChhcnJheS5zcGxpY2UobWlkIC0gMSwgYXJyYXkubGVuZ3RoKSwgdmFsKTtcbiAgaWYgKHZhbCA8IGFycmF5W21pZF0pIHJldHVybiBiaW5hcnlTZWFyY2goYXJyYXkuc3BsaWNlKDAsIG1pZCAtIDEpLCB2YWwpO1xuICBpZiAodmFsID09PSBhcnJheVttaWRdKSByZXR1cm4gYXJyYXlbbWlkXTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJpbmFyeVNlYXJjaDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGJpbmFyeVNlYXJjaDogcmVxdWlyZSgnLi9iaW5hcnktc2VhcmNoJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEJ1YmJsZSBTb3J0XG4gKlxuICogVGltZSBjb21wbGV4aXR5XG4gKiBCZXN0IENhc2U6IGlzIE8obilcbiAqIEF2ZXJhZ2UgQ2FzZTogaXMgTyhuXjIpXG4gKiBXb3JzdCBDYXNlOiBpcyBPKG5eMilcbiAqXG4gKiBAcGFyYW0gIHtbTnVtYmVyXX0gYXJyYXkgQXJyYXkgb2YgaW50ZWdlcnMgdG8gc29ydFxuICogQHJldHVybiB7W051bWJlcl19IGFycmF5IEFycmF5IG9mIGludGVnZXJzIHRvIHNvcnRlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIGZvciAobGV0IHQgPSBhcnJheS5sZW5ndGggLSAxOyB0ID49IDA7IC0tdCkge1xuICAgIGxldCBzd2FwcGVkID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHQgLSAxOyArK2kpIHtcbiAgICAgIGlmIChhcnJheVtpXSA+IGFycmF5W2kgKyAxXSkge1xuICAgICAgICBjb25zdCB0ZW1wID0gYXJyYXlbaV07XG5cbiAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtpICsgMV07XG4gICAgICAgIGFycmF5W2kgKyAxXSA9IHRlbXA7XG4gICAgICAgIHN3YXBwZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKCFzd2FwcGVkKSBicmVhazsgLy8gSWYgc3dhcCBuZXZlciBoYXBwZW5zLCBCcmVhayB0aGUgbG9vcC5cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNlbGVjdGlvblNvcnQ6IHJlcXVpcmUoJy4vc2VsZWN0aW9uJyksXG4gIGJ1YmJsZVNvcnQ6IHJlcXVpcmUoJy4vYnViYmxlJyksXG4gIGluc2VydGlvblNvcnQ6IHJlcXVpcmUoJy4vaW5zZXJ0aW9uJyksXG4gIG1lcmdlU29ydDogcmVxdWlyZSgnLi9tZXJnZScpLFxuICBxdWlja1NvcnQ6IHJlcXVpcmUoJy4vcXVpY2snKVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogSW5zZXJ0aW9uIFNvcnRcbiAqXG4gKiBUaW1lIGNvbXBsZXhpdHlcbiAqIEJlc3QgQ2FzZTogaXMgTyhuKVxuICogQXZlcmFnZSBDYXNlOiBpcyBPKG5eMilcbiAqIFdvcnN0IENhc2U6IGlzIE8obl4yKVxuICpcbiAqIEBwYXJhbSAge1tOdW1iZXJdfSBhcnJheSBBcnJheSBvZiBpbnRlZ2VycyB0byBzb3J0XG4gKiBAcmV0dXJuIHtbTnVtYmVyXX0gYXJyYXkgQXJyYXkgb2YgaW50ZWdlcnMgdG8gc29ydGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcnJheS5sZW5ndGg7ICsraSkge1xuICAgIGxldCB2YWwgPSBhcnJheVtpXTtcbiAgICBsZXQgaCA9IGk7XG5cbiAgICB3aGlsZSAoaCA+IDAgJiYgYXJyYXlbaCAtIDFdID4gdmFsKSB7XG4gICAgICBhcnJheVtoXSA9IGFycmF5W2ggLSAxXTtcbiAgICAgIC0taDtcbiAgICB9XG4gICAgYXJyYXlbaF0gPSB2YWw7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogTWVyZ2UgU29ydFxuICpcbiAqIFRpbWUgY29tcGxleGl0eSBPKG4gbG9nIG4pXG4gKiBTcGFjZSBjb21wbGV4aXR5IE8obilcbiAqXG4gKiBAcGFyYW0gIHtbTnVtYmVyXX0gYXJyYXkgQXJyYXkgb2YgaW50ZWdlcnMgdG8gc29ydFxuICogQHJldHVybiB7W051bWJlcl19IGFycmF5IEFycmF5IG9mIGludGVnZXJzIHRvIHNvcnRlZFxuICovXG5mdW5jdGlvbiBtZXJnZVNvcnQoYXJyYXkpIHtcbiAgaWYgKGFycmF5Lmxlbmd0aCA8PSAxKSByZXR1cm4gYXJyYXk7XG4gIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoYXJyYXkubGVuZ3RoIC8gMik7IC8vIERldGVybWluZSBtaWQgcG9pbnQgb2YgYXJyYXlcbiAgY29uc3QgbGVmdCA9IGFycmF5LnNsaWNlKDAsIG1pZCk7IC8vIHNwbGl0IGFycmF5IGluIHRvIDIgYnkgdGhlIG1pZCBwb2ludFxuICBjb25zdCByaWdodCA9IGFycmF5LnNsaWNlKG1pZCk7XG4gIC8vIGZ1bmN0aW9uIHRvIHNvcnQgYW5kIG1lcmdlIDIgYXJyYXlzXG4gIGNvbnN0IHNvcnRBbmRNZXJnZSA9IChsZWZ0LCByaWdodCkgPT4ge1xuICAgIGxldCBzb3J0ZWQgPSBbXTsgLy8gZmluYWwgc29ydGVkIGFycmF5XG4gICAgbGV0IGwgPSAwOyAvLyBjdXJyZW50IHNjYW5uZWQgaW5kZXhlcyBvZiBsZWZ0IGFuZCByaWdodCBhcnJheXNcbiAgICBsZXQgciA9IDA7XG5cbiAgICB3aGlsZSAobCA8IGxlZnQubGVuZ3RoICYmIHIgPCByaWdodC5sZW5ndGgpIHsgLy8gc2NhbiB2YWx1ZXMgaW4gYXJyYXlzXG4gICAgICBpZiAobGVmdFtsXSA8IHJpZ2h0W3JdKSB7IC8vIGlmIGxlZnQgaXMgc21hbGxlciwgcHVzaCB0byBhcnJheSBhbmQgaW5jcmVtZW50IGxlZnQgaW5kZXhcbiAgICAgICAgc29ydGVkLnB1c2gobGVmdFtsXSk7XG4gICAgICAgICsrbDtcbiAgICAgIH0gZWxzZSB7IC8vIHB1c2ggcmlnaHQgdmFsdWUgdG8gYXJyYXkgYW5kIGluY3JlbWVudCByaWdodCBpbmRleFxuICAgICAgICBzb3J0ZWQucHVzaChyaWdodFtyXSk7XG4gICAgICAgICsrcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQXBwZW5kIHJlbWFpbmluZyB2YWx1ZXNcbiAgICByZXR1cm4gc29ydGVkLmNvbmNhdChsZWZ0LnNsaWNlKGwpKS5jb25jYXQocmlnaHQuc2xpY2UocikpO1xuICB9O1xuXG4gIC8vIHJldHVybiBtZXJnZWQgYXJyYXkgaW4gcmVjdXJzaW9uXG4gIHJldHVybiBzb3J0QW5kTWVyZ2UobWVyZ2VTb3J0KGxlZnQpLCBtZXJnZVNvcnQocmlnaHQpKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWVyZ2VTb3J0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBRdWljayBTb3J0XG4gKlxuICogVGltZSBjb21wbGV4aXR5XG4gKiBCZXN0IENhc2U6IE8obiBsb2cgbilcbiAqIFdvcnN0IENhc2U6IE8obl4yKVxuICpcbiAqIFNwYWNlIGNvbXBsZXhpdHkgTyhuKVxuICpcbiAqIEBwYXJhbSAge1tOdW1iZXJdfSBhcnJheSBBcnJheSBvZiBpbnRlZ2VycyB0byBzb3J0XG4gKiBAcmV0dXJuIHtbTnVtYmVyXX0gYXJyYXkgQXJyYXkgb2YgaW50ZWdlcnMgdG8gc29ydGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgY29uc3Qgc3dhcCA9IChhLCBiKSA9PiB7XG4gICAgY29uc3QgdCA9IGE7XG5cbiAgICBhID0gYjtcbiAgICBiID0gdDtcbiAgfTtcblxuICBjb25zdCBwYXJ0aXRpb24gPSAoYXJyYXksIHN0YXJ0LCBlbmQpID0+IHtcbiAgICBjb25zdCBwaXZvdCA9IGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCldO1xuICAgIGxldCBpbmRleCA9IHN0YXJ0O1xuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kIC0gMTsgKytpKSB7XG4gICAgICBpZiAoYXJyYXlbaV0gPD0gcGl2b3QpIHtcbiAgICAgICAgc3dhcChhcnJheVtpXSwgYXJyYXlbaW5kZXhdKTtcbiAgICAgICAgaW5kZXggPSBpbmRleCArIDE7XG4gICAgICB9XG4gICAgfVxuICAgIHN3YXAoYXJyYXlbaW5kZXhdLCBhcnJheVtlbmRdKTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH07XG5cbiAgY29uc3QgcXVpY2tTb3J0ID0gKGFycmF5LCBzdGFydCwgZW5kKSA9PiB7XG4gICAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgICBjb25zdCBwID0gcGFydGl0aW9uKGFycmF5LCBzdGFydCwgZW5kKTtcblxuICAgICAgcXVpY2tTb3J0KGFycmF5LCBzdGFydCwgcCk7XG4gICAgICBxdWlja1NvcnQoYXJyYXksIHAgKyAxLCBlbmQpO1xuICAgIH1cbiAgfTtcblxuICBxdWlja1NvcnQoYXJyYXksIDAsIGFycmF5Lmxlbmd0aCAtIDEpO1xuICByZXR1cm4gYXJyYXk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBTZWxlY3Rpb24gU29ydFxuICpcbiAqIFRpbWUgY29tcGxleGl0eSBpcyBPKG5eMilcbiAqIEBwYXJhbSAge1tOdW1iZXJdfSBhcnJheSBBcnJheSBvZiBpbnRlZ2VycyB0byBzb3J0XG4gKiBAcmV0dXJuIHtbTnVtYmVyXX0gYXJyYXkgQXJyYXkgb2YgaW50ZWdlcnMgdG8gc29ydGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGggLSAxOyArK2kpIHtcbiAgICBsZXQgbWluID0gaTtcblxuICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGFycmF5Lmxlbmd0aDsgKytqKSB7XG4gICAgICBpZiAoYXJyYXlbbWluXSA8IGFycmF5W2pdKSBtaW4gPSBqO1xuICAgIH1cbiAgICBsZXQgdGVtcCA9IGFycmF5W2ldO1xuXG4gICAgYXJyYXlbaV0gPSBhcnJheVttaW5dO1xuICAgIGFycmF5W21pbl0gPSB0ZW1wO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIE5vZGUodmFsKSB7XG4gIHRoaXMuX2RhdGEgPSB2YWw7XG59O1xuXG5Ob2RlLnByb3RvdHlwZSA9IHtcbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH0sXG5cbiAgc2V0IGRhdGEodmFsKSB7XG4gICAgdGhpcy5fZGF0YSA9IHZhbDtcbiAgfSxcblxuICBnZXQgbGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVmdDtcbiAgfSxcblxuICBzZXQgbGVmdChub2RlKSB7XG4gICAgaWYgKG5vZGUgJiYgbm9kZS5jb25zdHJ1Y3RvciA9PT0gTnVtYmVyKSB0aGlzLl9sZWZ0ID0gbmV3IE5vZGUobm9kZSk7XG4gICAgZWxzZSB0aGlzLl9sZWZ0ID0gbm9kZTtcbiAgfSxcblxuICBnZXQgcmlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JpZ2h0O1xuICB9LFxuXG4gIHNldCByaWdodChub2RlKSB7XG4gICAgaWYgKG5vZGUgJiYgbm9kZS5jb25zdHJ1Y3RvciA9PT0gTnVtYmVyKSB0aGlzLl9yaWdodCA9IG5ldyBOb2RlKG5vZGUpO1xuICAgIGVsc2UgdGhpcy5fcmlnaHQgPSBub2RlO1xuICB9LFxuXG4gIGluc2VydDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICghdGhpcy5kYXRhKSB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIGVsc2UgaWYgKGRhdGEgPiB0aGlzLmRhdGEpIHtcbiAgICAgIGlmICh0aGlzLnJpZ2h0KSB0aGlzLnJpZ2h0Lmluc2VydChkYXRhKTtcbiAgICAgIGVsc2UgdGhpcy5yaWdodCA9IGRhdGE7XG4gICAgfSBlbHNlIGlmIChkYXRhIDwgdGhpcy5kYXRhKSB7XG4gICAgICBpZiAodGhpcy5sZWZ0KSB0aGlzLmxlZnQuaW5zZXJ0KGRhdGEpO1xuICAgICAgZWxzZSB0aGlzLmxlZnQgPSBkYXRhO1xuICAgIH1cbiAgfSxcblxuICBzZWFyY2g6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSkgcmV0dXJuIG51bGw7XG4gICAgaWYgKGRhdGEgPT09IHRoaXMuZGF0YSkgcmV0dXJuIHRoaXM7XG4gICAgaWYgKGRhdGEgPiB0aGlzLmRhdGEgJiYgdGhpcy5yaWdodCkgcmV0dXJuIHRoaXMucmlnaHQuc2VhcmNoKGRhdGEpO1xuICAgIGlmIChkYXRhIDwgdGhpcy5kYXRhICYmIHRoaXMubGVmdCkgcmV0dXJuIHRoaXMubGVmdC5zZWFyY2goZGF0YSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIEJpbmFyeVNlYXJjaFRyZWUoZGF0YSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkgZGF0YS5mb3JFYWNoKG4gPT4gdGhpcy5pbnNlcnQobikpO1xuICBlbHNlIHRoaXMuX3Jvb3QgPSBuZXcgTm9kZShkYXRhKTtcbn07XG5cbkJpbmFyeVNlYXJjaFRyZWUucHJvdG90eXBlID0ge1xuICBnZXQgcm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdDtcbiAgfSxcblxuICBzZXQgcm9vdChub2RlKSB7XG4gICAgdGhpcy5fcm9vdCA9IG5vZGU7XG4gIH0sXG5cbiAgaW5zZXJ0OiBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKCF0aGlzLnJvb3QpIHRoaXMucm9vdCA9IG5ldyBOb2RlKGRhdGEpO1xuICAgIGVsc2UgdGhpcy5yb290Lmluc2VydChkYXRhKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBoYXM6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMucm9vdCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0aGlzLnJvb3Quc2VhcmNoKGRhdGEpICE9PSBudWxsO1xuICB9LFxuXG4gIHNlYXJjaDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICghdGhpcy5yb290KSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5yb290LnNlYXJjaChkYXRhKTtcbiAgfSxcblxuICBmaW5kTWluOiBmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybjtcbiAgICBjb25zdCBnZXRNaW4gPSAobm9kZSkgPT4ge1xuICAgICAgaWYgKG5vZGUubGVmdCkgcmV0dXJuIGdldE1pbihub2RlLmxlZnQpO1xuICAgICAgcmV0dXJuIG5vZGUuZGF0YTtcbiAgICB9O1xuXG4gICAgcmV0dXJuICFub2RlID8gZ2V0TWluKHRoaXMucm9vdCkgOiBnZXRNaW4obm9kZSk7XG4gIH0sXG5cbiAgZmluZE1heDogZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICghdGhpcy5yb290KSByZXR1cm47XG4gICAgY29uc3QgZ2V0TWF4ID0gKG5vZGUpID0+IHtcbiAgICAgIGlmIChub2RlLnJpZ2h0KSByZXR1cm4gZ2V0TWF4KG5vZGUucmlnaHQpO1xuICAgICAgcmV0dXJuIG5vZGUuZGF0YTtcbiAgICB9O1xuXG4gICAgcmV0dXJuICFub2RlID8gZ2V0TWF4KHRoaXMucm9vdCkgOiBnZXRNYXgobm9kZSk7XG4gIH0sXG5cbiAgZGVsZXRlOiBmdW5jdGlvbih2YWwpIHtcbiAgICBjb25zdCBkZWxldGVOb2RlID0gKHJvb3QsIHZhbCkgPT4ge1xuICAgICAgLy8gSWYgTm8gTm9kZSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICBpZiAoIXJvb3QpIHJldHVybjtcbiAgICAgIC8vIElmIHZhbCBpcyBsZXNzIHRoYW4gY3VycmVudCBub2RlIGRhdGEuIENvbnRpbnVlIG9uIHRvIGxlZnQgY2hpbGQuXG4gICAgICBpZiAodmFsIDwgcm9vdC5kYXRhKSByZXR1cm4gZGVsZXRlTm9kZShyb290LmxlZnQsIHZhbCwgcm9vdCk7XG4gICAgICAvLyBJZiB2YWwgaXMgZ3JlYXRlciB0aGFuIGN1cnJlbnQgbm9kZSBkYXRhLiBDb250aW51ZSBvbiB0byByaWdodCBjaGlsZC5cbiAgICAgIGlmICh2YWwgPiByb290LmRhdGEpIHJldHVybiBkZWxldGVOb2RlKHJvb3QucmlnaHQsIHZhbCwgcm9vdCk7XG4gICAgICAvLyBDYXNlIDE6IE5vIGNoaWxkcmVuLCBkZWFsbG9jYXRlIGNoaWxkIGZyb20gcGFyZW50XG4gICAgICBpZiAocm9vdC5sZWZ0ICYmIHJvb3QucmlnaHQpIHtcbiAgICAgICAgLy8gQ2FzZSAzOiBpZiAyIGNoaWxkcmVuXG4gICAgICAgIC8vIEZpbmQgbWluaW11bSB2YWx1ZSBvZiB0aGUgcmlnaHQgbm9kZVxuICAgICAgICBsZXQgdGVtcCA9IHJvb3QucmlnaHQ7XG5cbiAgICAgICAgd2hpbGUgKHRlbXAubGVmdCkgdGVtcCA9IHRlbXAubGVmdDtcbiAgICAgICAgLy8gd3JpdGUgbm9kZSBkYXRhIHRvIHRoZSBtaW5pbXVtIHZhbHVlc1xuICAgICAgICByb290LmRhdGEgPSB0ZW1wLmRhdGE7XG4gICAgICAgIC8vIE1vdmUgb24gdG8gdGhlIHJpZ2h0IGFuZCBjb250aW51ZSBvblxuICAgICAgICByb290LnJpZ2h0ID0gZGVsZXRlTm9kZShyb290LnJpZ2h0LCB0ZW1wLmRhdGEpO1xuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByb290LmxlZnQgfHwgcm9vdC5yaWdodDtcbiAgICB9O1xuXG4gICAgZGVsZXRlTm9kZSh0aGlzLnJvb3QsIHZhbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgbGV2ZWxPcmRlcjogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgdmFscyA9IFtdO1xuXG4gICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgY29uc3QgcXVldWUgPSBbXTtcblxuICAgICAgcXVldWUucHVzaCh0aGlzLnJvb3QpO1xuICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGN1cnIgPSBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgICAgIHZhbHMucHVzaChjdXJyLmRhdGEpO1xuICAgICAgICBpZiAoY3Vyci5sZWZ0KSBxdWV1ZS5wdXNoKGN1cnIubGVmdCk7XG4gICAgICAgIGlmIChjdXJyLnJpZ2h0KSBxdWV1ZS5wdXNoKGN1cnIucmlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFscztcbiAgfSxcblxuICBwcmVPcmRlcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IHZhbHMgPSBbXTtcblxuICAgIGNvbnN0IHRyYXZlcnNlID0gKG5vZGUpID0+IHtcbiAgICAgIHZhbHMucHVzaChub2RlLmRhdGEpO1xuICAgICAgaWYgKG5vZGUubGVmdCkgdHJhdmVyc2Uobm9kZS5sZWZ0KTtcbiAgICAgIGlmIChub2RlLnJpZ2h0KSB0cmF2ZXJzZShub2RlLnJpZ2h0KTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucm9vdCkgdHJhdmVyc2UodGhpcy5yb290KTtcbiAgICByZXR1cm4gdmFscztcbiAgfSxcblxuICBpbk9yZGVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgdmFscyA9IFtdO1xuXG4gICAgY29uc3QgdHJhdmVyc2UgPSAobm9kZSkgPT4ge1xuICAgICAgaWYgKG5vZGUubGVmdCkgdHJhdmVyc2Uobm9kZS5sZWZ0KTtcbiAgICAgIHZhbHMucHVzaChub2RlLmRhdGEpO1xuICAgICAgaWYgKG5vZGUucmlnaHQpIHRyYXZlcnNlKG5vZGUucmlnaHQpO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5yb290KSB0cmF2ZXJzZSh0aGlzLnJvb3QpO1xuICAgIHJldHVybiB2YWxzO1xuICB9LFxuXG4gIHBvc3RPcmRlcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IHZhbHMgPSBbXTtcblxuICAgIGNvbnN0IHRyYXZlcnNlID0gKG5vZGUpID0+IHtcbiAgICAgIGlmIChub2RlLmxlZnQpIHRyYXZlcnNlKG5vZGUubGVmdCk7XG4gICAgICBpZiAobm9kZS5yaWdodCkgdHJhdmVyc2Uobm9kZS5yaWdodCk7XG4gICAgICB2YWxzLnB1c2gobm9kZS5kYXRhKTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucm9vdCkgdHJhdmVyc2UodGhpcy5yb290KTtcbiAgICByZXR1cm4gdmFscztcbiAgfSxcblxuICBtYXhEZXB0aDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybiAwO1xuICAgIGNvbnN0IG1heERlcHRoID0gKG5vZGUpID0+IHtcbiAgICAgIGlmICghbm9kZSkgcmV0dXJuIDA7XG4gICAgICByZXR1cm4gTWF0aC5tYXgobWF4RGVwdGgobm9kZS5sZWZ0KSwgbWF4RGVwdGgobm9kZS5yaWdodCkpICsgMTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG1heERlcHRoKHRoaXMucm9vdCk7XG4gIH0sXG5cbiAgaXNWYWxpZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaXNCU1QgPSAobm9kZSwgbWluLCBtYXgpID0+IHtcbiAgICAgIC8vIElmIG5vIE5vZGUgdGhlbiB3ZSBoYXZlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgdHJlZS5cbiAgICAgIC8vIFJldHVybiB0cnVlXG4gICAgICBpZiAoIW5vZGUpIHJldHVybiB0cnVlO1xuICAgICAgLy8gVmFsaWRhdGUgaWYgdGhlIGRhdGEgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHRoZSBtaW4gb3IgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIG1heC5cbiAgICAgIC8vIFRoZW4gdGhlIHRyZWUgaXMgbm90IGEgdmFsaWQgc2VhcmNoIHRyZWUuXG4gICAgICBpZiAobm9kZS5kYXRhIDw9IG1pbiB8fCBub2RlLmRhdGEgPj0gbWF4KSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gaXNCU1Qobm9kZS5sZWZ0LCBtaW4sIG5vZGUuZGF0YSkgJiYgaXNCU1Qobm9kZS5yaWdodCwgbm9kZS5kYXRhLCBtYXgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gaXNCU1QodGhpcy5yb290LCAtSW5maW5pdHksIEluZmluaXR5KTtcbiAgfSxcblxuICBwYXRoU3VtOiBmdW5jdGlvbihzdW0pIHtcbiAgICBjb25zdCBoYXNQYXRoU3VtID0gKHJvb3QsIHN1bSkgPT4ge1xuICAgICAgaWYgKCFyb290KSByZXR1cm4gZmFsc2U7XG4gICAgICBzdW0gLT0gcm9vdC5kYXRhO1xuICAgICAgaWYgKCFyb290LmxlZnQgJiYgIXJvb3QucmlnaHQpIHJldHVybiBzdW0gPT09IDA7XG4gICAgICByZXR1cm4gaGFzUGF0aFN1bShyb290LmxlZnQsIHN1bSkgfHwgaGFzUGF0aFN1bShyb290LnJpZ2h0LCBzdW0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gaGFzUGF0aFN1bSh0aGlzLnJvb3QsIHN1bSk7XG4gIH0sXG5cbiAgaXNTeW1tZXRyaWM6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5yb290KSByZXR1cm4gdHJ1ZTtcbiAgICBjb25zdCB2YWxpZGF0ZVN5bW1ldHJ5ID0gKGxlZnQsIHJpZ2h0KSA9PiB7XG4gICAgICBpZiAoIWxlZnQgfHwgIXJpZ2h0KSByZXR1cm4gbGVmdCA9PT0gcmlnaHQ7XG4gICAgICBpZiAobGVmdC5kYXRhICE9PSByaWdodC5kYXRhKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdmFsaWRhdGVTeW1tZXRyeShsZWZ0LmxlZnQsIHJpZ2h0LnJpZ2h0KSAmJiB2YWxpZGF0ZVN5bW1ldHJ5KGxlZnQucmlnaHQsIHJpZ2h0LmxlZnQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gdmFsaWRhdGVTeW1tZXRyeSh0aGlzLnJvb3QubGVmdCwgdGhpcy5yb290LnJpZ2h0KTtcbiAgfSxcblxuICBnZXRTdWNjZXNzb3I6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAvLyBTZWFyY2ggdGhlIG5vZGVcbiAgICBsZXQgY3VyciA9IHRoaXMuc2VhcmNoKGRhdGEpO1xuXG4gICAgaWYgKCFjdXJyKSByZXR1cm4gbnVsbDtcbiAgICAvLyBDYXNlIDE6IE5vZGUgaGFzIHJpZ2h0IHN1YnRyZWVcbiAgICBpZiAoY3Vyci5yaWdodCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5maW5kTWluKGN1cnIucmlnaHQpO1xuICAgIC8vIENhc2UgMjogTm8gcmlnaHQgc3VidHJlZVxuICAgIGxldCBzdWNjZXNzb3IgPSBudWxsO1xuICAgIGxldCBhbmNlc3RvciA9IHRoaXMucm9vdDtcblxuICAgIHdoaWxlIChhbmNlc3RvciAhPT0gY3Vycikge1xuICAgICAgaWYgKGN1cnIuZGF0YSA8IGFuY2VzdG9yLmRhdGEpIHtcbiAgICAgICAgc3VjY2Vzc29yID0gYW5jZXN0b3I7XG4gICAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IubGVmdDtcbiAgICAgIH0gZWxzZSBhbmNlc3RvciA9IGFuY2VzdG9yLnJpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gc3VjY2Vzc29yLmRhdGE7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmluYXJ5U2VhcmNoVHJlZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBRdWV1ZUxpbmtlZExpc3QgfSA9IHJlcXVpcmUoJy4uL3F1ZXVlcycpO1xuXG5mdW5jdGlvbiBHcmFwaCgpIHtcbiAgdGhpcy5udW1PZlZlcnRpY2VzID0gMDtcbiAgdGhpcy5saXN0ID0gbmV3IE1hcCgpO1xufTtcblxuR3JhcGgucHJvdG90eXBlID0ge1xuICBhZGRWZXJ0ZXg6IGZ1bmN0aW9uKHYpIHtcbiAgICArK3RoaXMubnVtT2ZWZXJ0aWNlcztcbiAgICB0aGlzLmxpc3Quc2V0KHYsIFtdKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBhZGRFZGdlOiBmdW5jdGlvbih2LCB3KSB7XG4gICAgaWYgKCF0aGlzLmxpc3QuZ2V0KHYpKSB0aGlzLmFkZFZlcnRleCh2KTtcbiAgICB0aGlzLmxpc3QuZ2V0KHYpLnB1c2godyk7XG4gICAgaWYgKCF0aGlzLmxpc3QuZ2V0KHcpKSB0aGlzLmFkZFZlcnRleCh3KTtcbiAgICB0aGlzLmxpc3QuZ2V0KHcpLnB1c2godik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgdG9PYmplY3Q6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGcgPSB7fTtcblxuICAgIHRoaXMubGlzdC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICBnW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gZztcbiAgfSxcblxuICBiZnM6IGZ1bmN0aW9uKHYpIHtcbiAgICBjb25zdCB2aXNpdGVkID0gQXJyYXkodGhpcy5udW1PZlZlcnRpY2VzKS5maWxsKGZhbHNlKTtcbiAgICBjb25zdCBxID0gbmV3IFF1ZXVlTGlua2VkTGlzdCgpO1xuXG4gICAgdmlzaXRlZFt2XSA9IHRydWU7XG4gICAgcS5lbnF1ZXVlKHYpO1xuXG4gICAgd2hpbGUgKCFxLmlzRW1wdHkoKSkge1xuICAgICAgY29uc3QgZWxlbSA9IHEuZGVxdWV1ZSgpO1xuICAgICAgY29uc3QgZWRnZXMgPSB0aGlzLmxpc3QuZ2V0KGVsZW0pO1xuXG4gICAgICBlZGdlcy5mb3JFYWNoKG4gPT4ge1xuICAgICAgICBpZiAoIXZpc2l0ZWRbbl0pIHtcbiAgICAgICAgICB2aXNpdGVkW25dID0gdHJ1ZTtcbiAgICAgICAgICBxLmVucXVldWUobik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBkZnM6IGZ1bmN0aW9uKHYpIHtcblxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQmluYXJ5U2VhcmNoVHJlZTogcmVxdWlyZSgnLi9iaW5hcnktc2VhcmNoLXRyZWUnKSxcbiAgR3JhcGg6IHJlcXVpcmUoJy4vZ3JhcGgnKSxcbiAgbGlua2VkTGlzdHM6IHJlcXVpcmUoJy4vbGlua2VkLWxpc3RzJyksXG4gIHF1ZXVlczogcmVxdWlyZSgnLi9xdWV1ZXMnKSxcbiAgc3RhY2tzOiByZXF1aXJlKCcuL3N0YWNrcycpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7XG4gIExpbmtlZExpc3QsXG4gIE5vZGVcbn0gPSByZXF1aXJlKCcuL2xpbmtlZC1saXN0Jyk7XG5cbmZ1bmN0aW9uIERvdWJsZU5vZGUoZGF0YSkge1xuICBOb2RlLmNhbGwodGhpcywgZGF0YSk7XG59O1xuXG4vLyBjcmVhdGUgY29uc3RydWN0b3Igd2l0aCBMaW5rZWRMaXN0IGluaGVyaXRhbmNlXG5mdW5jdGlvbiBEb3VibHlMaW5rZWRMaXN0KGRhdGEpIHtcbiAgLy8gTGlua2VkTGlzdC5jYWxsKHRoaXMsIGRhdGEpO1xuICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgdGhpcy5oZWFkID0gbmV3IERvdWJsZU5vZGUoZGF0YVswXSk7XG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxldCBuZXdOb2RlID0gbmV3IERvdWJsZU5vZGUoZGF0YVtpXSk7XG5cbiAgICAgIG5ld05vZGUucHJldiA9IGN1cnI7XG4gICAgICBjdXJyLm5leHQgPSBuZXdOb2RlO1xuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICB9XG4gIH1cbn07XG4vLyBJbmhlcml0IGFsbCBwcm90b3R5cGUgZnJvbSBMaW5rZWRMaXN0XG5Eb3VibHlMaW5rZWRMaXN0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTGlua2VkTGlzdC5wcm90b3R5cGUpO1xuLy8gb3ZlcndyaXRlIHByb3RvdHlwZXNcbi8vIFJlYXNzaWduIGNvbnN0cnVjdG9yIHByb3RvdHlwZVxuRG91Ymx5TGlua2VkTGlzdC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEb3VibHlMaW5rZWRMaXN0O1xuRG91Ymx5TGlua2VkTGlzdC5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24oZGF0YSwgaW5kZXgpIHtcbiAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKGRhdGEpO1xuXG4gIGlmICghdGhpcy5oZWFkKSB7XG4gICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICByZXR1cm4gdGhpcy5oZWFkO1xuICB9XG5cbiAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgY29uc3QgdGVtcCA9IHRoaXMuaGVhZDtcblxuICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgdGhpcy5oZWFkLm5leHQgPSB0ZW1wO1xuICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gIH1cblxuICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcbiAgbGV0IGN1cnJJbmRleCA9IDE7XG5cbiAgd2hpbGUgKGN1cnIubmV4dCkge1xuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGN1cnJJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIGxldCB0ZW1wID0gY3Vyci5uZXh0O1xuXG4gICAgICBjdXJyLm5leHQgPSBuZXdOb2RlO1xuICAgICAgbmV3Tm9kZS5wcmV2ID0gY3VycjtcbiAgICAgIG5ld05vZGUubmV4dCA9IHRlbXA7XG4gICAgICB0ZW1wLnByZXYgPSBuZXdOb2RlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgKytjdXJySW5kZXg7XG4gIH1cbiAgY3Vyci5uZXh0ID0gbmV3Tm9kZTtcbiAgbmV3Tm9kZS5wcmV2ID0gY3VycjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5Eb3VibHlMaW5rZWRMaXN0LnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuO1xuICBjb25zdCBmaXJzdCA9IHRoaXMuaGVhZDtcblxuICB0aGlzLmhlYWQgPSBmaXJzdC5uZXh0O1xuICB0aGlzLmhlYWQucHJldiA9IG51bGw7XG4gIHJldHVybiBmaXJzdC5kYXRhO1xufTtcblxuRG91Ymx5TGlua2VkTGlzdC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgaWYgKCF0aGlzLmhlYWQpIHJldHVybiBudWxsO1xuXG4gIGlmIChpbmRleCA9PT0gMCkge1xuICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG4gIGxldCBjdXJySW5kZXggPSAwO1xuICBsZXQgcHJldiA9IG51bGw7XG5cbiAgd2hpbGUgKGN1cnIubmV4dCkge1xuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGN1cnJJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIGNvbnN0IG5leHQgPSBjdXJyLm5leHQ7XG5cbiAgICAgIHByZXYubmV4dCA9IG5leHQ7XG4gICAgICBuZXh0LnByZXYgPSBwcmV2O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHByZXYgPSBjdXJyO1xuICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgKytjdXJySW5kZXg7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5Eb3VibHlMaW5rZWRMaXN0LnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5oZWFkKSByZXR1cm4gbnVsbDtcbiAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG4gIGxldCBwcmV2ID0gbnVsbDtcblxuICB3aGlsZSAoY3Vycikge1xuICAgIGxldCBuZXh0ID0gY3Vyci5uZXh0O1xuXG4gICAgY3Vyci5uZXh0ID0gcHJldjtcbiAgICBpZiAocHJldikgcHJldi5wcmV2ID0gY3VycjtcbiAgICBwcmV2ID0gY3VycjtcbiAgICBjdXJyID0gbmV4dDtcbiAgfVxuICB0aGlzLmhlYWQgPSBwcmV2O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV2ZXJzZSBMaW5rIGxpc3QgcmVjdXJzaXZlbHlcbiAqIEBwYXJhbSAge1t0eXBlXX0gbm9kZSBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5Eb3VibHlMaW5rZWRMaXN0LnByb3RvdHlwZS5yZXZlcnNlUmVjdXJzaW9uID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJldmVyc2UgPSAobm9kZSkgPT4ge1xuICAgIGlmICghbm9kZSB8fCAhbm9kZS5uZXh0KSByZXR1cm47XG4gICAgcmV2ZXJzZShub2RlLm5leHQpO1xuICAgIGNvbnN0IHRlbXAgPSBub2RlLm5leHQ7XG5cbiAgICB0ZW1wLm5leHQgPSBub2RlO1xuICAgIG5vZGUucHJldiA9IHRlbXA7XG4gICAgbm9kZS5uZXh0ID0gbnVsbDtcbiAgfTtcblxuICByZXZlcnNlKHRoaXMuaGVhZCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEb3VibHlMaW5rZWRMaXN0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7IExpbmtlZExpc3QgfSA9IHJlcXVpcmUoJy4vbGlua2VkLWxpc3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIERvdWJseUxpbmtlZExpc3Q6IHJlcXVpcmUoJy4vZG91Ymx5LWxpbmtlZC1saXN0JyksXG4gIExpbmtlZExpc3Q6IExpbmtlZExpc3Rcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIE5vZGUgZm9yIGxpbmsgbGlzdFxuICogQHBhcmFtICAgICAgIHtbdHlwZV19IGRhdGEgW2Rlc2NyaXB0aW9uXVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE5vZGUoZGF0YSkge1xuICB0aGlzLmRhdGEgPSBkYXRhO1xufVxuLyoqXG4gKiBDcmVhdGUgTGluayBsaXN0XG4gKiBAcGFyYW0gICAgICAge1t0eXBlXX0gZGF0YSBbZGVzY3JpcHRpb25dXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTGlua2VkTGlzdChkYXRhKSB7XG4gIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICB0aGlzLmhlYWQgPSBuZXcgTm9kZShkYXRhWzBdKTtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgY3Vyci5uZXh0ID0gbmV3IE5vZGUoZGF0YVtpXSk7XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgIH1cbiAgfVxufTtcbi8qKlxuICogUHJpbnQgTGluayBsaXN0IGluIHJlY3Vyc2l2ZSBmYXNoaW9uXG4gKiBAcGFyYW0gIHtbdHlwZV19IG5vZGUgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuTGlua2VkTGlzdC5wcmludFJlY3Vyc2lvbiA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgaWYgKCFub2RlKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIExpbmtlZExpc3QucHJpbnRSZWN1cnNpb24obm9kZS5uZXh0KTtcbn07XG5cbkxpbmtlZExpc3QucHJvdG90eXBlID0ge1xuICAvKipcbiAgICogUHJpbnQgYWxsIHZhbHVlcyBpbiBhIGxpbmtsaXN0XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgcHJpbnQ6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuXG4gICAgd2hpbGUgKGN1cnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGN1cnIuZGF0YSk7XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ29udmVydCBsaW5rIGxpc3QgdG8gYXJyYXlcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICB0b0FycmF5OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuXG4gICAgd2hpbGUgKGN1cnIpIHtcbiAgICAgIGFycmF5LnB1c2goY3Vyci5kYXRhKTtcbiAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfSxcblxuICAvKipcbiAgICogSW5zZXJ0IHZhbHVlIGluIGxpbmtsaXN0IGF0IGluZGV4IG9yIGVuZFxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGRhdGEgIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBpbmRleCBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgaW5zZXJ0OiBmdW5jdGlvbihkYXRhLCBpbmRleCkge1xuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShkYXRhKTtcblxuICAgIGlmICghdGhpcy5oZWFkKSB7XG4gICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICBjb25zdCB0ZW1wID0gdGhpcy5oZWFkO1xuXG4gICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgICAgdGhpcy5oZWFkLm5leHQgPSB0ZW1wO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IGN1cnJJbmRleCA9IDE7XG5cbiAgICB3aGlsZSAoY3Vyci5uZXh0KSB7XG4gICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBjdXJySW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgIGxldCB0ZW1wID0gY3Vyci5uZXh0O1xuXG4gICAgICAgIGN1cnIubmV4dCA9IG5ld05vZGU7XG4gICAgICAgIG5ld05vZGUubmV4dCA9IHRlbXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICAgICsrY3VyckluZGV4O1xuICAgIH1cbiAgICBjdXJyLm5leHQgPSBuZXdOb2RlO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZmlyc3Qgbm9kZSBpbiBsaW5rIGxpc3RcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBzaGlmdDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmhlYWQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5oZWFkO1xuXG4gICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgcmV0dXJuIGZpcnN0LmRhdGE7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBsYXN0IG5vZGUgaW4gbGluayBsaXRcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBwb3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5oZWFkKSByZXR1cm4gbnVsbDtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcbiAgICBsZXQgcHJldiA9IG51bGw7XG5cbiAgICB3aGlsZSAoY3Vyci5uZXh0KSB7XG4gICAgICBwcmV2ID0gY3VycjtcbiAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgfVxuICAgIHByZXYubmV4dCA9IG51bGw7XG4gICAgcmV0dXJuIGN1cnIuZGF0YTtcbiAgfSxcblxuICAvKipcbiAgICogRGVsZXRlIG5vZGUgaW4gbGluayBsaXN0IGF0IGluZGV4XG4gICAqIEBwYXJhbSAge1t0eXBlXX0gaW5kZXggW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGRlbGV0ZTogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IGN1cnJJbmRleCA9IDA7XG4gICAgbGV0IHByZXYgPSBudWxsO1xuXG4gICAgd2hpbGUgKGN1cnIubmV4dCkge1xuICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgY3VyckluZGV4ID09PSBpbmRleCkge1xuICAgICAgICBwcmV2Lm5leHQgPSBjdXJyLm5leHQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcHJldiA9IGN1cnI7XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgICAgKytjdXJySW5kZXg7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvKipcbiAgICogUmV2ZXJzZSBMaW5rTGlzdFxuICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHJldmVyc2U6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5oZWFkKSByZXR1cm4gbnVsbDtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcbiAgICBsZXQgcHJldiA9IG51bGw7XG5cbiAgICB3aGlsZSAoY3Vycikge1xuICAgICAgbGV0IG5leHQgPSBjdXJyLm5leHQ7XG5cbiAgICAgIGN1cnIubmV4dCA9IHByZXY7XG4gICAgICBwcmV2ID0gY3VycjtcbiAgICAgIGN1cnIgPSBuZXh0O1xuICAgIH1cbiAgICB0aGlzLmhlYWQgPSBwcmV2O1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXZlcnNlIExpbmsgbGlzdCByZWN1cnNpdmVseVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IG5vZGUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgcmV2ZXJzZVJlY3Vyc2lvbjogZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICghbm9kZS5uZXh0KSB7XG4gICAgICB0aGlzLmhlYWQgPSBub2RlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJldmVyc2VSZWN1cnNpb24obm9kZS5uZXh0KTtcbiAgICBsZXQgdGVtcCA9IG5vZGUubmV4dDtcblxuICAgIHRlbXAubmV4dCA9IG5vZGU7XG4gICAgbm9kZS5uZXh0ID0gbnVsbDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIExpbmtlZExpc3Q6IExpbmtlZExpc3QsXG4gIE5vZGU6IE5vZGVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFF1ZXVlQXJyYXkoKSB7XG4gIHRoaXMuX3F1ZXVlID0gQXJyYXkoMTApLmZpbGwobnVsbCk7XG4gIHRoaXMuX2Zyb250ID0gLTE7XG4gIHRoaXMuX3JlYXIgPSAtMTtcbn1cblxuUXVldWVBcnJheS5wcm90b3R5cGUgPSB7XG4gIGVucXVldWU6IGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoKHRoaXMuX3JlYXIgKyAxKSAlIHRoaXMuX3F1ZXVlLmxlbmd0aCA9PT0gdGhpcy5fZnJvbnQpIHJldHVybjtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHRoaXMuX3JlYXIgPSB0aGlzLl9mcm9udCA9IDA7XG4gICAgZWxzZSB0aGlzLl9yZWFyID0gKHRoaXMuX3JlYXIgKyAxKSAlIHRoaXMuX3F1ZXVlLmxlbmd0aDtcbiAgICB0aGlzLl9xdWV1ZVt0aGlzLl9yZWFyXSA9IHg7XG4gIH0sXG5cbiAgZGVxdWV1ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm47XG4gICAgbGV0IHZhbDtcblxuICAgIGlmICh0aGlzLl9mcm9udCA9PT0gdGhpcy5fcmVhcikge1xuICAgICAgdmFsID0gdGhpcy5fcXVldWVbdGhpcy5fZnJvbnRdO1xuICAgICAgdGhpcy5fZnJvbnQgPSB0aGlzLl9yZWFyID0gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbCA9IHRoaXMuX3F1ZXVlW3RoaXMuX2Zyb250XTtcbiAgICAgICsrdGhpcy5fZnJvbnQ7XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH0sXG5cbiAgZnJvbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9xdWV1ZVt0aGlzLl9mcm9udF07XG4gIH0sXG5cbiAgaXNFbXB0eTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb250ID09PSAtIDEgJiYgdGhpcy5fcmVhciA9PT0gLTE7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVldWVBcnJheTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFF1ZXVlQXJyYXk6IHJlcXVpcmUoJy4vYXJyYXknKSxcbiAgUXVldWVMaW5rZWRMaXN0OiByZXF1aXJlKCcuL2xpbmtlZC1saXN0Jylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIE5vZGUodmFsKSB7XG4gIHRoaXMuZGF0YSA9IHZhbDtcbn1cblxuZnVuY3Rpb24gUXVldWVMaW5rTGlzdCgpIHt9XG5cblF1ZXVlTGlua0xpc3QucHJvdG90eXBlID0ge1xuICBlbnF1ZXVlOiBmdW5jdGlvbih2YWwpIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHRoaXMuX3JlYXIgPSB0aGlzLl9mcm9udCA9IG5ldyBOb2RlKHZhbCk7XG4gICAgZWxzZSB0aGlzLl9yZWFyID0gdGhpcy5fcmVhci5uZXh0ID0gbmV3IE5vZGUodmFsKTtcbiAgfSxcblxuICBkZXF1ZXVlOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5fZnJvbnQ7XG5cbiAgICBpZiAobm9kZSA9PT0gdGhpcy5fcmVhcikgdGhpcy5fcmVhciA9IHRoaXMuX2Zyb250ID0gdW5kZWZpbmVkO1xuICAgIGVsc2UgaWYgKG5vZGUubmV4dCkgdGhpcy5fZnJvbnQgPSBub2RlLm5leHQ7XG4gICAgcmV0dXJuIG5vZGUuZGF0YTtcbiAgfSxcblxuICBmcm9udDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb250LmRhdGE7XG4gIH0sXG5cbiAgaXNFbXB0eTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb250ID09PSB1bmRlZmluZWQgJiYgdGhpcy5fcmVhciA9PT0gdW5kZWZpbmVkO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlTGlua0xpc3Q7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFN0YWNrQXJyYXkoKSB7XG4gIHRoaXMuX3N0YWNrID0gW107XG4gIHRoaXMuX3RvcCA9IC0xO1xufVxuXG5TdGFja0FycmF5LnByb3RvdHlwZSA9IHtcbiAgcHVzaDogZnVuY3Rpb24oZGF0YSkge1xuICAgICsrdGhpcy5fdG9wO1xuICAgIGlmICh0aGlzLl9zdGFjay5sZW5ndGggPj0gdGhpcy5fdG9wICsgMSkgdGhpcy5fc3RhY2tbdGhpcy5fdG9wXSA9IGRhdGE7XG4gICAgZWxzZSB0aGlzLl9zdGFjay5wdXNoKGRhdGEpO1xuICAgIHJldHVybiB0aGlzLl9zdGFjaztcbiAgfSxcblxuICBwb3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuO1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuX3N0YWNrW3RoaXMuX3RvcF07XG5cbiAgICB0aGlzLl9zdGFja1t0aGlzLl90b3BdID0gdW5kZWZpbmVkO1xuICAgIC0tdGhpcy5fdG9wO1xuICAgIHJldHVybiB0b3A7XG4gIH0sXG5cbiAgdG9wOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhY2tbdGhpcy5fdG9wXTtcbiAgfSxcblxuICBpc0VtcHR5OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9wID09PSAtMTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFja0FycmF5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgU3RhY2tBcnJheTogcmVxdWlyZSgnLi9hcnJheScpLFxuICBTdGFja0xpbmtlZExpc3Q6IHJlcXVpcmUoJy4vbGlua2VkLWxpc3QnKVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogTm9kZSBmb3IgbGluayBsaXN0XG4gKiBAcGFyYW0gICAgICAge1t0eXBlXX0gZGF0YSBbZGVzY3JpcHRpb25dXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTm9kZShkYXRhKSB7XG4gIHRoaXMuZGF0YSA9IGRhdGE7XG59XG4vKipcbiAqIENyZWF0ZSBMaW5rIGxpc3RcbiAqIEBwYXJhbSAgICAgICB7W3R5cGVdfSBkYXRhIFtkZXNjcmlwdGlvbl1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTdGFja0xpbmtlZExpc3QoKSB7fVxuLyoqXG4gKiBQcmludCBMaW5rIGxpc3QgaW4gcmVjdXJzaXZlIGZhc2hpb25cbiAqIEBwYXJhbSAge1t0eXBlXX0gbm9kZSBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5TdGFja0xpbmtlZExpc3QucHJpbnRSZWN1cnNpb24gPSBmdW5jdGlvbihub2RlKSB7XG4gIGlmICghbm9kZSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBTdGFja0xpbmtlZExpc3QucHJpbnRSZWN1cnNpb24obm9kZS5uZXh0KTtcbn07XG5cblN0YWNrTGlua2VkTGlzdC5wcm90b3R5cGUgPSB7XG4gIC8qKlxuICAgKiBQcmludCBhbGwgdmFsdWVzIGluIGEgbGlua2xpc3RcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBwcmludDogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG5cbiAgICB3aGlsZSAoY3Vycikge1xuICAgICAgY29uc29sZS5sb2coY3Vyci5kYXRhKTtcbiAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGxpbmsgbGlzdCB0byBhcnJheVxuICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHRvQXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG5cbiAgICB3aGlsZSAoY3Vycikge1xuICAgICAgYXJyYXkucHVzaChjdXJyLmRhdGEpO1xuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9LFxuXG4gIC8qKlxuICAgKiBJbnNlcnQgdmFsdWUgaW4gbGlua2xpc3QgYXQgaW5kZXggb3IgZW5kXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gZGF0YSAgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGluZGV4IFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBwdXNoOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKGRhdGEpO1xuXG4gICAgbmV3Tm9kZS5uZXh0ID0gdGhpcy5oZWFkO1xuICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBmaXJzdCBub2RlIGluIGxpbmsgbGlzdFxuICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHBvcDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmhlYWQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5oZWFkO1xuXG4gICAgdGhpcy5oZWFkID0gZmlyc3QubmV4dDtcbiAgICByZXR1cm4gZmlyc3QuZGF0YTtcbiAgfSxcblxuICB0b3A6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmhlYWQuZGF0YTtcbiAgfSxcblxuICBpc0VtcHR5OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gIXRoaXMuaGVhZDtcbiAgfSxcblxuICAvKipcbiAgICogTGlua0xpc3QgcmV2ZXJzYWwgdXNpbmcgc3RhY2tzIGlzIGFuIE8oTiArIE0pIHRpbWUgYW5kIHNwYWNlIGNvbXBsZXhpdHlcbiAgICogQHBhcmFtICB7W3R5cGVdfSBsaW5rTGlzdCBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgcmV2ZXJzZTogZnVuY3Rpb24oKSB7XG4gICAgLy8gQ3JlYXRlIGEgc3RhY2sgdG8gc3RvcmUgdGhlIGxpbmtsaXN0IHZhbHVlc1xuICAgIGNvbnN0IHN0YWNrID0gbmV3IFN0YWNrTGlua2VkTGlzdCgpO1xuXG4gICAgLy8gcHVzaCBhbGwgbGluayBsaXN0IHZhbHVlcyBpbiBzdGFjayBieSBzaGlmdGluZyB0aGUgZmlyc3QgdmFsdWUuXG4gICAgd2hpbGUgKHRoaXMuaGVhZCkgc3RhY2sucHVzaCh0aGlzLnNoaWZ0KCkpO1xuICAgIC8vIHJlLWluc2VydCBhbGwgb2YgdGhlIGxpbmsgbGlzdCB2YWx1ZXMgYnkgcG9wcGluZyB0aGUgc3RhY2tcbiAgICB3aGlsZSAoIXN0YWNrLmlzRW1wdHkoKSkgdGhpcy5pbnNlcnQoc3RhY2sucG9wKCkpO1xuICAgIC8vIHJldHVybiB0aGUgbmV3IHN0YWNrXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2tMaW5rZWRMaXN0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZGF0YVN0cnVjdHVyZXMgZnJvbSAnLi9kYXRhLXN0cnVjdHVyZXMnO1xuaW1wb3J0IGFsZ29yaXRobXMgZnJvbSAnLi9hbGdvcml0aG1zJztcblxuZXhwb3J0IHtcbiAgZGF0YVN0cnVjdHVyZXMsXG4gIGFsZ29yaXRobXNcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9