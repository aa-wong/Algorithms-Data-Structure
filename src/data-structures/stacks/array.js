'use strict';

function StackArray() {
  this._stack = [];
  this._top = -1;
}

StackArray.prototype = {
  push: function(data) {
    ++this._top;
    if (this._stack.length >= this._top + 1) this._stack[this._top] = data;
    else this._stack.push(data);
    return this._stack;
  },

  pop: function() {
    if (this.isEmpty()) return;
    const top = this._stack[this._top];

    this._stack[this._top] = undefined;
    --this._top;
    return top;
  },

  top: function() {
    return this._stack[this._top];
  },

  isEmpty: function() {
    return this._top === -1;
  }
};

module.exports = StackArray;
