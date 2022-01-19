'use strict'

const array = [];

const form = document.getElementById('root-form');
const list = document.getElementById('root-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {
    target,
    target: {body},
  } = e;

  if (body.value.trim()){

    array.push(body.value);
  
    const li = creatListElement(body.value);
  
    list.append(li);
  }
  
  target.reset();
})

function creatListElement(inputValue) {
  const li = document.createElement('li');
  const liContent = document.createTextNode(inputValue);
  li.append(liContent, createButton());
  return li;
}

function createButton() {
  const btn = document.createElement('button');
  btn.textContent = 'X';
  btn.addEventListener('click', deleteHandler)
  return btn;
}

function deleteHandler(e){
  e.target.parentNode.remove();
  const idex = state.indexOf(e.target.parentNode.firstChild.textContent);
  state.splice(index, 1);
}