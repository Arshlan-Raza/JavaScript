
// let head = document.querySelector('.heading');

// head.addEventListener('click',function(){
//     head.style.background = 'green';
// });

// const content = document.querySelector('#wrapper')


// content.addEventListener('click',function(event){

//     console.log(event);

// })

// let myDiv = document.createElement('div');

// function paraStatus(event){

//     console.log("Para "+event.target.textContent);

// }

// myDiv.addEventListener('click' , paraStatus)

// for(let i = 1 ; i<= 100 ; i++){

//         let newElement = document.createElement('p');
//         newElement.textContent = "This is para "+i;

      
//         myDiv.appendChild(newElement); 
// }

// document.body.appendChild(myDiv);

let element = document.querySelector('#wrapper');


element.addEventListener('click',function(event){

    if(event.target.nodeName  === 'PARA'){

     console.log('span pr click kia hai' +  event.target.texContent);

    }

});
