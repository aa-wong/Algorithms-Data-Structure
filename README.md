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
  - search
    - binarySearch

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
 * Array Sorting Algorithms
 */
const {
  selectionSort,
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort
} = algorithms.sorting;

const sortedArray = mergeSort([10, 6, 14, 3, 22, 4, 3, 8, 11, 12]);

/**
 * sorted array search algorithms
 */
const {
  binarySearch
} = algorithms.search;

const value = binarySearch([2, 3, 4, 6, 8, 10, 11, 12, 14, 22], 12);

```
