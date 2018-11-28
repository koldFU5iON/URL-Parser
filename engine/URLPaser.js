'use strict'

let urlInput = 'https://dummysite.com/news/article/';

// console.log('running with url: ' + urlInput);

function WebAddress(url){
  this.url = url;

}

WebAddress.prototype.protocol;
WebAddress.prototype.domain;
WebAddress.prototype.file;

function urlParse(url) {
  let web = new WebAddress(url)

  web.url = url

  let webSeg = extractURL(web.url)

  web.protocol = webSeg[0];
  web.domain = webSeg[1];
  web.file = webSeg[2];

  console.log(`The Web address contains the following: ${web.domain} and is titled: ${web.file}`);

  return web;
}

function extractURL(url) {
let addressArray = [];

  // check for protocol
  if(url.startsWith('http:')) {
    addressArray[0] = 'http://'
  } else if (url.startsWith('https://')) {
    addressArray[0] = 'https://'
  }
  // check for Domain
  addressArray[1] = url.slice(url.indexOf('/',1) + 2, url.indexOf('/', 9));

  // check for file
  addressArray[2] = url.slice(url.lastIndexOf('/') + 1);

  // console.log(addressArray)
  return addressArray;
}

module.exports = {
  urlParse: urlParse,
  extractURL: extractURL
};
