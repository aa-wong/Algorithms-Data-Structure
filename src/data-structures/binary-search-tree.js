'use strict';

function Node(val) {
  this._data = val;
};

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
    if (node && node.constructor === Number) this._left = new Node(node);
    else this._left = node;
  },

  get right() {
    return this._right;
  },

  set right(node) {
    if (node && node.constructor === Number) this._right = new Node(node);
    else this._right = node;
  },

  insert: function(data) {
    if (!this.data) this.data = data;
    else if (data > this.data) {
      if (this.right) this.right.insert(data);
      else this.right = data;
    } else if (data < this.data) {
      if (this.left) this.left.insert(data);
      else this.left = data;
    }
  },

  search: function(data) {
    if (!this.data) return false;
    if (data > this.data && this.right) return this.right.search(data);
    if (data < this.data && this.left) return this.left.search(data);
    return data === this.data;
  }
};

function BinarySearchTree(data) {
  this._root = new Node(data);
};

BinarySearchTree.prototype = {
  get root() {
    return this._root;
  },

  set root(node) {
    this._root = node;
  },

  insert: function(data) {
    if (!this.root) this.root = new Node(data);
    else this.root.insert(data);
  },

  search: function(data) {
    if (!this.root) return false;
    return this.root.search(data);
  },

  findMin: function() {
    if (!this.root) return;
    const getMin = (node) => {
      if (node.left) return getMin(node.left);
      return node.data;
    };

    return getMin(this.root);
  },

  findMax: function() {
    if (!this.root) return;
    const getMax = (node) => {
      if (node.right) return getMax(node.right);
      return node.data;
    };

    return getMax(this.root);
  },

  delete: function(val) {
    const deleteNode = (root, val) => {
      // If No Node return undefined
      if (!root) return;
      // If val is less than current node data. Continue on to left child.
      if (val < root.data) return deleteNode(root.left, val, root);
      // If val is greater than current node data. Continue on to right child.
      if (val > root.data) return deleteNode(root.right, val, root);
      // Case 1: No children, deallocate child from parent
      if (root.left && root.right) {
        // Case 3: if 2 children
        // Find minimum value of the right node
        let temp = root.right;

        while (temp.left) temp = temp.left;
        // write node data to the minimum values
        root.data = temp.data;
        // Move on to the right and continue on
        root.right = deleteNode(root.right, temp.data);
        return root;
      }
      return root.left || root.right;
    };

    deleteNode(this.root, val);
  },

  levelOrder: function() {
    const vals = [];

    if (this.root) {
      const queue = [];

      queue.push(this.root);
      while (queue.length > 0) {
        let curr = queue.shift();

        vals.push(curr.data);
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      }
    }
    return vals;
  },

  preOrder: function() {
    let vals = [];

    const traverse = (node) => {
      vals.push(node.data);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    if (this.root) traverse(this.root);
    return vals;
  },

  inOrder: function() {
    let vals = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      vals.push(node.data);
      if (node.right) traverse(node.right);
    };

    if (this.root) traverse(this.root);
    return vals;
  },

  postOrder: function() {
    let vals = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      vals.push(node.data);
    };

    if (this.root) traverse(this.root);
    return vals;
  },

  maxDepth: function() {
    if (!this.root) return 0;
    const maxDepth = (node) => {
      if (!node) return 0;
      return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
    };

    return maxDepth(this.root);
  },

  isValid: function() {
    const isBST = (node, min, max) => {
      // If no Node then we have reached the end of the tree.
      // Return true
      if (!node) return true;
      // Validate if the data is less than or equal to the min or greater than or equal to max.
      // Then the tree is not a valid search tree.
      if (node.data <= min || node.data >= max) return false;
      return isBST(node.left, min, node.data) && isBST(node.right, node.data, max);
    };

    return isBST(this.root, -Infinity, Infinity);
  },

  pathSum: function(sum) {
    const hasPathSum = (root, sum) => {
      if (!root) return false;
      sum -= root.data;
      if (!root.left && !root.right) return sum === 0;
      return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
    };

    return hasPathSum(this.root, sum);
  },

  isSymmetric: function() {
    if (!this.root) return true;
    const validateSymmetry = (left, right) => {
      if (!left || !right) return left === right;
      if (left.data !== right.data) return false;
      return validateSymmetry(left.left, right.right) && validateSymmetry(left.right, right.left);
    };

    return validateSymmetry(this.root.left, this.root.right);
  }
};

module.exports = BinarySearchTree;
