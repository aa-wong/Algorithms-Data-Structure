/* global describe, it, before */

import chai from 'chai';
import { DataStructures } from '../lib/Algorithms.js';

chai.expect();

const expect = chai.expect;

let lib;

/**
 * ArrayStack
 * @type {ArrayStack}
 */
describe('Given an instance of ArrayStack', () => {
  before(() => {
    const { ArrayStack } = DataStructures;
    lib = new ArrayStack();
  });
  /**
   * isEmpty
   */
  describe('when running ArrayStack.isEmpty', () => {
    it('isEmpty() returns true.', () => {
      expect(lib.isEmpty()).to.be.equal(true);
    });
  });
  /**
   * push
   */
  describe('when running ArrayStack.push()', () => {
    it('push() to store all elements in [10, 6, 14, 3, 22, 4, 3, 8, 11, 12].', () => {
      [10, 6, 14, 3, 22, 4, 3, 8, 11, 12].forEach(n => lib.push(n));
      expect(lib._stack).to.be.an('array').to.include.members([10, 6, 14, 3, 22, 4, 3, 8, 11, 12]);
    });
  });
  /**
   * pop
   */
  describe('when running ArrayStack.pop()', () => {
    it('pop() returns value of 12.', () => {
      expect(lib.pop()).to.be.equal(12);
    });
  });
  /**
   * top
   */
  describe('when running ArrayStack.top()', () => {
    it('top() returns node with value of 11.', () => {
      expect(lib.top()).to.be.equal(11);
    });
  });
  /**
   * isEmpty
   */
  describe('when running ArrayStack.isEmpty', () => {
    it('isEmpty() returns false.', () => {
      expect(lib.isEmpty()).to.be.equal(false);
    });
  });
});
