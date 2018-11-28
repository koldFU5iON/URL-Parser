'use strict'

const chai = require('chai');
const expect = chai.expect;

const url = require('../engine/URLPaser.js');

let urlTest = 'https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript'

describe('Testing urlParser function', function() {
  describe('urlParser function', function() {
    it(`ensure that the returned function is calling the URL object key for 'url'`, function() {
      expect(url.urlParser('hello')).to.equal('hello')
    });
    it('Check if RegExp will return the protocol of the URL', () => {
      expect(url.urlParser(url)).to.equal('https://')
    })
  });
});
