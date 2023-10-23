
// let head = document.querySelector('.heading');

// head.addEventListener('click',function(){
//     head.style.background = 'green';
// });

// const content = document.querySelector('#wrapper')


// content.addEventListener('click',function(event){

//     console.log(event);

// })

function paraStatus(event){

    console.log("I have clicked on para ");

}

let myDiv = document.createElement('div');

for(let i = 1 ; i<= 100 ; i++){

        let newElement = document.createElement('p');
        newElement.textContent = "This is para "+i;

        newElement.addEventListener('click' , paraStatus)
        myDiv.appendChild(newElement); 
}

document.body.appendChild(myDiv);