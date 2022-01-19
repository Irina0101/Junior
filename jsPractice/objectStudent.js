'use strict'

/*const student = {
  name: 'Bob',
  surname: 'Janes',
  sex: 'male',
  contactData: '+308113456798'
}

const University = {
  cathedra: 'IT',
  faculty: 'CSN',
}*/


function University(cathedra, faculty) {
  this.cathedra = cathedra;
  this.faculty = faculty;
}

const nuzp = new University("IT", "CSN");

function Student(name, surname, sex, contactData, univer) {
  this.name = name;
  this.surname = surname;
  this.sex = sex;
  this.contactData = contactData;
  this.univer = univer;
}

const Bob = new Student('Bob', 'Janes', 'male', '+308113456798', nuzp);

function getInform(obj) {
  let result ;
  for (let i in obj) {
    if (obj.hasOwnProperty(i)){
      result += i + ":" + obg[i] + "\n";
    }
  }
  return result;
}

getInform(Student);