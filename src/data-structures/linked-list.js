'use strict';
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
    let curr = this.head;

    for (let i = 1; i < data.length; ++i) {
      curr.next = new Node(data[i]);
      curr = curr.next;
    }
  }
};
/**
 * Print Link list in recursive fashion
 * @param  {[type]} node [description]
 * @return {[type]}      [description]
 */
LinkedList.printRecursion = function(node) {
  if (!node) return null;
  return LinkedList.printRecursion(node.next);
};

LinkedList.prototype = {
  /**
   * Print all values in a linklist
   * @return {[type]} [description]
   */
  print: function() {
    let curr = this.head;

    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  },

  /**
   * Convert link list to array
   * @return {[type]} [description]
   */
  toArray: function() {
    const array = [];
    let curr = this.head;

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
  insert: function(data, index) {
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
        newNode.next = temp;
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
  shift: function() {
    if (!this.head) return null;
    const first = this.head;

    this.head = this.head.next;
    return first;
  },

  /**
   * Remove last node in link lit
   * @return {[type]} [description]
   */
  pop: function() {
    if (!this.head) return null;
    let curr = this.head;
    let prev = null;

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
  delete: function(index) {
    if (!this.head) return null;

    if (index === 0) {
      this.head = this.head.next;
      return this.head;
    }

    let curr = this.head;
    let currIndex = 0;
    let prev = null;

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
  reverse: function() {
    if (!this.head) return null;
    let curr = this.head;
    let prev = null;

    while (curr) {
      let next = curr.next;

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
  reverseRecursion: function(node) {
    if (!node.next) {
      this.head = node;
      return;
    }
    this.reverseRecursion(node.next);
    let temp = node.next;

    temp.next = node;
    node.next = null;
  }
};

module.exports = {
  LinkedList: LinkedList,
  Node: Node
};
