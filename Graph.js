"use strict";

function Queue() {
  var items = [];

  this.enqueue = function(element) {
    items.push(element);
  };

  this.dequeue = function() {
    return items.shift();
  };

  this.front = function() {
    return items[0];
  };

  this.isEmpty = function() {
    return items.length === 0;
  };

  this.clear = function() {
    items = [];
  };

  this.size = function() {
    return items.length;
  };

  this.print = function() {
    console.log(items.toString());
  };
}

function Graph() {
  let vertices = [];
  let adjList = new Map();

  this.addVertex = function (v) {
    vertices.push(v);
    adjList.set(v, []);
  };

  this.addEdge = function (v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  };

  this.toString = function () {
    var s = '';
    for (let i = 0; i < vertices.length; ++i) {
      s += vertices[i] + ' -> ';
      let neighbors = adjList.get(vertices[i]);
      for (let j = 0; j < neighbors.length; ++j) {
        s += neighbors[j] + ' ';
      }
      s += '\n';
    }
    return s;
  };

  this.bfs = function (v, callback) {
    let color = initializeColor();
    var queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      let u = queue.dequeue();
      let neighbors = adjList.get(u);
      color[u] = 'grey';
      for (let i = 0; i < neighbors.length; ++i) {
        let w = neighbors[i];
        if (color[w] === 'white') {
          color[w] = 'grey';
          queue.enqueue(w);
        }
      }
      color[u] = 'black';
      if (callback) {
        callback(u);
      }
    }
  };

  let initializeColor = function () {
    let color = [];
    for (let i = 0; i < vertices.length; ++i) {
      color[vertices[i]] = 'white';
    }
    return color;
  }

}


//test
var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; ++i) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());

function printNode(value) {
  console.log('Visited vertex: ' + value);
}

graph.bfs(myVertices[1], printNode);
