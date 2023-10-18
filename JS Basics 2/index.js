

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