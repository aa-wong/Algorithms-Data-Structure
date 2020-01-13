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

/***/ "./src/data-structures/array-queue.js":
/*!********************************************!*\
  !*** ./src/data-structures/array-queue.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ArrayQueue() {
  this._queue = Array(10).fill(null);
  this._front = -1;
  this._rear = -1;
}

ArrayQueue.prototype = {
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
module.exports = ArrayQueue;

/***/ }),

/***/ "./src/data-structures/array-stack.js":
/*!********************************************!*\
  !*** ./src/data-structures/array-stack.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ArrayStack() {
  this._stack = [];
  this._top = -1;
}

ArrayStack.prototype = {
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
module.exports = ArrayStack;

/***/ }),

/***/ "./src/data-structures/binary-search-tree.js":
/*!***************************************************!*\
  !*** ./src/data-structures/binary-search-tree.js ***!
  \***************************************************/
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
    if (!this.data) return false;
    if (data > this.data && this.right) return this.right.search(data);
    if (data < this.data && this.left) return this.left.search(data);
    return data === this.data;
  }
};

function BinarySearchTree(data) {
  this._root = new Node(data);
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
  },
  search: function search(data) {
    if (!this.root) return false;
    return this.root.search(data);
  },
  findMin: function findMin() {
    if (!this.root) return;

    var getMin = function getMin(node) {
      if (node.left) return getMin(node.left);
      return node.data;
    };

    return getMin(this.root);
  },
  findMax: function findMax() {
    if (!this.root) return;

    var getMax = function getMax(node) {
      if (node.right) return getMax(node.right);
      return node.data;
    };

    return getMax(this.root);
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
  }
};
module.exports = BinarySearchTree;

/***/ }),

/***/ "./src/data-structures/doubly-linked-list.js":
/*!***************************************************!*\
  !*** ./src/data-structures/doubly-linked-list.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ./linked-list */ "./src/data-structures/linked-list.js"),
    LinkedList = _require.LinkedList,
    Node = _require.Node;

function DoubleNode(data) {
  Node.call(this, data);
}

; // create constructore with LinkedList inheritance

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
      return newNode;
    }

    curr = curr.next;
    ++currIndex;
  }

  curr.next = newNode;
  newNode.prev = curr;
  return newNode;
};

DoublyLinkedList.prototype.shift = function () {
  if (!this.head) return;
  var first = this.head;
  this.head = first.next;
  this.head.prev = null;
  return first;
};

DoublyLinkedList.prototype.delete = function (index) {
  if (!this.head) return null;

  if (index === 0) {
    this.head = this.head.next;
    return this.head;
  }

  var curr = this.head;
  var currIndex = 0;
  var prev = null;

  while (curr.next) {
    if (index !== undefined && currIndex === index) {
      var next = curr.next;
      prev.next = next;
      next.prev = prev;
      return this.head;
    }

    prev = curr;
    curr = curr.next;
    ++currIndex;
  }

  return this.head;
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
  return this.head;
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
  return this.head;
};

module.exports = DoublyLinkedList;

/***/ }),

/***/ "./src/data-structures/index.js":
/*!**************************************!*\
  !*** ./src/data-structures/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ./linked-list */ "./src/data-structures/linked-list.js"),
    LinkedList = _require.LinkedList;

module.exports = {
  ArrayQueue: __webpack_require__(/*! ./array-queue */ "./src/data-structures/array-queue.js"),
  ArrayStack: __webpack_require__(/*! ./array-stack */ "./src/data-structures/array-stack.js"),
  BinarySearchTree: __webpack_require__(/*! ./binary-search-tree */ "./src/data-structures/binary-search-tree.js"),
  LinkedListQueue: __webpack_require__(/*! ./linked-list-queue */ "./src/data-structures/linked-list-queue.js"),
  LinkedListStack: __webpack_require__(/*! ./linked-list-stack */ "./src/data-structures/linked-list-stack.js"),
  LinkedList: LinkedList,
  DoublyLinkedList: __webpack_require__(/*! ./doubly-linked-list */ "./src/data-structures/doubly-linked-list.js")
};

/***/ }),

/***/ "./src/data-structures/linked-list-queue.js":
/*!**************************************************!*\
  !*** ./src/data-structures/linked-list-queue.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Node(val) {
  this.data = val;
}

function LinkListQueue() {}

LinkListQueue.prototype = {
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
module.exports = LinkListQueue;

/***/ }),

/***/ "./src/data-structures/linked-list-stack.js":
/*!**************************************************!*\
  !*** ./src/data-structures/linked-list-stack.js ***!
  \**************************************************/
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


function LinkedListStack() {}
/**
 * Print Link list in recursive fashion
 * @param  {[type]} node [description]
 * @return {[type]}      [description]
 */


LinkedListStack.printRecursion = function (node) {
  if (!node) return null;
  return LinkedListStack.printRecursion(node.next);
};

LinkedListStack.prototype = {
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
    return this.head.data;
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
    var stack = new LinkedListStack(); // push all link list values in stack by shifting the first value.

    while (this.head) {
      stack.push(this.shift());
    } // re-insert all of the link list values by popping the stack


    while (!stack.isEmpty()) {
      this.insert(stack.pop());
    } // return the new stack


    return this;
  }
};
module.exports = LinkedListStack;

/***/ }),

