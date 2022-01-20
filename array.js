'use strict'

const arr = [];
let zeroElementsCounter = 0;

document.write('<br>' + "Even numbers: ");
for ( let i = 0; i < 25; i++ ) {
	const a = Math.round( Math.random() * 100 );
	arr.push(a);

  if(a % 2 === 0) {
    document.write( a + ", ");
  }

  if( a === 0){
      zeroElementsCounter++;
  }
}

document.write('<br>' + "Number of zeros: " + sum);
document.write('<br>' + "EVEN indexes: ");
const b = arr.filter((_, index) => index % 2 === 0);
document.write( b + ", ");

Array.from(arr.entries()).filter(i => i[1] === "0").map(i => i[0]);

/*document.write('<br>' + "indexes of zero elements: ");
const c = arr.filter((_, index) => index  === 0);
document.write( c + ", ");*/

document.write( '<br>' + "Array: " + arr);

