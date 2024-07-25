
// html elements
const form = document.getElementById("form");
const todoList = document.querySelector(".todoList");
const input = document.getElementById("todoInput");

form.addEventListener('submit', event => {
  // prevent default reloading of the page
  event.preventDefault();

  // modify todo list element
  modifyTodo(input.value);


  // clear input
  input.value = '';

});


const modifyTodo = (todoText) => {
  
  // Creating the new li element
  const todoItem = document.createElement('li');
  // setting the text of the new li element to the input value from the form
  todoItem.innerText = todoText;
  // setting the todoItem's class to item for future styling
  todoItem.setAttribute("class", "item");
  
  todoList.appendChild(todoItem);

  todoItem.addEventListener('click', function() {
    // delete todo element
    this.remove();
  
  });

}










