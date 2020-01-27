/* global describe, it, before */

import chai from 'chai';
import { algorithms } from '../lib/algo.js';

chai.expect();

const expect = chai.expect;

const {
  selectionSort,
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort
} = algorithms.sorting;

/**
 * SelectionSort
 * @type {SelectionSort}
 */
describe('Given an array [10, 6, 14, 3, 22, 4, 3, 8, 11, 12]', () => {
  it('running SelectionSort should return [3, 3, 4, 6, 8, 10, 11, 12, 14, 22]', () => {
    expect(selectionSort([10, 6, 14, 3, 22, 4, 3, 8, 11, 12]))
    .to.be.an('array')
    .to.include.members([3, 3, 4, 6, 8, 10, 11, 12, 14, 22]);
  });
});

/**
 * bubbleSort
 * @type {bubbleSort}
 */
describe('Given an array [10, 6, 14, 3, 22, 4, 3, 8, 11, 12]', () => {
  it('running bubbleSort should return [3, 3, 4, 6, 8, 10, 11, 12, 14, 22]', () => {
    expect(bubbleSort([10, 6, 14, 3, 22, 4, 3, 8, 11, 12]))
    .to.be.an('array')
    .to.include.members([3, 3, 4, 6, 8, 10, 11, 12, 14, 22]);
  });
});

describe('Given an array [22, 14, 12, 11, 10, 8, 6, 4, 3, 2]', () => {
  it('running bubbleSort should return [2, 3, 4, 6, 8, 10, 11, 12, 14, 22]', () => {
    expect(bubbleSort([22, 14, 12, 11, 10, 8, 6, 4, 3, 2]))
    .to.be.an('array')
    .to.include.members([2, 3, 4, 6, 8, 10, 11, 12, 14, 22]);
  });
});

/**
 * insertionSort
 * @type {insertionSort}
 */
describe('Given an array [10, 6, 14, 3, 22, 4, 3, 8, 11, 12]', () => {
  it('running bubbleSort should return [3, 3, 4, 6, 8, 10, 11, 12, 14, 22]', () => {
    expect(insertionSort([10, 6, 14, 3, 22, 4, 3, 8, 11, 12]))
    .to.be.an('array')
    .to.include.members([3, 3, 4, 6, 8, 10, 11, 12, 14, 22]);
  });
});

/**
 * mergeSort
 * @type {mergeSort}
 */
describe('Given an array [10, 6, 14, 3, 22, 4, 3, 8, 11, 12]', () => {
  it('running bubbleSort should return [3, 3, 4, 6, 8, 10, 11, 12, 14, 22]', () => {
    expect(mergeSort([10, 6, 14, 3, 22, 4, 3, 8, 11, 12]))
    .to.be.an('array')
    .to.include.members([3, 3, 4, 6, 8, 10, 11, 12, 14, 22]);
  });
});

/**
 * quickSort
 * @type {quickSort}
 */
describe('Given an array [10, 6, 14, 3, 22, 4, 3, 8, 11, 12]', () => {
  it('running bubbleSort should return [3, 3, 4, 6, 8, 10, 11, 12, 14, 22]', () => {
    expect(quickSort([10, 6, 14, 3, 22, 4, 3, 8, 11, 12]))
    .to.be.an('array')
    .to.include.members([3, 3, 4, 6, 8, 10, 11, 12, 14, 22]);
  });
});
