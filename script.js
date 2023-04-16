let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;


  let newBook = new Book(title, author, pages);

  myLibrary.push(newBook);

  addToTable(newBook);
}
document.querySelector(".submit").addEventListener("click", function(event) {
  addBookToLibrary();
});

const book1 = new Book("Interview with a Vampire", "Anne Rice", "371");
const book2 = new Book("The Vampire Lestat","Anne Rice", "560");
const book3 = new Book("The Vampire Armand", "Anne Rice", "387");
const book4 = new Book("Mamnoch the Devil", "Anne Rice", "354");

function addToTable(book) {
  let table = document.querySelector("table");
  let row = table.insertRow(-1);
  let titleCell = row.insertCell(0);
  let authorCell = row.insertCell(1);
  let pagesCell = row.insertCell(2);
  let readCell = row.insertCell(3);
  let removeCell = row.insertCell(4);



  titleCell.textContent = book.title;
  authorCell.textContent = book.author;
  pagesCell.textContent = book.pages;
 
  let removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.classList.add("remove-button");
  removeButton.addEventListener("click", function() {
    removeBookFromLibrary(book);
    table.deleteRow(row.rowIndex);
  });

  removeCell.appendChild(removeButton);

  let yesButton = document.createElement("button");
  yesButton.textContent = "yes";
  yesButton.classList.add("yes-button");
  yesButton.addEventListener('click', () => {
    yesButton.classList.add('button-selected');
  });
  


  readCell.appendChild(yesButton);
 

  let noButton = document.createElement("button");
  noButton.textContent = "no";
  noButton.classList.add("no-button");
  noButton.addEventListener('click', () => 
  noButton.classList.add('button-selected'))

  readCell.appendChild(noButton);
}
addToTable(book1);
addToTable(book2);
addToTable(book3);
addToTable(book4);

function removeBookFromLibrary(book){
}

function displayBooks() {
  const table = document.querySelector("table");

  for (let i =0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const row = document.createElement("tr");

    const titleData = document.createElement("td");
    titleData.textContent = book.title;
    row.appendChild(titleData);

    const authorData = document.createElement("td");
    authorData.textContent = book.author;
    row.appendChild(authorData);

    const pagesData = document.createElement("td");
    pagesData.textContent = book.pages;
    row.appendChild(pagesData);


    table.appendChild(row);
  }
}
displayBooks();


