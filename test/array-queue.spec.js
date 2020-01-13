/* global describe, it, before */

import chai from 'chai';
import { DataStructures } from '../lib/Algorithms.js';

chai.expect();

const expect = chai.expect;

let lib;

/**
 * ArrayQueue
 * @type {ArrayQueue}
 */
describe('Given an instance of ArrayQueue', () => {
  before(() => {
    const { ArrayQueue } = DataStructures;
    lib = new ArrayQueue();
  });
  /**
   * isEmpty
   */
  describe('when running ArrayQueue.isEmpty', () => {
    it('isEmpty() returns true.', () => {
      expect(lib.isEmpty()).to.be.equal(true);
    });
  });
  /**
   * enqueue
   */
  describe('when running ArrayQueue.enqueue()', () => {
    it('enqueue() to store all elements in [10, 6, 14, 3, 22, 4, 3, 8, 11, 12].', () => {
      [10, 6, 14, 3, 22, 4, 3, 8, 11, 12].forEach(n => lib.enqueue(n));
      expect(lib._queue).to.be.an('array').to.include.members([10, 6, 14, 3, 22, 4, 3, 8, 11, 12]);
    });
  });
  /**
   * dequeue
   */
  describe('when running ArrayQueue.dequeue()', () => {
    it('dequeue() returns value of 10.', () => {
      expect(lib.dequeue()).to.be.equal(10);
    });
  });
  /**
   * front
   */
  describe('when running ArrayQueue.front()', () => {
    it('front() returns node with value of 6.', () => {
      expect(lib.front()).to.be.equal(6);
    });
  });
  /**
   * isEmpty
   */
  describe('when running ArrayQueue.isEmpty', () => {
    it('isEmpty() returns false.', () => {
      expect(lib.isEmpty()).to.be.equal(false);
    });
  });
});
