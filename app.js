const bookList = document.querySelector('#book-list');

//output parent element of #book-list
console.log('book-list parent element:', bookList.parentElement);

//output parent node of #book-list
console.log('book-list parent node:', bookList.parentNode);

//outputs child nodes of #book-list, including line breaks, etc.
// console.log(bookList.childNodes);

//output child nodes of #book-list without line-breaks, etc.
console.log(bookList.children);

