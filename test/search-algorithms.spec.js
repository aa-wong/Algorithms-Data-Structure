/* global describe, it, before */

import chai from 'chai';
import { algorithms } from '../lib/algo.js';

chai.expect();

const expect = chai.expect;

const {
  binarySearch
} = algorithms.search;

/**
 * binarySearch
 * @type {binarySearch}
 */
describe('Given an array [2, 3, 4, 6, 8, 10, 11, 12, 14, 22]', () => {
  it('running binarySearch to search for 12 should return 12', () => {
    expect(binarySearch([2, 3, 4, 6, 8, 10, 11, 12, 14, 22], 12))
    .to.be.equal(12);
  });

  it('running binarySearch to search for 15 should return null', () => {
    expect(binarySearch([2, 3, 4, 6, 8, 10, 11, 12, 14, 22], 15))
    .to.be.equal(null);
  });
});
