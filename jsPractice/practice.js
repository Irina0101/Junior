'use strict'

function counter(n){
  return ( n > 0) ? n + (n-1) : 0;
}

const myNum = parseFloat(window.prompt('Enter positive integer: '));
document.write('Result = ' + counter(myNum));