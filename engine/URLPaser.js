'use strict'

function WebAddress(url){
  const regex = /(https?):\/\/(\w*)\.*(\w+)?\.(?:.*\/)?([\w-]*)?$/g;
  const match = regex.exec(url);
  const fileName = match[4]

  this.url = match[0];
  this.protocol = match[1];

  if(match[3] === undefined){
    this.subDomain = '';
    this.domain = match[2];
  } else {
    this.subDomain = match[2];
    this.domain = match[3];
  }

  this.file = {
     title : fileName,
     clean : fileName.replace(/-/g,' ')
  }
};

module.exports = WebAddress;
