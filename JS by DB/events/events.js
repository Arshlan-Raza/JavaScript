const todoList = document.querySelector("#todo-list ");
const items  = todoList.children;
const button = document.querySelector(".btn");
const todoNR = document.querySelector(".todo-nr b");
const title = document.querySelector(".title-container");

// button.addEventListener('click',function(){
//     let newItem = document.createElement('li');
//     newItem.classList.add('item');
//     newItem.innerText = `Item ${items.length + 1}`;
//     todoList.appendChild(newItem);
//     todoNR.innerText = items.length;
// });

button.addEventListener('click',function(){
    title.classList.toggle('spectacular')
})