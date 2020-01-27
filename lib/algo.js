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
  sorting: __webpack_require__(/*! ./sorting */ "./src/algorithms/sorting/index.js")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGdvL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9hbGdvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FsZ28vLi9zcmMvYWxnb3JpdGhtcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2FsZ29yaXRobXMvc29ydGluZy9idWJibGUuanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9hbGdvcml0aG1zL3NvcnRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9hbGdvcml0aG1zL3NvcnRpbmcvaW5zZXJ0aW9uLmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvYWxnb3JpdGhtcy9zb3J0aW5nL21lcmdlLmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvYWxnb3JpdGhtcy9zb3J0aW5nL3F1aWNrLmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvYWxnb3JpdGhtcy9zb3J0aW5nL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9iaW5hcnktc2VhcmNoLXRyZWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvZ3JhcGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvbGlua2VkLWxpc3RzL2RvdWJseS1saW5rZWQtbGlzdC5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9saW5rZWQtbGlzdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvbGlua2VkLWxpc3RzL2xpbmtlZC1saXN0LmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL3F1ZXVlcy9hcnJheS5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9xdWV1ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvcXVldWVzL2xpbmtlZC1saXN0LmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL3N0YWNrcy9hcnJheS5qcyIsIndlYnBhY2s6Ly9hbGdvLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9zdGFja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxnby8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvc3RhY2tzL2xpbmtlZC1saXN0LmpzIiwid2VicGFjazovL2FsZ28vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNvcnRpbmciLCJyZXF1aXJlIiwiYXJyYXkiLCJ0IiwibGVuZ3RoIiwic3dhcHBlZCIsImkiLCJ0ZW1wIiwic2VsZWN0aW9uU29ydCIsImJ1YmJsZVNvcnQiLCJpbnNlcnRpb25Tb3J0IiwibWVyZ2VTb3J0IiwicXVpY2tTb3J0IiwidmFsIiwiaCIsIm1pZCIsIk1hdGgiLCJmbG9vciIsImxlZnQiLCJzbGljZSIsInJpZ2h0Iiwic29ydEFuZE1lcmdlIiwic29ydGVkIiwibCIsInIiLCJwdXNoIiwiY29uY2F0Iiwic3dhcCIsImEiLCJiIiwicGFydGl0aW9uIiwic3RhcnQiLCJlbmQiLCJwaXZvdCIsInJhbmRvbSIsImluZGV4IiwicCIsIm1pbiIsImoiLCJOb2RlIiwiX2RhdGEiLCJwcm90b3R5cGUiLCJkYXRhIiwiX2xlZnQiLCJub2RlIiwiY29uc3RydWN0b3IiLCJOdW1iZXIiLCJfcmlnaHQiLCJpbnNlcnQiLCJzZWFyY2giLCJCaW5hcnlTZWFyY2hUcmVlIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsIm4iLCJfcm9vdCIsInJvb3QiLCJoYXMiLCJmaW5kTWluIiwiZ2V0TWluIiwiZmluZE1heCIsImdldE1heCIsImRlbGV0ZSIsImRlbGV0ZU5vZGUiLCJsZXZlbE9yZGVyIiwidmFscyIsInF1ZXVlIiwiY3VyciIsInNoaWZ0IiwicHJlT3JkZXIiLCJ0cmF2ZXJzZSIsImluT3JkZXIiLCJwb3N0T3JkZXIiLCJtYXhEZXB0aCIsIm1heCIsImlzVmFsaWQiLCJpc0JTVCIsIkluZmluaXR5IiwicGF0aFN1bSIsInN1bSIsImhhc1BhdGhTdW0iLCJpc1N5bW1ldHJpYyIsInZhbGlkYXRlU3ltbWV0cnkiLCJnZXRTdWNjZXNzb3IiLCJ1bmRlZmluZWQiLCJzdWNjZXNzb3IiLCJhbmNlc3RvciIsIlF1ZXVlTGlua2VkTGlzdCIsIkdyYXBoIiwibnVtT2ZWZXJ0aWNlcyIsImxpc3QiLCJNYXAiLCJhZGRWZXJ0ZXgiLCJ2Iiwic2V0IiwiYWRkRWRnZSIsInciLCJnZXQiLCJ0b09iamVjdCIsImciLCJ2YWx1ZSIsImtleSIsImJmcyIsInZpc2l0ZWQiLCJmaWxsIiwicSIsImVucXVldWUiLCJpc0VtcHR5IiwiZWxlbSIsImRlcXVldWUiLCJlZGdlcyIsImRmcyIsImxpbmtlZExpc3RzIiwicXVldWVzIiwic3RhY2tzIiwiTGlua2VkTGlzdCIsIkRvdWJsZU5vZGUiLCJjYWxsIiwiRG91Ymx5TGlua2VkTGlzdCIsImhlYWQiLCJuZXdOb2RlIiwicHJldiIsIm5leHQiLCJPYmplY3QiLCJjcmVhdGUiLCJjdXJySW5kZXgiLCJmaXJzdCIsInJldmVyc2UiLCJyZXZlcnNlUmVjdXJzaW9uIiwicHJpbnRSZWN1cnNpb24iLCJwcmludCIsImNvbnNvbGUiLCJsb2ciLCJ0b0FycmF5IiwicG9wIiwiUXVldWVBcnJheSIsIl9xdWV1ZSIsIl9mcm9udCIsIl9yZWFyIiwieCIsImZyb250IiwiUXVldWVMaW5rTGlzdCIsIlN0YWNrQXJyYXkiLCJfc3RhY2siLCJfdG9wIiwidG9wIiwiU3RhY2tMaW5rZWRMaXN0Iiwic3RhY2siXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztR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O0FBdUQxQnVHLEtBQUcsRUFBRSxlQUFXO0FBQ2QsV0FBTyxLQUFLMUIsSUFBTCxDQUFVN0UsSUFBakI7QUFDRCxHQXpEeUI7QUEyRDFCaUUsU0FBTyxFQUFFLG1CQUFXO0FBQ2xCLFdBQU8sQ0FBQyxLQUFLWSxJQUFiO0FBQ0QsR0E3RHlCOztBQStEMUI7Ozs7O0FBS0FRLFNBQU8sRUFBRSxtQkFBVztBQUNsQjtBQUNBLFFBQU1vQixLQUFLLEdBQUcsSUFBSUQsZUFBSixFQUFkLENBRmtCLENBSWxCOztBQUNBLFdBQU8sS0FBSzNCLElBQVo7QUFBa0I0QixXQUFLLENBQUMxSCxJQUFOLENBQVcsS0FBSzJDLEtBQUwsRUFBWDtBQUFsQixLQUxrQixDQU1sQjs7O0FBQ0EsV0FBTyxDQUFDK0UsS0FBSyxDQUFDeEMsT0FBTixFQUFSO0FBQXlCLFdBQUszRCxNQUFMLENBQVltRyxLQUFLLENBQUNiLEdBQU4sRUFBWjtBQUF6QixLQVBrQixDQVFsQjs7O0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUE5RXlCLENBQTVCO0FBaUZBeEksTUFBTSxDQUFDQyxPQUFQLEdBQWlCbUosZUFBakIsQzs7Ozs7Ozs7Ozs7O0FDMUdhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYjs7QUFDQSIsImZpbGUiOiJhbGdvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJhbGdvXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImFsZ29cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYWxnb1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNvcnRpbmc6IHJlcXVpcmUoJy4vc29ydGluZycpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBCdWJibGUgU29ydFxuICpcbiAqIFRpbWUgY29tcGxleGl0eVxuICogQmVzdCBDYXNlOiBpcyBPKG4pXG4gKiBBdmVyYWdlIENhc2U6IGlzIE8obl4yKVxuICogV29yc3QgQ2FzZTogaXMgTyhuXjIpXG4gKlxuICogQHBhcmFtICB7W051bWJlcl19IGFycmF5IEFycmF5IG9mIGludGVnZXJzIHRvIHNvcnRcbiAqIEByZXR1cm4ge1tOdW1iZXJdfSBhcnJheSBBcnJheSBvZiBpbnRlZ2VycyB0byBzb3J0ZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnJheSkge1xuICBmb3IgKGxldCB0ID0gYXJyYXkubGVuZ3RoIC0gMTsgdCA+PSAwOyAtLXQpIHtcbiAgICBsZXQgc3dhcHBlZCA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0IC0gMTsgKytpKSB7XG4gICAgICBpZiAoYXJyYXlbaV0gPiBhcnJheVtpICsgMV0pIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IGFycmF5W2ldO1xuXG4gICAgICAgIGFycmF5W2ldID0gYXJyYXlbaSArIDFdO1xuICAgICAgICBhcnJheVtpICsgMV0gPSB0ZW1wO1xuICAgICAgICBzd2FwcGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICghc3dhcHBlZCkgYnJlYWs7IC8vIElmIHN3YXAgbmV2ZXIgaGFwcGVucywgQnJlYWsgdGhlIGxvb3AuXG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZWxlY3Rpb25Tb3J0OiByZXF1aXJlKCcuL3NlbGVjdGlvbicpLFxuICBidWJibGVTb3J0OiByZXF1aXJlKCcuL2J1YmJsZScpLFxuICBpbnNlcnRpb25Tb3J0OiByZXF1aXJlKCcuL2luc2VydGlvbicpLFxuICBtZXJnZVNvcnQ6IHJlcXVpcmUoJy4vbWVyZ2UnKSxcbiAgcXVpY2tTb3J0OiByZXF1aXJlKCcuL3F1aWNrJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEluc2VydGlvbiBTb3J0XG4gKlxuICogVGltZSBjb21wbGV4aXR5XG4gKiBCZXN0IENhc2U6IGlzIE8obilcbiAqIEF2ZXJhZ2UgQ2FzZTogaXMgTyhuXjIpXG4gKiBXb3JzdCBDYXNlOiBpcyBPKG5eMilcbiAqXG4gKiBAcGFyYW0gIHtbTnVtYmVyXX0gYXJyYXkgQXJyYXkgb2YgaW50ZWdlcnMgdG8gc29ydFxuICogQHJldHVybiB7W051bWJlcl19IGFycmF5IEFycmF5IG9mIGludGVnZXJzIHRvIHNvcnRlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyYXkubGVuZ3RoOyArK2kpIHtcbiAgICBsZXQgdmFsID0gYXJyYXlbaV07XG4gICAgbGV0IGggPSBpO1xuXG4gICAgd2hpbGUgKGggPiAwICYmIGFycmF5W2ggLSAxXSA+IHZhbCkge1xuICAgICAgYXJyYXlbaF0gPSBhcnJheVtoIC0gMV07XG4gICAgICAtLWg7XG4gICAgfVxuICAgIGFycmF5W2hdID0gdmFsO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIE1lcmdlIFNvcnRcbiAqXG4gKiBUaW1lIGNvbXBsZXhpdHkgTyhuIGxvZyBuKVxuICogU3BhY2UgY29tcGxleGl0eSBPKG4pXG4gKlxuICogQHBhcmFtICB7W051bWJlcl19IGFycmF5IEFycmF5IG9mIGludGVnZXJzIHRvIHNvcnRcbiAqIEByZXR1cm4ge1tOdW1iZXJdfSBhcnJheSBBcnJheSBvZiBpbnRlZ2VycyB0byBzb3J0ZWRcbiAqL1xuZnVuY3Rpb24gbWVyZ2VTb3J0KGFycmF5KSB7XG4gIGlmIChhcnJheS5sZW5ndGggPD0gMSkgcmV0dXJuIGFycmF5O1xuICBjb25zdCBtaWQgPSBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aCAvIDIpOyAvLyBEZXRlcm1pbmUgbWlkIHBvaW50IG9mIGFycmF5XG4gIGNvbnN0IGxlZnQgPSBhcnJheS5zbGljZSgwLCBtaWQpOyAvLyBzcGxpdCBhcnJheSBpbiB0byAyIGJ5IHRoZSBtaWQgcG9pbnRcbiAgY29uc3QgcmlnaHQgPSBhcnJheS5zbGljZShtaWQpO1xuICAvLyBmdW5jdGlvbiB0byBzb3J0IGFuZCBtZXJnZSAyIGFycmF5c1xuICBjb25zdCBzb3J0QW5kTWVyZ2UgPSAobGVmdCwgcmlnaHQpID0+IHtcbiAgICBsZXQgc29ydGVkID0gW107IC8vIGZpbmFsIHNvcnRlZCBhcnJheVxuICAgIGxldCBsID0gMDsgLy8gY3VycmVudCBzY2FubmVkIGluZGV4ZXMgb2YgbGVmdCBhbmQgcmlnaHQgYXJyYXlzXG4gICAgbGV0IHIgPSAwO1xuXG4gICAgd2hpbGUgKGwgPCBsZWZ0Lmxlbmd0aCAmJiByIDwgcmlnaHQubGVuZ3RoKSB7IC8vIHNjYW4gdmFsdWVzIGluIGFycmF5c1xuICAgICAgaWYgKGxlZnRbbF0gPCByaWdodFtyXSkgeyAvLyBpZiBsZWZ0IGlzIHNtYWxsZXIsIHB1c2ggdG8gYXJyYXkgYW5kIGluY3JlbWVudCBsZWZ0IGluZGV4XG4gICAgICAgIHNvcnRlZC5wdXNoKGxlZnRbbF0pO1xuICAgICAgICArK2w7XG4gICAgICB9IGVsc2UgeyAvLyBwdXNoIHJpZ2h0IHZhbHVlIHRvIGFycmF5IGFuZCBpbmNyZW1lbnQgcmlnaHQgaW5kZXhcbiAgICAgICAgc29ydGVkLnB1c2gocmlnaHRbcl0pO1xuICAgICAgICArK3I7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFwcGVuZCByZW1haW5pbmcgdmFsdWVzXG4gICAgcmV0dXJuIHNvcnRlZC5jb25jYXQobGVmdC5zbGljZShsKSkuY29uY2F0KHJpZ2h0LnNsaWNlKHIpKTtcbiAgfTtcblxuICAvLyByZXR1cm4gbWVyZ2VkIGFycmF5IGluIHJlY3Vyc2lvblxuICByZXR1cm4gc29ydEFuZE1lcmdlKG1lcmdlU29ydChsZWZ0KSwgbWVyZ2VTb3J0KHJpZ2h0KSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlU29ydDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnJheSkge1xuICBjb25zdCBzd2FwID0gKGEsIGIpID0+IHtcbiAgICBjb25zdCB0ID0gYTtcblxuICAgIGEgPSBiO1xuICAgIGIgPSB0O1xuICB9O1xuXG4gIGNvbnN0IHBhcnRpdGlvbiA9IChhcnJheSwgc3RhcnQsIGVuZCkgPT4ge1xuICAgIGNvbnN0IHBpdm90ID0gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XG4gICAgbGV0IGluZGV4ID0gc3RhcnQ7XG5cbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQgLSAxOyArK2kpIHtcbiAgICAgIGlmIChhcnJheVtpXSA8PSBwaXZvdCkge1xuICAgICAgICBzd2FwKGFycmF5W2ldLCBhcnJheVtpbmRleF0pO1xuICAgICAgICBpbmRleCA9IGluZGV4ICsgMTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3dhcChhcnJheVtpbmRleF0sIGFycmF5W2VuZF0pO1xuICAgIHJldHVybiBpbmRleDtcbiAgfTtcblxuICBjb25zdCBxdWlja1NvcnQgPSAoYXJyYXksIHN0YXJ0LCBlbmQpID0+IHtcbiAgICBpZiAoc3RhcnQgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHAgPSBwYXJ0aXRpb24oYXJyYXksIHN0YXJ0LCBlbmQpO1xuXG4gICAgICBxdWlja1NvcnQoYXJyYXksIHN0YXJ0LCBwKTtcbiAgICAgIHF1aWNrU29ydChhcnJheSwgcCArIDEsIGVuZCk7XG4gICAgfVxuICB9O1xuXG4gIHF1aWNrU29ydChhcnJheSwgMCwgYXJyYXkubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBhcnJheTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIFNlbGVjdGlvbiBTb3J0XG4gKlxuICogVGltZSBjb21wbGV4aXR5IGlzIE8obl4yKVxuICogQHBhcmFtICB7W051bWJlcl19IGFycmF5IEFycmF5IG9mIGludGVnZXJzIHRvIHNvcnRcbiAqIEByZXR1cm4ge1tOdW1iZXJdfSBhcnJheSBBcnJheSBvZiBpbnRlZ2VycyB0byBzb3J0ZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnJheSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aCAtIDE7ICsraSkge1xuICAgIGxldCBtaW4gPSBpO1xuXG4gICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgYXJyYXkubGVuZ3RoOyArK2opIHtcbiAgICAgIGlmIChhcnJheVttaW5dIDwgYXJyYXlbal0pIG1pbiA9IGo7XG4gICAgfVxuICAgIGxldCB0ZW1wID0gYXJyYXlbaV07XG5cbiAgICBhcnJheVtpXSA9IGFycmF5W21pbl07XG4gICAgYXJyYXlbbWluXSA9IHRlbXA7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gTm9kZSh2YWwpIHtcbiAgdGhpcy5fZGF0YSA9IHZhbDtcbn07XG5cbk5vZGUucHJvdG90eXBlID0ge1xuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfSxcblxuICBzZXQgZGF0YSh2YWwpIHtcbiAgICB0aGlzLl9kYXRhID0gdmFsO1xuICB9LFxuXG4gIGdldCBsZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLl9sZWZ0O1xuICB9LFxuXG4gIHNldCBsZWZ0KG5vZGUpIHtcbiAgICBpZiAobm9kZSAmJiBub2RlLmNvbnN0cnVjdG9yID09PSBOdW1iZXIpIHRoaXMuX2xlZnQgPSBuZXcgTm9kZShub2RlKTtcbiAgICBlbHNlIHRoaXMuX2xlZnQgPSBub2RlO1xuICB9LFxuXG4gIGdldCByaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmlnaHQ7XG4gIH0sXG5cbiAgc2V0IHJpZ2h0KG5vZGUpIHtcbiAgICBpZiAobm9kZSAmJiBub2RlLmNvbnN0cnVjdG9yID09PSBOdW1iZXIpIHRoaXMuX3JpZ2h0ID0gbmV3IE5vZGUobm9kZSk7XG4gICAgZWxzZSB0aGlzLl9yaWdodCA9IG5vZGU7XG4gIH0sXG5cbiAgaW5zZXJ0OiBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEpIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgZWxzZSBpZiAoZGF0YSA+IHRoaXMuZGF0YSkge1xuICAgICAgaWYgKHRoaXMucmlnaHQpIHRoaXMucmlnaHQuaW5zZXJ0KGRhdGEpO1xuICAgICAgZWxzZSB0aGlzLnJpZ2h0ID0gZGF0YTtcbiAgICB9IGVsc2UgaWYgKGRhdGEgPCB0aGlzLmRhdGEpIHtcbiAgICAgIGlmICh0aGlzLmxlZnQpIHRoaXMubGVmdC5pbnNlcnQoZGF0YSk7XG4gICAgICBlbHNlIHRoaXMubGVmdCA9IGRhdGE7XG4gICAgfVxuICB9LFxuXG4gIHNlYXJjaDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICghdGhpcy5kYXRhKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoZGF0YSA9PT0gdGhpcy5kYXRhKSByZXR1cm4gdGhpcztcbiAgICBpZiAoZGF0YSA+IHRoaXMuZGF0YSAmJiB0aGlzLnJpZ2h0KSByZXR1cm4gdGhpcy5yaWdodC5zZWFyY2goZGF0YSk7XG4gICAgaWYgKGRhdGEgPCB0aGlzLmRhdGEgJiYgdGhpcy5sZWZ0KSByZXR1cm4gdGhpcy5sZWZ0LnNlYXJjaChkYXRhKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuZnVuY3Rpb24gQmluYXJ5U2VhcmNoVHJlZShkYXRhKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSBkYXRhLmZvckVhY2gobiA9PiB0aGlzLmluc2VydChuKSk7XG4gIGVsc2UgdGhpcy5fcm9vdCA9IG5ldyBOb2RlKGRhdGEpO1xufTtcblxuQmluYXJ5U2VhcmNoVHJlZS5wcm90b3R5cGUgPSB7XG4gIGdldCByb290KCkge1xuICAgIHJldHVybiB0aGlzLl9yb290O1xuICB9LFxuXG4gIHNldCByb290KG5vZGUpIHtcbiAgICB0aGlzLl9yb290ID0gbm9kZTtcbiAgfSxcblxuICBpbnNlcnQ6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMucm9vdCkgdGhpcy5yb290ID0gbmV3IE5vZGUoZGF0YSk7XG4gICAgZWxzZSB0aGlzLnJvb3QuaW5zZXJ0KGRhdGEpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIGhhczogZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICghdGhpcy5yb290KSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5zZWFyY2goZGF0YSkgIT09IG51bGw7XG4gIH0sXG5cbiAgc2VhcmNoOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB0aGlzLnJvb3Quc2VhcmNoKGRhdGEpO1xuICB9LFxuXG4gIGZpbmRNaW46IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBpZiAoIXRoaXMucm9vdCkgcmV0dXJuO1xuICAgIGNvbnN0IGdldE1pbiA9IChub2RlKSA9PiB7XG4gICAgICBpZiAobm9kZS5sZWZ0KSByZXR1cm4gZ2V0TWluKG5vZGUubGVmdCk7XG4gICAgICByZXR1cm4gbm9kZS5kYXRhO1xuICAgIH07XG5cbiAgICByZXR1cm4gIW5vZGUgPyBnZXRNaW4odGhpcy5yb290KSA6IGdldE1pbihub2RlKTtcbiAgfSxcblxuICBmaW5kTWF4OiBmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybjtcbiAgICBjb25zdCBnZXRNYXggPSAobm9kZSkgPT4ge1xuICAgICAgaWYgKG5vZGUucmlnaHQpIHJldHVybiBnZXRNYXgobm9kZS5yaWdodCk7XG4gICAgICByZXR1cm4gbm9kZS5kYXRhO1xuICAgIH07XG5cbiAgICByZXR1cm4gIW5vZGUgPyBnZXRNYXgodGhpcy5yb290KSA6IGdldE1heChub2RlKTtcbiAgfSxcblxuICBkZWxldGU6IGZ1bmN0aW9uKHZhbCkge1xuICAgIGNvbnN0IGRlbGV0ZU5vZGUgPSAocm9vdCwgdmFsKSA9PiB7XG4gICAgICAvLyBJZiBObyBOb2RlIHJldHVybiB1bmRlZmluZWRcbiAgICAgIGlmICghcm9vdCkgcmV0dXJuO1xuICAgICAgLy8gSWYgdmFsIGlzIGxlc3MgdGhhbiBjdXJyZW50IG5vZGUgZGF0YS4gQ29udGludWUgb24gdG8gbGVmdCBjaGlsZC5cbiAgICAgIGlmICh2YWwgPCByb290LmRhdGEpIHJldHVybiBkZWxldGVOb2RlKHJvb3QubGVmdCwgdmFsLCByb290KTtcbiAgICAgIC8vIElmIHZhbCBpcyBncmVhdGVyIHRoYW4gY3VycmVudCBub2RlIGRhdGEuIENvbnRpbnVlIG9uIHRvIHJpZ2h0IGNoaWxkLlxuICAgICAgaWYgKHZhbCA+IHJvb3QuZGF0YSkgcmV0dXJuIGRlbGV0ZU5vZGUocm9vdC5yaWdodCwgdmFsLCByb290KTtcbiAgICAgIC8vIENhc2UgMTogTm8gY2hpbGRyZW4sIGRlYWxsb2NhdGUgY2hpbGQgZnJvbSBwYXJlbnRcbiAgICAgIGlmIChyb290LmxlZnQgJiYgcm9vdC5yaWdodCkge1xuICAgICAgICAvLyBDYXNlIDM6IGlmIDIgY2hpbGRyZW5cbiAgICAgICAgLy8gRmluZCBtaW5pbXVtIHZhbHVlIG9mIHRoZSByaWdodCBub2RlXG4gICAgICAgIGxldCB0ZW1wID0gcm9vdC5yaWdodDtcblxuICAgICAgICB3aGlsZSAodGVtcC5sZWZ0KSB0ZW1wID0gdGVtcC5sZWZ0O1xuICAgICAgICAvLyB3cml0ZSBub2RlIGRhdGEgdG8gdGhlIG1pbmltdW0gdmFsdWVzXG4gICAgICAgIHJvb3QuZGF0YSA9IHRlbXAuZGF0YTtcbiAgICAgICAgLy8gTW92ZSBvbiB0byB0aGUgcmlnaHQgYW5kIGNvbnRpbnVlIG9uXG4gICAgICAgIHJvb3QucmlnaHQgPSBkZWxldGVOb2RlKHJvb3QucmlnaHQsIHRlbXAuZGF0YSk7XG4gICAgICAgIHJldHVybiByb290O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJvb3QubGVmdCB8fCByb290LnJpZ2h0O1xuICAgIH07XG5cbiAgICBkZWxldGVOb2RlKHRoaXMucm9vdCwgdmFsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBsZXZlbE9yZGVyOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB2YWxzID0gW107XG5cbiAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICBjb25zdCBxdWV1ZSA9IFtdO1xuXG4gICAgICBxdWV1ZS5wdXNoKHRoaXMucm9vdCk7XG4gICAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgY3VyciA9IHF1ZXVlLnNoaWZ0KCk7XG5cbiAgICAgICAgdmFscy5wdXNoKGN1cnIuZGF0YSk7XG4gICAgICAgIGlmIChjdXJyLmxlZnQpIHF1ZXVlLnB1c2goY3Vyci5sZWZ0KTtcbiAgICAgICAgaWYgKGN1cnIucmlnaHQpIHF1ZXVlLnB1c2goY3Vyci5yaWdodCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWxzO1xuICB9LFxuXG4gIHByZU9yZGVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgdmFscyA9IFtdO1xuXG4gICAgY29uc3QgdHJhdmVyc2UgPSAobm9kZSkgPT4ge1xuICAgICAgdmFscy5wdXNoKG5vZGUuZGF0YSk7XG4gICAgICBpZiAobm9kZS5sZWZ0KSB0cmF2ZXJzZShub2RlLmxlZnQpO1xuICAgICAgaWYgKG5vZGUucmlnaHQpIHRyYXZlcnNlKG5vZGUucmlnaHQpO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5yb290KSB0cmF2ZXJzZSh0aGlzLnJvb3QpO1xuICAgIHJldHVybiB2YWxzO1xuICB9LFxuXG4gIGluT3JkZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCB2YWxzID0gW107XG5cbiAgICBjb25zdCB0cmF2ZXJzZSA9IChub2RlKSA9PiB7XG4gICAgICBpZiAobm9kZS5sZWZ0KSB0cmF2ZXJzZShub2RlLmxlZnQpO1xuICAgICAgdmFscy5wdXNoKG5vZGUuZGF0YSk7XG4gICAgICBpZiAobm9kZS5yaWdodCkgdHJhdmVyc2Uobm9kZS5yaWdodCk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnJvb3QpIHRyYXZlcnNlKHRoaXMucm9vdCk7XG4gICAgcmV0dXJuIHZhbHM7XG4gIH0sXG5cbiAgcG9zdE9yZGVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgdmFscyA9IFtdO1xuXG4gICAgY29uc3QgdHJhdmVyc2UgPSAobm9kZSkgPT4ge1xuICAgICAgaWYgKG5vZGUubGVmdCkgdHJhdmVyc2Uobm9kZS5sZWZ0KTtcbiAgICAgIGlmIChub2RlLnJpZ2h0KSB0cmF2ZXJzZShub2RlLnJpZ2h0KTtcbiAgICAgIHZhbHMucHVzaChub2RlLmRhdGEpO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5yb290KSB0cmF2ZXJzZSh0aGlzLnJvb3QpO1xuICAgIHJldHVybiB2YWxzO1xuICB9LFxuXG4gIG1heERlcHRoOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMucm9vdCkgcmV0dXJuIDA7XG4gICAgY29uc3QgbWF4RGVwdGggPSAobm9kZSkgPT4ge1xuICAgICAgaWYgKCFub2RlKSByZXR1cm4gMDtcbiAgICAgIHJldHVybiBNYXRoLm1heChtYXhEZXB0aChub2RlLmxlZnQpLCBtYXhEZXB0aChub2RlLnJpZ2h0KSkgKyAxO1xuICAgIH07XG5cbiAgICByZXR1cm4gbWF4RGVwdGgodGhpcy5yb290KTtcbiAgfSxcblxuICBpc1ZhbGlkOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBpc0JTVCA9IChub2RlLCBtaW4sIG1heCkgPT4ge1xuICAgICAgLy8gSWYgbm8gTm9kZSB0aGVuIHdlIGhhdmUgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSB0cmVlLlxuICAgICAgLy8gUmV0dXJuIHRydWVcbiAgICAgIGlmICghbm9kZSkgcmV0dXJuIHRydWU7XG4gICAgICAvLyBWYWxpZGF0ZSBpZiB0aGUgZGF0YSBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIG1pbiBvciBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gbWF4LlxuICAgICAgLy8gVGhlbiB0aGUgdHJlZSBpcyBub3QgYSB2YWxpZCBzZWFyY2ggdHJlZS5cbiAgICAgIGlmIChub2RlLmRhdGEgPD0gbWluIHx8IG5vZGUuZGF0YSA+PSBtYXgpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBpc0JTVChub2RlLmxlZnQsIG1pbiwgbm9kZS5kYXRhKSAmJiBpc0JTVChub2RlLnJpZ2h0LCBub2RlLmRhdGEsIG1heCk7XG4gICAgfTtcblxuICAgIHJldHVybiBpc0JTVCh0aGlzLnJvb3QsIC1JbmZpbml0eSwgSW5maW5pdHkpO1xuICB9LFxuXG4gIHBhdGhTdW06IGZ1bmN0aW9uKHN1bSkge1xuICAgIGNvbnN0IGhhc1BhdGhTdW0gPSAocm9vdCwgc3VtKSA9PiB7XG4gICAgICBpZiAoIXJvb3QpIHJldHVybiBmYWxzZTtcbiAgICAgIHN1bSAtPSByb290LmRhdGE7XG4gICAgICBpZiAoIXJvb3QubGVmdCAmJiAhcm9vdC5yaWdodCkgcmV0dXJuIHN1bSA9PT0gMDtcbiAgICAgIHJldHVybiBoYXNQYXRoU3VtKHJvb3QubGVmdCwgc3VtKSB8fCBoYXNQYXRoU3VtKHJvb3QucmlnaHQsIHN1bSk7XG4gICAgfTtcblxuICAgIHJldHVybiBoYXNQYXRoU3VtKHRoaXMucm9vdCwgc3VtKTtcbiAgfSxcblxuICBpc1N5bW1ldHJpYzogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IHZhbGlkYXRlU3ltbWV0cnkgPSAobGVmdCwgcmlnaHQpID0+IHtcbiAgICAgIGlmICghbGVmdCB8fCAhcmlnaHQpIHJldHVybiBsZWZ0ID09PSByaWdodDtcbiAgICAgIGlmIChsZWZ0LmRhdGEgIT09IHJpZ2h0LmRhdGEpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB2YWxpZGF0ZVN5bW1ldHJ5KGxlZnQubGVmdCwgcmlnaHQucmlnaHQpICYmIHZhbGlkYXRlU3ltbWV0cnkobGVmdC5yaWdodCwgcmlnaHQubGVmdCk7XG4gICAgfTtcblxuICAgIHJldHVybiB2YWxpZGF0ZVN5bW1ldHJ5KHRoaXMucm9vdC5sZWZ0LCB0aGlzLnJvb3QucmlnaHQpO1xuICB9LFxuXG4gIGdldFN1Y2Nlc3NvcjogZnVuY3Rpb24oZGF0YSkge1xuICAgIC8vIFNlYXJjaCB0aGUgbm9kZVxuICAgIGxldCBjdXJyID0gdGhpcy5zZWFyY2goZGF0YSk7XG5cbiAgICBpZiAoIWN1cnIpIHJldHVybiBudWxsO1xuICAgIC8vIENhc2UgMTogTm9kZSBoYXMgcmlnaHQgc3VidHJlZVxuICAgIGlmIChjdXJyLnJpZ2h0ICE9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLmZpbmRNaW4oY3Vyci5yaWdodCk7XG4gICAgLy8gQ2FzZSAyOiBObyByaWdodCBzdWJ0cmVlXG4gICAgbGV0IHN1Y2Nlc3NvciA9IG51bGw7XG4gICAgbGV0IGFuY2VzdG9yID0gdGhpcy5yb290O1xuXG4gICAgd2hpbGUgKGFuY2VzdG9yICE9PSBjdXJyKSB7XG4gICAgICBpZiAoY3Vyci5kYXRhIDwgYW5jZXN0b3IuZGF0YSkge1xuICAgICAgICBzdWNjZXNzb3IgPSBhbmNlc3RvcjtcbiAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5sZWZ0O1xuICAgICAgfSBlbHNlIGFuY2VzdG9yID0gYW5jZXN0b3IucmlnaHQ7XG4gICAgfVxuICAgIHJldHVybiBzdWNjZXNzb3IuZGF0YTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCaW5hcnlTZWFyY2hUcmVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7IFF1ZXVlTGlua2VkTGlzdCB9ID0gcmVxdWlyZSgnLi4vcXVldWVzJyk7XG5cbmZ1bmN0aW9uIEdyYXBoKCkge1xuICB0aGlzLm51bU9mVmVydGljZXMgPSAwO1xuICB0aGlzLmxpc3QgPSBuZXcgTWFwKCk7XG59O1xuXG5HcmFwaC5wcm90b3R5cGUgPSB7XG4gIGFkZFZlcnRleDogZnVuY3Rpb24odikge1xuICAgICsrdGhpcy5udW1PZlZlcnRpY2VzO1xuICAgIHRoaXMubGlzdC5zZXQodiwgW10pO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIGFkZEVkZ2U6IGZ1bmN0aW9uKHYsIHcpIHtcbiAgICBpZiAoIXRoaXMubGlzdC5nZXQodikpIHRoaXMuYWRkVmVydGV4KHYpO1xuICAgIHRoaXMubGlzdC5nZXQodikucHVzaCh3KTtcbiAgICBpZiAoIXRoaXMubGlzdC5nZXQodykpIHRoaXMuYWRkVmVydGV4KHcpO1xuICAgIHRoaXMubGlzdC5nZXQodykucHVzaCh2KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICB0b09iamVjdDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZyA9IHt9O1xuXG4gICAgdGhpcy5saXN0LmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGdba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBnO1xuICB9LFxuXG4gIGJmczogZnVuY3Rpb24odikge1xuICAgIGNvbnN0IHZpc2l0ZWQgPSBBcnJheSh0aGlzLm51bU9mVmVydGljZXMpLmZpbGwoZmFsc2UpO1xuICAgIGNvbnN0IHEgPSBuZXcgUXVldWVMaW5rZWRMaXN0KCk7XG5cbiAgICB2aXNpdGVkW3ZdID0gdHJ1ZTtcbiAgICBxLmVucXVldWUodik7XG5cbiAgICB3aGlsZSAoIXEuaXNFbXB0eSgpKSB7XG4gICAgICBjb25zdCBlbGVtID0gcS5kZXF1ZXVlKCk7XG4gICAgICBjb25zdCBlZGdlcyA9IHRoaXMubGlzdC5nZXQoZWxlbSk7XG5cbiAgICAgIGVkZ2VzLmZvckVhY2gobiA9PiB7XG4gICAgICAgIGlmICghdmlzaXRlZFtuXSkge1xuICAgICAgICAgIHZpc2l0ZWRbbl0gPSB0cnVlO1xuICAgICAgICAgIHEuZW5xdWV1ZShuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGRmczogZnVuY3Rpb24odikge1xuXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR3JhcGg7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBCaW5hcnlTZWFyY2hUcmVlOiByZXF1aXJlKCcuL2JpbmFyeS1zZWFyY2gtdHJlZScpLFxuICBHcmFwaDogcmVxdWlyZSgnLi9ncmFwaCcpLFxuICBsaW5rZWRMaXN0czogcmVxdWlyZSgnLi9saW5rZWQtbGlzdHMnKSxcbiAgcXVldWVzOiByZXF1aXJlKCcuL3F1ZXVlcycpLFxuICBzdGFja3M6IHJlcXVpcmUoJy4vc3RhY2tzJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHtcbiAgTGlua2VkTGlzdCxcbiAgTm9kZVxufSA9IHJlcXVpcmUoJy4vbGlua2VkLWxpc3QnKTtcblxuZnVuY3Rpb24gRG91YmxlTm9kZShkYXRhKSB7XG4gIE5vZGUuY2FsbCh0aGlzLCBkYXRhKTtcbn07XG5cbi8vIGNyZWF0ZSBjb25zdHJ1Y3RvciB3aXRoIExpbmtlZExpc3QgaW5oZXJpdGFuY2VcbmZ1bmN0aW9uIERvdWJseUxpbmtlZExpc3QoZGF0YSkge1xuICAvLyBMaW5rZWRMaXN0LmNhbGwodGhpcywgZGF0YSk7XG4gIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICB0aGlzLmhlYWQgPSBuZXcgRG91YmxlTm9kZShkYXRhWzBdKTtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgbGV0IG5ld05vZGUgPSBuZXcgRG91YmxlTm9kZShkYXRhW2ldKTtcblxuICAgICAgbmV3Tm9kZS5wcmV2ID0gY3VycjtcbiAgICAgIGN1cnIubmV4dCA9IG5ld05vZGU7XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgIH1cbiAgfVxufTtcbi8vIEluaGVyaXQgYWxsIHByb3RvdHlwZSBmcm9tIExpbmtlZExpc3RcbkRvdWJseUxpbmtlZExpc3QucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMaW5rZWRMaXN0LnByb3RvdHlwZSk7XG4vLyBvdmVyd3JpdGUgcHJvdG90eXBlc1xuLy8gUmVhc3NpZ24gY29uc3RydWN0b3IgcHJvdG90eXBlXG5Eb3VibHlMaW5rZWRMaXN0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERvdWJseUxpbmtlZExpc3Q7XG5Eb3VibHlMaW5rZWRMaXN0LnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbihkYXRhLCBpbmRleCkge1xuICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoZGF0YSk7XG5cbiAgaWYgKCF0aGlzLmhlYWQpIHtcbiAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gIH1cblxuICBpZiAoaW5kZXggPT09IDApIHtcbiAgICBjb25zdCB0ZW1wID0gdGhpcy5oZWFkO1xuXG4gICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICB0aGlzLmhlYWQubmV4dCA9IHRlbXA7XG4gICAgcmV0dXJuIHRoaXMuaGVhZDtcbiAgfVxuXG4gIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuICBsZXQgY3VyckluZGV4ID0gMTtcblxuICB3aGlsZSAoY3Vyci5uZXh0KSB7XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgY3VyckluZGV4ID09PSBpbmRleCkge1xuICAgICAgbGV0IHRlbXAgPSBjdXJyLm5leHQ7XG5cbiAgICAgIGN1cnIubmV4dCA9IG5ld05vZGU7XG4gICAgICBuZXdOb2RlLnByZXYgPSBjdXJyO1xuICAgICAgbmV3Tm9kZS5uZXh0ID0gdGVtcDtcbiAgICAgIHRlbXAucHJldiA9IG5ld05vZGU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICArK2N1cnJJbmRleDtcbiAgfVxuICBjdXJyLm5leHQgPSBuZXdOb2RlO1xuICBuZXdOb2RlLnByZXYgPSBjdXJyO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkRvdWJseUxpbmtlZExpc3QucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5oZWFkKSByZXR1cm47XG4gIGNvbnN0IGZpcnN0ID0gdGhpcy5oZWFkO1xuXG4gIHRoaXMuaGVhZCA9IGZpcnN0Lm5leHQ7XG4gIHRoaXMuaGVhZC5wcmV2ID0gbnVsbDtcbiAgcmV0dXJuIGZpcnN0LmRhdGE7XG59O1xuXG5Eb3VibHlMaW5rZWRMaXN0LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbihpbmRleCkge1xuICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIG51bGw7XG5cbiAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcbiAgbGV0IGN1cnJJbmRleCA9IDA7XG4gIGxldCBwcmV2ID0gbnVsbDtcblxuICB3aGlsZSAoY3Vyci5uZXh0KSB7XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgY3VyckluZGV4ID09PSBpbmRleCkge1xuICAgICAgY29uc3QgbmV4dCA9IGN1cnIubmV4dDtcblxuICAgICAgcHJldi5uZXh0ID0gbmV4dDtcbiAgICAgIG5leHQucHJldiA9IHByZXY7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcHJldiA9IGN1cnI7XG4gICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICArK2N1cnJJbmRleDtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbkRvdWJseUxpbmtlZExpc3QucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLmhlYWQpIHJldHVybiBudWxsO1xuICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcbiAgbGV0IHByZXYgPSBudWxsO1xuXG4gIHdoaWxlIChjdXJyKSB7XG4gICAgbGV0IG5leHQgPSBjdXJyLm5leHQ7XG5cbiAgICBjdXJyLm5leHQgPSBwcmV2O1xuICAgIGlmIChwcmV2KSBwcmV2LnByZXYgPSBjdXJyO1xuICAgIHByZXYgPSBjdXJyO1xuICAgIGN1cnIgPSBuZXh0O1xuICB9XG4gIHRoaXMuaGVhZCA9IHByZXY7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXZlcnNlIExpbmsgbGlzdCByZWN1cnNpdmVseVxuICogQHBhcmFtICB7W3R5cGVdfSBub2RlIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbkRvdWJseUxpbmtlZExpc3QucHJvdG90eXBlLnJldmVyc2VSZWN1cnNpb24gPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmV2ZXJzZSA9IChub2RlKSA9PiB7XG4gICAgaWYgKCFub2RlIHx8ICFub2RlLm5leHQpIHJldHVybjtcbiAgICByZXZlcnNlKG5vZGUubmV4dCk7XG4gICAgY29uc3QgdGVtcCA9IG5vZGUubmV4dDtcblxuICAgIHRlbXAubmV4dCA9IG5vZGU7XG4gICAgbm9kZS5wcmV2ID0gdGVtcDtcbiAgICBub2RlLm5leHQgPSBudWxsO1xuICB9O1xuXG4gIHJldmVyc2UodGhpcy5oZWFkKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERvdWJseUxpbmtlZExpc3Q7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHsgTGlua2VkTGlzdCB9ID0gcmVxdWlyZSgnLi9saW5rZWQtbGlzdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRG91Ymx5TGlua2VkTGlzdDogcmVxdWlyZSgnLi9kb3VibHktbGlua2VkLWxpc3QnKSxcbiAgTGlua2VkTGlzdDogTGlua2VkTGlzdFxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogTm9kZSBmb3IgbGluayBsaXN0XG4gKiBAcGFyYW0gICAgICAge1t0eXBlXX0gZGF0YSBbZGVzY3JpcHRpb25dXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTm9kZShkYXRhKSB7XG4gIHRoaXMuZGF0YSA9IGRhdGE7XG59XG4vKipcbiAqIENyZWF0ZSBMaW5rIGxpc3RcbiAqIEBwYXJhbSAgICAgICB7W3R5cGVdfSBkYXRhIFtkZXNjcmlwdGlvbl1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBMaW5rZWRMaXN0KGRhdGEpIHtcbiAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgIHRoaXMuaGVhZCA9IG5ldyBOb2RlKGRhdGFbMF0pO1xuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBkYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgICBjdXJyLm5leHQgPSBuZXcgTm9kZShkYXRhW2ldKTtcbiAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgfVxuICB9XG59O1xuLyoqXG4gKiBQcmludCBMaW5rIGxpc3QgaW4gcmVjdXJzaXZlIGZhc2hpb25cbiAqIEBwYXJhbSAge1t0eXBlXX0gbm9kZSBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5MaW5rZWRMaXN0LnByaW50UmVjdXJzaW9uID0gZnVuY3Rpb24obm9kZSkge1xuICBpZiAoIW5vZGUpIHJldHVybiBudWxsO1xuICByZXR1cm4gTGlua2VkTGlzdC5wcmludFJlY3Vyc2lvbihub2RlLm5leHQpO1xufTtcblxuTGlua2VkTGlzdC5wcm90b3R5cGUgPSB7XG4gIC8qKlxuICAgKiBQcmludCBhbGwgdmFsdWVzIGluIGEgbGlua2xpc3RcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBwcmludDogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG5cbiAgICB3aGlsZSAoY3Vycikge1xuICAgICAgY29uc29sZS5sb2coY3Vyci5kYXRhKTtcbiAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGxpbmsgbGlzdCB0byBhcnJheVxuICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHRvQXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG5cbiAgICB3aGlsZSAoY3Vycikge1xuICAgICAgYXJyYXkucHVzaChjdXJyLmRhdGEpO1xuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9LFxuXG4gIC8qKlxuICAgKiBJbnNlcnQgdmFsdWUgaW4gbGlua2xpc3QgYXQgaW5kZXggb3IgZW5kXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gZGF0YSAgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGluZGV4IFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBpbnNlcnQ6IGZ1bmN0aW9uKGRhdGEsIGluZGV4KSB7XG4gICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKGRhdGEpO1xuXG4gICAgaWYgKCF0aGlzLmhlYWQpIHtcbiAgICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLmhlYWQ7XG5cbiAgICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgICB0aGlzLmhlYWQubmV4dCA9IHRlbXA7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcbiAgICBsZXQgY3VyckluZGV4ID0gMTtcblxuICAgIHdoaWxlIChjdXJyLm5leHQpIHtcbiAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGN1cnJJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBjdXJyLm5leHQ7XG5cbiAgICAgICAgY3Vyci5uZXh0ID0gbmV3Tm9kZTtcbiAgICAgICAgbmV3Tm9kZS5uZXh0ID0gdGVtcDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgICAgKytjdXJySW5kZXg7XG4gICAgfVxuICAgIGN1cnIubmV4dCA9IG5ld05vZGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBmaXJzdCBub2RlIGluIGxpbmsgbGlzdFxuICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHNoaWZ0OiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZmlyc3QgPSB0aGlzLmhlYWQ7XG5cbiAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICByZXR1cm4gZmlyc3QuZGF0YTtcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlIGxhc3Qgbm9kZSBpbiBsaW5rIGxpdFxuICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHBvcDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmhlYWQpIHJldHVybiBudWxsO1xuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuICAgIGxldCBwcmV2ID0gbnVsbDtcblxuICAgIHdoaWxlIChjdXJyLm5leHQpIHtcbiAgICAgIHByZXYgPSBjdXJyO1xuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICB9XG4gICAgcHJldi5uZXh0ID0gbnVsbDtcbiAgICByZXR1cm4gY3Vyci5kYXRhO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEZWxldGUgbm9kZSBpbiBsaW5rIGxpc3QgYXQgaW5kZXhcbiAgICogQHBhcmFtICB7W3R5cGVdfSBpbmRleCBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgZGVsZXRlOiBmdW5jdGlvbihpbmRleCkge1xuICAgIGlmICghdGhpcy5oZWFkKSByZXR1cm4gbnVsbDtcblxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcbiAgICBsZXQgY3VyckluZGV4ID0gMDtcbiAgICBsZXQgcHJldiA9IG51bGw7XG5cbiAgICB3aGlsZSAoY3Vyci5uZXh0KSB7XG4gICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBjdXJySW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgIHByZXYubmV4dCA9IGN1cnIubmV4dDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBwcmV2ID0gY3VycjtcbiAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgICArK2N1cnJJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8qKlxuICAgKiBSZXZlcnNlIExpbmtMaXN0XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgcmV2ZXJzZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmhlYWQpIHJldHVybiBudWxsO1xuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuICAgIGxldCBwcmV2ID0gbnVsbDtcblxuICAgIHdoaWxlIChjdXJyKSB7XG4gICAgICBsZXQgbmV4dCA9IGN1cnIubmV4dDtcblxuICAgICAgY3Vyci5uZXh0ID0gcHJldjtcbiAgICAgIHByZXYgPSBjdXJyO1xuICAgICAgY3VyciA9IG5leHQ7XG4gICAgfVxuICAgIHRoaXMuaGVhZCA9IHByZXY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldmVyc2UgTGluayBsaXN0IHJlY3Vyc2l2ZWx5XG4gICAqIEBwYXJhbSAge1t0eXBlXX0gbm9kZSBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICByZXZlcnNlUmVjdXJzaW9uOiBmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKCFub2RlLm5leHQpIHtcbiAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmV2ZXJzZVJlY3Vyc2lvbihub2RlLm5leHQpO1xuICAgIGxldCB0ZW1wID0gbm9kZS5uZXh0O1xuXG4gICAgdGVtcC5uZXh0ID0gbm9kZTtcbiAgICBub2RlLm5leHQgPSBudWxsO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgTGlua2VkTGlzdDogTGlua2VkTGlzdCxcbiAgTm9kZTogTm9kZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gUXVldWVBcnJheSgpIHtcbiAgdGhpcy5fcXVldWUgPSBBcnJheSgxMCkuZmlsbChudWxsKTtcbiAgdGhpcy5fZnJvbnQgPSAtMTtcbiAgdGhpcy5fcmVhciA9IC0xO1xufVxuXG5RdWV1ZUFycmF5LnByb3RvdHlwZSA9IHtcbiAgZW5xdWV1ZTogZnVuY3Rpb24oeCkge1xuICAgIGlmICgodGhpcy5fcmVhciArIDEpICUgdGhpcy5fcXVldWUubGVuZ3RoID09PSB0aGlzLl9mcm9udCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgdGhpcy5fcmVhciA9IHRoaXMuX2Zyb250ID0gMDtcbiAgICBlbHNlIHRoaXMuX3JlYXIgPSAodGhpcy5fcmVhciArIDEpICUgdGhpcy5fcXVldWUubGVuZ3RoO1xuICAgIHRoaXMuX3F1ZXVlW3RoaXMuX3JlYXJdID0geDtcbiAgfSxcblxuICBkZXF1ZXVlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybjtcbiAgICBsZXQgdmFsO1xuXG4gICAgaWYgKHRoaXMuX2Zyb250ID09PSB0aGlzLl9yZWFyKSB7XG4gICAgICB2YWwgPSB0aGlzLl9xdWV1ZVt0aGlzLl9mcm9udF07XG4gICAgICB0aGlzLl9mcm9udCA9IHRoaXMuX3JlYXIgPSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsID0gdGhpcy5fcXVldWVbdGhpcy5fZnJvbnRdO1xuICAgICAgKyt0aGlzLl9mcm9udDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfSxcblxuICBmcm9udDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXVlW3RoaXMuX2Zyb250XTtcbiAgfSxcblxuICBpc0VtcHR5OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbnQgPT09IC0gMSAmJiB0aGlzLl9yZWFyID09PSAtMTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZUFycmF5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUXVldWVBcnJheTogcmVxdWlyZSgnLi9hcnJheScpLFxuICBRdWV1ZUxpbmtlZExpc3Q6IHJlcXVpcmUoJy4vbGlua2VkLWxpc3QnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gTm9kZSh2YWwpIHtcbiAgdGhpcy5kYXRhID0gdmFsO1xufVxuXG5mdW5jdGlvbiBRdWV1ZUxpbmtMaXN0KCkge31cblxuUXVldWVMaW5rTGlzdC5wcm90b3R5cGUgPSB7XG4gIGVucXVldWU6IGZ1bmN0aW9uKHZhbCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgdGhpcy5fcmVhciA9IHRoaXMuX2Zyb250ID0gbmV3IE5vZGUodmFsKTtcbiAgICBlbHNlIHRoaXMuX3JlYXIgPSB0aGlzLl9yZWFyLm5leHQgPSBuZXcgTm9kZSh2YWwpO1xuICB9LFxuXG4gIGRlcXVldWU6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9mcm9udDtcblxuICAgIGlmIChub2RlID09PSB0aGlzLl9yZWFyKSB0aGlzLl9yZWFyID0gdGhpcy5fZnJvbnQgPSB1bmRlZmluZWQ7XG4gICAgZWxzZSBpZiAobm9kZS5uZXh0KSB0aGlzLl9mcm9udCA9IG5vZGUubmV4dDtcbiAgICByZXR1cm4gbm9kZS5kYXRhO1xuICB9LFxuXG4gIGZyb250OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbnQuZGF0YTtcbiAgfSxcblxuICBpc0VtcHR5OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbnQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLl9yZWFyID09PSB1bmRlZmluZWQ7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVldWVMaW5rTGlzdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gU3RhY2tBcnJheSgpIHtcbiAgdGhpcy5fc3RhY2sgPSBbXTtcbiAgdGhpcy5fdG9wID0gLTE7XG59XG5cblN0YWNrQXJyYXkucHJvdG90eXBlID0ge1xuICBwdXNoOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgKyt0aGlzLl90b3A7XG4gICAgaWYgKHRoaXMuX3N0YWNrLmxlbmd0aCA+PSB0aGlzLl90b3AgKyAxKSB0aGlzLl9zdGFja1t0aGlzLl90b3BdID0gZGF0YTtcbiAgICBlbHNlIHRoaXMuX3N0YWNrLnB1c2goZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWNrO1xuICB9LFxuXG4gIHBvcDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm47XG4gICAgY29uc3QgdG9wID0gdGhpcy5fc3RhY2tbdGhpcy5fdG9wXTtcblxuICAgIHRoaXMuX3N0YWNrW3RoaXMuX3RvcF0gPSB1bmRlZmluZWQ7XG4gICAgLS10aGlzLl90b3A7XG4gICAgcmV0dXJuIHRvcDtcbiAgfSxcblxuICB0b3A6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFja1t0aGlzLl90b3BdO1xuICB9LFxuXG4gIGlzRW1wdHk6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl90b3AgPT09IC0xO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrQXJyYXk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBTdGFja0FycmF5OiByZXF1aXJlKCcuL2FycmF5JyksXG4gIFN0YWNrTGlua2VkTGlzdDogcmVxdWlyZSgnLi9saW5rZWQtbGlzdCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBOb2RlIGZvciBsaW5rIGxpc3RcbiAqIEBwYXJhbSAgICAgICB7W3R5cGVdfSBkYXRhIFtkZXNjcmlwdGlvbl1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBOb2RlKGRhdGEpIHtcbiAgdGhpcy5kYXRhID0gZGF0YTtcbn1cbi8qKlxuICogQ3JlYXRlIExpbmsgbGlzdFxuICogQHBhcmFtICAgICAgIHtbdHlwZV19IGRhdGEgW2Rlc2NyaXB0aW9uXVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFN0YWNrTGlua2VkTGlzdCgpIHt9XG4vKipcbiAqIFByaW50IExpbmsgbGlzdCBpbiByZWN1cnNpdmUgZmFzaGlvblxuICogQHBhcmFtICB7W3R5cGVdfSBub2RlIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG4gKi9cblN0YWNrTGlua2VkTGlzdC5wcmludFJlY3Vyc2lvbiA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgaWYgKCFub2RlKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIFN0YWNrTGlua2VkTGlzdC5wcmludFJlY3Vyc2lvbihub2RlLm5leHQpO1xufTtcblxuU3RhY2tMaW5rZWRMaXN0LnByb3RvdHlwZSA9IHtcbiAgLyoqXG4gICAqIFByaW50IGFsbCB2YWx1ZXMgaW4gYSBsaW5rbGlzdFxuICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHByaW50OiBmdW5jdGlvbigpIHtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcblxuICAgIHdoaWxlIChjdXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhjdXJyLmRhdGEpO1xuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnZlcnQgbGluayBsaXN0IHRvIGFycmF5XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcblxuICAgIHdoaWxlIChjdXJyKSB7XG4gICAgICBhcnJheS5wdXNoKGN1cnIuZGF0YSk7XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluc2VydCB2YWx1ZSBpbiBsaW5rbGlzdCBhdCBpbmRleCBvciBlbmRcbiAgICogQHBhcmFtICB7W3R5cGVdfSBkYXRhICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gaW5kZXggW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHB1c2g6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoZGF0YSk7XG5cbiAgICBuZXdOb2RlLm5leHQgPSB0aGlzLmhlYWQ7XG4gICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlIGZpcnN0IG5vZGUgaW4gbGluayBsaXN0XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgcG9wOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZmlyc3QgPSB0aGlzLmhlYWQ7XG5cbiAgICB0aGlzLmhlYWQgPSBmaXJzdC5uZXh0O1xuICAgIHJldHVybiBmaXJzdC5kYXRhO1xuICB9LFxuXG4gIHRvcDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVhZC5kYXRhO1xuICB9LFxuXG4gIGlzRW1wdHk6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhdGhpcy5oZWFkO1xuICB9LFxuXG4gIC8qKlxuICAgKiBMaW5rTGlzdCByZXZlcnNhbCB1c2luZyBzdGFja3MgaXMgYW4gTyhOICsgTSkgdGltZSBhbmQgc3BhY2UgY29tcGxleGl0eVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGxpbmtMaXN0IFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICByZXZlcnNlOiBmdW5jdGlvbigpIHtcbiAgICAvLyBDcmVhdGUgYSBzdGFjayB0byBzdG9yZSB0aGUgbGlua2xpc3QgdmFsdWVzXG4gICAgY29uc3Qgc3RhY2sgPSBuZXcgU3RhY2tMaW5rZWRMaXN0KCk7XG5cbiAgICAvLyBwdXNoIGFsbCBsaW5rIGxpc3QgdmFsdWVzIGluIHN0YWNrIGJ5IHNoaWZ0aW5nIHRoZSBmaXJzdCB2YWx1ZS5cbiAgICB3aGlsZSAodGhpcy5oZWFkKSBzdGFjay5wdXNoKHRoaXMuc2hpZnQoKSk7XG4gICAgLy8gcmUtaW5zZXJ0IGFsbCBvZiB0aGUgbGluayBsaXN0IHZhbHVlcyBieSBwb3BwaW5nIHRoZSBzdGFja1xuICAgIHdoaWxlICghc3RhY2suaXNFbXB0eSgpKSB0aGlzLmluc2VydChzdGFjay5wb3AoKSk7XG4gICAgLy8gcmV0dXJuIHRoZSBuZXcgc3RhY2tcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFja0xpbmtlZExpc3Q7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBkYXRhU3RydWN0dXJlcyBmcm9tICcuL2RhdGEtc3RydWN0dXJlcyc7XG5pbXBvcnQgYWxnb3JpdGhtcyBmcm9tICcuL2FsZ29yaXRobXMnO1xuXG5leHBvcnQge1xuICBkYXRhU3RydWN0dXJlcyxcbiAgYWxnb3JpdGhtc1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=