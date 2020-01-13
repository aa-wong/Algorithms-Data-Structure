'use strict';

function Node(val) {
  this.data = val;
}

function LinkListQueue() {}

LinkListQueue.prototype = {
  enqueue: function(val) {
    if (this.isEmpty()) this._rear = this._front = new Node(val);
    else this._rear = this._rear.next = new Node(val);
  },

  dequeue: function() {
    const node = this._front;

    if (node === this._rear) this._rear = this._front = undefined;
    else if (node.next) this._front = node.next;
    return node.data;
  },

  front: function() {
    return this._front.data;
  },

  isEmpty: function() {
    return this._front === undefined && this._rear === undefined;
  }
};

module.exports = LinkListQueue;
