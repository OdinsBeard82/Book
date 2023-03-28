const variable1= 'title';
const variable2= 'author';
const variable3= 'pages';
const variable4= 'read';

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

console.log(book[variable1] + ' ' + book[variable2] + ' ' + book[variable3] + ' ' + book[variable4]);
console.log(book2[variable1] + ' ' + book2[variable2] + ' ' + book2[variable3] + ' ' + book2[variable4]);

function printTitle(book) {
  console.log(book[variable1])
}

printTitle(book);
printTitle(book2);
printTitle(book);