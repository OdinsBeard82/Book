let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.getElementById("title").Value;
  let author = document.getElementById("author").Value;
  let pages = document.getElementById("pages").value;
  let read = document.querySelector('input[name="read"]:checked').value; 
read = read ? read.value : "Not read";

  let newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);

  console.log("Book has been added to Library");
}
document.querySelector(".submit").addEventListener("click", function(event) {
  addBookToLibrary();
});

