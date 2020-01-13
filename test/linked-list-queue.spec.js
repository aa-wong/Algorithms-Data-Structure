/* global describe, it, before */

import chai from 'chai';
import { DataStructures } from '../lib/Algorithms.js';

chai.expect();

const expect = chai.expect;

let lib;

/**
 * LinkedListQueue
 * @type {LinkedListQueue}
 */
describe('Given an instance of LinkedListQueue', () => {
  before(() => {
    const { LinkedListQueue } = DataStructures;
    lib = new LinkedListQueue();
  });
  /**
   * isEmpty
   */
  describe('when running LinkedListQueue.isEmpty', () => {
    it('isEmpty() returns true.', () => {
      expect(lib.isEmpty()).to.be.equal(true);
    });
  });
  /**
   * enqueue
   */
  describe('when running LinkedListQueue.enqueue()', () => {
    it('enqueue() to store all elements in [10, 6, 14, 3, 22, 4, 3, 8, 11, 12]. front = 10 and rear = 12', () => {
      [10, 6, 14, 3, 22, 4, 3, 8, 11, 12].forEach(n => lib.enqueue(n));
      expect(lib._rear.data).to.be.equal(12);
      expect(lib._front.data).to.be.equal(10);
    });
  });
  /**
   * dequeue
   */
  describe('when running LinkedListQueue.dequeue()', () => {
    it('dequeue() returns value of 10.', () => {
      expect(lib.dequeue()).to.be.equal(10);
    });
  });
  /**
   * front
   */
  describe('when running LinkedListQueue.front()', () => {
    it('front() returns node with value of 6.', () => {
      expect(lib.front()).to.be.equal(6);
    });
  });
  /**
   * isEmpty
   */
  describe('when running LinkedListQueue.isEmpty', () => {
    it('isEmpty() returns false.', () => {
      expect(lib.isEmpty()).to.be.equal(false);
    });
  });
});
