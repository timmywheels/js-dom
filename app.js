const list = document.querySelector('#book-list ul');

//delete books
list.addEventListener('click', function(e){
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

//add book-list
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  
  //create elements
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');
  
  //add content
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

  
  //append to DOM
  
  //append bookname to li
  li.appendChild(bookName);
  //append delete button to li
  li.appendChild(deleteBtn);
  
  //append completed li to list
  list.appendChild(li)
  
  
});



