const todoList = document.querySelector("#todo-list");
const items = todoList.children;
const button = document.querySelector(".btn");
const todoNR = document.querySelector(".todo-nr b");
const title = document.querySelector(".title-container");
const removeBtn = document.querySelector(".rmve");
const nameInput = document.querySelector(".name-input")

button.addEventListener('click', function (e) {
    e.preventDefault();
    let newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.innerText = nameInput.value;
    nameInput.value = "";
    todoList.appendChild(newItem);
    todoNR.innerText = items.length;
});

removeBtn.addEventListener('click', function (e) {
    e.preventDefault();
   const  lastItem = todoList.lastElementChild;

   if(lastItem){
    lastItem.remove()
    todoNR.innerHTML = items.length;
   }
});
