'use strict';

const { LinkedList } = require('./linked-list');

module.exports = {
  ArrayQueue: require('./array-queue'),
  ArrayStack: require('./array-stack'),
  BinarySearchTree: require('./binary-search-tree'),
  LinkedListQueue: require('./linked-list-queue'),
  LinkedListStack: require('./linked-list-stack'),
  LinkedList: LinkedList,
  DoublyLinkedList: require('./doubly-linked-list')
};
