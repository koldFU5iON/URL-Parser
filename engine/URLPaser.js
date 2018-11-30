'use strict'

// console.log('running with url: ' + urlInput);

function WebAddress(url){
  const regex = /(?<protocol>.*):\/\//g;
  const urlObj = url.match(regex)

  this.url = url;
  this.protocol = urlObj.groups.protocol
}

function parse(url) {
  let link = new WebAddress(url)

  return link;
}

module.exports = {
  parse
};
