const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')
const transpose = require('../transpose');
const wordArr = [
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
];

describe("#wordSearch()", function () {
  it("should return false if the word is not present", function () {
    const result = wordSearch(wordArr, 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function () {
    const result = wordSearch(wordArr, 'SEINFELD')

    assert.isTrue(result);
  });

  it('should return true if word is found vertically', function () {
    const result = wordSearch(transpose(wordArr), 'ASYHWBUOE')

    assert.isTrue(result);
  });

  it("should return undefined if matrix is empty", function () {
    const result = wordSearch([], 'FRANK');

    assert.isUndefined(result);
  });
});
