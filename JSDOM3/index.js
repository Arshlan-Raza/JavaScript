//  adding 100 para

// const t1 = performance.now();

// for(let i = 1; i <= 100 ; i++){

//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para'+i;

//     document .body.appendChild(newElement);
// }

// const t2 = performance.now();
// console.log('this took '+(t2-t1)+'ms');


// // optimizing a bit 

// const t3 = performance.now();

// let myDiv = document.createElement('p');

// for(let i = 1 ; i <= 100 ; i++){

//     let element = document.createElement('p');
//     element.textContent = 'This is para ' + i ;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);

// const t4 = performance.now();
// console.log('this took '+(t4-t3)+'ms');

// let fragment = document.createDocumentFragment();
// for(let i = 1 ; i <= 100 ; i++){

//     let element = document.createElement('p');
//     element.textContent = 'This is para ' + i ;

//     fragment.appendChild(element);
// }

// document.body.appendChild(fragment); // 1 reflow and 1 repaint (performance is increased )


// function addPara() {
//     let para = document.createElement('p');
//     para.textContent = 'Js is single'
//     document.body.appendChild(para);
// }
 

// function addNewMessage() {
//     let para = document.createElement('p');
//     para.textContent = 'kya haal chaal'
//     document.body.appendChild(para);
// }


// addPara();
// addNewMessage();


