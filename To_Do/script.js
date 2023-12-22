//selectors
const  todoInput = document.querySelector('.todo-input');
const  todoButton = document.querySelector('.todo-button');  // to duplicate  hold shift+alt+down_arrow
const  todoList = document.querySelector('.todo-list');


//event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);



//functions
function addTodo(e){
    e.preventDefault();
    //todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check mark button 
    const completedButton = document.createElement('button');
    completedButton.innerHTML ='<i class="fa-solid fa-check"></i>'; 
    completedButton.classList.add("complete-btn") ;
    todoDiv.appendChild(completedButton);   

    // trash button 
    const trashButton = document.createElement('button');
    trashButton.innerHTML ='<i class="fas fa-trash"></i>'; 
    trashButton.classList.add("trash-btn") ;
    todoDiv.appendChild(trashButton);   

    //append to list 
    todoList.appendChild(todoDiv);
    
    // clear todo input value 
    todoInput.value = "";
}

function deleteCheck(e){
        const  item = e.target;

        //delete todo
        if(item.classList[0] === "trash-btn"){
            const todo = item.parentElement;
            todo.classList.add("fall");
            todo.addEventListener('transitionend',function(){
                todo.remove();
            });
        }

        //check mark 
        if(item.classList[0] === "complete-btn");
        const todo = item.parentElement;
        todo.classList.toggle("completed");
}

