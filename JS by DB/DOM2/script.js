const toDo = document.querySelector(".todo");
const itemList = document.querySelectorAll(".item");  // querySelector is nodeList, it is static  
const todoNr = document.querySelector(".todo-nr");

const newElement = document.createElement("li");
newElement.classList.add("item");
newElement.innerText = "Item 3";

const anotherItem = document.createElement("li");
anotherItem.classList.add("item");
anotherItem.innerText = "Item 4";

toDo.appendChild(newElement);
toDo.appendChild(anotherItem);

// update the amount of items that we have 
todoNr.innerText = itemList.length;