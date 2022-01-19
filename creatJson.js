/*const car = {
  name: "Ford",
  number: 7995,
  isNew: undefined,
  isMy: null,
  years: [1999, 2004, 2017],
  getNewCar() {

  }
}

const serializedObject = JSON.stringify(car);

console.log(serializedObject);

const recoveredCar = JSON.parse(serializedObject);

console.log(recoveredCar);*/
'use strict'

//квадраты рандомного цвета 

const button = document.querySelector('button');
const squaresContainers = document.querySelector('.squaresContainer');

button.onclick = handleClick;

function handleClick() {
  squaresContainer.appendChild(createSquare());
}

function createSquare() {
  const randomColor =
    '#' + ('00' + (((1 << 24) * Math.random()) | 0).toString(16)).substr(-6);
  const square = document.createElement('div');
  square.style.backgroundColor = randomColor;
  square.innerText = randomColor;
  return square; 
}

