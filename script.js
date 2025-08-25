const myLibrary = [];

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

const Thor = new Book("The mighty Thor", "Stan Lee", 100, false);
console.log(Thor.author);

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("Thor", "Stan Lee", 200, true);
addBookToLibrary("Thor", "Stan Lee", 200, true);



console.log(myLibrary);
