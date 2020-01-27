'use strict';

const { QueueLinkedList } = require('../queues');

function Graph() {
  this.numOfVertices = 0;
  this.list = new Map();
};

Graph.prototype = {
  addVertex: function(v) {
    ++this.numOfVertices;
    this.list.set(v, []);
    return this;
  },

  addEdge: function(v, w) {
    if (!this.list.get(v)) this.addVertex(v);
    this.list.get(v).push(w);
    if (!this.list.get(w)) this.addVertex(w);
    this.list.get(w).push(v);
    return this;
  },

  toObject: function() {
    const g = {};

    this.list.forEach((value, key) => {
      g[key] = value;
    });
    return g;
  },

  bfs: function(v) {
    const visited = Array(this.numOfVertices).fill(false);
    const q = new QueueLinkedList();

    visited[v] = true;
    q.enqueue(v);

    while (!q.isEmpty()) {
      const elem = q.dequeue();
      const edges = this.list.get(elem);

      edges.forEach(n => {
        if (!visited[n]) {
          visited[n] = true;
          q.enqueue(n);
        }
      });
    }
  },

  dfs: function(v) {

  }
};

module.exports = Graph;
