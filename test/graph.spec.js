/* global describe, it, before */

import chai from 'chai';
import { dataStructures } from '../lib/algo.js';

chai.expect();

const expect = chai.expect;

let lib;

/**
 * Graph
 * @type {Graph}
 */
describe('Given an instance of Graph', () => {
  before(() => {
    const { Graph } = dataStructures;
    lib = new Graph();
  });
  /**
   * to Array
   */
  describe('when running Graph.addVertex()', () => {
    it(`toObject() returns object with keys of [ 'A', 'B', 'C', 'D', 'E', 'F' ].`, () => {
      [ 'A', 'B', 'C', 'D', 'E', 'F' ].forEach(e => lib.addVertex(e));
      expect(lib.toObject()).to.be.an('object').that.has.all.keys('A', 'B', 'C', 'D', 'E', 'F');
    });
  });

  /**
   * [e description]
   * @type {[type]}
   */
  // describe(`when running Graph.addEdge() for ['A', 'B'], ['A', 'D'], ['A', 'E'], ['B', 'C'], ['D', 'E'], ['E', 'F'], ['E', 'C'], ['C', 'F']`, () => {
  //   it(`toObject() returns object to include {
  //     A: [ 'B', 'D', 'E' ],
  //     B: [ 'A', 'C' ],
  //     C: [ 'B', 'E', 'F' ],
  //     D: [ 'A', 'E' ],
  //     E: [ 'A', 'D', 'F', 'C' ],
  //     F: [ 'E', 'C' ] });
  // }.`, () => {
  //     [
  //       ['A', 'B'],
  //       ['A', 'D'],
  //       ['A', 'E'],
  //       ['B', 'C'],
  //       ['D', 'E'],
  //       ['E', 'F'],
  //       ['E', 'C'],
  //       ['C', 'F']
  //     ].forEach(e => lib.addEdge(...e));
  //     expect(lib.toObject()).to.include({
  //       A: [ 'B', 'D', 'E' ],
  //       B: [ 'A', 'C' ],
  //       C: [ 'B', 'E', 'F' ],
  //       D: [ 'A', 'E' ],
  //       E: [ 'A', 'D', 'F', 'C' ],
  //       F: [ 'E', 'C' ] });
  //   });
  // });
//   /**
//    * insert with index
//    */
//   describe('when running Graph.insert(9, 3)', () => {
//     it('insert() returns node with value of 9, a next node having a value of 3 and toArray() returns array of [10, 6, 14, 9, 3, 22, 4, 3, 8, 11, 12, 15].', () => {
//       expect(lib.insert(9, 3).toArray()).to.be.an('array').to.include.members([10, 6, 14, 9, 3, 22, 4, 3, 8, 11, 12, 15]);
//     });
//   });
//   /**
//    * shift
//    */
//   describe('when running Graph.shift()', () => {
//     it('shift() returns node with value of 10 and toArray() returns array of [6, 14, 9, 3, 22, 4, 3, 8, 11, 12, 15].', () => {
//       expect(lib.shift()).to.be.equal(10);
//       expect(lib.toArray()).to.be.an('array').to.include.members([6, 14, 9, 3, 22, 4, 3, 8, 11, 12, 15]);
//     });
//   });
//   /**
//    * Pop
//    */
//   describe('when running Graph.pop()', () => {
//     it('pop() returns node with value of 15 and toArray() returns array of [6, 14, 9, 3, 22, 4, 3, 8, 11, 12].', () => {
//       expect(lib.pop()).to.be.equal(15);
//       expect(lib.toArray()).to.be.an('array').to.include.members([6, 14, 9, 3, 22, 4, 3, 8, 11, 12]);
//     });
//   });
//   /**
//    * Delete
//    */
//   describe('when running Graph.delete(5)', () => {
//     it('delete(5) removes node at index 5 and toArray() returns array of [6, 14, 9, 3, 22, 3, 8, 11, 12].', () => {
//       expect(lib.delete(5).toArray()).to.be.an('array').to.include.members([6, 14, 9, 3, 22, 3, 8, 11, 12]);
//     });
//   });
//
//   /**
//    * Reverse
//    */
//   describe('when running Graph.reverse()', () => {
//     it('reverse() and toArray() returns array of [12, 11, 8, 3, 22, 3, 9, 14, 6].', () => {
//       expect(lib.reverse().toArray()).to.be.an('array').to.include.members([12, 11, 8, 3, 22, 3, 9, 14, 6]);
//     });
//   });
});
