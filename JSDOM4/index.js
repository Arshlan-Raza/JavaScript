

// sync();

// console.log('second');


// setTimeout(function(){
//     console.log('third');
// },3000)


// function sync() { 

//     console.log('first');
// }

// sync();

// console.log('second')


// let meraPromise = new Promise (function(resolve, reject){
//      setTimeout(function(){
//         console.log('I am inside Promise');
//      },5000);
//      reject(new  Error('BhaiSahab error aa gya'))
// });

// console.log('Pehla');

let meraPromise = new Promise (function(resolve, reject){
    setTimeout(function(){
       console.log('I am inside Promise');
    },5000);
    reject(new Error('BhaiSahab error aa gya'))
});

meraPromise.catch((error) => {console.log('Recieved an error')});