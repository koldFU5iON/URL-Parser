'use strict'

const chai = require('chai');
const expect = chai.expect;

const urlParser = require('../engine/URLPaser.js');

let urlTest = {
  basic : 'https://stackoverflow.com',
  subDomain : 'https://sub.domain.com',
  complex : 'https://uk.ign.com/articles/2018/11/30/red-dead-online-review'
}

let testWeb_Basic = new urlParser(urlTest.basic);
let testWeb_Sub = new urlParser(urlTest.subDomain);
let testWeb_Complex = new urlParser(urlTest.complex);

describe('Testing the WebAddress Function', function() {
  describe('Testing the object', function() {
    // let urlObject = new WebAddress(urlTest)
    it('Expect urlParser to return an object', () => {
      expect(testWeb_Basic).to.be.a('object')
    })
    it('urlParser should return the protocol "https"', () => {
      expect(testWeb_Basic).to.contain.a.property('protocol').to.equal('https')
    })
    it(`expect urlParser to return the domain name for ${urlTest.basic}`, function() {
      expect(testWeb_Basic).to.contain.a.property('domain').to.equal('stackoverflow')
    })
    it(`expect urlParser to return the sub-domain name for ${urlTest.subDomain}`, function() {
      expect(testWeb_Sub).to.contain.a.property('subDomain').to.equal('sub')
    })
  });
  describe('Testing file name manipulation', () => {
    it('urlParser should provide the final file', function() {
      expect(testWeb_Complex).to.have.nested.property('file.title').to.equal('red-dead-online-review')
    })
    it('urlParser should provide the final file, with spaces and no "-"', function() {
      expect(testWeb_Complex).to.have.nested.property('file.clean').to.equal('red dead online review')
    })
  });
  describe('parse function', function() {
    it('Should return the same URL back', () => {
      expect(testWeb_Basic).to.contain.a.property('url').to.equal(urlTest.basic)
    })
  });
});
