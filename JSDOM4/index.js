

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

// let meraPromise = new Promise (function(resolve, reject){
//     setTimeout(function(){
//        console.log('I am inside Promise');
//     },5000);
//     reject(new Error('BhaiSahab error aa gya'))
// });

// meraPromise.catch((error) => {console.log('Recieved an error')});


// let wadda1 = new Promise(function(resolve,  reject){
//     setTimeout(() => {
//         console.log('setTimeout1 started');
//     }, 2000);
//     resolve(true);
// })

// let output = wadda1.then(() =>{
//     let wada2 = new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log('setTimeout2 started');
//         }, 2000);
//         resolve('wada 2 resolved');      
//     })
//     return wada2;
// })

// output.then((value) => console.log(value));

// async function abcd(){
//     return 'Arshlan';
// }

// console.log(abcd());
// async function utility(){

//     let jharkhandMausam = new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             resolve('Jharkhand me bahut thand hai')
//         }, 1000);
//     });
    
//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Delhi me bahut grmi hai')
//         }, 5000);
//     });
    
//     let jM = await jharkhandMausam;
//     let dM = await delhiMausam;

//     return [jM,dM];
// }

// let obj = {
//     heading:"head"
// };

// async function utility(){

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);

// }

// utility();

async function helper(){

    let options = {
        method: 'POST',
        body: JSON.stringify({
          title: 'Arshlan',
          body: 'Tagdi',
          userId: 2003,
          weight: 81,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    };
        
        let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
        let response = content.json();
        return response ;

}

async function utility(){

    let ans = await helper();
    console.log(ans);

}

utility();