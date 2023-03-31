const book = {
  title: 'Interview with a Vampire',
  author: 'Anne Rice',
  pages: '371',
  read: 'yes'

};

const book2 = {
  title: 'The Vampire Lestat',
  author: 'Anne Rice',
  pages: '560',
  read: 'yes'
};

const book3 = {
  title: 'The Vampire Armand',
  author: 'Anne Rice',
  pages: '387',
  read: 'yes'
};

const book4 = {
  title: 'Memnoch the Devil',
  author: 'Anne Rice',
  pages: '354',
  read: 'yes'
};

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

Book.prototype.info = function() {
  return this.title + " by " + this.author + ", " + this.pages + " pages";
}

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

addBookToLibrary('Interview with a Vampire', 'Anne Rice', '371');
addBookToLibrary('The Vampire Lestat', 'Anne Rice', '560');
addBookToLibrary('The Vampire Armand', 'Anne Rice', '387');
addBookToLibrary('Memnoch the Devil', 'Anne Rice', '354',);


const array = []
array.forEach(function (item, index)  {
  console.log(item, index);
});

function addBooksToLibrary(books) {
  books.forEach(function(book) {
    const newBook = new Book(book.title, book.author, book.pages, book.read);
    myLibrary.push(newBook);
  });
}

const booksToAdd = [book, book2, book3, book4];
addBooksToLibrary(booksToAdd);

const books = document.querySelectorAll('.book');

books.forEach(function(book) {
  const readButton = book.querySelector('.read-button');
  const notReadButton = book.querySelector('.not-read-button');

  readButton.addEventListener('click', function() {
    readButton.classList.add('selected');
    notReadButton.classList.remove('selected');
  });

  notReadButton.addEventListener('click', function() {
    notReadButton.classList.add('selected');
    readButton.classList.remove('selected');
  });
});

function addBooksToDropdown(books) {
  const dropdownContent = document.querySelector('.dropdown-content');
  books.forEach(function(book) {
    const bookDetails = document.createElement('div');
    bookDetails.classList.add('book-details');
    bookDetails.innerHTML = `<p>${book.title}</p>
                              <p>Author: ${book.author}</p>
                              <p>Pages: ${book.pages}</p>
                              <p>Read: ${book.read}</p>`;
    bookDetails.onclick = function() {
      const bookTitle = book.title;
      const bookAuthor = book.author;
      const bookContainer = document.querySelector('#book-container');
      bookContainer.innerHTML = `<div class="book-title-container">
                                    <div class="name">${bookTitle} by ${bookAuthor}</div>
                                    <button class="read-button">Read</button>
                                    <button class="not-read-button">Not Read</button>
                                  </div>`;
    }
    dropdownContent.appendChild(bookDetails);
  });
}

addBooksToDropdown(myLibrary);