/***/ "./src/data-structures/linked-list.js":
/*!********************************************!*\
  !*** ./src/data-structures/linked-list.js ***!
  \********************************************/
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
        newNode.next = _temp;
        return newNode;
      }

      curr = curr.next;
      ++currIndex;
    }

    curr.next = newNode;
    return newNode;
  },

  /**
   * Remove first node in link list
   * @return {[type]} [description]
   */
  shift: function shift() {
    if (!this.head) return null;
    var first = this.head;
    this.head = this.head.next;
    return first;
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
    return curr;
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
      return this.head;
    }

    var curr = this.head;
    var currIndex = 0;
    var prev = null;

    while (curr.next) {
      if (index !== undefined && currIndex === index) {
        prev.next = curr.next;
        return this.head;
      }

      prev = curr;
      curr = curr.next;
      ++currIndex;
    }

    return this.head;
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
    return this.head;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BbGdvcml0aG1zL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BbGdvcml0aG1zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FsZ29yaXRobXMvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL2FycmF5LXF1ZXVlLmpzIiwid2VicGFjazovL0FsZ29yaXRobXMvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL2FycmF5LXN0YWNrLmpzIiwid2VicGFjazovL0FsZ29yaXRobXMvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL2JpbmFyeS1zZWFyY2gtdHJlZS5qcyIsIndlYnBhY2s6Ly9BbGdvcml0aG1zLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9kb3VibHktbGlua2VkLWxpc3QuanMiLCJ3ZWJwYWNrOi8vQWxnb3JpdGhtcy8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQWxnb3JpdGhtcy8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvbGlua2VkLWxpc3QtcXVldWUuanMiLCJ3ZWJwYWNrOi8vQWxnb3JpdGhtcy8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvbGlua2VkLWxpc3Qtc3RhY2suanMiLCJ3ZWJwYWNrOi8vQWxnb3JpdGhtcy8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvbGlua2VkLWxpc3QuanMiLCJ3ZWJwYWNrOi8vQWxnb3JpdGhtcy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcnJheVF1ZXVlIiwiX3F1ZXVlIiwiQXJyYXkiLCJmaWxsIiwiX2Zyb250IiwiX3JlYXIiLCJwcm90b3R5cGUiLCJlbnF1ZXVlIiwieCIsImxlbmd0aCIsImlzRW1wdHkiLCJkZXF1ZXVlIiwidmFsIiwiZnJvbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiQXJyYXlTdGFjayIsIl9zdGFjayIsIl90b3AiLCJwdXNoIiwiZGF0YSIsInBvcCIsInRvcCIsInVuZGVmaW5lZCIsIk5vZGUiLCJfZGF0YSIsImxlZnQiLCJfbGVmdCIsIm5vZGUiLCJjb25zdHJ1Y3RvciIsIk51bWJlciIsInJpZ2h0IiwiX3JpZ2h0IiwiaW5zZXJ0Iiwic2VhcmNoIiwiQmluYXJ5U2VhcmNoVHJlZSIsIl9yb290Iiwicm9vdCIsImZpbmRNaW4iLCJnZXRNaW4iLCJmaW5kTWF4IiwiZ2V0TWF4IiwiZGVsZXRlIiwiZGVsZXRlTm9kZSIsInRlbXAiLCJsZXZlbE9yZGVyIiwidmFscyIsInF1ZXVlIiwiY3VyciIsInNoaWZ0IiwicHJlT3JkZXIiLCJ0cmF2ZXJzZSIsImluT3JkZXIiLCJwb3N0T3JkZXIiLCJtYXhEZXB0aCIsIk1hdGgiLCJtYXgiLCJpc1ZhbGlkIiwiaXNCU1QiLCJtaW4iLCJJbmZpbml0eSIsInBhdGhTdW0iLCJzdW0iLCJoYXNQYXRoU3VtIiwiaXNTeW1tZXRyaWMiLCJ2YWxpZGF0ZVN5bW1ldHJ5IiwicmVxdWlyZSIsIkxpbmtlZExpc3QiLCJEb3VibGVOb2RlIiwiY2FsbCIsIkRvdWJseUxpbmtlZExpc3QiLCJoZWFkIiwiaSIsIm5ld05vZGUiLCJwcmV2IiwibmV4dCIsIk9iamVjdCIsImNyZWF0ZSIsImluZGV4IiwiY3VyckluZGV4IiwiZmlyc3QiLCJyZXZlcnNlIiwicmV2ZXJzZVJlY3Vyc2lvbiIsIkxpbmtlZExpc3RRdWV1ZSIsIkxpbmtlZExpc3RTdGFjayIsIkxpbmtMaXN0UXVldWUiLCJwcmludFJlY3Vyc2lvbiIsInByaW50IiwiY29uc29sZSIsImxvZyIsInRvQXJyYXkiLCJhcnJheSIsInN0YWNrIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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LElBQWhCO0FBRUEvQixRQUFJLENBQUMrQixJQUFMLEdBQVkvQyxJQUFaO0FBQ0FBLFFBQUksQ0FBQytDLElBQUwsR0FBWSxJQUFaO0FBQ0Q7QUFqS29CLENBQXZCO0FBb0tBN0QsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZvRCxZQUFVLEVBQUVBLFVBREc7QUFFZjNDLE1BQUksRUFBRUE7QUFGUyxDQUFqQixDOzs7Ozs7Ozs7Ozs7QUN2TWE7Ozs7Ozs7Ozs7OztBQUViIiwiZmlsZSI6IkFsZ29yaXRobXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkFsZ29yaXRobXNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQWxnb3JpdGhtc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBbGdvcml0aG1zXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBBcnJheVF1ZXVlKCkge1xuICB0aGlzLl9xdWV1ZSA9IEFycmF5KDEwKS5maWxsKG51bGwpO1xuICB0aGlzLl9mcm9udCA9IC0xO1xuICB0aGlzLl9yZWFyID0gLTE7XG59XG5cbkFycmF5UXVldWUucHJvdG90eXBlID0ge1xuICBlbnF1ZXVlOiBmdW5jdGlvbih4KSB7XG4gICAgaWYgKCh0aGlzLl9yZWFyICsgMSkgJSB0aGlzLl9xdWV1ZS5sZW5ndGggPT09IHRoaXMuX2Zyb250KSByZXR1cm47XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB0aGlzLl9yZWFyID0gdGhpcy5fZnJvbnQgPSAwO1xuICAgIGVsc2UgdGhpcy5fcmVhciA9ICh0aGlzLl9yZWFyICsgMSkgJSB0aGlzLl9xdWV1ZS5sZW5ndGg7XG4gICAgdGhpcy5fcXVldWVbdGhpcy5fcmVhcl0gPSB4O1xuICB9LFxuXG4gIGRlcXVldWU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuO1xuICAgIGxldCB2YWw7XG5cbiAgICBpZiAodGhpcy5fZnJvbnQgPT09IHRoaXMuX3JlYXIpIHtcbiAgICAgIHZhbCA9IHRoaXMuX3F1ZXVlW3RoaXMuX2Zyb250XTtcbiAgICAgIHRoaXMuX2Zyb250ID0gdGhpcy5fcmVhciA9IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgPSB0aGlzLl9xdWV1ZVt0aGlzLl9mcm9udF07XG4gICAgICArK3RoaXMuX2Zyb250O1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9LFxuXG4gIGZyb250OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVldWVbdGhpcy5fZnJvbnRdO1xuICB9LFxuXG4gIGlzRW1wdHk6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9mcm9udCA9PT0gLSAxICYmIHRoaXMuX3JlYXIgPT09IC0xO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5UXVldWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIEFycmF5U3RhY2soKSB7XG4gIHRoaXMuX3N0YWNrID0gW107XG4gIHRoaXMuX3RvcCA9IC0xO1xufVxuXG5BcnJheVN0YWNrLnByb3RvdHlwZSA9IHtcbiAgcHVzaDogZnVuY3Rpb24oZGF0YSkge1xuICAgICsrdGhpcy5fdG9wO1xuICAgIGlmICh0aGlzLl9zdGFjay5sZW5ndGggPj0gdGhpcy5fdG9wICsgMSkgdGhpcy5fc3RhY2tbdGhpcy5fdG9wXSA9IGRhdGE7XG4gICAgZWxzZSB0aGlzLl9zdGFjay5wdXNoKGRhdGEpO1xuICAgIHJldHVybiB0aGlzLl9zdGFjaztcbiAgfSxcblxuICBwb3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuO1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuX3N0YWNrW3RoaXMuX3RvcF07XG5cbiAgICB0aGlzLl9zdGFja1t0aGlzLl90b3BdID0gdW5kZWZpbmVkO1xuICAgIC0tdGhpcy5fdG9wO1xuICAgIHJldHVybiB0b3A7XG4gIH0sXG5cbiAgdG9wOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhY2tbdGhpcy5fdG9wXTtcbiAgfSxcblxuICBpc0VtcHR5OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9wID09PSAtMTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheVN0YWNrO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBOb2RlKHZhbCkge1xuICB0aGlzLl9kYXRhID0gdmFsO1xufTtcblxuTm9kZS5wcm90b3R5cGUgPSB7XG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9LFxuXG4gIHNldCBkYXRhKHZhbCkge1xuICAgIHRoaXMuX2RhdGEgPSB2YWw7XG4gIH0sXG5cbiAgZ2V0IGxlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlZnQ7XG4gIH0sXG5cbiAgc2V0IGxlZnQobm9kZSkge1xuICAgIGlmIChub2RlICYmIG5vZGUuY29uc3RydWN0b3IgPT09IE51bWJlcikgdGhpcy5fbGVmdCA9IG5ldyBOb2RlKG5vZGUpO1xuICAgIGVsc2UgdGhpcy5fbGVmdCA9IG5vZGU7XG4gIH0sXG5cbiAgZ2V0IHJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9yaWdodDtcbiAgfSxcblxuICBzZXQgcmlnaHQobm9kZSkge1xuICAgIGlmIChub2RlICYmIG5vZGUuY29uc3RydWN0b3IgPT09IE51bWJlcikgdGhpcy5fcmlnaHQgPSBuZXcgTm9kZShub2RlKTtcbiAgICBlbHNlIHRoaXMuX3JpZ2h0ID0gbm9kZTtcbiAgfSxcblxuICBpbnNlcnQ6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSkgdGhpcy5kYXRhID0gZGF0YTtcbiAgICBlbHNlIGlmIChkYXRhID4gdGhpcy5kYXRhKSB7XG4gICAgICBpZiAodGhpcy5yaWdodCkgdGhpcy5yaWdodC5pbnNlcnQoZGF0YSk7XG4gICAgICBlbHNlIHRoaXMucmlnaHQgPSBkYXRhO1xuICAgIH0gZWxzZSBpZiAoZGF0YSA8IHRoaXMuZGF0YSkge1xuICAgICAgaWYgKHRoaXMubGVmdCkgdGhpcy5sZWZ0Lmluc2VydChkYXRhKTtcbiAgICAgIGVsc2UgdGhpcy5sZWZ0ID0gZGF0YTtcbiAgICB9XG4gIH0sXG5cbiAgc2VhcmNoOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZGF0YSA+IHRoaXMuZGF0YSAmJiB0aGlzLnJpZ2h0KSByZXR1cm4gdGhpcy5yaWdodC5zZWFyY2goZGF0YSk7XG4gICAgaWYgKGRhdGEgPCB0aGlzLmRhdGEgJiYgdGhpcy5sZWZ0KSByZXR1cm4gdGhpcy5sZWZ0LnNlYXJjaChkYXRhKTtcbiAgICByZXR1cm4gZGF0YSA9PT0gdGhpcy5kYXRhO1xuICB9XG59O1xuXG5mdW5jdGlvbiBCaW5hcnlTZWFyY2hUcmVlKGRhdGEpIHtcbiAgdGhpcy5fcm9vdCA9IG5ldyBOb2RlKGRhdGEpO1xufTtcblxuQmluYXJ5U2VhcmNoVHJlZS5wcm90b3R5cGUgPSB7XG4gIGdldCByb290KCkge1xuICAgIHJldHVybiB0aGlzLl9yb290O1xuICB9LFxuXG4gIHNldCByb290KG5vZGUpIHtcbiAgICB0aGlzLl9yb290ID0gbm9kZTtcbiAgfSxcblxuICBpbnNlcnQ6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMucm9vdCkgdGhpcy5yb290ID0gbmV3IE5vZGUoZGF0YSk7XG4gICAgZWxzZSB0aGlzLnJvb3QuaW5zZXJ0KGRhdGEpO1xuICB9LFxuXG4gIHNlYXJjaDogZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICghdGhpcy5yb290KSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMucm9vdC5zZWFyY2goZGF0YSk7XG4gIH0sXG5cbiAgZmluZE1pbjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybjtcbiAgICBjb25zdCBnZXRNaW4gPSAobm9kZSkgPT4ge1xuICAgICAgaWYgKG5vZGUubGVmdCkgcmV0dXJuIGdldE1pbihub2RlLmxlZnQpO1xuICAgICAgcmV0dXJuIG5vZGUuZGF0YTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGdldE1pbih0aGlzLnJvb3QpO1xuICB9LFxuXG4gIGZpbmRNYXg6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5yb290KSByZXR1cm47XG4gICAgY29uc3QgZ2V0TWF4ID0gKG5vZGUpID0+IHtcbiAgICAgIGlmIChub2RlLnJpZ2h0KSByZXR1cm4gZ2V0TWF4KG5vZGUucmlnaHQpO1xuICAgICAgcmV0dXJuIG5vZGUuZGF0YTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGdldE1heCh0aGlzLnJvb3QpO1xuICB9LFxuXG4gIGRlbGV0ZTogZnVuY3Rpb24odmFsKSB7XG4gICAgY29uc3QgZGVsZXRlTm9kZSA9IChyb290LCB2YWwpID0+IHtcbiAgICAgIC8vIElmIE5vIE5vZGUgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgaWYgKCFyb290KSByZXR1cm47XG4gICAgICAvLyBJZiB2YWwgaXMgbGVzcyB0aGFuIGN1cnJlbnQgbm9kZSBkYXRhLiBDb250aW51ZSBvbiB0byBsZWZ0IGNoaWxkLlxuICAgICAgaWYgKHZhbCA8IHJvb3QuZGF0YSkgcmV0dXJuIGRlbGV0ZU5vZGUocm9vdC5sZWZ0LCB2YWwsIHJvb3QpO1xuICAgICAgLy8gSWYgdmFsIGlzIGdyZWF0ZXIgdGhhbiBjdXJyZW50IG5vZGUgZGF0YS4gQ29udGludWUgb24gdG8gcmlnaHQgY2hpbGQuXG4gICAgICBpZiAodmFsID4gcm9vdC5kYXRhKSByZXR1cm4gZGVsZXRlTm9kZShyb290LnJpZ2h0LCB2YWwsIHJvb3QpO1xuICAgICAgLy8gQ2FzZSAxOiBObyBjaGlsZHJlbiwgZGVhbGxvY2F0ZSBjaGlsZCBmcm9tIHBhcmVudFxuICAgICAgaWYgKHJvb3QubGVmdCAmJiByb290LnJpZ2h0KSB7XG4gICAgICAgIC8vIENhc2UgMzogaWYgMiBjaGlsZHJlblxuICAgICAgICAvLyBGaW5kIG1pbmltdW0gdmFsdWUgb2YgdGhlIHJpZ2h0IG5vZGVcbiAgICAgICAgbGV0IHRlbXAgPSByb290LnJpZ2h0O1xuXG4gICAgICAgIHdoaWxlICh0ZW1wLmxlZnQpIHRlbXAgPSB0ZW1wLmxlZnQ7XG4gICAgICAgIC8vIHdyaXRlIG5vZGUgZGF0YSB0byB0aGUgbWluaW11bSB2YWx1ZXNcbiAgICAgICAgcm9vdC5kYXRhID0gdGVtcC5kYXRhO1xuICAgICAgICAvLyBNb3ZlIG9uIHRvIHRoZSByaWdodCBhbmQgY29udGludWUgb25cbiAgICAgICAgcm9vdC5yaWdodCA9IGRlbGV0ZU5vZGUocm9vdC5yaWdodCwgdGVtcC5kYXRhKTtcbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICB9XG4gICAgICByZXR1cm4gcm9vdC5sZWZ0IHx8IHJvb3QucmlnaHQ7XG4gICAgfTtcblxuICAgIGRlbGV0ZU5vZGUodGhpcy5yb290LCB2YWwpO1xuICB9LFxuXG4gIGxldmVsT3JkZXI6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHZhbHMgPSBbXTtcblxuICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgIGNvbnN0IHF1ZXVlID0gW107XG5cbiAgICAgIHF1ZXVlLnB1c2godGhpcy5yb290KTtcbiAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBjdXJyID0gcXVldWUuc2hpZnQoKTtcblxuICAgICAgICB2YWxzLnB1c2goY3Vyci5kYXRhKTtcbiAgICAgICAgaWYgKGN1cnIubGVmdCkgcXVldWUucHVzaChjdXJyLmxlZnQpO1xuICAgICAgICBpZiAoY3Vyci5yaWdodCkgcXVldWUucHVzaChjdXJyLnJpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHM7XG4gIH0sXG5cbiAgcHJlT3JkZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCB2YWxzID0gW107XG5cbiAgICBjb25zdCB0cmF2ZXJzZSA9IChub2RlKSA9PiB7XG4gICAgICB2YWxzLnB1c2gobm9kZS5kYXRhKTtcbiAgICAgIGlmIChub2RlLmxlZnQpIHRyYXZlcnNlKG5vZGUubGVmdCk7XG4gICAgICBpZiAobm9kZS5yaWdodCkgdHJhdmVyc2Uobm9kZS5yaWdodCk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnJvb3QpIHRyYXZlcnNlKHRoaXMucm9vdCk7XG4gICAgcmV0dXJuIHZhbHM7XG4gIH0sXG5cbiAgaW5PcmRlcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IHZhbHMgPSBbXTtcblxuICAgIGNvbnN0IHRyYXZlcnNlID0gKG5vZGUpID0+IHtcbiAgICAgIGlmIChub2RlLmxlZnQpIHRyYXZlcnNlKG5vZGUubGVmdCk7XG4gICAgICB2YWxzLnB1c2gobm9kZS5kYXRhKTtcbiAgICAgIGlmIChub2RlLnJpZ2h0KSB0cmF2ZXJzZShub2RlLnJpZ2h0KTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucm9vdCkgdHJhdmVyc2UodGhpcy5yb290KTtcbiAgICByZXR1cm4gdmFscztcbiAgfSxcblxuICBwb3N0T3JkZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCB2YWxzID0gW107XG5cbiAgICBjb25zdCB0cmF2ZXJzZSA9IChub2RlKSA9PiB7XG4gICAgICBpZiAobm9kZS5sZWZ0KSB0cmF2ZXJzZShub2RlLmxlZnQpO1xuICAgICAgaWYgKG5vZGUucmlnaHQpIHRyYXZlcnNlKG5vZGUucmlnaHQpO1xuICAgICAgdmFscy5wdXNoKG5vZGUuZGF0YSk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnJvb3QpIHRyYXZlcnNlKHRoaXMucm9vdCk7XG4gICAgcmV0dXJuIHZhbHM7XG4gIH0sXG5cbiAgbWF4RGVwdGg6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5yb290KSByZXR1cm4gMDtcbiAgICBjb25zdCBtYXhEZXB0aCA9IChub2RlKSA9PiB7XG4gICAgICBpZiAoIW5vZGUpIHJldHVybiAwO1xuICAgICAgcmV0dXJuIE1hdGgubWF4KG1heERlcHRoKG5vZGUubGVmdCksIG1heERlcHRoKG5vZGUucmlnaHQpKSArIDE7XG4gICAgfTtcblxuICAgIHJldHVybiBtYXhEZXB0aCh0aGlzLnJvb3QpO1xuICB9LFxuXG4gIGlzVmFsaWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGlzQlNUID0gKG5vZGUsIG1pbiwgbWF4KSA9PiB7XG4gICAgICAvLyBJZiBubyBOb2RlIHRoZW4gd2UgaGF2ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIHRyZWUuXG4gICAgICAvLyBSZXR1cm4gdHJ1ZVxuICAgICAgaWYgKCFub2RlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIC8vIFZhbGlkYXRlIGlmIHRoZSBkYXRhIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgbWluIG9yIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBtYXguXG4gICAgICAvLyBUaGVuIHRoZSB0cmVlIGlzIG5vdCBhIHZhbGlkIHNlYXJjaCB0cmVlLlxuICAgICAgaWYgKG5vZGUuZGF0YSA8PSBtaW4gfHwgbm9kZS5kYXRhID49IG1heCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGlzQlNUKG5vZGUubGVmdCwgbWluLCBub2RlLmRhdGEpICYmIGlzQlNUKG5vZGUucmlnaHQsIG5vZGUuZGF0YSwgbWF4KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGlzQlNUKHRoaXMucm9vdCwgLUluZmluaXR5LCBJbmZpbml0eSk7XG4gIH0sXG5cbiAgcGF0aFN1bTogZnVuY3Rpb24oc3VtKSB7XG4gICAgY29uc3QgaGFzUGF0aFN1bSA9IChyb290LCBzdW0pID0+IHtcbiAgICAgIGlmICghcm9vdCkgcmV0dXJuIGZhbHNlO1xuICAgICAgc3VtIC09IHJvb3QuZGF0YTtcbiAgICAgIGlmICghcm9vdC5sZWZ0ICYmICFyb290LnJpZ2h0KSByZXR1cm4gc3VtID09PSAwO1xuICAgICAgcmV0dXJuIGhhc1BhdGhTdW0ocm9vdC5sZWZ0LCBzdW0pIHx8IGhhc1BhdGhTdW0ocm9vdC5yaWdodCwgc3VtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGhhc1BhdGhTdW0odGhpcy5yb290LCBzdW0pO1xuICB9LFxuXG4gIGlzU3ltbWV0cmljOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMucm9vdCkgcmV0dXJuIHRydWU7XG4gICAgY29uc3QgdmFsaWRhdGVTeW1tZXRyeSA9IChsZWZ0LCByaWdodCkgPT4ge1xuICAgICAgaWYgKCFsZWZ0IHx8ICFyaWdodCkgcmV0dXJuIGxlZnQgPT09IHJpZ2h0O1xuICAgICAgaWYgKGxlZnQuZGF0YSAhPT0gcmlnaHQuZGF0YSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHZhbGlkYXRlU3ltbWV0cnkobGVmdC5sZWZ0LCByaWdodC5yaWdodCkgJiYgdmFsaWRhdGVTeW1tZXRyeShsZWZ0LnJpZ2h0LCByaWdodC5sZWZ0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHZhbGlkYXRlU3ltbWV0cnkodGhpcy5yb290LmxlZnQsIHRoaXMucm9vdC5yaWdodCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmluYXJ5U2VhcmNoVHJlZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qge1xuICBMaW5rZWRMaXN0LFxuICBOb2RlXG59ID0gcmVxdWlyZSgnLi9saW5rZWQtbGlzdCcpO1xuXG5mdW5jdGlvbiBEb3VibGVOb2RlKGRhdGEpIHtcbiAgTm9kZS5jYWxsKHRoaXMsIGRhdGEpO1xufTtcblxuLy8gY3JlYXRlIGNvbnN0cnVjdG9yZSB3aXRoIExpbmtlZExpc3QgaW5oZXJpdGFuY2VcbmZ1bmN0aW9uIERvdWJseUxpbmtlZExpc3QoZGF0YSkge1xuICAvLyBMaW5rZWRMaXN0LmNhbGwodGhpcywgZGF0YSk7XG4gIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICB0aGlzLmhlYWQgPSBuZXcgRG91YmxlTm9kZShkYXRhWzBdKTtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgbGV0IG5ld05vZGUgPSBuZXcgRG91YmxlTm9kZShkYXRhW2ldKTtcblxuICAgICAgbmV3Tm9kZS5wcmV2ID0gY3VycjtcbiAgICAgIGN1cnIubmV4dCA9IG5ld05vZGU7XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgIH1cbiAgfVxufTtcbi8vIEluaGVyaXQgYWxsIHByb3RvdHlwZSBmcm9tIExpbmtlZExpc3RcbkRvdWJseUxpbmtlZExpc3QucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMaW5rZWRMaXN0LnByb3RvdHlwZSk7XG4vLyBvdmVyd3JpdGUgcHJvdG90eXBlc1xuLy8gUmVhc3NpZ24gY29uc3RydWN0b3IgcHJvdG90eXBlXG5Eb3VibHlMaW5rZWRMaXN0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERvdWJseUxpbmtlZExpc3Q7XG5Eb3VibHlMaW5rZWRMaXN0LnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbihkYXRhLCBpbmRleCkge1xuICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoZGF0YSk7XG5cbiAgaWYgKCF0aGlzLmhlYWQpIHtcbiAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gIH1cblxuICBpZiAoaW5kZXggPT09IDApIHtcbiAgICBjb25zdCB0ZW1wID0gdGhpcy5oZWFkO1xuXG4gICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICB0aGlzLmhlYWQubmV4dCA9IHRlbXA7XG4gICAgcmV0dXJuIHRoaXMuaGVhZDtcbiAgfVxuXG4gIGxldCBjdXJyID0gdGhpcy5oZWFkO1xuICBsZXQgY3VyckluZGV4ID0gMTtcblxuICB3aGlsZSAoY3Vyci5uZXh0KSB7XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgY3VyckluZGV4ID09PSBpbmRleCkge1xuICAgICAgbGV0IHRlbXAgPSBjdXJyLm5leHQ7XG5cbiAgICAgIGN1cnIubmV4dCA9IG5ld05vZGU7XG4gICAgICBuZXdOb2RlLnByZXYgPSBjdXJyO1xuICAgICAgbmV3Tm9kZS5uZXh0ID0gdGVtcDtcbiAgICAgIHRlbXAucHJldiA9IG5ld05vZGU7XG4gICAgICByZXR1cm4gbmV3Tm9kZTtcbiAgICB9XG4gICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICArK2N1cnJJbmRleDtcbiAgfVxuICBjdXJyLm5leHQgPSBuZXdOb2RlO1xuICBuZXdOb2RlLnByZXYgPSBjdXJyO1xuICByZXR1cm4gbmV3Tm9kZTtcbn07XG5cbkRvdWJseUxpbmtlZExpc3QucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5oZWFkKSByZXR1cm47XG4gIGNvbnN0IGZpcnN0ID0gdGhpcy5oZWFkO1xuXG4gIHRoaXMuaGVhZCA9IGZpcnN0Lm5leHQ7XG4gIHRoaXMuaGVhZC5wcmV2ID0gbnVsbDtcbiAgcmV0dXJuIGZpcnN0O1xufTtcblxuRG91Ymx5TGlua2VkTGlzdC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgaWYgKCF0aGlzLmhlYWQpIHJldHVybiBudWxsO1xuXG4gIGlmIChpbmRleCA9PT0gMCkge1xuICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gIH1cblxuICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcbiAgbGV0IGN1cnJJbmRleCA9IDA7XG4gIGxldCBwcmV2ID0gbnVsbDtcblxuICB3aGlsZSAoY3Vyci5uZXh0KSB7XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgY3VyckluZGV4ID09PSBpbmRleCkge1xuICAgICAgY29uc3QgbmV4dCA9IGN1cnIubmV4dDtcblxuICAgICAgcHJldi5uZXh0ID0gbmV4dDtcbiAgICAgIG5leHQucHJldiA9IHByZXY7XG4gICAgICByZXR1cm4gdGhpcy5oZWFkO1xuICAgIH1cbiAgICBwcmV2ID0gY3VycjtcbiAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgICsrY3VyckluZGV4O1xuICB9XG4gIHJldHVybiB0aGlzLmhlYWQ7XG59O1xuXG5Eb3VibHlMaW5rZWRMaXN0LnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5oZWFkKSByZXR1cm4gbnVsbDtcbiAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG4gIGxldCBwcmV2ID0gbnVsbDtcblxuICB3aGlsZSAoY3Vycikge1xuICAgIGxldCBuZXh0ID0gY3Vyci5uZXh0O1xuXG4gICAgY3Vyci5uZXh0ID0gcHJldjtcbiAgICBpZiAocHJldikgcHJldi5wcmV2ID0gY3VycjtcbiAgICBwcmV2ID0gY3VycjtcbiAgICBjdXJyID0gbmV4dDtcbiAgfVxuICB0aGlzLmhlYWQgPSBwcmV2O1xuICByZXR1cm4gdGhpcy5oZWFkO1xufTtcblxuLyoqXG4gKiBSZXZlcnNlIExpbmsgbGlzdCByZWN1cnNpdmVseVxuICogQHBhcmFtICB7W3R5cGVdfSBub2RlIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbkRvdWJseUxpbmtlZExpc3QucHJvdG90eXBlLnJldmVyc2VSZWN1cnNpb24gPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmV2ZXJzZSA9IChub2RlKSA9PiB7XG4gICAgaWYgKCFub2RlIHx8ICFub2RlLm5leHQpIHJldHVybjtcbiAgICByZXZlcnNlKG5vZGUubmV4dCk7XG4gICAgY29uc3QgdGVtcCA9IG5vZGUubmV4dDtcblxuICAgIHRlbXAubmV4dCA9IG5vZGU7XG4gICAgbm9kZS5wcmV2ID0gdGVtcDtcbiAgICBub2RlLm5leHQgPSBudWxsO1xuICB9O1xuXG4gIHJldmVyc2UodGhpcy5oZWFkKTtcbiAgcmV0dXJuIHRoaXMuaGVhZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRG91Ymx5TGlua2VkTGlzdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeyBMaW5rZWRMaXN0IH0gPSByZXF1aXJlKCcuL2xpbmtlZC1saXN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBBcnJheVF1ZXVlOiByZXF1aXJlKCcuL2FycmF5LXF1ZXVlJyksXG4gIEFycmF5U3RhY2s6IHJlcXVpcmUoJy4vYXJyYXktc3RhY2snKSxcbiAgQmluYXJ5U2VhcmNoVHJlZTogcmVxdWlyZSgnLi9iaW5hcnktc2VhcmNoLXRyZWUnKSxcbiAgTGlua2VkTGlzdFF1ZXVlOiByZXF1aXJlKCcuL2xpbmtlZC1saXN0LXF1ZXVlJyksXG4gIExpbmtlZExpc3RTdGFjazogcmVxdWlyZSgnLi9saW5rZWQtbGlzdC1zdGFjaycpLFxuICBMaW5rZWRMaXN0OiBMaW5rZWRMaXN0LFxuICBEb3VibHlMaW5rZWRMaXN0OiByZXF1aXJlKCcuL2RvdWJseS1saW5rZWQtbGlzdCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBOb2RlKHZhbCkge1xuICB0aGlzLmRhdGEgPSB2YWw7XG59XG5cbmZ1bmN0aW9uIExpbmtMaXN0UXVldWUoKSB7fVxuXG5MaW5rTGlzdFF1ZXVlLnByb3RvdHlwZSA9IHtcbiAgZW5xdWV1ZTogZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB0aGlzLl9yZWFyID0gdGhpcy5fZnJvbnQgPSBuZXcgTm9kZSh2YWwpO1xuICAgIGVsc2UgdGhpcy5fcmVhciA9IHRoaXMuX3JlYXIubmV4dCA9IG5ldyBOb2RlKHZhbCk7XG4gIH0sXG5cbiAgZGVxdWV1ZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuX2Zyb250O1xuXG4gICAgaWYgKG5vZGUgPT09IHRoaXMuX3JlYXIpIHRoaXMuX3JlYXIgPSB0aGlzLl9mcm9udCA9IHVuZGVmaW5lZDtcbiAgICBlbHNlIGlmIChub2RlLm5leHQpIHRoaXMuX2Zyb250ID0gbm9kZS5uZXh0O1xuICAgIHJldHVybiBub2RlLmRhdGE7XG4gIH0sXG5cbiAgZnJvbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9mcm9udC5kYXRhO1xuICB9LFxuXG4gIGlzRW1wdHk6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9mcm9udCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX3JlYXIgPT09IHVuZGVmaW5lZDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rTGlzdFF1ZXVlO1xuIiwiLyoqXG4gKiBOb2RlIGZvciBsaW5rIGxpc3RcbiAqIEBwYXJhbSAgICAgICB7W3R5cGVdfSBkYXRhIFtkZXNjcmlwdGlvbl1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBOb2RlKGRhdGEpIHtcbiAgdGhpcy5kYXRhID0gZGF0YTtcbn1cbi8qKlxuICogQ3JlYXRlIExpbmsgbGlzdFxuICogQHBhcmFtICAgICAgIHtbdHlwZV19IGRhdGEgW2Rlc2NyaXB0aW9uXVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIExpbmtlZExpc3RTdGFjaygpIHt9XG4vKipcbiAqIFByaW50IExpbmsgbGlzdCBpbiByZWN1cnNpdmUgZmFzaGlvblxuICogQHBhcmFtICB7W3R5cGVdfSBub2RlIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbkxpbmtlZExpc3RTdGFjay5wcmludFJlY3Vyc2lvbiA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgaWYgKCFub2RlKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIExpbmtlZExpc3RTdGFjay5wcmludFJlY3Vyc2lvbihub2RlLm5leHQpO1xufTtcblxuTGlua2VkTGlzdFN0YWNrLnByb3RvdHlwZSA9IHtcbiAgLyoqXG4gICAqIFByaW50IGFsbCB2YWx1ZXMgaW4gYSBsaW5rbGlzdFxuICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHByaW50OiBmdW5jdGlvbigpIHtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcblxuICAgIHdoaWxlIChjdXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhjdXJyLmRhdGEpO1xuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnZlcnQgbGluayBsaXN0IHRvIGFycmF5XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcblxuICAgIHdoaWxlIChjdXJyKSB7XG4gICAgICBhcnJheS5wdXNoKGN1cnIuZGF0YSk7XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluc2VydCB2YWx1ZSBpbiBsaW5rbGlzdCBhdCBpbmRleCBvciBlbmRcbiAgICogQHBhcmFtICB7W3R5cGVdfSBkYXRhICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gaW5kZXggW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHB1c2g6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoZGF0YSk7XG5cbiAgICBuZXdOb2RlLm5leHQgPSB0aGlzLmhlYWQ7XG4gICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICByZXR1cm4gdGhpcy5oZWFkLmRhdGE7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBmaXJzdCBub2RlIGluIGxpbmsgbGlzdFxuICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHBvcDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmhlYWQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5oZWFkO1xuXG4gICAgdGhpcy5oZWFkID0gZmlyc3QubmV4dDtcbiAgICByZXR1cm4gZmlyc3QuZGF0YTtcbiAgfSxcblxuICB0b3A6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmhlYWQuZGF0YTtcbiAgfSxcblxuICBpc0VtcHR5OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gIXRoaXMuaGVhZDtcbiAgfSxcblxuICAvKipcbiAgICogTGlua0xpc3QgcmV2ZXJzYWwgdXNpbmcgc3RhY2tzIGlzIGFuIE8oTiArIE0pIHRpbWUgYW5kIHNwYWNlIGNvbXBsZXhpdHlcbiAgICogQHBhcmFtICB7W3R5cGVdfSBsaW5rTGlzdCBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgcmV2ZXJzZTogZnVuY3Rpb24oKSB7XG4gICAgLy8gQ3JlYXRlIGEgc3RhY2sgdG8gc3RvcmUgdGhlIGxpbmtsaXN0IHZhbHVlc1xuICAgIGNvbnN0IHN0YWNrID0gbmV3IExpbmtlZExpc3RTdGFjaygpO1xuXG4gICAgLy8gcHVzaCBhbGwgbGluayBsaXN0IHZhbHVlcyBpbiBzdGFjayBieSBzaGlmdGluZyB0aGUgZmlyc3QgdmFsdWUuXG4gICAgd2hpbGUgKHRoaXMuaGVhZCkgc3RhY2sucHVzaCh0aGlzLnNoaWZ0KCkpO1xuICAgIC8vIHJlLWluc2VydCBhbGwgb2YgdGhlIGxpbmsgbGlzdCB2YWx1ZXMgYnkgcG9wcGluZyB0aGUgc3RhY2tcbiAgICB3aGlsZSAoIXN0YWNrLmlzRW1wdHkoKSkgdGhpcy5pbnNlcnQoc3RhY2sucG9wKCkpO1xuICAgIC8vIHJldHVybiB0aGUgbmV3IHN0YWNrXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGlua2VkTGlzdFN0YWNrO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBOb2RlIGZvciBsaW5rIGxpc3RcbiAqIEBwYXJhbSAgICAgICB7W3R5cGVdfSBkYXRhIFtkZXNjcmlwdGlvbl1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBOb2RlKGRhdGEpIHtcbiAgdGhpcy5kYXRhID0gZGF0YTtcbn1cbi8qKlxuICogQ3JlYXRlIExpbmsgbGlzdFxuICogQHBhcmFtICAgICAgIHtbdHlwZV19IGRhdGEgW2Rlc2NyaXB0aW9uXVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIExpbmtlZExpc3QoZGF0YSkge1xuICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgdGhpcy5oZWFkID0gbmV3IE5vZGUoZGF0YVswXSk7XG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgIGN1cnIubmV4dCA9IG5ldyBOb2RlKGRhdGFbaV0pO1xuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICB9XG4gIH1cbn07XG4vKipcbiAqIFByaW50IExpbmsgbGlzdCBpbiByZWN1cnNpdmUgZmFzaGlvblxuICogQHBhcmFtICB7W3R5cGVdfSBub2RlIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbkxpbmtlZExpc3QucHJpbnRSZWN1cnNpb24gPSBmdW5jdGlvbihub2RlKSB7XG4gIGlmICghbm9kZSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBMaW5rZWRMaXN0LnByaW50UmVjdXJzaW9uKG5vZGUubmV4dCk7XG59O1xuXG5MaW5rZWRMaXN0LnByb3RvdHlwZSA9IHtcbiAgLyoqXG4gICAqIFByaW50IGFsbCB2YWx1ZXMgaW4gYSBsaW5rbGlzdFxuICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHByaW50OiBmdW5jdGlvbigpIHtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcblxuICAgIHdoaWxlIChjdXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhjdXJyLmRhdGEpO1xuICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnZlcnQgbGluayBsaXN0IHRvIGFycmF5XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcblxuICAgIHdoaWxlIChjdXJyKSB7XG4gICAgICBhcnJheS5wdXNoKGN1cnIuZGF0YSk7XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluc2VydCB2YWx1ZSBpbiBsaW5rbGlzdCBhdCBpbmRleCBvciBlbmRcbiAgICogQHBhcmFtICB7W3R5cGVdfSBkYXRhICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gaW5kZXggW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGluc2VydDogZnVuY3Rpb24oZGF0YSwgaW5kZXgpIHtcbiAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoZGF0YSk7XG5cbiAgICBpZiAoIXRoaXMuaGVhZCkge1xuICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICBjb25zdCB0ZW1wID0gdGhpcy5oZWFkO1xuXG4gICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgICAgdGhpcy5oZWFkLm5leHQgPSB0ZW1wO1xuICAgICAgcmV0dXJuIHRoaXMuaGVhZDtcbiAgICB9XG5cbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcbiAgICBsZXQgY3VyckluZGV4ID0gMTtcblxuICAgIHdoaWxlIChjdXJyLm5leHQpIHtcbiAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGN1cnJJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBjdXJyLm5leHQ7XG5cbiAgICAgICAgY3Vyci5uZXh0ID0gbmV3Tm9kZTtcbiAgICAgICAgbmV3Tm9kZS5uZXh0ID0gdGVtcDtcbiAgICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgICB9XG4gICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgICAgKytjdXJySW5kZXg7XG4gICAgfVxuICAgIGN1cnIubmV4dCA9IG5ld05vZGU7XG4gICAgcmV0dXJuIG5ld05vZGU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBmaXJzdCBub2RlIGluIGxpbmsgbGlzdFxuICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHNoaWZ0OiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZmlyc3QgPSB0aGlzLmhlYWQ7XG5cbiAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICByZXR1cm4gZmlyc3Q7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBsYXN0IG5vZGUgaW4gbGluayBsaXRcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBwb3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5oZWFkKSByZXR1cm4gbnVsbDtcbiAgICBsZXQgY3VyciA9IHRoaXMuaGVhZDtcbiAgICBsZXQgcHJldiA9IG51bGw7XG5cbiAgICB3aGlsZSAoY3Vyci5uZXh0KSB7XG4gICAgICBwcmV2ID0gY3VycjtcbiAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgfVxuICAgIHByZXYubmV4dCA9IG51bGw7XG4gICAgcmV0dXJuIGN1cnI7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlbGV0ZSBub2RlIGluIGxpbmsgbGlzdCBhdCBpbmRleFxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGluZGV4IFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBkZWxldGU6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLmhlYWQpIHJldHVybiBudWxsO1xuXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gICAgfVxuXG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IGN1cnJJbmRleCA9IDA7XG4gICAgbGV0IHByZXYgPSBudWxsO1xuXG4gICAgd2hpbGUgKGN1cnIubmV4dCkge1xuICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgY3VyckluZGV4ID09PSBpbmRleCkge1xuICAgICAgICBwcmV2Lm5leHQgPSBjdXJyLm5leHQ7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gICAgICB9XG4gICAgICBwcmV2ID0gY3VycjtcbiAgICAgIGN1cnIgPSBjdXJyLm5leHQ7XG4gICAgICArK2N1cnJJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaGVhZDtcbiAgfSxcbiAgLyoqXG4gICAqIFJldmVyc2UgTGlua0xpc3RcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICByZXZlcnNlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IGN1cnIgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IHByZXYgPSBudWxsO1xuXG4gICAgd2hpbGUgKGN1cnIpIHtcbiAgICAgIGxldCBuZXh0ID0gY3Vyci5uZXh0O1xuXG4gICAgICBjdXJyLm5leHQgPSBwcmV2O1xuICAgICAgcHJldiA9IGN1cnI7XG4gICAgICBjdXJyID0gbmV4dDtcbiAgICB9XG4gICAgdGhpcy5oZWFkID0gcHJldjtcbiAgICByZXR1cm4gdGhpcy5oZWFkO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXZlcnNlIExpbmsgbGlzdCByZWN1cnNpdmVseVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IG5vZGUgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgcmV2ZXJzZVJlY3Vyc2lvbjogZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICghbm9kZS5uZXh0KSB7XG4gICAgICB0aGlzLmhlYWQgPSBub2RlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJldmVyc2VSZWN1cnNpb24obm9kZS5uZXh0KTtcbiAgICBsZXQgdGVtcCA9IG5vZGUubmV4dDtcblxuICAgIHRlbXAubmV4dCA9IG5vZGU7XG4gICAgbm9kZS5uZXh0ID0gbnVsbDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIExpbmtlZExpc3Q6IExpbmtlZExpc3QsXG4gIE5vZGU6IE5vZGVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBEYXRhU3RydWN0dXJlcyBmcm9tICcuL2RhdGEtc3RydWN0dXJlcyc7XG5cbmV4cG9ydCB7IERhdGFTdHJ1Y3R1cmVzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9