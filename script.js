let myLibrary = [];

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}




function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}


Book.prototype.toggleRead = function(){
  this.read = !this.read;
}



const BookContainer = document.getElementById('Book-Container');
const Dialog = document.getElementById('add-dialog');
const AddBtn = document.getElementById('button');
const X = document.getElementById('x');
const Form = document.getElementById('form');

Form.addEventListener("submit", (event) => {
  event.preventDefault();

  BookContainer.innerHTML = "";
  addBookToLibrary(Form.title.value, Form.author.value, Form.pages.value, Form.read.checked);

  for (let i = 0; i < myLibrary.length; i++) {
    const element = myLibrary[i];
   
   
    console.log(element.id);
    const Title = document.createElement("h2");
    const Author = document.createElement("p");
    const Pages = document.createElement("p");
    const Read = document.createElement("p");
    const Container = document.createElement("div");
    const DelBtn = document.createElement("button");
    const ToggleBtn = document.createElement("button");

    DelBtn.textContent = "Delete";
    ToggleBtn.textContent = element.read ? "Mark as unread" : "Mark as read";
    ToggleBtn.addEventListener("click",()=>{
      element.toggleRead();
      Read.textContent =element.read ? "Read" : "Not read yet";
      ToggleBtn.textContent = element.read ? "Mark as unread" : "Mark as read";    })
    Title.textContent = element.title;
    Author.textContent ="Author : "+ element.author;
    Pages.textContent ="Pages : " +  element.pages;
    Read.textContent = "Status : " + (element.read ? "Read" : "Not read yet");

    [Title, Author, Pages, Read].forEach(item => item.classList.add("white"));
    ToggleBtn.classList.add("button");
    DelBtn.classList.add("button");
    DelBtn.classList.add("deleteBtn");

    Container.append(Title, Author, Pages, Read, ToggleBtn,DelBtn);
    Container.classList.add("book-section");
    BookContainer.append(Container);


    DelBtn.addEventListener("click", () => {
   myLibrary = myLibrary.filter(book => book.id !== element.id);
      Container.remove();
    });
 

  }
  Dialog.removeAttribute("open");
  Form.reset();




});

X.addEventListener("click", () => {
  Dialog.removeAttribute("open");
})

AddBtn.addEventListener("click", () => {
  Dialog.setAttribute("open", "");
})




