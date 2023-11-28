

// sync();

// console.log('second');


setTimeout(function(){
    console.log('third');
},3000)


function sync() { 

    console.log('first');
}

sync();

console.log('second')
