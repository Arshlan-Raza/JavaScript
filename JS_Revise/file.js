// let names = ['arsh','raja','muslim']

// console.log(names[0])

// let a = 5  
// let b = 3

// console.log(b**a)

// let a = '1'
// let b = 1 

// const answ = (a === b?console.log('same'):console.log('not same'))

// console.log(answ)

                // factory function 

// function createRectangle (){
//     let rectangle = {

//         length : 1 , 

//         breadth : 2 ,

//         draw : function(){
//             console.log('drawing rectangle')
//         }
//     };

//     return rectangle

// }

// let rectangle2 = createRectangle()

// console.log(rectangle2.length)

// function Rectangle() { 

//     this.length = 1 ; 

//     this.breadth = 3 ; 

//     this.draw = function(){

//         console.log('drawing')

//     }
// }

// let rectangle1 = new Rectangle()

// console.log(rectangle1.draw())


// let rectangle = {

//     length : 2,
//     breadth : 4

// }
// if('length' in rectangle){
//     console.log('is present')
// }
            // revising the concepts of cloning 
                // 1.Iteration 
// let src = {value : 10,assign : 20}

// let dest = {}

// for (let key in src){
//     dest[key] = src [key]
// }

// console.log(dest)

                // 2.Assign 

// let src = {value : 10,assign : 20}

// let dest = Object.assign({},src)

                // 3.spread 

// let src = {value : 10,assign : 20}

// let dest 

// dest = {...src}

        // playing with string  


// let firstName = 'Arshlan'
// console.log (firstName)

// let firstName = {
//     name : new String ('Arshlan')
// }


// let obj = firstName
// console.log(obj.name)    

                        // playing with string  
            
// let numbers = [ 1, 2, 3, 4 , 5 ]

// // numbers.push(6)

// // numbers.unshift(0)

// numbers.splice(3,0,9,10,11,12)


            // searching with callback function  

