'use strict';

/*const {MyMath} = require('./MyMath');

console.log(MyMath);

console.log('Hello node');*/

const fs = require('fs').promises;
fs.readFile('./text.txt', 'utf8').then((content) => {
  const newContentInNewFile = 'Old Content:${content} \nNew Content: LOREM IPSUM';
  fs.writeFile('./newFile.txt', newContentInNewFile, 'utf8');
});