'use strict'

let i = 0;

const [firstBtn] = document.getElementsByTagName('button');
function alertWithMessage() {
  i++;
  alert(i);
}
firstBtn.addEventListener('click', alertWithMessage);

const p = document.getElementById('unique');

const testPars = document.getElementsByClassName('test');

const par = document.querySelector('');
const pars = document.querySelectorAll('');

const h1 = document.querySelector('article > p');
const img = document.querySelector('article > img');
const spam = document.querySelector('spam');
