const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

//return single elements
var books = document.querySelector('#book-list li .name');
// console.log(books)

//return all elements of this type
books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    console.log(book);
})