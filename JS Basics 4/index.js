// console.log("ghr chalete hai ");


// function run (){

//     console.log("running");

// }

// run();


// let stand = function walk(){
//     console.log("walking");
// }

// stand ();


// function sum (a,b){
//     let total = 0 ;
     
//     for (let value of arguments ){
//         total += value;
//     }
//     return total;
// }

// let ans = sum(1,2,1, 5, 6);

// console.log(ans);

// function sum (num,value,...args){ // here num = 1, value = 2 ..args (this should be the last parameter)
//     console.log(args);
// }

// sum(1,2,3,4,5,6);


let person = {
    fName: 'Arshlan',
    lName: 'Raza',

    get fullName(){
        return `${person.fName} ${person.lName}`
    },

    set fullName(value){
        if(typeof value !== String){
            throw new Error("You have not sent a string");
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
    
};
 
// console.log(person.fullName);

      
try{
     
    
person.fullName = true;

}
catch(e){

    alert(e);

}

console.log(person.fullName);

