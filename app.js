const list = document.querySelector('#book-list ul');

//refactoring to use event bubbling for the parent ul
//instead of adding event listeners to each delete button inside each li
list.addEventListener('click', function(e){
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});