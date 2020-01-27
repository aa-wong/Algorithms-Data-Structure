# algo.js
Javascript Library of algorithms and data structures created to refine algorithm skill

## Features

* Data Structures
  - ArrayQueue
  - ArrayStack
  - BinarySearchTree
  - LinkedListQueue
  - LinkedListStack
  - LinkedList
  - DoublyLinkedList

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
 * dataStructures
 */
import {
  dataStructures,
  algorithms
} from '../lib/algo.min.js';

const {
  stacks,
  BinarySearchTree
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
