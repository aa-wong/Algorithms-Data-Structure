(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Algorithms", [], factory);
	else if(typeof exports === 'object')
		exports["Algorithms"] = factory();
	else
		root["Algorithms"] = factory();
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

/***/ "./src/data-structures/index.js":
/*!**************************************!*\
  !*** ./src/data-structures/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  BinarySearchTree: __webpack_require__(/*! ./binary-search-tree */ "./src/data-structures/binary-search-tree/index.js"),
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
/***/ (function(module, exports) {

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
Object.defineProperty(exports, "DataStructures", {
  enumerable: true,
  get: function get() {
    return _dataStructures.default;
  }
});

var _dataStructures = _interopRequireDefault(__webpack_require__(/*! ./data-structures */ "./src/data-structures/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BbGdvcml0aG1zL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BbGdvcml0aG1zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FsZ29yaXRobXMvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL2JpbmFyeS1zZWFyY2gtdHJlZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9BbGdvcml0aG1zLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9BbGdvcml0aG1zLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9saW5rZWQtbGlzdHMvZG91Ymx5LWxpbmtlZC1saXN0LmpzIiwid2VicGFjazovL0FsZ29yaXRobXMvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL2xpbmtlZC1saXN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9BbGdvcml0aG1zLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9saW5rZWQtbGlzdHMvbGlua2VkLWxpc3QuanMiLCJ3ZWJwYWNrOi8vQWxnb3JpdGhtcy8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvcXVldWVzL2FycmF5LmpzIiwid2VicGFjazovL0FsZ29yaXRobXMvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL3F1ZXVlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9BbGdvcml0aG1zLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9xdWV1ZXMvbGlua2VkLWxpc3QuanMiLCJ3ZWJwYWNrOi8vQWxnb3JpdGhtcy8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvc3RhY2tzL2FycmF5LmpzIiwid2VicGFjazovL0FsZ29yaXRobXMvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL3N0YWNrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9BbGdvcml0aG1zLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9zdGFja3MvbGlua2VkLWxpc3QuanMiLCJ3ZWJwYWNrOi8vQWxnb3JpdGhtcy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJOb2RlIiwidmFsIiwiX2RhdGEiLCJwcm90b3R5cGUiLCJkYXRhIiwibGVmdCIsIl9sZWZ0Iiwibm9kZSIsImNvbnN0cnVjdG9yIiwiTnVtYmVyIiwicmlnaHQiLCJfcmlnaHQiLCJpbnNlcnQiLCJzZWFyY2giLCJCaW5hcnlTZWFyY2hUcmVlIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsIm4iLCJfcm9vdCIsInJvb3QiLCJoYXMiLCJmaW5kTWluIiwiZ2V0TWluIiwiZmluZE1heCIsImdldE1heCIsImRlbGV0ZSIsImRlbGV0ZU5vZGUiLCJ0ZW1wIiwibGV2ZWxPcmRlciIsInZhbHMiLCJxdWV1ZSIsInB1c2giLCJsZW5ndGgiLCJjdXJyIiwic2hpZnQiLCJwcmVPcmRlciIsInRyYXZlcnNlIiwiaW5PcmRlciIsInBvc3RPcmRlciIsIm1heERlcHRoIiwiTWF0aCIsIm1heCIsImlzVmFsaWQiLCJpc0JTVCIsIm1pbiIsIkluZmluaXR5IiwicGF0aFN1bSIsInN1bSIsImhhc1BhdGhTdW0iLCJpc1N5bW1ldHJpYyIsInZhbGlkYXRlU3ltbWV0cnkiLCJnZXRTdWNjZXNzb3IiLCJ1bmRlZmluZWQiLCJzdWNjZXNzb3IiLCJhbmNlc3RvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwibGlua2VkTGlzdHMiLCJxdWV1ZXMiLCJzdGFja3MiLCJMaW5rZWRMaXN0IiwiRG91YmxlTm9kZSIsImNhbGwiLCJEb3VibHlMaW5rZWRMaXN0IiwiaGVhZCIsImkiLCJuZXdOb2RlIiwicHJldiIsIm5leHQiLCJPYmplY3QiLCJjcmVhdGUiLCJpbmRleCIsImN1cnJJbmRleCIsImZpcnN0IiwicmV2ZXJzZSIsInJldmVyc2VSZWN1cnNpb24iLCJwcmludFJlY3Vyc2lvbiIsInByaW50IiwiY29uc29sZSIsImxvZyIsInRvQXJyYXkiLCJhcnJheSIsInBvcCIsIlF1ZXVlQXJyYXkiLCJfcXVldWUiLCJmaWxsIiwiX2Zyb250IiwiX3JlYXIiLCJlbnF1ZXVlIiwieCIsImlzRW1wdHkiLCJkZXF1ZXVlIiwiZnJvbnQiLCJRdWV1ZUxpbmtlZExpc3QiLCJRdWV1ZUxpbmtMaXN0IiwiU3RhY2tBcnJheSIsIl9zdGFjayIsIl90b3AiLCJ0b3AiLCJTdGFja0xpbmtlZExpc3QiLCJzdGFjayJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7O0FBRWIsU0FBU0EsSUFBVCxDQUFjQyxHQUFkLEVBQW1CO0FBQ2pCLE9BQUtDLEtBQUwsR0FBYUQsR0FBYjtBQUNEOztBQUFBO0FBRURELElBQUksQ0FBQ0csU0FBTCxHQUFpQjtBQUNmLE1BQUlDLElBQUosR0FBVztBQUNULFdBQU8sS0FBS0YsS0FBWjtBQUNELEdBSGM7O0FBS2YsTUFBSUUsSUFBSixDQUFTSCxHQUFULEVBQWM7QUFDWixTQUFLQyxLQUFMLEdBQWFELEdBQWI7QUFDRCxHQVBjOztBQVNmLE1B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QjRDLGVBQWpCLEM7Ozs7Ozs7Ozs7OztBQ3pHYTs7Ozs7Ozs7Ozs7O0FBRWIiLCJmaWxlIjoiQWxnb3JpdGhtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQWxnb3JpdGhtc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBbGdvcml0aG1zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFsZ29yaXRobXNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIE5vZGUodmFsKSB7XG4gIHRoaXMuX2RhdGEgPSB2YWw7XG59O1xuXG5Ob2RlLnByb3RvdHlwZSA9IHtcbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH0sXG5cbiAgc2V0IGRhdGEodmFsKSB7XG4gICAgdGhpcy5fZGF0YSA9IHZhbDtcbiAgfSxcblxuICBnZXQgbGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVmdDtcbiAgfSxcblxuICBzZXQgbGVmdChub2RlKSB7XG4gICAgaWYgKG5vZGUgJiYgbm9kZS5jb25zdHJ1Y3RvciA9PT0gTnVtYmVyKSB0aGlzLl9sZWZ0ID0gbmV3IE5vZGUobm9kZSk7XG4gICAgZWxzZSB0aGlzLl9sZWZ0ID0gbm9kZTtcbiAgfSxcblxuICBnZXQgcmlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JpZ2h0O1xuICB9LFxuXG4gIHNldCByaWdodChub2RlKSB7XG4gICAgaWYgKG5vZGUgJiYgbm9kZS5jb25zdHJ1Y3RvciA9PT0gTnVtYmVyKSB0aGlzLl9yaWdodCA9IG5ldyBOb2RlKG5vZGUpO1xuICAgIGVsc2UgdGhpcy5fcmlnaHQgPSBub2RlO1xuICB9LFxuXG4gIGluc2VydDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICghdGhpcy5kYXRhKSB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIGVsc2UgaWYgKGRhdGEgPiB0aGlzLmRhdGEpIHtcbiAgICAgIGlmICh0aGlzLnJpZ2h0KSB0aGlzLnJpZ2h0Lmluc2VydChkYXRhKTtcbiAgICAgIGVsc2UgdGhpcy5yaWdodCA9IGRhdGE7XG4gICAgfSBlbHNlIGlmIChkYXRhIDwgdGhpcy5kYXRhKSB7XG4gICAgICBpZiAodGhpcy5sZWZ0KSB0aGlzLmxlZnQuaW5zZXJ0KGRhdGEpO1xuICAgICAgZWxzZSB0aGlzLmxlZnQgPSBkYXRhO1xuICAgIH1cbiAgfSxcblxuICBzZWFyY2g6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSkgcmV0dXJuIG51bGw7XG4gICAgaWYgKGRhdGEgPT09IHRoaXMuZGF0YSkgcmV0dXJuIHRoaXM7XG4gICAgaWYgKGRhdGEgPiB0aGlzLmRhdGEgJiYgdGhpcy5yaWdodCkgcmV0dXJuIHRoaXMucmlnaHQuc2VhcmNoKGRhdGEpO1xuICAgIGlmIChkYXRhIDwgdGhpcy5kYXRhICYmIHRoaXMubGVmdCkgcmV0dXJuIHRoaXMubGVmdC5zZWFyY2goZGF0YSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIEJpbmFyeVNlYXJjaFRyZWUoZGF0YSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkgZGF0YS5mb3JFYWNoKG4gPT4gdGhpcy5pbnNlcnQobikpO1xuICBlbHNlIHRoaXMuX3Jvb3QgPSBuZXcgTm9kZShkYXRhKTtcbn07XG5cbkJpbmFyeVNlYXJjaFRyZWUucHJvdG90eXBlID0ge1xuICBnZXQgcm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdDtcbiAgfSxcblxuICBzZXQgcm9vdChub2RlKSB7XG4gICAgdGhpcy5fcm9vdCA9IG5vZGU7XG4gIH0sXG5cbiAgaW5zZXJ0OiBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKCF0aGlzLnJvb3QpIHRoaXMucm9vdCA9IG5ldyBOb2RlKGRhdGEpO1xuICAgIGVsc2UgdGhpcy5yb290Lmluc2VydChkYXRhKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBoYXM6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMucm9vdCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0aGlzLnJvb3Quc2VhcmNoKGRhdGEpICE9PSBudWxsO1xuICB9LFxuXG4gIHNlYXJjaDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICghdGhpcy5yb290KSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5yb290LnNlYXJjaChkYXRhKTtcbiAgfSxcblxuICBmaW5kTWluOiBmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybjtcbiAgICBjb25zdCBnZXRNaW4gPSAobm9kZSkgPT4ge1xuICAgICAgaWYgKG5vZGUubGVmdCkgcmV0dXJuIGdldE1pbihub2RlLmxlZnQpO1xuICAgICAgcmV0dXJuIG5vZGUuZGF0YTtcbiAgICB9O1xuXG4gICAgcmV0dXJuICFub2RlID8gZ2V0TWluKHRoaXMucm9vdCkgOiBnZXRNaW4obm9kZSk7XG4gIH0sXG5cbiAgZmluZE1heDogZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICghdGhpcy5yb290KSByZXR1cm47XG4gICAgY29uc3QgZ2V0TWF4ID0gKG5vZGUpID0+IHtcbiAgICAgIGlmIChub2RlLnJpZ2h0KSByZXR1cm4gZ2V0TWF4KG5vZGUucmlnaHQpO1xuICAgICAgcmV0dXJuIG5vZGUuZGF0YTtcbiAgICB9O1xuXG4gICAgcmV0dXJuICFub2RlID8gZ2V0TWF4KHRoaXMucm9vdCkgOiBnZXRNYXgobm9kZSk7XG4gIH0sXG5cbiAgZGVsZXRlOiBmdW5jdGlvbih2YWwpIHtcbiAgICBjb25zdCBkZWxldGVOb2RlID0gKHJvb3QsIHZhbCkgPT4ge1xuICAgICAgLy8gSWYgTm8gTm9kZSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICBpZiAoIXJvb3QpIHJldHVybjtcbiAgICAgIC8vIElmIHZhbCBpcyBsZXNzIHRoYW4gY3VycmVudCBub2RlIGRhdGEuIENvbnRpbnVlIG9uIHRvIGxlZnQgY2hpbGQuXG4gICAgICBpZiAodmFsIDwgcm9vdC5kYXRhKSByZXR1cm4gZGVsZXRlTm9kZShyb290LmxlZnQsIHZhbCwgcm9vdCk7XG4gICAgICAvLyBJZiB2YWwgaXMgZ3JlYXRlciB0aGFuIGN1cnJlbnQgbm9kZSBkYXRhLiBDb250aW51ZSBvbiB0byByaWdodCBjaGlsZC5cbiAgICAgIGlmICh2YWwgPiByb290LmRhdGEpIHJldHVybiBkZWxldGVOb2RlKHJvb3QucmlnaHQsIHZhbCwgcm9vdCk7XG4gICAgICAvLyBDYXNlIDE6IE5vIGNoaWxkcmVuLCBkZWFsbG9jYXRlIGNoaWxkIGZyb20gcGFyZW50XG4gICAgICBpZiAocm9vdC5sZWZ0ICYmIHJvb3QucmlnaHQpIHtcbiAgICAgICAgLy8gQ2FzZSAzOiBpZiAyIGNoaWxkcmVuXG4gICAgICAgIC8vIEZpbmQgbWluaW11bSB2YWx1ZSBvZiB0aGUgcmlnaHQgbm9kZVxuICAgICAgICBsZXQgdGVtcCA9IHJvb3QucmlnaHQ7XG5cbiAgICAgICAgd2hpbGUgKHRlbXAubGVmdCkgdGVtcCA9IHRlbXAubGVmdDtcbiAgICAgICAgLy8gd3JpdGUgbm9kZSBkYXRhIHRvIHRoZSBtaW5pbXVtIHZhbHVlc1xuICAgICAgICByb290LmRhdGEgPSB0ZW1wLmRhdGE7XG4gICAgICAgIC8vIE1vdmUgb24gdG8gdGhlIHJpZ2h0IGFuZCBjb250aW51ZSBvblxuICAgICAgICByb290LnJpZ2h0ID0gZGVsZXRlTm9kZShyb290LnJpZ2h0LCB0ZW1wLmRhdGEpO1xuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByb290LmxlZnQgfHwgcm9vdC5yaWdodDtcbiAgICB9O1xuXG4gICAgZGVsZXRlTm9kZSh0aGlzLnJvb3QsIHZhbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgbGV2ZWxPcmRlcjogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgdmFscyA9IFtdO1xuXG4gICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgY29uc3QgcXVldWUgPSBbXTtcblxuICAgICAgcXVldWUucHVzaCh0aGlzLnJvb3QpO1xuICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGN1cnIgPSBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgICAgIHZhbHMucHVzaChjdXJyLmRhdGEpO1xuICAgICAgICBpZiAoY3Vyci5sZWZ0KSBxdWV1ZS5wdXNoKGN1cnIubGVmdCk7XG4gICAgICAgIGlmIChjdXJyLnJpZ2h0KSBxdWV1ZS5wdXNoKGN1cnIucmlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFscztcbiAgfSxcblxuICBwcmVPcmRlcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IHZhbHMgPSBbXTtcblxuICAgIGNvbnN0IHRyYXZlcnNlID0gKG5vZGUpID0+IHtcbiAgICAgIHZhbHMucHVzaChub2RlLmRhdGEpO1xuICAgICAgaWYgKG5vZGUubGVmdCkgdHJhdmVyc2Uobm9kZS5sZWZ0KTtcbiAgICAgIGlmIChub2RlLnJpZ2h0KSB0cmF2ZXJzZShub2RlLnJpZ2h0KTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucm9vdCkgdHJhdmVyc2UodGhpcy5yb290KTtcbiAgICByZXR1cm4gdmFscztcbiAgfSxcblxuICBpbk9yZGVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgdmFscyA9IFtdO1xuXG4gICAgY29uc3QgdHJhdmVyc2UgPSAobm9kZSkgPT4ge1xuICAgICAgaWYgKG5vZGUubGVmdCkgdHJhdmVyc2Uobm9kZS5sZWZ0KTtcbiAgICAgIHZhbHMucHVzaChub2RlLmRhdGEpO1xuICAgICAgaWYgKG5vZGUucmlnaHQpIHRyYXZlcnNlKG5vZGUucmlnaHQpO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5yb290KSB0cmF2ZXJzZSh0aGlzLnJvb3QpO1xuICAgIHJldHVybiB2YWxzO1xuICB9LFxuXG4gIHBvc3RPcmRlcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IHZhbHMgPSBbXTtcblxuICAgIGNvbnN0IHRyYXZlcnNlID0gKG5vZGUpID0+IHtcbiAgICAgIGlmIChub2RlLmxlZnQpIHRyYXZlcnNlKG5vZGUubGVmdCk7XG4gICAgICBpZiAobm9kZS5yaWdodCkgdHJhdmVyc2Uobm9kZS5yaWdodCk7XG4gICAgICB2YWxzLnB1c2gobm9kZS5kYXRhKTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucm9vdCkgdHJhdmVyc2UodGhpcy5yb290KTtcbiAgICByZXR1cm4gdmFscztcbiAgfSxcblxuICBtYXhEZXB0aDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybiAwO1xuICAgIGNvbnN0IG1heERlcHRoID0gKG5vZGUpID0+IHtcbiAgICAgIGlmICghbm9kZSkgcmV0dXJuIDA7XG4gICAgICByZXR1cm4gTWF0aC5tYXgobWF4RGVwdGgobm9kZS5sZWZ0KSwgbWF4RGVwdGgobm9kZS5yaWdodCkpICsgMTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG1heERlcHRoKHRoaXMucm9vdCk7XG4gIH0sXG5cbiAgaXNWYWxpZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaXNCU1QgPSAobm9kZSwgbWluLCBtYXgpID0+IHtcbiAgICAgIC8vIElmIG5vIE5vZGUgdGhlbiB3ZSBoYXZlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgdHJlZS5cbiAgICAgIC8vIFJldHVybiB0cnVlXG4gICAgICBpZiAoIW5vZGUpIHJldHVybiB0cnVlO1xuICAgICAgLy8gVmFsaWRhdGUgaWYgdGhlIGRhdGEgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHRoZSBtaW4gb3IgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIG1heC5cbiAgICAgIC8vIFRoZW4gdGhlIHRyZWUgaXMgbm90IGEgdmFsaWQgc2VhcmNoIHRyZWUuXG4gICAgICBpZiAobm9kZS5kYXRhIDw9IG1pbiB8fCBub2RlLmRhdGEgPj0gbWF4KSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gaXNCU1Qobm9kZS5sZWZ0LCBtaW4sIG5vZGUuZGF0YSkgJiYgaXNCU1Qobm9kZS5yaWdodCwgbm9kZS5kYXRhLCBtYXgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gaXNCU1QodGhpcy5yb290LCAtSW5maW5pdHksIEluZmluaXR5KTtcbiAgfSxcblxuICBwYXRoU3VtOiBmdW5jdGlvbihzdW0pIHtcbiAgICBjb25zdCBoYXNQYXRoU3VtID0gKHJvb3QsIHN1bSkgPT4ge1xuICAgICAgaWYgKCFyb290KSByZXR1cm4gZmFsc2U7XG4gICAgICBzdW0gLT0gcm9vdC5kYXRhO1xuICAgICAgaWYgKCFyb290LmxlZnQgJiYgIXJvb3QucmlnaHQpIHJldHVybiBzdW0gPT09IDA7XG4gICAgICByZXR1cm4gaGFzUGF0aFN1bShyb290LmxlZnQsIHN1bSkgfHwgaGFzUGF0aFN1bShyb290LnJpZ2h0LCBzdW0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gaGFzUGF0aFN1bSh0aGlzLnJvb3QsIHN1bSk7XG4gIH0sXG5cbiAgaXNTeW1tZXRyaWM6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5yb290KSByZXR1cm4gdHJ1ZTtcbiAgICBjb25zdCB2YWxpZGF0ZVN5bW1ldHJ5ID0gKGxlZnQsIHJpZ2h0KSA9PiB7XG4gICAgICBpZiAoIWxlZnQgfHwgIXJpZ2h0KSByZXR1cm4gbGVmdCA9PT0gcmlnaHQ7XG4gICAgICBpZiAobGVmdC5kYXRhICE9PSByaWdodC5kYXRhKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdmFsaWRhdGVTeW1tZXRyeShsZWZ0LmxlZnQsIHJpZ2h0LnJpZ2h0KSAmJiB2YWxpZGF0ZVN5bW1ldHJ5KGxlZnQucmlnaHQsIHJpZ2h0LmxlZnQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gdmFsaWRhdGVTeW1tZXRyeSh0aGlzLnJvb3QubGVmdCwgdGhpcy5yb290LnJpZ2h0KTtcbiAgfSxcblxuICBnZXRTdWNjZXNzb3I6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAvLyBTZWFyY2ggdGhlIG5vZGVcbiAgICBsZXQgY3VyciA9IHRoaXMuc2VhcmNoKGRhdGEpO1xuXG4gICAgaWYgKCFjdXJyKSByZXR1cm4gbnVsbDtcbiAgICAvLyBDYXNlIDE6IE5vZGUgaGFzIHJpZ2h0IHN1YnRyZWVcbiAgICBpZiAoY3Vyci5yaWdodCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5maW5kTWluKGN1cnIucmlnaHQpO1xuICAgIC8vIENhc2UgMjogTm8gcmlnaHQgc3VidHJlZVxuICAgIGxldCBzdWNjZXNzb3IgPSBudWxsO1xuICAgIGxldCBhbmNlc3RvciA9IHRoaXMucm9vdDtcblxuICAgIHdoaWxlIChhbmNlc3RvciAhPT0gY3Vycikge1xuICAgICAgaWYgKGN1cnIuZGF0YSA8IGFuY2VzdG9yLmRhdGEpIHtcbiAgICAgICAgc3VjY2Vzc29yID0gYW5jZXN0b3I7XG4gICAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IubGVmdDtcbiAgICAgIH0gZWxzZSBhbmNlc3RvciA9IGFuY2VzdG9yLnJpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gc3VjY2Vzc29yLmRhdGE7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmluYXJ5U2VhcmNoVHJlZTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEJpbmFyeVNlYXJjaFRyZWU6IHJlcXVpcmUoJy4vYmluYXJ5LXNlYXJjaC10cmVlJyksXG4gIGxpbmtlZExpc3RzOiByZXF1aXJlKCcuL2xpbmtlZC1saXN0cycpLFxuICBxdWV1ZXM6IHJlcXVpcmUoJy4vcXVldWVzJyksXG4gIHN0YWNrczogcmVxdWlyZSgnLi9zdGFja3MnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qge1xuICBMaW5rZWRMaXN0LFxuICBOb2RlXG59ID0gcmVxdWlyZSgnLi9saW5rZWQtbGlzdCcpO1xuXG5mdW5jdGlvbiBEb3VibGVOb2RlKGRhdGEpIHtcbiAgTm9kZS5jYWxsKHRoaXMsIGRhdGEpO1xufTtcblxuLy8gY3JlYXRlIGNvbnN0cnVjdG9yIHdpdGggTGlua2VkTGlzdCBpbmhlcml0YW5jZVxuZnVuY3Rpb24gRG91Ymx5TGlua2VkTGlzdChkYXRhKSB7XG4gIC8vIExpbmtlZExpc3QuY2FsbCh0aGlzLCBkYXRhKTtcbiAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgIHRoaXMuaGVhZCA9IG5ldyBEb3VibGVOb2RlKGRhdGFbMF0pO1xuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBkYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgICBsZXQgbmV3Tm9kZSA9IG5ldyBEb3VibGVOb2RlKGRhdGFbaV0pO1xuXG4gICAgICBuZXdOb2RlLnByZXYgPSBjdXJyO1xuICAgICAgY3Vyci5uZXh0ID0gbmV3Tm9kZTtcbiAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgfVxuICB9XG59O1xuLy8gSW5oZXJpdCBhbGwgcHJvdG90eXBlIGZyb20gTGlua2VkTGlzdFxuRG91Ymx5TGlua2VkTGlzdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExpbmtlZExpc3QucHJvdG90eXBlKTtcbi8vIG92ZXJ3cml0ZSBwcm90b3R5cGVzXG4vLyBSZWFzc2lnbiBjb25zdHJ1Y3RvciBwcm90b3R5cGVcbkRvdWJseUxpbmtlZExpc3QucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRG91Ymx5TGlua2VkTGlzdDtcbkRvdWJseUxpbmtlZExpc3QucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uKGRhdGEsIGluZGV4KSB7XG4gIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShkYXRhKTtcblxuICBpZiAoIXRoaXMuaGVhZCkge1xuICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgcmV0dXJuIHRoaXMuaGVhZDtcbiAgfVxuXG4gIGlmIChpbmRleCA9PT0gMCkge1xuICAgIGNvbnN0IHRlbXAgPSB0aGlzLmhlYWQ7XG5cbiAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgIHRoaXMuaGVhZC5uZXh0ID0gdGVtcDtcbiAgICByZXR1cm4gdGhpcy5oZWFkO1xuICB9XG5cbiAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG4gIGxldCBjdXJySW5kZXggPSAxO1xuXG4gIHdoaWxlIChjdXJyLm5leHQpIHtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBjdXJySW5kZXggPT09IGluZGV4KSB7XG4gICAgICBsZXQgdGVtcCA9IGN1cnIubmV4dDtcblxuICAgICAgY3Vyci5uZXh0ID0gbmV3Tm9kZTtcbiAgICAgIG5ld05vZGUucHJldiA9IGN1cnI7XG4gICAgICBuZXdOb2RlLm5leHQgPSB0ZW1wO1xuICAgICAgdGVtcC5wcmV2ID0gbmV3Tm9kZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgICsrY3VyckluZGV4O1xuICB9XG4gIGN1cnIubmV4dCA9IG5ld05vZGU7XG4gIG5ld05vZGUucHJldiA9IGN1cnI7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRG91Ymx5TGlua2VkTGlzdC5wcm90b3R5cGUuc2hpZnQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLmhlYWQpIHJldHVybjtcbiAgY29uc3QgZmlyc3QgPSB0aGlzLmhlYWQ7XG5cbiAgdGhpcy5oZWFkID0gZmlyc3QubmV4dDtcbiAgdGhpcy5oZWFkLnByZXYgPSBudWxsO1xuICByZXR1cm4gZmlyc3QuZGF0YTtcbn07XG5cbkRvdWJseUxpbmtlZExpc3QucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIGlmICghdGhpcy5oZWFkKSByZXR1cm4gbnVsbDtcblxuICBpZiAoaW5kZXggPT09IDApIHtcbiAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuICBsZXQgY3VyckluZGV4ID0gMDtcbiAgbGV0IHByZXYgPSBudWxsO1xuXG4gIHdoaWxlIChjdXJyLm5leHQpIHtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBjdXJySW5kZXggPT09IGluZGV4KSB7XG4gICAgICBjb25zdCBuZXh0ID0gY3Vyci5uZXh0O1xuXG4gICAgICBwcmV2Lm5leHQgPSBuZXh0O1xuICAgICAgbmV4dC5wcmV2ID0gcHJldjtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwcmV2ID0gY3VycjtcbiAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgICsrY3VyckluZGV4O1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuRG91Ymx5TGlua2VkTGlzdC5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIG51bGw7XG4gIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuICBsZXQgcHJldiA9IG51bGw7XG5cbiAgd2hpbGUgKGN1cnIpIHtcbiAgICBsZXQgbmV4dCA9IGN1cnIubmV4dDtcblxuICAgIGN1cnIubmV4dCA9IHByZXY7XG4gICAgaWYgKHByZXYpIHByZXYucHJldiA9IGN1cnI7XG4gICAgcHJldiA9IGN1cnI7XG4gICAgY3VyciA9IG5leHQ7XG4gIH1cbiAgdGhpcy5oZWFkID0gcHJldjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldmVyc2UgTGluayBsaXN0IHJlY3Vyc2l2ZWx5XG4gKiBAcGFyYW0gIHtbdHlwZV19IG5vZGUgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuRG91Ymx5TGlua2VkTGlzdC5wcm90b3R5cGUucmV2ZXJzZVJlY3Vyc2lvbiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXZlcnNlID0gKG5vZGUpID0+IHtcbiAgICBpZiAoIW5vZGUgfHwgIW5vZGUubmV4dCkgcmV0dXJuO1xuICAgIHJldmVyc2Uobm9kZS5uZXh0KTtcbiAgICBjb25zdCB0ZW1wID0gbm9kZS5uZXh0O1xuXG4gICAgdGVtcC5uZXh0ID0gbm9kZTtcbiAgICBub2RlLnByZXYgPSB0ZW1wO1xuICAgIG5vZGUubmV4dCA9IG51bGw7XG4gIH07XG5cbiAgcmV2ZXJzZSh0aGlzLmhlYWQpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRG91Ymx5TGlua2VkTGlzdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBMaW5rZWRMaXN0IH0gPSByZXF1aXJlKCcuL2xpbmtlZC1saXN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBEb3VibHlMaW5rZWRMaXN0OiByZXF1aXJlKCcuL2RvdWJseS1saW5rZWQtbGlzdCcpLFxuICBMaW5rZWRMaXN0OiBMaW5rZWRMaXN0XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBOb2RlIGZvciBsaW5rIGxpc3RcbiAqIEBwYXJhbSAgICAgICB7W3R5cGVdfSBkYXRhIFtkZXNjcmlwdGlvbl1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBOb2RlKGRhdGEpIHtcbiAgdGhpcy5kYXRhID0gZGF0YTtcbn1cbi8qKlxuICogQ3JlYXRlIExpbmsgbGlzdFxuICogQHBhcmFtICAgICAgIHtbdHlwZV19IGRhdGEgW2Rlc2NyaXB0aW9uXVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIExpbmtlZExpc3QoZGF0YSkge1xuICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgdGhpcy5oZWFkID0gbmV3IE5vZGUoZGF0YVswXSk7XG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgIGN1cnIubmV4dCA9IG5ldyBOb2RlKGRhdGFbaV0pO1xuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICB9XG4gIH1cbn07XG4vKipcbiAqIFByaW50IExpbmsgbGlzdCBpbiByZWN1cnNpdmUgZmFzaGlvblxuICogQHBhcmFtICB7W3R5cGVdfSBub2RlIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbkxpbmtlZExpc3QucHJpbnRSZWN1cnNpb24gPSBmdW5jdGlvbihub2RlKSB7XG4gIGlmICghbm9kZSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBMaW5rZWRMaXN0LnByaW50UmVjdXJzaW9uKG5vZGUubmV4dCk7XG59O1xuXG5MaW5rZWRMaXN0LnByb3RvdHlwZSA9IHtcbiAgLyoqXG4gICAqIFByaW50IGFsbCB2YWx1ZXMgaW4gYSBsaW5rbGlzdFxuICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHByaW50OiBmdW5jdGlvbigpIHtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcblxuICAgIHdoaWxlIChjdXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhjdXJyLmRhdGEpO1xuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnZlcnQgbGluayBsaXN0IHRvIGFycmF5XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcblxuICAgIHdoaWxlIChjdXJyKSB7XG4gICAgICBhcnJheS5wdXNoKGN1cnIuZGF0YSk7XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluc2VydCB2YWx1ZSBpbiBsaW5rbGlzdCBhdCBpbmRleCBvciBlbmRcbiAgICogQHBhcmFtICB7W3R5cGVdfSBkYXRhICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gaW5kZXggW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGluc2VydDogZnVuY3Rpb24oZGF0YSwgaW5kZXgpIHtcbiAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoZGF0YSk7XG5cbiAgICBpZiAoIXRoaXMuaGVhZCkge1xuICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgY29uc3QgdGVtcCA9IHRoaXMuaGVhZDtcblxuICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICAgIHRoaXMuaGVhZC5uZXh0ID0gdGVtcDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuICAgIGxldCBjdXJySW5kZXggPSAxO1xuXG4gICAgd2hpbGUgKGN1cnIubmV4dCkge1xuICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgY3VyckluZGV4ID09PSBpbmRleCkge1xuICAgICAgICBsZXQgdGVtcCA9IGN1cnIubmV4dDtcblxuICAgICAgICBjdXJyLm5leHQgPSBuZXdOb2RlO1xuICAgICAgICBuZXdOb2RlLm5leHQgPSB0ZW1wO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgICArK2N1cnJJbmRleDtcbiAgICB9XG4gICAgY3Vyci5uZXh0ID0gbmV3Tm9kZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlIGZpcnN0IG5vZGUgaW4gbGluayBsaXN0XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgc2hpZnQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5oZWFkKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBmaXJzdCA9IHRoaXMuaGVhZDtcblxuICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgIHJldHVybiBmaXJzdC5kYXRhO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgbGFzdCBub2RlIGluIGxpbmsgbGl0XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgcG9wOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IHByZXYgPSBudWxsO1xuXG4gICAgd2hpbGUgKGN1cnIubmV4dCkge1xuICAgICAgcHJldiA9IGN1cnI7XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgIH1cbiAgICBwcmV2Lm5leHQgPSBudWxsO1xuICAgIHJldHVybiBjdXJyLmRhdGE7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlbGV0ZSBub2RlIGluIGxpbmsgbGlzdCBhdCBpbmRleFxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGluZGV4IFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBkZWxldGU6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLmhlYWQpIHJldHVybiBudWxsO1xuXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuICAgIGxldCBjdXJySW5kZXggPSAwO1xuICAgIGxldCBwcmV2ID0gbnVsbDtcblxuICAgIHdoaWxlIChjdXJyLm5leHQpIHtcbiAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGN1cnJJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgcHJldi5uZXh0ID0gY3Vyci5uZXh0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHByZXYgPSBjdXJyO1xuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICAgICsrY3VyckluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIFJldmVyc2UgTGlua0xpc3RcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICByZXZlcnNlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IHByZXYgPSBudWxsO1xuXG4gICAgd2hpbGUgKGN1cnIpIHtcbiAgICAgIGxldCBuZXh0ID0gY3Vyci5uZXh0O1xuXG4gICAgICBjdXJyLm5leHQgPSBwcmV2O1xuICAgICAgcHJldiA9IGN1cnI7XG4gICAgICBjdXJyID0gbmV4dDtcbiAgICB9XG4gICAgdGhpcy5oZWFkID0gcHJldjtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmV2ZXJzZSBMaW5rIGxpc3QgcmVjdXJzaXZlbHlcbiAgICogQHBhcmFtICB7W3R5cGVdfSBub2RlIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHJldmVyc2VSZWN1cnNpb246IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUubmV4dCkge1xuICAgICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZXZlcnNlUmVjdXJzaW9uKG5vZGUubmV4dCk7XG4gICAgbGV0IHRlbXAgPSBub2RlLm5leHQ7XG5cbiAgICB0ZW1wLm5leHQgPSBub2RlO1xuICAgIG5vZGUubmV4dCA9IG51bGw7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBMaW5rZWRMaXN0OiBMaW5rZWRMaXN0LFxuICBOb2RlOiBOb2RlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBRdWV1ZUFycmF5KCkge1xuICB0aGlzLl9xdWV1ZSA9IEFycmF5KDEwKS5maWxsKG51bGwpO1xuICB0aGlzLl9mcm9udCA9IC0xO1xuICB0aGlzLl9yZWFyID0gLTE7XG59XG5cblF1ZXVlQXJyYXkucHJvdG90eXBlID0ge1xuICBlbnF1ZXVlOiBmdW5jdGlvbih4KSB7XG4gICAgaWYgKCh0aGlzLl9yZWFyICsgMSkgJSB0aGlzLl9xdWV1ZS5sZW5ndGggPT09IHRoaXMuX2Zyb250KSByZXR1cm47XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB0aGlzLl9yZWFyID0gdGhpcy5fZnJvbnQgPSAwO1xuICAgIGVsc2UgdGhpcy5fcmVhciA9ICh0aGlzLl9yZWFyICsgMSkgJSB0aGlzLl9xdWV1ZS5sZW5ndGg7XG4gICAgdGhpcy5fcXVldWVbdGhpcy5fcmVhcl0gPSB4O1xuICB9LFxuXG4gIGRlcXVldWU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuO1xuICAgIGxldCB2YWw7XG5cbiAgICBpZiAodGhpcy5fZnJvbnQgPT09IHRoaXMuX3JlYXIpIHtcbiAgICAgIHZhbCA9IHRoaXMuX3F1ZXVlW3RoaXMuX2Zyb250XTtcbiAgICAgIHRoaXMuX2Zyb250ID0gdGhpcy5fcmVhciA9IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgPSB0aGlzLl9xdWV1ZVt0aGlzLl9mcm9udF07XG4gICAgICArK3RoaXMuX2Zyb250O1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9LFxuXG4gIGZyb250OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVldWVbdGhpcy5fZnJvbnRdO1xuICB9LFxuXG4gIGlzRW1wdHk6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9mcm9udCA9PT0gLSAxICYmIHRoaXMuX3JlYXIgPT09IC0xO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlQXJyYXk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBRdWV1ZUFycmF5OiByZXF1aXJlKCcuL2FycmF5JyksXG4gIFF1ZXVlTGlua2VkTGlzdDogcmVxdWlyZSgnLi9saW5rZWQtbGlzdCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBOb2RlKHZhbCkge1xuICB0aGlzLmRhdGEgPSB2YWw7XG59XG5cbmZ1bmN0aW9uIFF1ZXVlTGlua0xpc3QoKSB7fVxuXG5RdWV1ZUxpbmtMaXN0LnByb3RvdHlwZSA9IHtcbiAgZW5xdWV1ZTogZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB0aGlzLl9yZWFyID0gdGhpcy5fZnJvbnQgPSBuZXcgTm9kZSh2YWwpO1xuICAgIGVsc2UgdGhpcy5fcmVhciA9IHRoaXMuX3JlYXIubmV4dCA9IG5ldyBOb2RlKHZhbCk7XG4gIH0sXG5cbiAgZGVxdWV1ZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuX2Zyb250O1xuXG4gICAgaWYgKG5vZGUgPT09IHRoaXMuX3JlYXIpIHRoaXMuX3JlYXIgPSB0aGlzLl9mcm9udCA9IHVuZGVmaW5lZDtcbiAgICBlbHNlIGlmIChub2RlLm5leHQpIHRoaXMuX2Zyb250ID0gbm9kZS5uZXh0O1xuICAgIHJldHVybiBub2RlLmRhdGE7XG4gIH0sXG5cbiAgZnJvbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9mcm9udC5kYXRhO1xuICB9LFxuXG4gIGlzRW1wdHk6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9mcm9udCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX3JlYXIgPT09IHVuZGVmaW5lZDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZUxpbmtMaXN0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBTdGFja0FycmF5KCkge1xuICB0aGlzLl9zdGFjayA9IFtdO1xuICB0aGlzLl90b3AgPSAtMTtcbn1cblxuU3RhY2tBcnJheS5wcm90b3R5cGUgPSB7XG4gIHB1c2g6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICArK3RoaXMuX3RvcDtcbiAgICBpZiAodGhpcy5fc3RhY2subGVuZ3RoID49IHRoaXMuX3RvcCArIDEpIHRoaXMuX3N0YWNrW3RoaXMuX3RvcF0gPSBkYXRhO1xuICAgIGVsc2UgdGhpcy5fc3RhY2sucHVzaChkYXRhKTtcbiAgICByZXR1cm4gdGhpcy5fc3RhY2s7XG4gIH0sXG5cbiAgcG9wOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybjtcbiAgICBjb25zdCB0b3AgPSB0aGlzLl9zdGFja1t0aGlzLl90b3BdO1xuXG4gICAgdGhpcy5fc3RhY2tbdGhpcy5fdG9wXSA9IHVuZGVmaW5lZDtcbiAgICAtLXRoaXMuX3RvcDtcbiAgICByZXR1cm4gdG9wO1xuICB9LFxuXG4gIHRvcDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWNrW3RoaXMuX3RvcF07XG4gIH0sXG5cbiAgaXNFbXB0eTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvcCA9PT0gLTE7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2tBcnJheTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFN0YWNrQXJyYXk6IHJlcXVpcmUoJy4vYXJyYXknKSxcbiAgU3RhY2tMaW5rZWRMaXN0OiByZXF1aXJlKCcuL2xpbmtlZC1saXN0Jylcbn07XG4iLCIvKipcbiAqIE5vZGUgZm9yIGxpbmsgbGlzdFxuICogQHBhcmFtICAgICAgIHtbdHlwZV19IGRhdGEgW2Rlc2NyaXB0aW9uXVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE5vZGUoZGF0YSkge1xuICB0aGlzLmRhdGEgPSBkYXRhO1xufVxuLyoqXG4gKiBDcmVhdGUgTGluayBsaXN0XG4gKiBAcGFyYW0gICAgICAge1t0eXBlXX0gZGF0YSBbZGVzY3JpcHRpb25dXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU3RhY2tMaW5rZWRMaXN0KCkge31cbi8qKlxuICogUHJpbnQgTGluayBsaXN0IGluIHJlY3Vyc2l2ZSBmYXNoaW9uXG4gKiBAcGFyYW0gIHtbdHlwZV19IG5vZGUgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuU3RhY2tMaW5rZWRMaXN0LnByaW50UmVjdXJzaW9uID0gZnVuY3Rpb24obm9kZSkge1xuICBpZiAoIW5vZGUpIHJldHVybiBudWxsO1xuICByZXR1cm4gU3RhY2tMaW5rZWRMaXN0LnByaW50UmVjdXJzaW9uKG5vZGUubmV4dCk7XG59O1xuXG5TdGFja0xpbmtlZExpc3QucHJvdG90eXBlID0ge1xuICAvKipcbiAgICogUHJpbnQgYWxsIHZhbHVlcyBpbiBhIGxpbmtsaXN0XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgcHJpbnQ6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuXG4gICAgd2hpbGUgKGN1cnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGN1cnIuZGF0YSk7XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ29udmVydCBsaW5rIGxpc3QgdG8gYXJyYXlcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICB0b0FycmF5OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuXG4gICAgd2hpbGUgKGN1cnIpIHtcbiAgICAgIGFycmF5LnB1c2goY3Vyci5kYXRhKTtcbiAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfSxcblxuICAvKipcbiAgICogSW5zZXJ0IHZhbHVlIGluIGxpbmtsaXN0IGF0IGluZGV4IG9yIGVuZFxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGRhdGEgIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSBpbmRleCBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgcHVzaDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShkYXRhKTtcblxuICAgIG5ld05vZGUubmV4dCA9IHRoaXMuaGVhZDtcbiAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZmlyc3Qgbm9kZSBpbiBsaW5rIGxpc3RcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBwb3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5oZWFkKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBmaXJzdCA9IHRoaXMuaGVhZDtcblxuICAgIHRoaXMuaGVhZCA9IGZpcnN0Lm5leHQ7XG4gICAgcmV0dXJuIGZpcnN0LmRhdGE7XG4gIH0sXG5cbiAgdG9wOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFkLmRhdGE7XG4gIH0sXG5cbiAgaXNFbXB0eTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICF0aGlzLmhlYWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIExpbmtMaXN0IHJldmVyc2FsIHVzaW5nIHN0YWNrcyBpcyBhbiBPKE4gKyBNKSB0aW1lIGFuZCBzcGFjZSBjb21wbGV4aXR5XG4gICAqIEBwYXJhbSAge1t0eXBlXX0gbGlua0xpc3QgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHJldmVyc2U6IGZ1bmN0aW9uKCkge1xuICAgIC8vIENyZWF0ZSBhIHN0YWNrIHRvIHN0b3JlIHRoZSBsaW5rbGlzdCB2YWx1ZXNcbiAgICBjb25zdCBzdGFjayA9IG5ldyBTdGFja0xpbmtlZExpc3QoKTtcblxuICAgIC8vIHB1c2ggYWxsIGxpbmsgbGlzdCB2YWx1ZXMgaW4gc3RhY2sgYnkgc2hpZnRpbmcgdGhlIGZpcnN0IHZhbHVlLlxuICAgIHdoaWxlICh0aGlzLmhlYWQpIHN0YWNrLnB1c2godGhpcy5zaGlmdCgpKTtcbiAgICAvLyByZS1pbnNlcnQgYWxsIG9mIHRoZSBsaW5rIGxpc3QgdmFsdWVzIGJ5IHBvcHBpbmcgdGhlIHN0YWNrXG4gICAgd2hpbGUgKCFzdGFjay5pc0VtcHR5KCkpIHRoaXMuaW5zZXJ0KHN0YWNrLnBvcCgpKTtcbiAgICAvLyByZXR1cm4gdGhlIG5ldyBzdGFja1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrTGlua2VkTGlzdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IERhdGFTdHJ1Y3R1cmVzIGZyb20gJy4vZGF0YS1zdHJ1Y3R1cmVzJztcblxuZXhwb3J0IHsgRGF0YVN0cnVjdHVyZXMgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=