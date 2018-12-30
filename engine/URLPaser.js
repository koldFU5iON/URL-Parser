'use strict'

function WebAddress(url){
  const regex = /(https?):\/\/(\w*)\.*(\w+)?\.(?:.*\/)?([\w-]*)?$/g;
  const match = regex.exec(url);
  const fileName = match[4] || '';

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
     clean : function() {
       let upperTitle = '';
       let cleanFile = this.title.replace(/-/g,' ');
       let words = cleanFile.split(' ');
       let newTitle = [];

       for (let word of words) {
         newTitle.push(word.charAt(0).toUpperCase() + word.slice(1));
       }
       return upperTitle = newTitle.join(' ');
     }
  }
};

module.exports = WebAddress;
