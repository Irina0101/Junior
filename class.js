class Book {
  constructor(author, name, year, publishing){
    this.author = author;
    this.name = name;
    this.year = year;
    this.publishing = publishing;
  }
}

// TODO: Read task with more attention (use "extends" for resolve this task)
class electronicBook {
  constructor(format, eNumber, casualBook){
    this.format = format;
    this.eNumber = eNumber;
    this.book = new Book(casualBook);
  }
}

const first = new electronicBook('pdf', '2089', 'Remark', 'Three Comrades', '1936', 'Force');
