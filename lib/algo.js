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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGdvL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9hbGdvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FsZ28vLi9zcmMvYWxnb3JpdGhtcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2FsZ29yaXRobXMvc2VhcmNoL2JpbmFyeS1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9hbGdvcml0aG1zL3NlYXJjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2FsZ29yaXRobXMvc29ydGluZy9idWJibGUuanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9hbGdvcml0aG1zL3NvcnRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9hbGdvcml0aG1zL3NvcnRpbmcvaW5zZXJ0aW9uLmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvYWxnb3JpdGhtcy9zb3J0aW5nL21lcmdlLmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvYWxnb3JpdGhtcy9zb3J0aW5nL3F1aWNrLmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvYWxnb3JpdGhtcy9zb3J0aW5nL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9iaW5hcnktc2VhcmNoLXRyZWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvZ3JhcGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvbGlua2VkLWxpc3RzL2RvdWJseS1saW5rZWQtbGlzdC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9saW5rZWQtbGlzdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvbGlua2VkLWxpc3RzL2xpbmtlZC1saXN0LmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL3F1ZXVlcy9hcnJheS5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9xdWV1ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvcXVldWVzL2xpbmtlZC1saXN0LmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL3N0YWNrcy9hcnJheS5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9zdGFja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvc3RhY2tzL2xpbmtlZC1saXN0LmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNvcnRpbmciLCJyZXF1aXJlIiwic2VhcmNoIiwiYmluYXJ5U2VhcmNoIiwiYXJyYXkiLCJ2YWwiLCJtaWQiLCJNYXRoIiwiZmxvb3IiLCJsZW5ndGgiLCJzcGxpY2UiLCJ0Iiwic3dhcHBlZCIsImkiLCJ0ZW1wIiwic2VsZWN0aW9uU29ydCIsImJ1YmJsZVNvcnQiLCJpbnNlcnRpb25Tb3J0IiwibWVyZ2VTb3J0IiwicXVpY2tTb3J0IiwiaCIsImxlZnQiLCJzbGljZSIsInJpZ2h0Iiwic29ydEFuZE1lcmdlIiwic29ydGVkIiwibCIsInIiLCJwdXNoIiwiY29uY2F0Iiwic3dhcCIsImEiLCJiIiwicGFydGl0aW9uIiwic3RhcnQiLCJlbmQiLCJwaXZvdCIsInJhbmRvbSIsImluZGV4IiwicCIsIm1pbiIsImoiLCJOb2RlIiwiX2RhdGEiLCJwcm90b3R5cGUiLCJkYXRhIiwiX2xlZnQiLCJub2RlIiwiY29uc3RydWN0b3IiLCJOdW1iZXIiLCJfcmlnaHQiLCJpbnNlcnQiLCJCaW5hcnlTZWFyY2hUcmVlIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsIm4iLCJfcm9vdCIsInJvb3QiLCJoYXMiLCJmaW5kTWluIiwiZ2V0TWluIiwiZmluZE1heCIsImdldE1heCIsImRlbGV0ZSIsImRlbGV0ZU5vZGUiLCJsZXZlbE9yZGVyIiwidmFscyIsInF1ZXVlIiwiY3VyciIsInNoaWZ0IiwicHJlT3JkZXIiLCJ0cmF2ZXJzZSIsImluT3JkZXIiLCJwb3N0T3JkZXIiLCJtYXhEZXB0aCIsIm1heCIsImlzVmFsaWQiLCJpc0JTVCIsIkluZmluaXR5IiwicGF0aFN1bSIsInN1bSIsImhhc1BhdGhTdW0iLCJpc1N5bW1ldHJpYyIsInZhbGlkYXRlU3ltbWV0cnkiLCJnZXRTdWNjZXNzb3IiLCJ1bmRlZmluZWQiLCJzdWNjZXNzb3IiLCJhbmNlc3RvciIsIlF1ZXVlTGlua2VkTGlzdCIsIkdyYXBoIiwibnVtT2ZWZXJ0aWNlcyIsImxpc3QiLCJNYXAiLCJhZGRWZXJ0ZXgiLCJ2Iiwic2V0IiwiYWRkRWRnZSIsInciLCJnZXQiLCJ0b09iamVjdCIsImciLCJ2YWx1ZSIsImtleSIsImJmcyIsInZpc2l0ZWQiLCJmaWxsIiwicSIsImVucXVldWUiLCJpc0VtcHR5IiwiZWxlbSIsImRlcXVldWUiLCJlZGdlcyIsImRmcyIsImxpbmtlZExpc3RzIiwicXVldWVzIiwic3RhY2tzIiwiTGlua2VkTGlzdCIsIkRvdWJsZU5vZGUiLCJjYWxsIiwiRG91Ymx5TGlua2VkTGlzdCIsImhlYWQiLCJuZXdOb2RlIiwicHJldiIsIm5leHQiLCJPYmplY3QiLCJjcmVhdGUiLCJjdXJySW5kZXgiLCJmaXJzdCIsInJldmVyc2UiLCJyZXZlcnNlUmVjdXJzaW9uIiwicHJpbnRSZWN1cnNpb24iLCJwcmludCIsImNvbnNvbGUiLCJsb2ciLCJ0b0FycmF5IiwicG9wIiwiUXVldWVBcnJheSIsIl9xdWV1ZSIsIl9mcm9udCIsIl9yZWFyIiwieCIsImZyb250IiwiUXVldWVMaW5rTGlzdCIsIlN0YWNrQXJyYXkiLCJfc3RhY2siLCJfdG9w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RDFCc0csS0FBRyxFQUFFLGVBQVc7QUFDZCxXQUFPLEtBQUsxQixJQUFMLENBQVU1RSxJQUFqQjtBQUNELEdBekR5QjtBQTJEMUJnRSxTQUFPLEVBQUUsbUJBQVc7QUFDbEIsV0FBTyxDQUFDLEtBQUtZLElBQWI7QUFDRCxHQTdEeUI7O0FBK0QxQjs7Ozs7QUFLQVEsU0FBTyxFQUFFLG1CQUFXO0FBQ2xCO0FBQ0EsUUFBTW9CLEtBQUssR0FBRyxJQUFJRCxlQUFKLEVBQWQsQ0FGa0IsQ0FJbEI7O0FBQ0EsV0FBTyxLQUFLM0IsSUFBWjtBQUFrQjRCLFdBQUssQ0FBQ3pILElBQU4sQ0FBVyxLQUFLMEMsS0FBTCxFQUFYO0FBQWxCLEtBTGtCLENBTWxCOzs7QUFDQSxXQUFPLENBQUMrRSxLQUFLLENBQUN4QyxPQUFOLEVBQVI7QUFBeUIsV0FBSzFELE1BQUwsQ0FBWWtHLEtBQUssQ0FBQ2IsR0FBTixFQUFaO0FBQXpCLEtBUGtCLENBUWxCOzs7QUFDQSxXQUFPLElBQVA7QUFDRDtBQTlFeUIsQ0FBNUI7QUFpRkExSSxNQUFNLENBQUNDLE9BQVAsR0FBaUJxSixlQUFqQixDOzs7Ozs7Ozs7Ozs7QUMxR2E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViOztBQUNBIiwiZmlsZSI6ImFsZ28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImFsZ29cIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYWxnb1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhbGdvXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc29ydGluZzogcmVxdWlyZSgnLi9zb3J0aW5nJyksXG4gIHNlYXJjaDogcmVxdWlyZSgnLi9zZWFyY2gnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gYmluYXJ5U2VhcmNoKGFycmF5LCB2YWwpIHtcbiAgLy8gZ2V0IG1pZCBwb2ludCBvZiBhcnJheVxuICBjb25zdCBtaWQgPSBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aCAvIDIpO1xuXG4gIGlmIChhcnJheS5sZW5ndGggPiAxKSB7XG4gICAgaWYgKHZhbCA+IGFycmF5W21pZF0pIHJldHVybiBiaW5hcnlTZWFyY2goYXJyYXkuc3BsaWNlKG1pZCksIHZhbCk7XG4gICAgaWYgKHZhbCA8IGFycmF5W21pZF0pIHJldHVybiBiaW5hcnlTZWFyY2goYXJyYXkuc3BsaWNlKDAsIG1pZCksIHZhbCk7XG4gIH1cbiAgaWYgKHZhbCA9PT0gYXJyYXlbbWlkXSkgcmV0dXJuIGFycmF5W21pZF07XG4gIHJldHVybiBudWxsO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiaW5hcnlTZWFyY2g7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBiaW5hcnlTZWFyY2g6IHJlcXVpcmUoJy4vYmluYXJ5LXNlYXJjaCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBCdWJibGUgU29ydFxuICpcbiAqIFRpbWUgY29tcGxleGl0eVxuICogQmVzdCBDYXNlOiBpcyBPKG4pXG4gKiBBdmVyYWdlIENhc2U6IGlzIE8obl4yKVxuICogV29yc3QgQ2FzZTogaXMgTyhuXjIpXG4gKlxuICogQHBhcmFtICB7W051bWJlcl19IGFycmF5IEFycmF5IG9mIGludGVnZXJzIHRvIHNvcnRcbiAqIEByZXR1cm4ge1tOdW1iZXJdfSBhcnJheSBBcnJheSBvZiBpbnRlZ2VycyB0byBzb3J0ZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnJheSkge1xuICBmb3IgKGxldCB0ID0gYXJyYXkubGVuZ3RoIC0gMTsgdCA+PSAwOyAtLXQpIHtcbiAgICBsZXQgc3dhcHBlZCA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0IC0gMTsgKytpKSB7XG4gICAgICBpZiAoYXJyYXlbaV0gPiBhcnJheVtpICsgMV0pIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IGFycmF5W2ldO1xuXG4gICAgICAgIGFycmF5W2ldID0gYXJyYXlbaSArIDFdO1xuICAgICAgICBhcnJheVtpICsgMV0gPSB0ZW1wO1xuICAgICAgICBzd2FwcGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICghc3dhcHBlZCkgYnJlYWs7IC8vIElmIHN3YXAgbmV2ZXIgaGFwcGVucywgQnJlYWsgdGhlIGxvb3AuXG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZWxlY3Rpb25Tb3J0OiByZXF1aXJlKCcuL3NlbGVjdGlvbicpLFxuICBidWJibGVTb3J0OiByZXF1aXJlKCcuL2J1YmJsZScpLFxuICBpbnNlcnRpb25Tb3J0OiByZXF1aXJlKCcuL2luc2VydGlvbicpLFxuICBtZXJnZVNvcnQ6IHJlcXVpcmUoJy4vbWVyZ2UnKSxcbiAgcXVpY2tTb3J0OiByZXF1aXJlKCcuL3F1aWNrJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEluc2VydGlvbiBTb3J0XG4gKlxuICogVGltZSBjb21wbGV4aXR5XG4gKiBCZXN0IENhc2U6IGlzIE8obilcbiAqIEF2ZXJhZ2UgQ2FzZTogaXMgTyhuXjIpXG4gKiBXb3JzdCBDYXNlOiBpcyBPKG5eMilcbiAqXG4gKiBAcGFyYW0gIHtbTnVtYmVyXX0gYXJyYXkgQXJyYXkgb2YgaW50ZWdlcnMgdG8gc29ydFxuICogQHJldHVybiB7W051bWJlcl19IGFycmF5IEFycmF5IG9mIGludGVnZXJzIHRvIHNvcnRlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyYXkubGVuZ3RoOyArK2kpIHtcbiAgICBsZXQgdmFsID0gYXJyYXlbaV07XG4gICAgbGV0IGggPSBpO1xuXG4gICAgd2hpbGUgKGggPiAwICYmIGFycmF5W2ggLSAxXSA+IHZhbCkge1xuICAgICAgYXJyYXlbaF0gPSBhcnJheVtoIC0gMV07XG4gICAgICAtLWg7XG4gICAgfVxuICAgIGFycmF5W2hdID0gdmFsO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIE1lcmdlIFNvcnRcbiAqXG4gKiBUaW1lIGNvbXBsZXhpdHkgTyhuIGxvZyBuKVxuICogU3BhY2UgY29tcGxleGl0eSBPKG4pXG4gKlxuICogQHBhcmFtICB7W051bWJlcl19IGFycmF5IEFycmF5IG9mIGludGVnZXJzIHRvIHNvcnRcbiAqIEByZXR1cm4ge1tOdW1iZXJdfSBhcnJheSBBcnJheSBvZiBpbnRlZ2VycyB0byBzb3J0ZWRcbiAqL1xuZnVuY3Rpb24gbWVyZ2VTb3J0KGFycmF5KSB7XG4gIGlmIChhcnJheS5sZW5ndGggPD0gMSkgcmV0dXJuIGFycmF5O1xuICBjb25zdCBtaWQgPSBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aCAvIDIpOyAvLyBEZXRlcm1pbmUgbWlkIHBvaW50IG9mIGFycmF5XG4gIGNvbnN0IGxlZnQgPSBhcnJheS5zbGljZSgwLCBtaWQpOyAvLyBzcGxpdCBhcnJheSBpbiB0byAyIGJ5IHRoZSBtaWQgcG9pbnRcbiAgY29uc3QgcmlnaHQgPSBhcnJheS5zbGljZShtaWQpO1xuICAvLyBmdW5jdGlvbiB0byBzb3J0IGFuZCBtZXJnZSAyIGFycmF5c1xuICBjb25zdCBzb3J0QW5kTWVyZ2UgPSAobGVmdCwgcmlnaHQpID0+IHtcbiAgICBsZXQgc29ydGVkID0gW107IC8vIGZpbmFsIHNvcnRlZCBhcnJheVxuICAgIGxldCBsID0gMDsgLy8gY3VycmVudCBzY2FubmVkIGluZGV4ZXMgb2YgbGVmdCBhbmQgcmlnaHQgYXJyYXlzXG4gICAgbGV0IHIgPSAwO1xuXG4gICAgd2hpbGUgKGwgPCBsZWZ0Lmxlbmd0aCAmJiByIDwgcmlnaHQubGVuZ3RoKSB7IC8vIHNjYW4gdmFsdWVzIGluIGFycmF5c1xuICAgICAgaWYgKGxlZnRbbF0gPCByaWdodFtyXSkgeyAvLyBpZiBsZWZ0IGlzIHNtYWxsZXIsIHB1c2ggdG8gYXJyYXkgYW5kIGluY3JlbWVudCBsZWZ0IGluZGV4XG4gICAgICAgIHNvcnRlZC5wdXNoKGxlZnRbbF0pO1xuICAgICAgICArK2w7XG4gICAgICB9IGVsc2UgeyAvLyBwdXNoIHJpZ2h0IHZhbHVlIHRvIGFycmF5IGFuZCBpbmNyZW1lbnQgcmlnaHQgaW5kZXhcbiAgICAgICAgc29ydGVkLnB1c2gocmlnaHRbcl0pO1xuICAgICAgICArK3I7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFwcGVuZCByZW1haW5pbmcgdmFsdWVzXG4gICAgcmV0dXJuIHNvcnRlZC5jb25jYXQobGVmdC5zbGljZShsKSkuY29uY2F0KHJpZ2h0LnNsaWNlKHIpKTtcbiAgfTtcblxuICAvLyByZXR1cm4gbWVyZ2VkIGFycmF5IGluIHJlY3Vyc2lvblxuICByZXR1cm4gc29ydEFuZE1lcmdlKG1lcmdlU29ydChsZWZ0KSwgbWVyZ2VTb3J0KHJpZ2h0KSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlU29ydDtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogUXVpY2sgU29ydFxuICpcbiAqIFRpbWUgY29tcGxleGl0eVxuICogQmVzdCBDYXNlOiBPKG4gbG9nIG4pXG4gKiBXb3JzdCBDYXNlOiBPKG5eMilcbiAqXG4gKiBTcGFjZSBjb21wbGV4aXR5IE8obilcbiAqXG4gKiBAcGFyYW0gIHtbTnVtYmVyXX0gYXJyYXkgQXJyYXkgb2YgaW50ZWdlcnMgdG8gc29ydFxuICogQHJldHVybiB7W051bWJlcl19IGFycmF5IEFycmF5IG9mIGludGVnZXJzIHRvIHNvcnRlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIGNvbnN0IHN3YXAgPSAoYSwgYikgPT4ge1xuICAgIGNvbnN0IHQgPSBhO1xuXG4gICAgYSA9IGI7XG4gICAgYiA9IHQ7XG4gIH07XG5cbiAgY29uc3QgcGFydGl0aW9uID0gKGFycmF5LCBzdGFydCwgZW5kKSA9PiB7XG4gICAgY29uc3QgcGl2b3QgPSBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcbiAgICBsZXQgaW5kZXggPSBzdGFydDtcblxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZCAtIDE7ICsraSkge1xuICAgICAgaWYgKGFycmF5W2ldIDw9IHBpdm90KSB7XG4gICAgICAgIHN3YXAoYXJyYXlbaV0sIGFycmF5W2luZGV4XSk7XG4gICAgICAgIGluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgfVxuICAgIH1cbiAgICBzd2FwKGFycmF5W2luZGV4XSwgYXJyYXlbZW5kXSk7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9O1xuXG4gIGNvbnN0IHF1aWNrU29ydCA9IChhcnJheSwgc3RhcnQsIGVuZCkgPT4ge1xuICAgIGlmIChzdGFydCA8IGVuZCkge1xuICAgICAgY29uc3QgcCA9IHBhcnRpdGlvbihhcnJheSwgc3RhcnQsIGVuZCk7XG5cbiAgICAgIHF1aWNrU29ydChhcnJheSwgc3RhcnQsIHApO1xuICAgICAgcXVpY2tTb3J0KGFycmF5LCBwICsgMSwgZW5kKTtcbiAgICB9XG4gIH07XG5cbiAgcXVpY2tTb3J0KGFycmF5LCAwLCBhcnJheS5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIGFycmF5O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogU2VsZWN0aW9uIFNvcnRcbiAqXG4gKiBUaW1lIGNvbXBsZXhpdHkgaXMgTyhuXjIpXG4gKiBAcGFyYW0gIHtbTnVtYmVyXX0gYXJyYXkgQXJyYXkgb2YgaW50ZWdlcnMgdG8gc29ydFxuICogQHJldHVybiB7W051bWJlcl19IGFycmF5IEFycmF5IG9mIGludGVnZXJzIHRvIHNvcnRlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoIC0gMTsgKytpKSB7XG4gICAgbGV0IG1pbiA9IGk7XG5cbiAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBhcnJheS5sZW5ndGg7ICsraikge1xuICAgICAgaWYgKGFycmF5W21pbl0gPCBhcnJheVtqXSkgbWluID0gajtcbiAgICB9XG4gICAgbGV0IHRlbXAgPSBhcnJheVtpXTtcblxuICAgIGFycmF5W2ldID0gYXJyYXlbbWluXTtcbiAgICBhcnJheVttaW5dID0gdGVtcDtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBOb2RlKHZhbCkge1xuICB0aGlzLl9kYXRhID0gdmFsO1xufTtcblxuTm9kZS5wcm90b3R5cGUgPSB7XG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9LFxuXG4gIHNldCBkYXRhKHZhbCkge1xuICAgIHRoaXMuX2RhdGEgPSB2YWw7XG4gIH0sXG5cbiAgZ2V0IGxlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlZnQ7XG4gIH0sXG5cbiAgc2V0IGxlZnQobm9kZSkge1xuICAgIGlmIChub2RlICYmIG5vZGUuY29uc3RydWN0b3IgPT09IE51bWJlcikgdGhpcy5fbGVmdCA9IG5ldyBOb2RlKG5vZGUpO1xuICAgIGVsc2UgdGhpcy5fbGVmdCA9IG5vZGU7XG4gIH0sXG5cbiAgZ2V0IHJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9yaWdodDtcbiAgfSxcblxuICBzZXQgcmlnaHQobm9kZSkge1xuICAgIGlmIChub2RlICYmIG5vZGUuY29uc3RydWN0b3IgPT09IE51bWJlcikgdGhpcy5fcmlnaHQgPSBuZXcgTm9kZShub2RlKTtcbiAgICBlbHNlIHRoaXMuX3JpZ2h0ID0gbm9kZTtcbiAgfSxcblxuICBpbnNlcnQ6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSkgdGhpcy5kYXRhID0gZGF0YTtcbiAgICBlbHNlIGlmIChkYXRhID4gdGhpcy5kYXRhKSB7XG4gICAgICBpZiAodGhpcy5yaWdodCkgdGhpcy5yaWdodC5pbnNlcnQoZGF0YSk7XG4gICAgICBlbHNlIHRoaXMucmlnaHQgPSBkYXRhO1xuICAgIH0gZWxzZSBpZiAoZGF0YSA8IHRoaXMuZGF0YSkge1xuICAgICAgaWYgKHRoaXMubGVmdCkgdGhpcy5sZWZ0Lmluc2VydChkYXRhKTtcbiAgICAgIGVsc2UgdGhpcy5sZWZ0ID0gZGF0YTtcbiAgICB9XG4gIH0sXG5cbiAgc2VhcmNoOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEpIHJldHVybiBudWxsO1xuICAgIGlmIChkYXRhID09PSB0aGlzLmRhdGEpIHJldHVybiB0aGlzO1xuICAgIGlmIChkYXRhID4gdGhpcy5kYXRhICYmIHRoaXMucmlnaHQpIHJldHVybiB0aGlzLnJpZ2h0LnNlYXJjaChkYXRhKTtcbiAgICBpZiAoZGF0YSA8IHRoaXMuZGF0YSAmJiB0aGlzLmxlZnQpIHJldHVybiB0aGlzLmxlZnQuc2VhcmNoKGRhdGEpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5mdW5jdGlvbiBCaW5hcnlTZWFyY2hUcmVlKGRhdGEpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIGRhdGEuZm9yRWFjaChuID0+IHRoaXMuaW5zZXJ0KG4pKTtcbiAgZWxzZSB0aGlzLl9yb290ID0gbmV3IE5vZGUoZGF0YSk7XG59O1xuXG5CaW5hcnlTZWFyY2hUcmVlLnByb3RvdHlwZSA9IHtcbiAgZ2V0IHJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XG4gIH0sXG5cbiAgc2V0IHJvb3Qobm9kZSkge1xuICAgIHRoaXMuX3Jvb3QgPSBub2RlO1xuICB9LFxuXG4gIGluc2VydDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICghdGhpcy5yb290KSB0aGlzLnJvb3QgPSBuZXcgTm9kZShkYXRhKTtcbiAgICBlbHNlIHRoaXMucm9vdC5pbnNlcnQoZGF0YSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgaGFzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5yb290LnNlYXJjaChkYXRhKSAhPT0gbnVsbDtcbiAgfSxcblxuICBzZWFyY2g6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMucm9vdCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5zZWFyY2goZGF0YSk7XG4gIH0sXG5cbiAgZmluZE1pbjogZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICghdGhpcy5yb290KSByZXR1cm47XG4gICAgY29uc3QgZ2V0TWluID0gKG5vZGUpID0+IHtcbiAgICAgIGlmIChub2RlLmxlZnQpIHJldHVybiBnZXRNaW4obm9kZS5sZWZ0KTtcbiAgICAgIHJldHVybiBub2RlLmRhdGE7XG4gICAgfTtcblxuICAgIHJldHVybiAhbm9kZSA/IGdldE1pbih0aGlzLnJvb3QpIDogZ2V0TWluKG5vZGUpO1xuICB9LFxuXG4gIGZpbmRNYXg6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBpZiAoIXRoaXMucm9vdCkgcmV0dXJuO1xuICAgIGNvbnN0IGdldE1heCA9IChub2RlKSA9PiB7XG4gICAgICBpZiAobm9kZS5yaWdodCkgcmV0dXJuIGdldE1heChub2RlLnJpZ2h0KTtcbiAgICAgIHJldHVybiBub2RlLmRhdGE7XG4gICAgfTtcblxuICAgIHJldHVybiAhbm9kZSA/IGdldE1heCh0aGlzLnJvb3QpIDogZ2V0TWF4KG5vZGUpO1xuICB9LFxuXG4gIGRlbGV0ZTogZnVuY3Rpb24odmFsKSB7XG4gICAgY29uc3QgZGVsZXRlTm9kZSA9IChyb290LCB2YWwpID0+IHtcbiAgICAgIC8vIElmIE5vIE5vZGUgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgaWYgKCFyb290KSByZXR1cm47XG4gICAgICAvLyBJZiB2YWwgaXMgbGVzcyB0aGFuIGN1cnJlbnQgbm9kZSBkYXRhLiBDb250aW51ZSBvbiB0byBsZWZ0IGNoaWxkLlxuICAgICAgaWYgKHZhbCA8IHJvb3QuZGF0YSkgcmV0dXJuIGRlbGV0ZU5vZGUocm9vdC5sZWZ0LCB2YWwsIHJvb3QpO1xuICAgICAgLy8gSWYgdmFsIGlzIGdyZWF0ZXIgdGhhbiBjdXJyZW50IG5vZGUgZGF0YS4gQ29udGludWUgb24gdG8gcmlnaHQgY2hpbGQuXG4gICAgICBpZiAodmFsID4gcm9vdC5kYXRhKSByZXR1cm4gZGVsZXRlTm9kZShyb290LnJpZ2h0LCB2YWwsIHJvb3QpO1xuICAgICAgLy8gQ2FzZSAxOiBObyBjaGlsZHJlbiwgZGVhbGxvY2F0ZSBjaGlsZCBmcm9tIHBhcmVudFxuICAgICAgaWYgKHJvb3QubGVmdCAmJiByb290LnJpZ2h0KSB7XG4gICAgICAgIC8vIENhc2UgMzogaWYgMiBjaGlsZHJlblxuICAgICAgICAvLyBGaW5kIG1pbmltdW0gdmFsdWUgb2YgdGhlIHJpZ2h0IG5vZGVcbiAgICAgICAgbGV0IHRlbXAgPSByb290LnJpZ2h0O1xuXG4gICAgICAgIHdoaWxlICh0ZW1wLmxlZnQpIHRlbXAgPSB0ZW1wLmxlZnQ7XG4gICAgICAgIC8vIHdyaXRlIG5vZGUgZGF0YSB0byB0aGUgbWluaW11bSB2YWx1ZXNcbiAgICAgICAgcm9vdC5kYXRhID0gdGVtcC5kYXRhO1xuICAgICAgICAvLyBNb3ZlIG9uIHRvIHRoZSByaWdodCBhbmQgY29udGludWUgb25cbiAgICAgICAgcm9vdC5yaWdodCA9IGRlbGV0ZU5vZGUocm9vdC5yaWdodCwgdGVtcC5kYXRhKTtcbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICB9XG4gICAgICByZXR1cm4gcm9vdC5sZWZ0IHx8IHJvb3QucmlnaHQ7XG4gICAgfTtcblxuICAgIGRlbGV0ZU5vZGUodGhpcy5yb290LCB2YWwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIGxldmVsT3JkZXI6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHZhbHMgPSBbXTtcblxuICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgIGNvbnN0IHF1ZXVlID0gW107XG5cbiAgICAgIHF1ZXVlLnB1c2godGhpcy5yb290KTtcbiAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBjdXJyID0gcXVldWUuc2hpZnQoKTtcblxuICAgICAgICB2YWxzLnB1c2goY3Vyci5kYXRhKTtcbiAgICAgICAgaWYgKGN1cnIubGVmdCkgcXVldWUucHVzaChjdXJyLmxlZnQpO1xuICAgICAgICBpZiAoY3Vyci5yaWdodCkgcXVldWUucHVzaChjdXJyLnJpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHM7XG4gIH0sXG5cbiAgcHJlT3JkZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCB2YWxzID0gW107XG5cbiAgICBjb25zdCB0cmF2ZXJzZSA9IChub2RlKSA9PiB7XG4gICAgICB2YWxzLnB1c2gobm9kZS5kYXRhKTtcbiAgICAgIGlmIChub2RlLmxlZnQpIHRyYXZlcnNlKG5vZGUubGVmdCk7XG4gICAgICBpZiAobm9kZS5yaWdodCkgdHJhdmVyc2Uobm9kZS5yaWdodCk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnJvb3QpIHRyYXZlcnNlKHRoaXMucm9vdCk7XG4gICAgcmV0dXJuIHZhbHM7XG4gIH0sXG5cbiAgaW5PcmRlcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IHZhbHMgPSBbXTtcblxuICAgIGNvbnN0IHRyYXZlcnNlID0gKG5vZGUpID0+IHtcbiAgICAgIGlmIChub2RlLmxlZnQpIHRyYXZlcnNlKG5vZGUubGVmdCk7XG4gICAgICB2YWxzLnB1c2gobm9kZS5kYXRhKTtcbiAgICAgIGlmIChub2RlLnJpZ2h0KSB0cmF2ZXJzZShub2RlLnJpZ2h0KTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucm9vdCkgdHJhdmVyc2UodGhpcy5yb290KTtcbiAgICByZXR1cm4gdmFscztcbiAgfSxcblxuICBwb3N0T3JkZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCB2YWxzID0gW107XG5cbiAgICBjb25zdCB0cmF2ZXJzZSA9IChub2RlKSA9PiB7XG4gICAgICBpZiAobm9kZS5sZWZ0KSB0cmF2ZXJzZShub2RlLmxlZnQpO1xuICAgICAgaWYgKG5vZGUucmlnaHQpIHRyYXZlcnNlKG5vZGUucmlnaHQpO1xuICAgICAgdmFscy5wdXNoKG5vZGUuZGF0YSk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnJvb3QpIHRyYXZlcnNlKHRoaXMucm9vdCk7XG4gICAgcmV0dXJuIHZhbHM7XG4gIH0sXG5cbiAgbWF4RGVwdGg6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5yb290KSByZXR1cm4gMDtcbiAgICBjb25zdCBtYXhEZXB0aCA9IChub2RlKSA9PiB7XG4gICAgICBpZiAoIW5vZGUpIHJldHVybiAwO1xuICAgICAgcmV0dXJuIE1hdGgubWF4KG1heERlcHRoKG5vZGUubGVmdCksIG1heERlcHRoKG5vZGUucmlnaHQpKSArIDE7XG4gICAgfTtcblxuICAgIHJldHVybiBtYXhEZXB0aCh0aGlzLnJvb3QpO1xuICB9LFxuXG4gIGlzVmFsaWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGlzQlNUID0gKG5vZGUsIG1pbiwgbWF4KSA9PiB7XG4gICAgICAvLyBJZiBubyBOb2RlIHRoZW4gd2UgaGF2ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIHRyZWUuXG4gICAgICAvLyBSZXR1cm4gdHJ1ZVxuICAgICAgaWYgKCFub2RlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIC8vIFZhbGlkYXRlIGlmIHRoZSBkYXRhIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgbWluIG9yIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBtYXguXG4gICAgICAvLyBUaGVuIHRoZSB0cmVlIGlzIG5vdCBhIHZhbGlkIHNlYXJjaCB0cmVlLlxuICAgICAgaWYgKG5vZGUuZGF0YSA8PSBtaW4gfHwgbm9kZS5kYXRhID49IG1heCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGlzQlNUKG5vZGUubGVmdCwgbWluLCBub2RlLmRhdGEpICYmIGlzQlNUKG5vZGUucmlnaHQsIG5vZGUuZGF0YSwgbWF4KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGlzQlNUKHRoaXMucm9vdCwgLUluZmluaXR5LCBJbmZpbml0eSk7XG4gIH0sXG5cbiAgcGF0aFN1bTogZnVuY3Rpb24oc3VtKSB7XG4gICAgY29uc3QgaGFzUGF0aFN1bSA9IChyb290LCBzdW0pID0+IHtcbiAgICAgIGlmICghcm9vdCkgcmV0dXJuIGZhbHNlO1xuICAgICAgc3VtIC09IHJvb3QuZGF0YTtcbiAgICAgIGlmICghcm9vdC5sZWZ0ICYmICFyb290LnJpZ2h0KSByZXR1cm4gc3VtID09PSAwO1xuICAgICAgcmV0dXJuIGhhc1BhdGhTdW0ocm9vdC5sZWZ0LCBzdW0pIHx8IGhhc1BhdGhTdW0ocm9vdC5yaWdodCwgc3VtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGhhc1BhdGhTdW0odGhpcy5yb290LCBzdW0pO1xuICB9LFxuXG4gIGlzU3ltbWV0cmljOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMucm9vdCkgcmV0dXJuIHRydWU7XG4gICAgY29uc3QgdmFsaWRhdGVTeW1tZXRyeSA9IChsZWZ0LCByaWdodCkgPT4ge1xuICAgICAgaWYgKCFsZWZ0IHx8ICFyaWdodCkgcmV0dXJuIGxlZnQgPT09IHJpZ2h0O1xuICAgICAgaWYgKGxlZnQuZGF0YSAhPT0gcmlnaHQuZGF0YSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHZhbGlkYXRlU3ltbWV0cnkobGVmdC5sZWZ0LCByaWdodC5yaWdodCkgJiYgdmFsaWRhdGVTeW1tZXRyeShsZWZ0LnJpZ2h0LCByaWdodC5sZWZ0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHZhbGlkYXRlU3ltbWV0cnkodGhpcy5yb290LmxlZnQsIHRoaXMucm9vdC5yaWdodCk7XG4gIH0sXG5cbiAgZ2V0U3VjY2Vzc29yOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgLy8gU2VhcmNoIHRoZSBub2RlXG4gICAgbGV0IGN1cnIgPSB0aGlzLnNlYXJjaChkYXRhKTtcblxuICAgIGlmICghY3VycikgcmV0dXJuIG51bGw7XG4gICAgLy8gQ2FzZSAxOiBOb2RlIGhhcyByaWdodCBzdWJ0cmVlXG4gICAgaWYgKGN1cnIucmlnaHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXMuZmluZE1pbihjdXJyLnJpZ2h0KTtcbiAgICAvLyBDYXNlIDI6IE5vIHJpZ2h0IHN1YnRyZWVcbiAgICBsZXQgc3VjY2Vzc29yID0gbnVsbDtcbiAgICBsZXQgYW5jZXN0b3IgPSB0aGlzLnJvb3Q7XG5cbiAgICB3aGlsZSAoYW5jZXN0b3IgIT09IGN1cnIpIHtcbiAgICAgIGlmIChjdXJyLmRhdGEgPCBhbmNlc3Rvci5kYXRhKSB7XG4gICAgICAgIHN1Y2Nlc3NvciA9IGFuY2VzdG9yO1xuICAgICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLmxlZnQ7XG4gICAgICB9IGVsc2UgYW5jZXN0b3IgPSBhbmNlc3Rvci5yaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIHN1Y2Nlc3Nvci5kYXRhO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJpbmFyeVNlYXJjaFRyZWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHsgUXVldWVMaW5rZWRMaXN0IH0gPSByZXF1aXJlKCcuLi9xdWV1ZXMnKTtcblxuZnVuY3Rpb24gR3JhcGgoKSB7XG4gIHRoaXMubnVtT2ZWZXJ0aWNlcyA9IDA7XG4gIHRoaXMubGlzdCA9IG5ldyBNYXAoKTtcbn07XG5cbkdyYXBoLnByb3RvdHlwZSA9IHtcbiAgYWRkVmVydGV4OiBmdW5jdGlvbih2KSB7XG4gICAgKyt0aGlzLm51bU9mVmVydGljZXM7XG4gICAgdGhpcy5saXN0LnNldCh2LCBbXSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgYWRkRWRnZTogZnVuY3Rpb24odiwgdykge1xuICAgIGlmICghdGhpcy5saXN0LmdldCh2KSkgdGhpcy5hZGRWZXJ0ZXgodik7XG4gICAgdGhpcy5saXN0LmdldCh2KS5wdXNoKHcpO1xuICAgIGlmICghdGhpcy5saXN0LmdldCh3KSkgdGhpcy5hZGRWZXJ0ZXgodyk7XG4gICAgdGhpcy5saXN0LmdldCh3KS5wdXNoKHYpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIHRvT2JqZWN0OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBnID0ge307XG5cbiAgICB0aGlzLmxpc3QuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgZ1trZXldID0gdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGc7XG4gIH0sXG5cbiAgYmZzOiBmdW5jdGlvbih2KSB7XG4gICAgY29uc3QgdmlzaXRlZCA9IEFycmF5KHRoaXMubnVtT2ZWZXJ0aWNlcykuZmlsbChmYWxzZSk7XG4gICAgY29uc3QgcSA9IG5ldyBRdWV1ZUxpbmtlZExpc3QoKTtcblxuICAgIHZpc2l0ZWRbdl0gPSB0cnVlO1xuICAgIHEuZW5xdWV1ZSh2KTtcblxuICAgIHdoaWxlICghcS5pc0VtcHR5KCkpIHtcbiAgICAgIGNvbnN0IGVsZW0gPSBxLmRlcXVldWUoKTtcbiAgICAgIGNvbnN0IGVkZ2VzID0gdGhpcy5saXN0LmdldChlbGVtKTtcblxuICAgICAgZWRnZXMuZm9yRWFjaChuID0+IHtcbiAgICAgICAgaWYgKCF2aXNpdGVkW25dKSB7XG4gICAgICAgICAgdmlzaXRlZFtuXSA9IHRydWU7XG4gICAgICAgICAgcS5lbnF1ZXVlKG4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgZGZzOiBmdW5jdGlvbih2KSB7XG5cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHcmFwaDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEJpbmFyeVNlYXJjaFRyZWU6IHJlcXVpcmUoJy4vYmluYXJ5LXNlYXJjaC10cmVlJyksXG4gIEdyYXBoOiByZXF1aXJlKCcuL2dyYXBoJyksXG4gIGxpbmtlZExpc3RzOiByZXF1aXJlKCcuL2xpbmtlZC1saXN0cycpLFxuICBxdWV1ZXM6IHJlcXVpcmUoJy4vcXVldWVzJyksXG4gIHN0YWNrczogcmVxdWlyZSgnLi9zdGFja3MnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qge1xuICBMaW5rZWRMaXN0LFxuICBOb2RlXG59ID0gcmVxdWlyZSgnLi9saW5rZWQtbGlzdCcpO1xuXG5mdW5jdGlvbiBEb3VibGVOb2RlKGRhdGEpIHtcbiAgTm9kZS5jYWxsKHRoaXMsIGRhdGEpO1xufTtcblxuLy8gY3JlYXRlIGNvbnN0cnVjdG9yIHdpdGggTGlua2VkTGlzdCBpbmhlcml0YW5jZVxuZnVuY3Rpb24gRG91Ymx5TGlua2VkTGlzdChkYXRhKSB7XG4gIC8vIExpbmtlZExpc3QuY2FsbCh0aGlzLCBkYXRhKTtcbiAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgIHRoaXMuaGVhZCA9IG5ldyBEb3VibGVOb2RlKGRhdGFbMF0pO1xuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBkYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgICBsZXQgbmV3Tm9kZSA9IG5ldyBEb3VibGVOb2RlKGRhdGFbaV0pO1xuXG4gICAgICBuZXdOb2RlLnByZXYgPSBjdXJyO1xuICAgICAgY3Vyci5uZXh0ID0gbmV3Tm9kZTtcbiAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgfVxuICB9XG59O1xuLy8gSW5oZXJpdCBhbGwgcHJvdG90eXBlIGZyb20gTGlua2VkTGlzdFxuRG91Ymx5TGlua2VkTGlzdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExpbmtlZExpc3QucHJvdG90eXBlKTtcbi8vIG92ZXJ3cml0ZSBwcm90b3R5cGVzXG4vLyBSZWFzc2lnbiBjb25zdHJ1Y3RvciBwcm90b3R5cGVcbkRvdWJseUxpbmtlZExpc3QucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRG91Ymx5TGlua2VkTGlzdDtcbkRvdWJseUxpbmtlZExpc3QucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uKGRhdGEsIGluZGV4KSB7XG4gIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShkYXRhKTtcblxuICBpZiAoIXRoaXMuaGVhZCkge1xuICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgcmV0dXJuIHRoaXMuaGVhZDtcbiAgfVxuXG4gIGlmIChpbmRleCA9PT0gMCkge1xuICAgIGNvbnN0IHRlbXAgPSB0aGlzLmhlYWQ7XG5cbiAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgIHRoaXMuaGVhZC5uZXh0ID0gdGVtcDtcbiAgICByZXR1cm4gdGhpcy5oZWFkO1xuICB9XG5cbiAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG4gIGxldCBjdXJySW5kZXggPSAxO1xuXG4gIHdoaWxlIChjdXJyLm5leHQpIHtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBjdXJySW5kZXggPT09IGluZGV4KSB7XG4gICAgICBsZXQgdGVtcCA9IGN1cnIubmV4dDtcblxuICAgICAgY3Vyci5uZXh0ID0gbmV3Tm9kZTtcbiAgICAgIG5ld05vZGUucHJldiA9IGN1cnI7XG4gICAgICBuZXdOb2RlLm5leHQgPSB0ZW1wO1xuICAgICAgdGVtcC5wcmV2ID0gbmV3Tm9kZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgICsrY3VyckluZGV4O1xuICB9XG4gIGN1cnIubmV4dCA9IG5ld05vZGU7XG4gIG5ld05vZGUucHJldiA9IGN1cnI7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRG91Ymx5TGlua2VkTGlzdC5wcm90b3R5cGUuc2hpZnQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLmhlYWQpIHJldHVybjtcbiAgY29uc3QgZmlyc3QgPSB0aGlzLmhlYWQ7XG5cbiAgdGhpcy5oZWFkID0gZmlyc3QubmV4dDtcbiAgdGhpcy5oZWFkLnByZXYgPSBudWxsO1xuICByZXR1cm4gZmlyc3QuZGF0YTtcbn07XG5cbkRvdWJseUxpbmtlZExpc3QucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIGlmICghdGhpcy5oZWFkKSByZXR1cm4gbnVsbDtcblxuICBpZiAoaW5kZXggPT09IDApIHtcbiAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuICBsZXQgY3VyckluZGV4ID0gMDtcbiAgbGV0IHByZXYgPSBudWxsO1xuXG4gIHdoaWxlIChjdXJyLm5leHQpIHtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBjdXJySW5kZXggPT09IGluZGV4KSB7XG4gICAgICBjb25zdCBuZXh0ID0gY3Vyci5uZXh0O1xuXG4gICAgICBwcmV2Lm5leHQgPSBuZXh0O1xuICAgICAgbmV4dC5wcmV2ID0gcHJldjtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwcmV2ID0gY3VycjtcbiAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgICsrY3VyckluZGV4O1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuRG91Ymx5TGlua2VkTGlzdC5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIG51bGw7XG4gIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuICBsZXQgcHJldiA9IG51bGw7XG5cbiAgd2hpbGUgKGN1cnIpIHtcbiAgICBsZXQgbmV4dCA9IGN1cnIubmV4dDtcblxuICAgIGN1cnIubmV4dCA9IHByZXY7XG4gICAgaWYgKHByZXYpIHByZXYucHJldiA9IGN1cnI7XG4gICAgcHJldiA9IGN1cnI7XG4gICAgY3VyciA9IG5leHQ7XG4gIH1cbiAgdGhpcy5oZWFkID0gcHJldjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldmVyc2UgTGluayBsaXN0IHJlY3Vyc2l2ZWx5XG4gKiBAcGFyYW0gIHtbdHlwZV19IG5vZGUgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuRG91Ymx5TGlua2VkTGlzdC5wcm90b3R5cGUucmV2ZXJzZVJlY3Vyc2lvbiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXZlcnNlID0gKG5vZGUpID0+IHtcbiAgICBpZiAoIW5vZGUgfHwgIW5vZGUubmV4dCkgcmV0dXJuO1xuICAgIHJldmVyc2Uobm9kZS5uZXh0KTtcbiAgICBjb25zdCB0ZW1wID0gbm9kZS5uZXh0O1xuXG4gICAgdGVtcC5uZXh0ID0gbm9kZTtcbiAgICBub2RlLnByZXYgPSB0ZW1wO1xuICAgIG5vZGUubmV4dCA9IG51bGw7XG4gIH07XG5cbiAgcmV2ZXJzZSh0aGlzLmhlYWQpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRG91Ymx5TGlua2VkTGlzdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBMaW5rZWRMaXN0IH0gPSByZXF1aXJlKCcuL2xpbmtlZC1saXN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBEb3VibHlMaW5rZWRMaXN0OiByZXF1aXJlKCcuL2RvdWJseS1saW5rZWQtbGlzdCcpLFxuICBMaW5rZWRMaXN0OiBMaW5rZWRMaXN0XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBOb2RlIGZvciBsaW5rIGxpc3RcbiAqIEBwYXJhbSAgICAgICB7W3R5cGVdfSBkYXRhIFtkZXNjcmlwdGlvbl1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBOb2RlKGRhdGEpIHtcbiAgdGhpcy5kYXRhID0gZGF0YTtcbn1cbi8qKlxuICogQ3JlYXRlIExpbmsgbGlzdFxuICogQHBhcmFtICAgICAgIHtbdHlwZV19IGRhdGEgW2Rlc2NyaXB0aW9uXVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIExpbmtlZExpc3QoZGF0YSkge1xuICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgdGhpcy5oZWFkID0gbmV3IE5vZGUoZGF0YVswXSk7XG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgIGN1cnIubmV4dCA9IG5ldyBOb2RlKGRhdGFbaV0pO1xuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICB9XG4gIH1cbn07XG4vKipcbiAqIFByaW50IExpbmsgbGlzdCBpbiByZWN1cnNpdmUgZmFzaGlvblxuICogQHBhcmFtICB7W3R5cGVdfSBub2RlIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbkxpbmtlZExpc3QucHJpbnRSZWN1cnNpb24gPSBmdW5jdGlvbihub2RlKSB7XG4gIGlmICghbm9kZSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBMaW5rZWRMaXN0LnByaW50UmVjdXJzaW9uKG5vZGUubmV4dCk7XG59O1xuXG5MaW5rZWRMaXN0LnByb3RvdHlwZSA9IHtcbiAgLyoqXG4gICAqIFByaW50IGFsbCB2YWx1ZXMgaW4gYSBsaW5rbGlzdFxuICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHByaW50OiBmdW5jdGlvbigpIHtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcblxuICAgIHdoaWxlIChjdXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhjdXJyLmRhdGEpO1xuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnZlcnQgbGluayBsaXN0IHRvIGFycmF5XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcblxuICAgIHdoaWxlIChjdXJyKSB7XG4gICAgICBhcnJheS5wdXNoKGN1cnIuZGF0YSk7XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluc2VydCB2YWx1ZSBpbiBsaW5rbGlzdCBhdCBpbmRleCBvciBlbmRcbiAgICogQHBhcmFtICB7W3R5cGVdfSBkYXRhICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gaW5kZXggW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGluc2VydDogZnVuY3Rpb24oZGF0YSwgaW5kZXgpIHtcbiAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoZGF0YSk7XG5cbiAgICBpZiAoIXRoaXMuaGVhZCkge1xuICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgY29uc3QgdGVtcCA9IHRoaXMuaGVhZDtcblxuICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICAgIHRoaXMuaGVhZC5uZXh0ID0gdGVtcDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuICAgIGxldCBjdXJySW5kZXggPSAxO1xuXG4gICAgd2hpbGUgKGN1cnIubmV4dCkge1xuICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgY3VyckluZGV4ID09PSBpbmRleCkge1xuICAgICAgICBsZXQgdGVtcCA9IGN1cnIubmV4dDtcblxuICAgICAgICBjdXJyLm5leHQgPSBuZXdOb2RlO1xuICAgICAgICBuZXdOb2RlLm5leHQgPSB0ZW1wO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgICArK2N1cnJJbmRleDtcbiAgICB9XG4gICAgY3Vyci5uZXh0ID0gbmV3Tm9kZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlIGZpcnN0IG5vZGUgaW4gbGluayBsaXN0XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgc2hpZnQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5oZWFkKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBmaXJzdCA9IHRoaXMuaGVhZDtcblxuICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgIHJldHVybiBmaXJzdC5kYXRhO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgbGFzdCBub2RlIGluIGxpbmsgbGl0XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgcG9wOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IHByZXYgPSBudWxsO1xuXG4gICAgd2hpbGUgKGN1cnIubmV4dCkge1xuICAgICAgcHJldiA9IGN1cnI7XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgIH1cbiAgICBwcmV2Lm5leHQgPSBudWxsO1xuICAgIHJldHVybiBjdXJyLmRhdGE7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlbGV0ZSBub2RlIGluIGxpbmsgbGlzdCBhdCBpbmRleFxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGluZGV4IFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBkZWxldGU6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLmhlYWQpIHJldHVybiBudWxsO1xuXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuICAgIGxldCBjdXJySW5kZXggPSAwO1xuICAgIGxldCBwcmV2ID0gbnVsbDtcblxuICAgIHdoaWxlIChjdXJyLm5leHQpIHtcbiAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGN1cnJJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgcHJldi5uZXh0ID0gY3Vyci5uZXh0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHByZXYgPSBjdXJyO1xuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICAgICsrY3VyckluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIFJldmVyc2UgTGlua0xpc3RcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICByZXZlcnNlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IHByZXYgPSBudWxsO1xuXG4gICAgd2hpbGUgKGN1cnIpIHtcbiAgICAgIGxldCBuZXh0ID0gY3Vyci5uZXh0O1xuXG4gICAgICBjdXJyLm5leHQgPSBwcmV2O1xuICAgICAgcHJldiA9IGN1cnI7XG4gICAgICBjdXJyID0gbmV4dDtcbiAgICB9XG4gICAgdGhpcy5oZWFkID0gcHJldjtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmV2ZXJzZSBMaW5rIGxpc3QgcmVjdXJzaXZlbHlcbiAgICogQHBhcmFtICB7W3R5cGVdfSBub2RlIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHJldmVyc2VSZWN1cnNpb246IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUubmV4dCkge1xuICAgICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZXZlcnNlUmVjdXJzaW9uKG5vZGUubmV4dCk7XG4gICAgbGV0IHRlbXAgPSBub2RlLm5leHQ7XG5cbiAgICB0ZW1wLm5leHQgPSBub2RlO1xuICAgIG5vZGUubmV4dCA9IG51bGw7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBMaW5rZWRMaXN0OiBMaW5rZWRMaXN0LFxuICBOb2RlOiBOb2RlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBRdWV1ZUFycmF5KCkge1xuICB0aGlzLl9xdWV1ZSA9IEFycmF5KDEwKS5maWxsKG51bGwpO1xuICB0aGlzLl9mcm9udCA9IC0xO1xuICB0aGlzLl9yZWFyID0gLTE7XG59XG5cblF1ZXVlQXJyYXkucHJvdG90eXBlID0ge1xuICBlbnF1ZXVlOiBmdW5jdGlvbih4KSB7XG4gICAgaWYgKCh0aGlzLl9yZWFyICsgMSkgJSB0aGlzLl9xdWV1ZS5sZW5ndGggPT09IHRoaXMuX2Zyb250KSByZXR1cm47XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB0aGlzLl9yZWFyID0gdGhpcy5fZnJvbnQgPSAwO1xuICAgIGVsc2UgdGhpcy5fcmVhciA9ICh0aGlzLl9yZWFyICsgMSkgJSB0aGlzLl9xdWV1ZS5sZW5ndGg7XG4gICAgdGhpcy5fcXVldWVbdGhpcy5fcmVhcl0gPSB4O1xuICB9LFxuXG4gIGRlcXVldWU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuO1xuICAgIGxldCB2YWw7XG5cbiAgICBpZiAodGhpcy5fZnJvbnQgPT09IHRoaXMuX3JlYXIpIHtcbiAgICAgIHZhbCA9IHRoaXMuX3F1ZXVlW3RoaXMuX2Zyb250XTtcbiAgICAgIHRoaXMuX2Zyb250ID0gdGhpcy5fcmVhciA9IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgPSB0aGlzLl9xdWV1ZVt0aGlzLl9mcm9udF07XG4gICAgICArK3RoaXMuX2Zyb250O1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9LFxuXG4gIGZyb250OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVldWVbdGhpcy5fZnJvbnRdO1xuICB9LFxuXG4gIGlzRW1wdHk6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9mcm9udCA9PT0gLSAxICYmIHRoaXMuX3JlYXIgPT09IC0xO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlQXJyYXk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBRdWV1ZUFycmF5OiByZXF1aXJlKCcuL2FycmF5JyksXG4gIFF1ZXVlTGlua2VkTGlzdDogcmVxdWlyZSgnLi9saW5rZWQtbGlzdCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBOb2RlKHZhbCkge1xuICB0aGlzLmRhdGEgPSB2YWw7XG59XG5cbmZ1bmN0aW9uIFF1ZXVlTGlua0xpc3QoKSB7fVxuXG5RdWV1ZUxpbmtMaXN0LnByb3RvdHlwZSA9IHtcbiAgZW5xdWV1ZTogZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB0aGlzLl9yZWFyID0gdGhpcy5fZnJvbnQgPSBuZXcgTm9kZSh2YWwpO1xuICAgIGVsc2UgdGhpcy5fcmVhciA9IHRoaXMuX3JlYXIubmV4dCA9IG5ldyBOb2RlKHZhbCk7XG4gIH0sXG5cbiAgZGVxdWV1ZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuX2Zyb250O1xuXG4gICAgaWYgKG5vZGUgPT09IHRoaXMuX3JlYXIpIHRoaXMuX3JlYXIgPSB0aGlzLl9mcm9udCA9IHVuZGVmaW5lZDtcbiAgICBlbHNlIGlmIChub2RlLm5leHQpIHRoaXMuX2Zyb250ID0gbm9kZS5uZXh0O1xuICAgIHJldHVybiBub2RlLmRhdGE7XG4gIH0sXG5cbiAgZnJvbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9mcm9udC5kYXRhO1xuICB9LFxuXG4gIGlzRW1wdHk6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9mcm9udCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX3JlYXIgPT09IHVuZGVmaW5lZDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZUxpbmtMaXN0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBTdGFja0FycmF5KCkge1xuICB0aGlzLl9zdGFjayA9IFtdO1xuICB0aGlzLl90b3AgPSAtMTtcbn1cblxuU3RhY2tBcnJheS5wcm90b3R5cGUgPSB7XG4gIHB1c2g6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICArK3RoaXMuX3RvcDtcbiAgICBpZiAodGhpcy5fc3RhY2subGVuZ3RoID49IHRoaXMuX3RvcCArIDEpIHRoaXMuX3N0YWNrW3RoaXMuX3RvcF0gPSBkYXRhO1xuICAgIGVsc2UgdGhpcy5fc3RhY2sucHVzaChkYXRhKTtcbiAgICByZXR1cm4gdGhpcy5fc3RhY2s7XG4gIH0sXG5cbiAgcG9wOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybjtcbiAgICBjb25zdCB0b3AgPSB0aGlzLl9zdGFja1t0aGlzLl90b3BdO1xuXG4gICAgdGhpcy5fc3RhY2tbdGhpcy5fdG9wXSA9IHVuZGVmaW5lZDtcbiAgICAtLXRoaXMuX3RvcDtcbiAgICByZXR1cm4gdG9wO1xuICB9LFxuXG4gIHRvcDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWNrW3RoaXMuX3RvcF07XG4gIH0sXG5cbiAgaXNFbXB0eTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvcCA9PT0gLTE7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2tBcnJheTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFN0YWNrQXJyYXk6IHJlcXVpcmUoJy4vYXJyYXknKSxcbiAgU3RhY2tMaW5rZWRMaXN0OiByZXF1aXJlKCcuL2xpbmtlZC1saXN0Jylcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIE5vZGUgZm9yIGxpbmsgbGlzdFxuICogQHBhcmFtICAgICAgIHtbdHlwZV19IGRhdGEgW2Rlc2NyaXB0aW9uXVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE5vZGUoZGF0YSkge1xuICB0aGlzLmRhdGEgPSBkYXRhO1xufVxuLyoqXG4gKiBDcmVhdGUgTGluayBsaXN0XG4gKiBAcGFyYW0gICAgICAge1t0eXBlXX0gZGF0YSBbZGVzY3JpcHRpb25dXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU3RhY2tMaW5rZWRMaXN0KCkge31cbi8qKlxuICogUHJpbnQgTGluayBsaXN0IGluIHJlY3Vyc2l2ZSBmYXNoaW9uXG4gKiBAcGFyYW0gIHtbdHlwZV19IG5vZGUgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuU3RhY2tMaW5rZWRMaXN0LnByaW50UmVjdXJzaW9uID0gZnVuY3Rpb24obm9kZSkge1xuICBpZiAoIW5vZGUpIHJldHVybiBudWxsO1xuICByZXR1cm4gU3RhY2tMaW5rZWRMaXN0LnByaW50UmVjdXJzaW9uKG5vZGUubmV4dCk7XG59O1xuXG5TdGFja0xpbmtlZExpc3QucHJvdG90eXBlID0ge1xuICAvKipcbiAgICogUHJpbnQgYWxsIHZhbHVlcyBpbiBhIGxpbmtsaXN0XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgcHJpbnQ6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuXG4gICAgd2hpbGUgKGN1cnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGN1cnIuZGF0YSk7XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ29udmVydCBsaW5rIGxpc3QgdG8gYXJyYXlcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICB0b0FycmF5OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuXG4gICAgd2hpbGUgKGN1cnIpIHtcbiAgICAgIGFycmF5LnB1c2goY3Vyci5kYXRhKTtcbiAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfSxcblxuICAvKipcbiAgICogSW5zZXJ0IHZhbHVlIGluIGxpbmtsaXN0IGF0IGluZGV4IG9yIGVuZFxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGRhdGEgIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBpbmRleCBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgcHVzaDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShkYXRhKTtcblxuICAgIG5ld05vZGUubmV4dCA9IHRoaXMuaGVhZDtcbiAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZmlyc3Qgbm9kZSBpbiBsaW5rIGxpc3RcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBwb3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5oZWFkKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBmaXJzdCA9IHRoaXMuaGVhZDtcblxuICAgIHRoaXMuaGVhZCA9IGZpcnN0Lm5leHQ7XG4gICAgcmV0dXJuIGZpcnN0LmRhdGE7XG4gIH0sXG5cbiAgdG9wOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFkLmRhdGE7XG4gIH0sXG5cbiAgaXNFbXB0eTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICF0aGlzLmhlYWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIExpbmtMaXN0IHJldmVyc2FsIHVzaW5nIHN0YWNrcyBpcyBhbiBPKE4gKyBNKSB0aW1lIGFuZCBzcGFjZSBjb21wbGV4aXR5XG4gICAqIEBwYXJhbSAge1t0eXBlXX0gbGlua0xpc3QgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHJldmVyc2U6IGZ1bmN0aW9uKCkge1xuICAgIC8vIENyZWF0ZSBhIHN0YWNrIHRvIHN0b3JlIHRoZSBsaW5rbGlzdCB2YWx1ZXNcbiAgICBjb25zdCBzdGFjayA9IG5ldyBTdGFja0xpbmtlZExpc3QoKTtcblxuICAgIC8vIHB1c2ggYWxsIGxpbmsgbGlzdCB2YWx1ZXMgaW4gc3RhY2sgYnkgc2hpZnRpbmcgdGhlIGZpcnN0IHZhbHVlLlxuICAgIHdoaWxlICh0aGlzLmhlYWQpIHN0YWNrLnB1c2godGhpcy5zaGlmdCgpKTtcbiAgICAvLyByZS1pbnNlcnQgYWxsIG9mIHRoZSBsaW5rIGxpc3QgdmFsdWVzIGJ5IHBvcHBpbmcgdGhlIHN0YWNrXG4gICAgd2hpbGUgKCFzdGFjay5pc0VtcHR5KCkpIHRoaXMuaW5zZXJ0KHN0YWNrLnBvcCgpKTtcbiAgICAvLyByZXR1cm4gdGhlIG5ldyBzdGFja1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrTGlua2VkTGlzdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGRhdGFTdHJ1Y3R1cmVzIGZyb20gJy4vZGF0YS1zdHJ1Y3R1cmVzJztcbmltcG9ydCBhbGdvcml0aG1zIGZyb20gJy4vYWxnb3JpdGhtcyc7XG5cbmV4cG9ydCB7XG4gIGRhdGFTdHJ1Y3R1cmVzLFxuICBhbGdvcml0aG1zXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==