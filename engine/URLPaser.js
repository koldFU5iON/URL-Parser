'use strict'

// console.log('running with url: ' + urlInput);

function WebAddress(url){
  let regex = /(.*):\/\//g;
  let found = url.match(regex)

  this.url = url
  this.protocol = regex.group.protocol
}

function urlParser(url) {
  let link = new WebAddress(url)

  return link.url;
}

module.exports = {
  urlParser: urlParser
};
