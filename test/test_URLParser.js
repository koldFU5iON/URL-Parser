'use strict'

const chai = require('chai');
const expect = chai.expect;

const urlParser = require('../engine/URLPaser.js');

let urlTest = 'https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript'

describe('Testing the WebAddress Function', function() {
  describe('Testing the object', function() {
    // let urlObject = new WebAddress(urlTest)
    it('Expect urlParser to return an object', () => {
      expect(urlParser.parse(urlTest)).to.be.a('object')
    })
    it('urlParser should return the protocol "https"', () => {
      expect(urlParser.parse(urlTest)).to.contain.a.property('protocol').to.equal('https')
    })
    it('urlPasrse should provide the domain name "stackoverflow"', function() {
      expect(urlParser.parse(urlTest)).to.contain.a.property('domain').to.equal('stackoverflow')
    })
    it('urlParser should provide a list of folders as an array')
    it('urlParser should provide the final file')
  });
  describe('parse function', function() {
    it('Should returnt the same URL back', () => {
      expect(urlParser.parse(urlTest)).to.contain.a.property('url').to.equal(urlTest)
    })
  });
});
