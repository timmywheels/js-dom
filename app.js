//select page-banner section
var banner = document.getElementById('page-banner');

//select book-list section
var bookList = document.getElementById('book-list');

//select all title class elements on page
var titles = document.getElementsByClassName('title')

//select all li's on page
var lis = document.getElementsByTagName('li')

//check if var titles is an array => returns false
console.log(Array.isArray(titles))

//convert var titles into an array => returns true
console.log(Array.isArray(Array.from(titles)));

//log each element in the titles array
Array.from(titles).forEach(function(title){
  console.log(title);
});

