'use strict'

const chai = require('chai');
const expect = chai.expect;

const url = require('../engine/URLPaser.js');

let urlTest = 'https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript'

describe('Testing urlParser function', function() {
  describe('urlParser function', function() {
   //  //inserting test string
   //  beforeEach(() => {
   //   url.urlParse(urlTest)
   //   // console.log(url.url);
   // });


    it(`ensure that the returned function is calling the URL object key for 'url'`, function() {
      expect(url.urlParse(urlTest)).to.contain.key('url');
    });
    it(`If it's not a URL should through an errors`)
    it(`extractURl should return an array`, () => {
      expect(url.extractURL(urlTest)).to.be.an('array')
    });
    it(`extractURl should return an array length of 3`, () => {
      expect(url.extractURL(urlTest)).to.be.an('array').with.length(3)
    });
    it(`extractURl should return an array`, () => {
      expect(url.extractURL(urlTest)).to.be.an('array')
    });
    it(`Returned array should not be empty`, () => {
      expect(url.extractURL(urlTest)).to.not.contain('')
    });
    it(`Identify the protocol`, () => {
      expect(url.extractURL(urlTest)).to.contain('https://')
    });
    it(`Identify the Domain name`)
    it(`Identify the title(file name)`)
  });
});
