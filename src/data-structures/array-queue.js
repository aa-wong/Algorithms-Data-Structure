'use strict';

function ArrayQueue() {
  this._queue = Array(10).fill(null);
  this._front = -1;
  this._rear = -1;
}

ArrayQueue.prototype = {
  enqueue: function(x) {
    if ((this._rear + 1) % this._queue.length === this._front) return;
    if (this.isEmpty()) this._rear = this._front = 0;
    else this._rear = (this._rear + 1) % this._queue.length;
    this._queue[this._rear] = x;
  },

  dequeue: function() {
    if (this.isEmpty()) return;
    let val;

    if (this._front === this._rear) {
      val = this._queue[this._front];
      this._front = this._rear = -1;
    } else {
      val = this._queue[this._front];
      ++this._front;
    }
    return val;
  },

  front: function() {
    return this._queue[this._front];
  },

  isEmpty: function() {
    return this._front === - 1 && this._rear === -1;
  }
};

module.exports = ArrayQueue;
