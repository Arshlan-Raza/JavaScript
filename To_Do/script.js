//selectors
const  todoInput = document.querySelector('.todo-input');
const  todoButton = document.querySelector('.todo-button');  // to duplicate  hold shift+alt+down_arrow
const  todoList = document.querySelector('.todo-list');


//event listeners
todoButton.addEventListener('click',addTodo);



//functions
function addTodo(e){
    e.preventDefault();
    console.log("hello")
}