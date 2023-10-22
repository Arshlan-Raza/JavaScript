// console.log("ghr chalete hai ");


// function run (){

//     console.log("running");

// }

// run();


// let stand = function walk(){
//     console.log("walking");
// }

// stand ();


function sum (a,b){
    let total = 0 ;
     
    for (let value of arguments ){
        total += value;
    }
    return total;
}

let ans = sum(1,2,1, 5, 6);

console.log(ans);