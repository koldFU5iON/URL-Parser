'use strict'

const chai = require('chai');
const expect = chai.expect;

const urlParser = require('../engine/URLPaser.js').parse;

let urlTest = {
  basic : 'https://stackoverflow.com/',
  subDomain : 'https://sub.domain.com/'
}

describe('Testing the WebAddress Function', function() {
  describe('Testing the object', function() {
    // let urlObject = new WebAddress(urlTest)
    it('Expect urlParser to return an object', () => {
      expect(urlParser(urlTest.basic)).to.be.a('object')
    })
    it('urlParser should return the protocol "https"', () => {
      expect(urlParser(urlTest.basic)).to.contain.a.property('protocol').to.equal('https')
    })
    it(`expect urlParser to return the domain name for ${urlTest.basic}`, function() {
      expect(urlParser(urlTest.basic)).to.contain.a.property('domain').to.equal('stackoverflow')
    })
    it(`expect urlParser to return the sub-domain name for ${urlTest.subDomain}`, function() {
      expect(urlParser(urlTest.subDomain)).to.contain.a.property('subDomain').to.equal('sub')
    })
    it('urlParser should provide the final file')
  });
  describe('parse function', function() {
    it('Should returnt the same URL back', () => {
      expect(urlParser(urlTest.basic)).to.contain.a.property('url').to.equal(urlTest.basic)
    })
  });
});
