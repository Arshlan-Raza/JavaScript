// // local  storage  

// localStorage.setItem('todo','feed the cat'); 
// localStorage.setItem('name','arshlan');
// localStorage.setItem('lastName','Raza');// whatever we set in the local storage is a string 

// // session Storage  --> this means that it wil store until the browser is opened, the storage will end after the browser closes as the 
// // session expired 

// sessionStorage.setItem("todo" ,"feeding the cat")


// // localStorage.clear();

// const user = localStorage.getItem("name"); // whatever we get is also a string 


localStorage.clear();

const todoList = ["a","b","c","d","e","f","g","h",]

localStorage.setItem("todos",JSON.stringify(todoList));

const retrieve = localStorage.getItem("todos");

console.log(JSON.parse(retrieve));