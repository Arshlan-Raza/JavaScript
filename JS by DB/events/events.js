const todoList = document.querySelector("#todo-list b");
const items  = todoList.children;
const button = document.querySelector(".btn");
const todoNR = document.querySelector(".todo-nr");

button.addEventListener('click',function(){
    let newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.innerText = `Item ${items.length + 1}`;
    todoList.appendChild(newItem);
    todoList.innerText = `items.length`;
});