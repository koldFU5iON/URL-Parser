'use strict'

function WebAddress(url){
  const regex = /(https?):\/\/(\w*)\.*(\w+)?\.(?:\w+\/.*\/)?([\w-]*)?$/g;
  const match = regex.exec(url);

  this.url = match[0];
  this.protocol = match[1]

  if(match[3] === undefined){
    this.subDomain = '';
    this.domain = match[2]
  } else {
    this.subDomain = match[2]
    this.domain = match[3]
  }
  this.file = match[4]
}

function parse(url) {
  let link = new WebAddress(url)
  return link;
}

module.exports = {
  parse
};
