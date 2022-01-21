class Book {
  constructor(author, name, year, publishing){
    this.author = author;
    this.name = name;
    this.year = year;
    this.publishing = publishing;
  }
}

class electronicBook extends Book {
  constructor(author, name, year, publishing, format, eNumber){
    super(author, name, year, publishing);
    this.format = format;
    this.eNumber = eNumber;
  }
}

const first = new electronicBook('pdf', '2089', 'Remark', 'Three Comrades', '1936', 'Force');