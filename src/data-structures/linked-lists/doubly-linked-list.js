'use strict';

const {
  LinkedList,
  Node
} = require('./linked-list');

function DoubleNode(data) {
  Node.call(this, data);
};

// create constructor with LinkedList inheritance
function DoublyLinkedList(data) {
  // LinkedList.call(this, data);
  if (data.length > 0) {
    this.head = new DoubleNode(data[0]);
    let curr = this.head;

    for (let i = 1; i < data.length; ++i) {
      let newNode = new DoubleNode(data[i]);

      newNode.prev = curr;
      curr.next = newNode;
      curr = curr.next;
    }
  }
};
// Inherit all prototype from LinkedList
DoublyLinkedList.prototype = Object.create(LinkedList.prototype);
// overwrite prototypes
// Reassign constructor prototype
DoublyLinkedList.prototype.constructor = DoublyLinkedList;
DoublyLinkedList.prototype.insert = function(data, index) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return this.head;
  }

  if (index === 0) {
    const temp = this.head;

    this.head = newNode;
    this.head.next = temp;
    return this.head;
  }

  let curr = this.head;
  let currIndex = 1;

  while (curr.next) {
    if (index !== undefined && currIndex === index) {
      let temp = curr.next;

      curr.next = newNode;
      newNode.prev = curr;
      newNode.next = temp;
      temp.prev = newNode;
      return this;
    }
    curr = curr.next;
    ++currIndex;
  }
  curr.next = newNode;
  newNode.prev = curr;
  return this;
};

DoublyLinkedList.prototype.shift = function() {
  if (!this.head) return;
  const first = this.head;

  this.head = first.next;
  this.head.prev = null;
  return first.data;
};

DoublyLinkedList.prototype.delete = function(index) {
  if (!this.head) return null;

  if (index === 0) {
    this.head = this.head.next;
    return this;
  }

  let curr = this.head;
  let currIndex = 0;
  let prev = null;

  while (curr.next) {
    if (index !== undefined && currIndex === index) {
      const next = curr.next;

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

DoublyLinkedList.prototype.reverse = function() {
  if (!this.head) return null;
  let curr = this.head;
  let prev = null;

  while (curr) {
    let next = curr.next;

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
DoublyLinkedList.prototype.reverseRecursion = function() {
  const reverse = (node) => {
    if (!node || !node.next) return;
    reverse(node.next);
    const temp = node.next;

    temp.next = node;
    node.prev = temp;
    node.next = null;
  };

  reverse(this.head);
  return this;
};

module.exports = DoublyLinkedList;
