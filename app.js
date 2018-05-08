const list = document.querySelector('#book-list ul');

//delete books using event bubbling
list.addEventListener('click', function(e){
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

//view forms on the page
// const forms = document.forms;
// console.log(forms);
//view the #add-book form
// console.log(forms['add-book']);



//add book-list
const addForm = document.forms['add-book'];

//get value of add book form field
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
});

