'use strict'

// console.log('running with url: ' + urlInput);

function WebAddress(url){
  const regex = /(https?):\/\/(\w*)\.*(\w+)?\.(?:\w+\/.*\/)?([\w-]*)?$/g;
  const match = regex.exec(url);

  // console.log(match[0]);
  this.url = match[0];
  this.protocol = match[1]

  //console.log(`Match 3 of ${url} has the domain ${match[2]} and the sub-domain of ${match[3]}`)

  if(match[3] === undefined){
    // console.log('sub domain is empty')
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
