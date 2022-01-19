'use strict'

/*const createAdder = (n) => (m) => ( n += m);

const adder = createAdder(100);

const btn = document.querySelectorAll('button'); 

btn.addEventListener('click', alertWithMessage);

function alertWithMessage({target:{textContent}}) {
  alert(e.target.textContent);
}*/

/* Менять значение кнопок при наведении 

/*const [closeBtn, openBtn] = document.querySelectorAll('button');

const switcher = ({ target }) => {
  const closeElem = target === closeBtn ? closeBtn : openBtn;
  const openElem = target === closeBtn ? openBtn : closeBtn;

  const closeText = closeElem.textContent ;
  closeElem.textContent = openElem.textContent ;
  openElem.textContent = closeText;

  closeElem.removeEventListener('mouseenter', switcher);
  openElem.addEventListener('mouseenter', switcher);
};

const clickHandler = ({ target: { textContent} }) => {
  alert(textContent);
};

closeBtn.addEventListener('mouseenter', switcher);

closeBtn.addEventListener('click', clickHandler);
openBtn.addEventListener('click', clickHandler);*/

/*менять цвет дива по кнопкам 

const btns = document.querySelectorAll('button');

for (const btn of btns) {
  btn.addEventListener(
    'click',
    ({
      target: {
        dataset: {color},
        parentNode: localDiv,
      }
    }) => {
      localDiv.style.backgroundColor = color;
    }
  )
}*/

//обработчик погружения 

/*const clickHandler = (e) => {
  console.dir(e.currentTarget);
};

btn.addEventListener('click', clickHandler, true );
div.addEventListener(
  'click',
  () => {
    console.log('hello');
  },
  {
    once: true,
  }
);

document.body.addEventListener('click', clickHandler);
window.addEventListener('click', clickHandler , {
  capture: true,
});*/

 
//регулярные выражения

/*function validateString(str) {
  const regName = /^[A-Z][a-z]* [A-Z][a-z]*$/;
  if(regName.test(str)) {
    console.log('success');
  }else{
    console.error('invalid data');
  }
}

validateString('Test Test');
validateString('ssss ssss');

function validateGroup(str) {
  const regGroup = /^(F[DEM]f[dem])20[0-9]{2}(-\d+)?$/
}*/


//иконки соцсетей

/*function createLinks(contacts) {
  contacts.map((contacts)=>{

    const {hostname}= new URL(contact);
    const classIco = SUPPORTED_SOC_NET.GET(hostname);

    console.log(classIco);

    const a = createElement('a', {
      attribute: { href: contact },
      classNames: [classIco],
    });
  });
}

const a = createLinks(['https://ww.faceboob.com/JasonSta']);
document.body.append(...a);*/


// цикл event loop

function getNumbers () {

  let i = 1;

  const id = setInterval(()=>{
    console.log(i++)
    if(i > 20) {
      clearInterval(id);
    }
  }, 100)
}