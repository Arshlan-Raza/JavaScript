

console.log('Chaliye Shuru karte hai ');

const rectangle = {

    length:1 , 

    breadth : 2,

    draw: function(){

        console.log('drawing rectangle');

    }
};


function createSquare(side) {

    return square =  {

        S:side,

        draw( ){
            console.log('The side of the square  is :'+S);
        }

    };
}

let squareObj1 = createSquare(5);



let src = {

    a:3,
    b:5,
    c:10,

};



// let dest = {};

// for(let key in src){

//     dest[key] = src[key];

// }




// let dest = Object.assign({},src);

//  let destObj = dest;


let dest = {...src};

let destobj1 = dest;