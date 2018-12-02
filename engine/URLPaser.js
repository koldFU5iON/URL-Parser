'use strict'

// console.log('running with url: ' + urlInput);

function WebAddress(url){
  const regex = /(https?):\/\/(\w*)\.*(\w+)?\.(\w+)\/?/g;
  const match = regex.exec(url);

  this.url = match[0].toString();
  this.protocol = match[1]
  this.domain = match[2]
  // console.log(match)
}

function parse(url) {
  let link = new WebAddress(url)
  console.log(link.protocol);
  return link;
}

module.exports = {
  parse
};
