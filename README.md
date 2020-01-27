# algo.js
Javascript Library of algorithms and data structures created to refine algorithm skills.

## Features

* Data Structures
  - BinarySearchTree
  - Graph
  - linkedLists
    - LinkedList
    - DoublyLinkedList
  - queues
    - ArrayQueue
    - LinkedListQueue
  - stacks
    - ArrayStack
    - LinkedListStack

* Algorithms
  - sorting
    - selectionSort
    - bubbleSort
    - insertionSort
    - mergeSort
    - quickSort

## Getting started
Use the algo.min.js file found in the lib directory.

```js
/**
 * Import library
 */
import {
  dataStructures,
  algorithms
} from './algo.min.js';

/**
 * Data Structures
 */
const {
  BinarySearchTree,
  Graph,
  linkedLists,
  queues,
  stacks
} = dataStructures;

const bst = new BinarySearchTree();

const stack = new stacks.StackLinkedList();

/**
 * Sorting array Algorithms
 */
const {
  selectionSort,
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort
} = algorithms.sorting;

const sortedArray = mergeSort([10, 6, 14, 3, 22, 4, 3, 8, 11, 12]);

```
