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
function StackLinkedList() {}
/**
 * Print Link list in recursive fashion
 * @param  {[type]} node [description]
 * @return {[type]}      [description]
 */
StackLinkedList.printRecursion = function(node) {
  if (!node) return null;
  return StackLinkedList.printRecursion(node.next);
};

StackLinkedList.prototype = {
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
  push: function(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
    return this;
  },

  /**
   * Remove first node in link list
   * @return {[type]} [description]
   */
  pop: function() {
    if (!this.head) return null;
    const first = this.head;

    this.head = first.next;
    return first.data;
  },

  top: function() {
    return this.head.data;
  },

  isEmpty: function() {
    return !this.head;
  },

  /**
   * LinkList reversal using stacks is an O(N + M) time and space complexity
   * @param  {[type]} linkList [description]
   * @return {[type]}          [description]
   */
  reverse: function() {
    // Create a stack to store the linklist values
    const stack = new StackLinkedList();

    // push all link list values in stack by shifting the first value.
    while (this.head) stack.push(this.shift());
    // re-insert all of the link list values by popping the stack
    while (!stack.isEmpty()) this.insert(stack.pop());
    // return the new stack
    return this;
  }
};

module.exports = StackLinkedList;
